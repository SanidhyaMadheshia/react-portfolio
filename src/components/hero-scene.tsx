import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

/**
 * Hero visual: a slowly rotating "service mesh" — nodes on a sphere, links to
 * nearest neighbours, and orange packets travelling along the links.
 * Lazy-loaded from the hero so three.js never blocks first paint.
 */

const NODE_COUNT = 110
const NEIGHBOURS = 3
const PACKET_COUNT = 28
const RADIUS = 1.9

// Small seeded PRNG so the initial layout is deterministic (and render stays pure).
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Evenly distributed points on a sphere (Fibonacci lattice).
function fibonacciSphere(n: number, r: number) {
  const pts: THREE.Vector3[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const rad = Math.sqrt(1 - y * y)
    const theta = golden * i
    pts.push(new THREE.Vector3(Math.cos(theta) * rad * r, y * r, Math.sin(theta) * rad * r))
  }
  return pts
}

function buildGraph() {
  const nodes = fibonacciSphere(NODE_COUNT, RADIUS)
  const edgeSet = new Set<string>()
  const edges: [number, number][] = []
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => ({ j, d: a.distanceToSquared(b) }))
      .filter(({ j }) => j !== i)
      .sort((x, y) => x.d - y.d)
      .slice(0, NEIGHBOURS)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`
        if (!edgeSet.has(key)) {
          edgeSet.add(key)
          edges.push([i, j])
        }
      })
  })
  return { nodes, edges }
}

// Reads a CSS custom property and re-reads it when the theme class changes.
function useCssColor(name: string) {
  const read = () =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#888888"
  const [color, setColor] = useState(read)
  useEffect(() => {
    const obs = new MutationObserver(() => setColor(read()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])
  return color
}

function Mesh({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null)
  const packetsRef = useRef<THREE.InstancedMesh>(null)
  const pointer = useRef({ x: 0, y: 0 })

  const nodeColor = useCssColor("--scene-node")
  const edgeColor = useCssColor("--scene-edge")
  const brand = useCssColor("--brand")

  const { nodes, edges } = useMemo(() => buildGraph(), [])

  const nodeGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(nodes)
    return g
  }, [nodes])

  const edgeGeometry = useMemo(() => {
    const pts: THREE.Vector3[] = []
    edges.forEach(([a, b]) => pts.push(nodes[a], nodes[b]))
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [nodes, edges])

  // Each packet travels along one edge, then hops to a random neighbouring edge.
  const packets = useMemo(() => {
    const rand = mulberry32(42)
    return Array.from({ length: PACKET_COUNT }, () => ({
      edge: Math.floor(rand() * edges.length),
      t: rand(),
      speed: 0.25 + rand() * 0.45,
    }))
  }, [edges.length])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  const tmp = useMemo(() => new THREE.Object3D(), [])
  const pos = useMemo(() => new THREE.Vector3(), [])

  const placePackets = (dt: number) => {
    const mesh = packetsRef.current
    if (!mesh) return
    packets.forEach((p, i) => {
      p.t += dt * p.speed
      if (p.t >= 1) {
        // hop to an edge that starts where this one ended
        const end = edges[p.edge][1]
        const next = edges.findIndex(([a], idx) => a === end && idx !== p.edge)
        p.edge = next >= 0 ? next : Math.floor(Math.random() * edges.length)
        p.t = 0
      }
      const [a, b] = edges[p.edge]
      pos.lerpVectors(nodes[a], nodes[b], p.t)
      tmp.position.copy(pos)
      tmp.updateMatrix()
      mesh.setMatrixAt(i, tmp.matrix)
    })
    mesh.instanceMatrix.needsUpdate = true
  }

  useEffect(() => placePackets(0)) // initial static placement

  useFrame((_, delta) => {
    if (!animate || !group.current) return
    const dt = Math.min(delta, 0.05)
    const g = group.current
    g.rotation.y += dt * 0.08
    // ease toward the pointer for a gentle parallax tilt
    g.rotation.x += (pointer.current.y * 0.25 - g.rotation.x) * 0.04
    g.rotation.z += (-pointer.current.x * 0.12 - g.rotation.z) * 0.04
    placePackets(dt)
  })

  return (
    <group ref={group} rotation={[0.35, 0, 0.1]}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color={edgeColor} transparent opacity={0.55} />
      </lineSegments>
      <points geometry={nodeGeometry}>
        <pointsMaterial color={nodeColor} size={0.055} sizeAttenuation />
      </points>
      <instancedMesh ref={packetsRef} args={[undefined, undefined, PACKET_COUNT]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color={brand} toneMapped={false} />
      </instancedMesh>
      {/* faint core for depth */}
      <mesh>
        <icosahedronGeometry args={[RADIUS * 0.55, 1]} />
        <meshBasicMaterial color={edgeColor} wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  // Stop rendering when the hero is scrolled out of view.
  useEffect(() => {
    if (!wrapper.current) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    io.observe(wrapper.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const animate = visible && !reducedMotion

  return (
    <div ref={wrapper} className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={animate ? "always" : "demand"}
      >
        <Mesh animate={animate} />
      </Canvas>
    </div>
  )
}

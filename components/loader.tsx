"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import gsap from "gsap"

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // fallback 2s

    // Animate logo in
    gsap.fromTo(".loader-logo",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out", repeat: -1, yoyo: true }
    )

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
   <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <Image
        src="/images/xtreme-couture-logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="loader-logo"
        priority
      />
    </div>
  )
}


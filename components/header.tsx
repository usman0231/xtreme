"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mmaItems = [
    "Brazilian Jiu-jitsu",
    "Muay Thai",
    "Wrestling",
    "Boxing",
    "MMA Class Schedule",
    "Kids Corner",
    "Contact",
    "Coach Bios",
  ]

  const fitnessItems = [
    "About",
    "Fitness Home",
    "Trainers Bios",
    "Success Stories",
    "Class Schedule",
    "Clinic Services",
    "Membership Services",
    "Contact",
  ]

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 bg-black/95 backdrop-blur-sm shadow-lg" : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 flex-row justify-around">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/xtreme-couture-logo.png"
              alt="Xtreme Couture"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* MMA Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("mma")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-red-500 transition-colors duration-200 font-semibold py-2">
                <span>MMA</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "mma" && (
                <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800">
                  <div className="py-2">
                    {mmaItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-white hover:text-red-500 hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Fitness Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("fitness")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-green-500 transition-colors duration-200 font-semibold py-2">
                <span>Fitness</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "fitness" && (
                <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800">
                  <div className="py-2">
                    {fitnessItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-white hover:text-green-500 hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

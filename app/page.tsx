"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const splitRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
  if (typeof window === "undefined") return
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reduceMotion) return

  const D = 1.4;           // base slow duration
  const STAG = 0.18;       // slower stagger

  const ctx = gsap.context(() => {
    const makeRevealUp = (targets: gsap.DOMTarget, stagger = STAG) => {
      gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: D,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "restart none none restart", // replay on re-enter
          },
          stagger,
        })
      })
    }

    // HERO — plays when you reach it, replays when you return
    if (heroRef.current) {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: D },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          toggleActions: "restart none none restart",
        },
      })
      tl.from(heroRef.current.querySelector(".js-hero-title"), { y: 50, opacity: 0 })
        .from(heroRef.current.querySelector(".js-hero-sub"), { y: 40, opacity: 0 }, "-=0.7")
        .fromTo(
            heroRef.current.querySelector(".js-hero-cta"),
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.7"
          )

      // (optional) keep subtle parallax but not required for replay behavior
      const bg = heroRef.current.querySelector(".js-hero-bg")
      if (bg) {
        gsap.to(bg, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true, // parallax should scrub
          },
        })
      }
    }

    // SPLIT banner
    if (splitRef.current) {
      gsap.from(splitRef.current.querySelectorAll(".js-split-half"), {
        y: 50,
        opacity: 0,
        duration: D,
        ease: "power2.out",
        stagger: STAG,
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top 80%",
          toggleActions: "restart none none restart",
        },
      })
    }

    // SERVICES
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card")
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: D,
        ease: "power2.out",
        stagger: STAG,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "restart none none restart",
        },
      })
      gsap.utils.toArray<HTMLElement>(servicesRef.current.querySelectorAll(".service-img")).forEach((img) => {
        gsap.from(img, {
          scale: 1.06,
          duration: D + 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "restart none none restart",
          },
        })
      })
    }

    // GALLERY
    if (galleryRef.current) {
      gsap.from(galleryRef.current.querySelectorAll(".gallery-item"), {
        y: 50,
        opacity: 0,
        duration: D,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
          toggleActions: "restart none none restart",
        },
      })
    }

    // PRICING
    if (pricingRef.current) {
      gsap.from(pricingRef.current.querySelectorAll(".price-card"), {
        y: 40,
        opacity: 0,
        duration: D,
        ease: "power2.out",
        stagger: STAG,
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
          toggleActions: "restart none none restart",
        },
      })
    }

    // BLOG
    if (blogRef.current) {
      makeRevealUp(blogRef.current.querySelectorAll(".blog-card"), STAG)
    }

    // VIDEO
    if (videoRef.current) {
      const frame = videoRef.current.querySelector(".video-frame")
      if (frame) {
        gsap.from(frame, {
          clipPath: "inset(0 50% 0 50%)",
          opacity: 0,
          duration: D + 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
            toggleActions: "restart none none restart",
          },
        })
      }
    }

    // CONTACT
    if (contactRef.current) {
      gsap.from(contactRef.current.querySelectorAll(".contact-item"), {
        y: 32,
        opacity: 0,
        duration: D,
        ease: "power2.out",
        stagger: STAG,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          toggleActions: "restart none none restart",
        },
      })
    }

    // Generic utility
    if (rootRef.current) {
      makeRevealUp(rootRef.current.querySelectorAll(".reveal-up"), STAG)
    }
  }, rootRef)

  return () => ctx.revert()
}, [])

  const service = [
    { title: "MMA Training", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "mma.jpeg", link: "#" },
    { title: "Brazilian Jiu-jitsu", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "BrazilianJiu-jitsu.jpg", link: "#" },
    { title: "Muay Thai", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "muaythai.jpg", link: "#" },
    { title: "Wrestling", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "Wrestling.jpg", link: "#" },
    { title: "Boxing", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "boxing.jpg", link: "#" },
    { title: "Kids Corner", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "kidscorner.jpeg", link: "#" },
    { title: "Fitness Home", description: "You'll look at graphs and charts in Task One, how to approach the task", image: "fitness.jpg", link: "#" },
  ]

  const ServiceItems = service.map((item, index) => (
    <div key={index} className="text-center service-card">
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <Image
          src={`/images/${item.image}`}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-80 object-cover service-img"
        />
      </div>
      <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wider">{item.title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
      <Link href={item.link}>
        <button className="bg-red-500 pt-3 pb-3 px-8 mt-5 text-white cursor-pointer">View More</button>
      </Link>
    </div>
  ))

  return (
    <main ref={rootRef} className="min-h-screen">
      <Header />

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 js-hero-bg">
          <Image src="/images/fighting.jpg" alt="banner image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-white mb-8">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight js-hero-title">XTREME COUTURE</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 tracking-wider js-hero-sub">The largest gym of Toronto</div>
              </h1>
              <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase js-hero-cta">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT BANNER */}
      <section ref={splitRef} className="relative h-[60vh] flex">
        {/* Personal Training - Left Side */}
        <div className="relative w-1/2 flex items-center justify-center overflow-hidden js-split-half">
          <Image src="/images/personal_trainer.jpg" alt="Personal Training" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-8 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">PERSONAL TRAINING</h2>
            <p className="text-lg mb-8 leading-relaxed">
              {"You'll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer."}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-semibold"
            >
              VIEW COURSES
            </Button>
          </div>
        </div>

        {/* Group Training - Right Side */}
        <div className="relative w-1/2 flex items-center justify-center overflow-hidden js-split-half">
          <Image src="/images/group-training.jpeg" alt="Group Training" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-8 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">GROUP TRAINING</h2>
            <p className="text-lg mb-8 leading-relaxed">
              {"You'll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer."}
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none transition-all duration-300 px-8 py-3 text-lg font-semibold">
              VIEW COURSES
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="bg-black py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-center text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-16 tracking-wider reveal-up">
            WHAT WE OFFER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ServiceItems}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={galleryRef} className="bg-black py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px] max-w-7xl mx-auto">
            <div className="col-span-4 row-span-3 relative overflow-hidden rounded-lg gallery-item">
              <Image src="/images/gallery1.png" alt="Gallery Image 1" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="col-span-4 row-span-3 relative overflow-hidden rounded-lg gallery-item">
              <Image src="/images/gallery2.png" alt="Gallery Image 2" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="col-span-4 row-span-3 relative overflow-hidden rounded-lg gallery-item">
              <Image src="/images/gallery3.png" alt="Gallery Image 3" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="col-span-3 row-span-3 relative overflow-hidden rounded-lg gallery-item">
              <Image src="/images/gallery4.png" alt="Gallery Image 4" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="col-span-3 row-span-3 relative overflow-hidden rounded-lg gallery-item">
              <Image src="/images/gallery5.png" alt="Gallery Image 5" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="col-span-6 row-span-3 relative overflow-hidden rounded-lg gallery-item">
              <Image src="/images/gallery6.png" alt="Gallery Image 6" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section ref={pricingRef} className="bg-black py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-center text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-16 tracking-wider">
            PRICING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border border-gray-600 bg-black p-8 text-center price-card">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Image src="/images/dumbbell-icon.png" alt="Dumbbell Icon" width={24} height={24} className="filter invert" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 tracking-wider">6 MONTH</h3>
              <div className="mb-8">
                <span className="text-red-600 text-3xl font-bold">$30/M</span>
                <span className="text-white text-sm ml-2">(SINGLE CLASS)</span>
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Free Riding</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Unlimited Equipments</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Personal Trainer</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Weight Losing Classes</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Month To Mouth</li>
              </ul>
              <button className="w-full border-2 border-white text-white py-3 text-lg font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                JOIN NOW
              </button>
            </div>

            <div className="border border-gray-600 bg-black p-8 text-center price-card">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Image src="/images/dumbbell-icon.png" alt="Dumbbell Icon" width={24} height={24} className="filter invert" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 tracking-wider">6 MONTH</h3>
              <div className="mb-8">
                <span className="text-red-600 text-3xl font-bold">$30/M</span>
                <span className="text-white text-sm ml-2">(SINGLE CLASS)</span>
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Free Riding</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Unlimited Equipments</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Personal Trainer</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Weight Losing Classes</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Month To Mouth</li>
              </ul>
              <button className="w-full border-2 border-white text-white py-3 text-lg font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                JOIN NOW
              </button>
            </div>

            <div className="border border-gray-600 bg-black p-8 text-center price-card">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Image src="/images/dumbbell-icon.png" alt="Dumbbell Icon" width={24} height={24} className="filter invert" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 tracking-wider">6 MONTH</h3>
              <div className="mb-8">
                <span className="text-red-600 text-3xl font-bold">$30/M</span>
                <span className="text-white text-sm ml-2">(SINGLE CLASS)</span>
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Free Riding</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Unlimited Equipments</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Personal Trainer</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Weight Losing Classes</li>
                <li className="flex items-center text-white"><span className="text-red-600 mr-3">✓</span>Month To Mouth</li>
              </ul>
              <button className="w-full border-2 border-white text-white py-3 text-lg font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section ref={blogRef} className="bg-black py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-center text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-16 tracking-wider">
            FROM BLOG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group cursor-pointer blog-card">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/blog1.png"
                  alt="Gym & Fitness Blog Post"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <span className="text-red-600 text-sm font-medium tracking-wider uppercase">Gym & Fitness</span>
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide leading-tight">
                  YOUR ANTIBIOTIC ONE DAY TO 10 DAY OPTIONS
                </h3>
              </div>
            </div>

            <div className="group cursor-pointer blog-card">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/blog2.png"
                  alt="Gym & Fitness Blog Post"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <span className="text-red-600 text-sm font-medium tracking-wider uppercase">Gym & Fitness</span>
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide leading-tight">
                  YOUR ANTIBIOTIC ONE DAY TO 10 DAY OPTIONS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section ref={videoRef} className="bg-black py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="w-full mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden video-frame">
              <video
                src="boxing_film.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} className="py-16" style={{ backgroundColor: "#000000c7" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start space-x-6 contact-item">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 tracking-wider">Location</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {"You'll look at graphs and charts in Task One, how to approach"}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 contact-item">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 tracking-wider">Phone</h3>
                <div className="text-gray-300 text-base space-y-1">
                  <p>(90) 277 278 2566</p>
                  <p>(78) 267 256 2578</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 contact-item">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 tracking-wider">Email</h3>
                <div className="text-gray-300 text-base space-y-1">
                  <p>jacson767@gmail.com</p>
                  <p>contact56@zacsion.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

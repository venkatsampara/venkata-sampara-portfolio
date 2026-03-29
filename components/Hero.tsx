// components/Hero.tsx
'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { DownloadIcon, MailIcon } from './Icons'

const SceneCanvas = dynamic(() => import('./three/SceneCanvas'), { ssr: false })
const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false })

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section
      id="home"
      className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 pt-24"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-primary">Venkat S</span> — Freelance .NET
              Architect &amp; AI/ML Solutions Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Enterprise Apps · Cloud Migrations · AIOps · Healthcare Platforms
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              19+ years turning complex business requirements into production-ready
              systems. I help companies modernise legacy stacks, ship AI-driven
              features, and build cloud-native architectures on Azure &amp; AWS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MailIcon />
                Discuss Your Project
              </a>
              <a
                href="/Venkat_Resume.pdf"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </div>
          </div>

          {/* 3D hero visual — falls back to CSS circles for reduced-motion or SSR */}
          <div className="flex justify-center" id="hero-visual">
            {prefersReducedMotion ? (
              <div className="relative">
                <div className="w-80 h-80 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-primary/40 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white">19+</div>
                        <div className="text-white font-medium">
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-80 h-80 md:w-96 md:h-96">
                <SceneCanvas>
                  <HeroScene />
                </SceneCanvas>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

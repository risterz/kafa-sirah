'use client';

import Link from 'next/link';
import { Star, Moon, Trophy, Cloud, Sparkles, Play, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const grades = [
  {
    id: 1,
    title: 'Darjah 1',
    subtitle: 'Nabi Kita 👶',
    color: 'text-pink-500',
    bg: 'bg-pink-100',
    border: 'border-pink-300',
    shadow: 'shadow-pink-200',
    icon: '🌙'
  },
  {
    id: 2,
    title: 'Darjah 2',
    subtitle: 'Zaman Kanak-kanak 🪁',
    color: 'text-amber-500',
    bg: 'bg-amber-100',
    border: 'border-amber-300',
    shadow: 'shadow-amber-200',
    icon: '⭐'
  },
  {
    id: 3,
    title: 'Darjah 3',
    subtitle: 'Wahyu Pertama 📖',
    color: 'text-emerald-500',
    bg: 'bg-emerald-100',
    border: 'border-emerald-300',
    shadow: 'shadow-emerald-200',
    icon: '🕌'
  },
  {
    id: 4,
    title: 'Darjah 4',
    subtitle: 'Dakwah & Hijrah 🐪',
    color: 'text-violet-500',
    bg: 'bg-violet-100',
    border: 'border-violet-300',
    shadow: 'shadow-violet-200',
    icon: '✨'
  },
  {
    id: 5,
    title: 'Darjah 5',
    subtitle: 'Madinah & Wafat 🏞️',
    color: 'text-blue-500',
    bg: 'bg-blue-100',
    border: 'border-blue-300',
    shadow: 'shadow-blue-200',
    icon: '⚔️'
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* Parallax Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/main-bg.png')",
          backgroundAttachment: 'fixed' // Simple CSS parallax
        }}
      />

      {/* Decorative Background Elements (Overlay) */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-white/30">
        <div className="absolute top-20 left-10 text-accent-blue opacity-50 animate-bounce-slow">
          <Cloud size={64} fill="currentColor" className="text-white" />
        </div>
        <div className="absolute top-40 right-20 text-accent-pink opacity-40 animate-float">
          <Cloud size={80} fill="currentColor" className="text-white" />
        </div>
        <div className="absolute bottom-20 left-20 text-secondary opacity-60 animate-pulse">
          <Star size={48} fill="currentColor" />
        </div>
      </div>

      {/* Fun Navbar */}
      <nav className="pt-6 px-6">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-primary-light transform -rotate-1">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-inner">
              <Moon size={24} className="fill-white" />
            </div>
            <span className="font-extrabold text-xl text-primary-dark tracking-wide">Dunia Sirah</span>
          </div>

          <Link href="/pencapaian">
            <button className="btn-bouncy flex items-center gap-2 px-5 py-2 bg-secondary text-white rounded-full shadow-lg border-b-4 border-orange-400 font-bold hover:bg-orange-400 transition-colors">
              <Trophy size={20} className="fill-white" />
              <span className="hidden sm:inline">Pencapaian Saya</span>
            </button>
          </Link>
        </div>
      </nav>

      <div className="container-custom pt-10 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block relative"
          >
            <h1 className="text-5xl md:text-7xl font-black text-primary-dark mb-4 drop-shadow-sm text-stroke relative z-10" style={{ WebkitTextStroke: '2px white' }}>
              Jom Belajar <br />
              <span className="text-secondary text-6xl md:text-8xl block mt-2 transform rotate-1">Sirah Nabi!</span>
            </h1>

            {/* Decorative doodle behind text */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30 text-yellow-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.8,32.4C59.6,42.7,48.8,50.2,37.6,58.7C26.3,67.1,14.6,76.5,1.5,73.9C-11.6,71.3,-26.1,56.7,-38.4,45.3C-50.7,34,-60.7,25.8,-68.8,14.8C-76.9,3.8,-83.1,-10.1,-80.1,-22.7C-77.1,-35.3,-64.9,-46.7,-52.1,-54.6C-39.3,-62.5,-25.9,-67,-12.3,-68.7C1.4,-70.4,-67.1,-83.6,-44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </motion.div>

          <p className="text-xl text-text-secondary font-bold max-w-lg mx-auto mb-8 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm mt-4">
            Mari mengembara ke zaman Rasulullah SAW! 🐫✨
          </p>

          <div className="flex justify-center gap-4">
            <button className="btn-bouncy px-8 py-4 bg-primary text-white text-xl font-black rounded-3xl shadow-[0_6px_0_#15803d] active:shadow-[0_2px_0_#15803d] active:translate-y-1 transition-all flex items-center gap-3">
              <Play size={24} fill="white" />
              MULA PENGEMBARAAN
            </button>
          </div>
        </section>

        {/* Cloud Grade Cards */}
        <section>
          <div className="text-center mb-10">
            <div className="inline-block px-6 py-2 bg-white rounded-full border-2 border-primary-light shadow-md transform -rotate-1">
              <h2 className="text-2xl font-extrabold text-primary-dark flex items-center gap-2">
                <Sparkles className="text-secondary fill-secondary" />
                PILIH DARJAH KAMU
                <Sparkles className="text-secondary fill-secondary" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {grades.map((grade, idx) => (
              <motion.div
                key={grade.id}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={`/darjah/${grade.id}`}>
                  <div className={`
                         card-cloud relative p-8 cursor-pointer group h-full flex flex-col items-center text-center
                         ${grade.bg} border-4 ${grade.border}
                      `}>
                    {/* Giant Emoji Icon */}
                    <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300 drop-shadow-md filter">
                      {grade.icon}
                    </div>

                    <h3 className={`text-2xl font-black mb-2 ${grade.color}`}>
                      {grade.title}
                    </h3>

                    <p className="font-bold text-text-secondary mb-6 flex-grow">
                      {grade.subtitle}
                    </p>

                    <div className={`
                            w-full py-2 rounded-xl font-bold text-white shadow-md
                            ${grade.color.replace('text-', 'bg-')} 
                         `}>
                      MASUK
                    </div>

                    {/* Completion Badge (hidden for now) */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Award className="text-secondary fill-secondary" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Landscape */}
      <footer className="mt-20 relative pt-32 pb-8 bg-gradient-to-t from-emerald-100 to-transparent">
        {/* Simple Vector Hills */}
        <svg className="absolute bottom-0 left-0 w-full h-auto text-emerald-200" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <div className="container-custom relative z-10 text-center font-bold text-emerald-800/60">
          <p>Dunia Sirah KAFA • Dibuat dengan ❤️ untuk Anak-anak Soleh</p>
        </div>
      </footer>
    </main>
  );
}

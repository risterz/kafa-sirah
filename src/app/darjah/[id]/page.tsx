'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, BookOpen, Star, Play, Circle, CheckCircle2 } from 'lucide-react';
import { getGradeData } from '@/lib/lessons';

const gradeThemes: { [key: number]: { bg: string; border: string; text: string; button: string } } = {
    1: { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-600', button: 'bg-pink-500' },
    2: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-600', button: 'bg-amber-500' },
    3: { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-600', button: 'bg-emerald-500' },
    4: { bg: 'bg-violet-50', border: 'border-violet-300', text: 'text-violet-600', button: 'bg-violet-500' },
    5: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-600', button: 'bg-blue-500' },
};

export default function GradePage() {
    const params = useParams();
    const gradeId = parseInt(params.id as string);
    const gradeData = getGradeData(gradeId);
    const theme = gradeThemes[gradeId] || gradeThemes[1];

    if (!gradeData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-black text-text-primary mb-2">Ops! Tak Jumpa 😅</h1>
                    <Link href="/"><button className="btn-bouncy bg-primary text-white px-6 py-2 rounded-full font-bold">Balik Kampung</button></Link>
                </div>
            </div>
        );
    }

    return (
        <main
            className={`min-h-screen pb-20 ${gradeId === 1 ? '' : theme.bg}`}
            style={gradeId === 1 ? {
                backgroundImage: "url('/assets/images/darjah1/section-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            } : {}}
        >
            {/* Header / Top Bar */}
            <div className={`
                backdrop-blur border-b-4 shadow-sm sticky top-0 z-40 px-4 py-3
                ${gradeId === 1 ? 'bg-black/10 border-white/20' : 'bg-white/80 border-white'}
            `}>
                <div className="container-custom flex items-center justify-between">
                    <Link href="/">
                        <div className="btn-bouncy w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-text-secondary shadow-sm">
                            <ArrowLeft size={24} strokeWidth={3} />
                        </div>
                    </Link>

                    <div className={`px-6 py-2 rounded-full font-black text-white shadow-md ${theme.button}`}>
                        DARJAH {gradeId}
                    </div>
                </div>
            </div>

            <div className="container-custom pt-12">
                {/* Big Title */}
                <div className="text-center mb-10">
                    <div className={`
                        inline-block px-8 py-4 mb-6 rounded-full
                        ${gradeId === 1 ? 'bg-black/30 backdrop-blur-md border border-white/20 shadow-lg' : ''}
                    `}>
                        <h1 className={`text-4xl md:text-5xl font-black m-0 drop-shadow-sm ${gradeId === 1 ? 'text-white' : theme.text}`}>
                            {gradeData.subtitle}
                        </h1>
                    </div>

                    <div className={`
                        block w-fit mx-auto px-6 py-3 rounded-2xl border-2 font-bold
                        ${gradeId === 1
                            ? 'bg-black/40 backdrop-blur-md border-white/30 text-white shadow-md'
                            : 'bg-white border-dashed border-gray-300 text-text-secondary'}
                    `}>
                        {gradeData.description}
                    </div>
                </div>

                {/* Progress Bar Widget */}
                <div className="bg-white rounded-3xl p-6 border-4 border-white shadow-lg mb-12 max-w-2xl mx-auto transform -rotate-1">
                    <div className="flex justify-between items-end mb-2">
                        <span className="font-extrabold text-gray-400 uppercase tracking-widest text-sm">Level Progress</span>
                        <span className={`font-black text-2xl ${theme.text}`}>0%</span>
                    </div>
                    <div className="h-6 w-full bg-gray-100 rounded-full border-2 border-gray-200 p-1 overflow-hidden">
                        <div className={`h-full rounded-full ${theme.button} w-[5%]`} />
                    </div>
                </div>

                {/* Level List */}
                {/* Level List */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
                >
                    {gradeData.lessons.map((lesson, idx) => (
                        <Link href={`/darjah/${gradeId}/${lesson.id}`} key={lesson.id} className="block h-full">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 1 : -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-white rounded-[2rem] p-6 border-b-8 border-r-4 border-gray-100 hover:border-primary/20 transition-all cursor-pointer flex flex-col items-center text-center gap-4 relative overflow-hidden h-full shadow-sm hover:shadow-xl"
                            >
                                {/* Level Badge */}
                                <div className={`
                                    w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-inner mb-2
                                    bg-gray-50 border-2 border-gray-100 group-hover:bg-yellow-100 transition-colors
                                `}>
                                    {lesson.emoji}
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="flex justify-center mb-2">
                                        <span className={`
                                            text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider
                                            ${theme.bg} ${theme.text}
                                        `}>
                                            BAB {idx + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-black text-xl text-text-primary leading-tight mb-2 group-hover:text-primary transition-colors">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-text-secondary font-medium text-sm line-clamp-2">
                                        {lesson.subtitle}
                                    </p>
                                </div>

                                {/* Play Button */}
                                <div className={`
                                    w-full py-3 rounded-xl flex items-center justify-center shadow-md font-bold text-white text-sm gap-2 mt-auto
                                    ${theme.button} transform group-hover:translate-y-1 transition-transform
                                `}>
                                    MULA
                                    <Play size={16} fill="white" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}

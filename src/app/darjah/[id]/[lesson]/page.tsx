'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    XCircle,
    Star,
    Home,
    Sparkles,
    Trophy,
    Zap
} from 'lucide-react';
import { getGradeData } from '@/lib/lessons';
import { sounds } from '@/lib/sounds';

const gradeThemes: { [key: number]: { gradient: string; accent: string; shadow: string } } = {
    1: { gradient: 'from-rose-500 via-pink-500 to-fuchsia-500', accent: '#f43f5e', shadow: 'rgba(244, 63, 94, 0.3)' },
    2: { gradient: 'from-amber-400 via-orange-500 to-red-500', accent: '#f97316', shadow: 'rgba(249, 115, 22, 0.3)' },
    3: { gradient: 'from-emerald-400 via-teal-500 to-cyan-500', accent: '#14b8a6', shadow: 'rgba(20, 184, 166, 0.3)' },
    4: { gradient: 'from-violet-500 via-purple-500 to-fuchsia-500', accent: '#8b5cf6', shadow: 'rgba(139, 92, 246, 0.3)' },
    5: { gradient: 'from-blue-500 via-indigo-500 to-violet-500', accent: '#6366f1', shadow: 'rgba(99, 102, 241, 0.3)' },
};

export default function LessonPage() {
    const params = useParams();
    const gradeId = parseInt(params.id as string);
    const lessonId = params.lesson as string;

    const gradeData = getGradeData(gradeId);
    const theme = gradeThemes[gradeId] || gradeThemes[1];

    const lesson = gradeData?.lessons.find(l => l.id === lessonId);
    const lessonIndex = gradeData?.lessons.findIndex(l => l.id === lessonId) ?? -1;

    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    if (!gradeData || !lesson) {
        return (
            <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.gradient}`}>
                <p className="text-white text-xl">Pelajaran tidak dijumpai</p>
            </div>
        );
    }

    const currentContent = lesson.contents[currentStep];
    const totalSteps = lesson.contents.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const handleNext = () => {
        sounds.next();
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            sounds.complete();
            setIsComplete(true);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            sounds.prev();
            setCurrentStep(currentStep - 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const handleAnswerSelect = (index: number) => {
        if (showResult) return;
        sounds.select();
        setSelectedAnswer(index);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer === null) return;
        setShowResult(true);
        if (currentContent.type === 'quiz' && selectedAnswer === currentContent.correct) {
            sounds.correct();
            sounds.points();
            setCorrectAnswers(correctAnswers + 1);
        } else {
            sounds.wrong();
        }
    };

    const nextLesson = gradeData.lessons[lessonIndex + 1];

    // Completion screen
    if (isComplete) {
        return (
            <main className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.gradient} p-6 relative overflow-hidden`}>
                {/* Celebration particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="fixed pointer-events-none"
                        style={{ left: `${Math.random() * 100}%`, top: '-20px' }}
                        animate={{ y: ['0vh', '120vh'], rotate: [0, 360], opacity: [1, 0] }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    >
                        <Sparkles className="text-yellow-300" size={16 + Math.random() * 16} />
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-3xl text-center relative overflow-hidden"
                    style={{
                        maxWidth: '440px',
                        width: '100%',
                        padding: '48px 36px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="mb-6"
                    >
                        <div
                            className={`mx-auto rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}
                            style={{ width: '100px', height: '100px', boxShadow: `0 15px 40px ${theme.shadow}` }}
                        >
                            <Trophy className="text-white" size={48} />
                        </div>
                    </motion.div>

                    <h2 className="font-black text-gray-800 mb-2" style={{ fontSize: '32px' }}>
                        Tahniah! 🎉
                    </h2>
                    <p className="text-gray-600 mb-8" style={{ fontSize: '16px' }}>
                        Anda telah selesai mempelajari<br />
                        <strong>"{lesson.title}"</strong>
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 mb-8" style={{ gap: '16px' }}>
                        <div
                            className="rounded-2xl p-5"
                            style={{ background: `linear-gradient(135deg, ${theme.accent}10 0%, ${theme.accent}05 100%)` }}
                        >
                            <Zap style={{ color: theme.accent }} size={28} className="mx-auto mb-2" />
                            <div className="font-black" style={{ fontSize: '36px', color: theme.accent }}>
                                {correctAnswers}
                            </div>
                            <div className="text-gray-500" style={{ fontSize: '13px' }}>Jawapan Betul</div>
                        </div>
                        <div
                            className="rounded-2xl p-5"
                            style={{ background: 'linear-gradient(135deg, #fef3c710 0%, #fef3c705 100%)' }}
                        >
                            <Star className="text-amber-500 fill-amber-500 mx-auto mb-2" size={28} />
                            <div className="font-black text-amber-500" style={{ fontSize: '36px' }}>
                                +{correctAnswers * 10}
                            </div>
                            <div className="text-gray-500" style={{ fontSize: '13px' }}>Points</div>
                        </div>
                    </div>

                    <div className="flex" style={{ gap: '12px' }}>
                        <Link href={`/darjah/${gradeId}`} className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full rounded-xl font-bold flex items-center justify-center border-2 border-gray-200 text-gray-600 hover:bg-gray-50"
                                style={{ padding: '16px', fontSize: '15px', gap: '8px' }}
                            >
                                <Home size={20} />
                                Kembali
                            </motion.button>
                        </Link>

                        {nextLesson && (
                            <Link href={`/darjah/${gradeId}/${nextLesson.id}`} className="flex-1">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full rounded-xl bg-gradient-to-r ${theme.gradient} text-white font-bold flex items-center justify-center`}
                                    style={{ padding: '16px', fontSize: '15px', gap: '8px', boxShadow: `0 8px 24px ${theme.shadow}` }}
                                >
                                    Seterusnya
                                    <ArrowRight size={20} />
                                </motion.button>
                            </Link>
                        )}
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${theme.gradient}`}>
            {/* Floating sparkles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed pointer-events-none z-0"
                    style={{ top: `${20 + (i * 12) % 60}%`, left: `${5 + (i * 15) % 90}%` }}
                    animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                >
                    <Sparkles className="text-white/30" size={14 + (i % 3) * 6} />
                </motion.div>
            ))}

            {/* Header */}
            <header className="relative z-10">
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 24px 24px' }}>
                    <Link
                        href={`/darjah/${gradeId}`}
                        className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4"
                        style={{ gap: '8px', fontSize: '14px' }}
                    >
                        <ArrowLeft size={18} />
                        <span>{gradeData.title}</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl p-5 relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        {/* Background Pattern for Header Card */}
                        <div
                            className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
                            style={{
                                backgroundImage: "url('/assets/images/darjah1/bab1/soft-clouds.png')",
                                backgroundSize: '150px'
                            }}
                        />

                        <div className="flex items-center mb-4 relative z-10" style={{ gap: '14px' }}>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="flex-shrink-0"
                            >
                                {lesson.icon ? (
                                    <img
                                        src={lesson.icon}
                                        alt={lesson.title}
                                        className="w-16 h-16 object-contain drop-shadow-md"
                                    />
                                ) : (
                                    <span style={{ fontSize: '42px' }}>{lesson.emoji}</span>
                                )}
                            </motion.div>
                            <div>
                                <h1 className="font-bold text-white" style={{ fontSize: '22px', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                                    {lesson.title}
                                </h1>
                                <p className="text-white/80" style={{ fontSize: '14px' }}>{lesson.subtitle}</p>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="flex items-center relative z-10" style={{ gap: '14px' }}>
                            <span className="text-white/80 font-medium whitespace-nowrap" style={{ fontSize: '13px' }}>
                                Bahagian {currentStep + 1}/{totalSteps}
                            </span>
                            <div className="flex-1 h-3 rounded-full bg-white/20 overflow-hidden">
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <span className="text-white font-bold" style={{ fontSize: '14px' }}>{Math.round(progress)}%</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Content */}
            <section className="relative z-10 pb-40 md:pb-36">
                <div className="max-w-[800px] mx-auto px-4 md:px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 60, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -60, scale: 0.95 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Story/Fact Card */}
                            {(currentContent.type === 'story' || currentContent.type === 'fact') && (
                                <div
                                    className="rounded-3xl relative overflow-hidden p-6 md:p-8"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                                        boxShadow: `0 20px 60px ${theme.shadow}`,
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-[20px]">
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-4xl md:text-[52px]"
                                        >
                                            {currentContent.emoji}
                                        </motion.div>
                                        <div className="flex-1 w-full">
                                            <span
                                                className={`inline-block rounded-full font-semibold bg-gradient-to-r ${theme.gradient} text-white mb-4`}
                                                style={{ padding: '8px 18px', fontSize: '13px' }}
                                            >
                                                {currentContent.type === 'story' ? '📖 Cerita' : '💡 Fakta Menarik'}
                                            </span>
                                            <p className="text-gray-700 text-base md:text-[18px]" style={{ lineHeight: '1.8' }}>
                                                {currentContent.text}
                                            </p>

                                            {currentContent.image && (
                                                <div className="mt-6 rounded-2xl overflow-hidden shadow-md">
                                                    <img
                                                        src={currentContent.image}
                                                        alt="Lesson illustration"
                                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative stars */}
                                    <div className="flex justify-center mt-8 gap-3">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                            >
                                                <Star className="text-amber-400 fill-amber-400" size={24} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quiz Card */}
                            {currentContent.type === 'quiz' && (
                                <div
                                    className="rounded-3xl relative overflow-hidden"
                                    style={{
                                        padding: '24px md:32px',
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                                        boxShadow: `0 20px 60px ${theme.shadow}`,
                                    }}
                                >
                                    <div className="text-center mb-6 md:mb-8">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-5xl md:text-[64px] mb-4"
                                        >
                                            🤔
                                        </motion.div>
                                        <span
                                            className={`inline-block rounded-full font-semibold bg-gradient-to-r ${theme.gradient} text-white mb-4 md:mb-5`}
                                            style={{ padding: '8px 18px', fontSize: '13px' }}
                                        >
                                            ⭐ Soalan Kuiz
                                        </span>
                                        <h3 className="font-bold text-gray-800 text-lg md:text-[22px]" style={{ lineHeight: '1.5' }}>
                                            {currentContent.question}
                                        </h3>
                                    </div>

                                    {/* Options */}
                                    <div className="flex flex-col gap-3">
                                        {currentContent.options?.map((option, index) => {
                                            const isSelected = selectedAnswer === index;
                                            const isCorrect = index === currentContent.correct;

                                            let styles = {
                                                background: '#f8fafc',
                                                border: '2px solid #e2e8f0',
                                                color: '#475569',
                                            };

                                            if (showResult) {
                                                if (isCorrect) {
                                                    styles = { background: '#f0fdf4', border: '2px solid #22c55e', color: '#166534' };
                                                } else if (isSelected && !isCorrect) {
                                                    styles = { background: '#fef2f2', border: '2px solid #ef4444', color: '#991b1b' };
                                                }
                                            } else if (isSelected) {
                                                styles = { background: `${theme.accent}10`, border: `2px solid ${theme.accent}`, color: theme.accent };
                                            }

                                            return (
                                                <motion.button
                                                    key={index}
                                                    whileHover={!showResult ? { scale: 1.01, x: 2 } : {}}
                                                    whileTap={!showResult ? { scale: 0.98 } : {}}
                                                    onClick={() => handleAnswerSelect(index)}
                                                    disabled={showResult}
                                                    className="w-full rounded-2xl text-left font-medium flex items-center justify-between transition-all p-4 md:p-[18px 22px] text-sm md:text-base"
                                                    style={{ ...styles }}
                                                >
                                                    <span>{option}</span>
                                                    {showResult && isCorrect && <CheckCircle className="text-green-500" size={24} />}
                                                    {showResult && isSelected && !isCorrect && <XCircle className="text-red-500" size={24} />}
                                                </motion.button>
                                            );
                                        })}
                                    </div>

                                    {/* Check button */}
                                    {!showResult && selectedAnswer !== null && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleCheckAnswer}
                                            className={`w-full bg-gradient-to-r ${theme.gradient} text-white font-bold rounded-2xl mt-6`}
                                            style={{ padding: '16px', fontSize: '16px', boxShadow: `0 10px 30px ${theme.shadow}` }}
                                        >
                                            Semak Jawapan
                                        </motion.button>
                                    )}

                                    {/* Result */}
                                    {showResult && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center rounded-2xl mt-6 p-6"
                                            style={{
                                                background: selectedAnswer === currentContent.correct
                                                    ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
                                                    : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                                                border: selectedAnswer === currentContent.correct ? '1px solid #86efac' : '1px solid #fca5a5',
                                            }}
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 0.5, repeat: 2 }}
                                                className="text-4xl md:text-[48px] mb-3"
                                            >
                                                {selectedAnswer === currentContent.correct ? '🎉' : '😢'}
                                            </motion.div>
                                            <p
                                                className="font-bold text-base md:text-[18px]"
                                                style={{ color: selectedAnswer === currentContent.correct ? '#166534' : '#991b1b' }}
                                            >
                                                {selectedAnswer === currentContent.correct ? 'Hebat! Jawapan betul!' : 'Jangan risau, cuba lagi!'}
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Bottom Nav */}
            <div
                className="fixed bottom-0 left-0 right-0 z-20"
                style={{
                    background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 100%)',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.1)',
                }}
            >
                <div className="flex w-full" style={{ maxWidth: '800px', margin: '0 auto', padding: '12px 16px', gap: '10px' }}>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className="flex-1 rounded-xl font-bold flex items-center justify-center p-3 md:p-4 text-sm md:text-base"
                        style={{
                            gap: '8px',
                            background: currentStep === 0 ? '#f1f5f9' : '#f1f5f9',
                            color: currentStep === 0 ? '#94a3b8' : '#475569',
                            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                        }}
                    >
                        <ArrowLeft size={18} className="md:w-5 md:h-5" />
                        Sebelum
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleNext}
                        disabled={currentContent.type === 'quiz' && !showResult}
                        className={`flex-1 rounded-xl font-bold flex items-center justify-center p-3 md:p-4 text-sm md:text-base`}
                        style={{
                            gap: '8px',
                            background: currentContent.type === 'quiz' && !showResult
                                ? '#e2e8f0'
                                : `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accent}dd 100%)`,
                            color: currentContent.type === 'quiz' && !showResult ? '#94a3b8' : 'white',
                            cursor: currentContent.type === 'quiz' && !showResult ? 'not-allowed' : 'pointer',
                            boxShadow: currentContent.type === 'quiz' && !showResult ? 'none' : `0 8px 24px ${theme.shadow}`,
                        }}
                    >
                        {currentStep === totalSteps - 1 ? 'Selesai' : 'Seterusnya'}
                        <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </motion.button>
                </div>
            </div>
        </main>
    );
}

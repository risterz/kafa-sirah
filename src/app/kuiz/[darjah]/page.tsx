'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Star, RotateCcw, Home } from 'lucide-react';
import { getGradeData, Lesson, LessonContent } from '@/lib/lessons';

const gradeColors: { [key: number]: { gradient: string; bg: string } } = {
    1: { gradient: 'from-red-400 to-pink-500', bg: '#FF6B6B' },
    2: { gradient: 'from-yellow-400 to-orange-500', bg: '#FFD93D' },
    3: { gradient: 'from-teal-400 to-cyan-500', bg: '#4ECDC4' },
    4: { gradient: 'from-purple-400 to-indigo-500', bg: '#9B5DE5' },
    5: { gradient: 'from-blue-400 to-indigo-500', bg: '#54A0FF' },
};

interface QuizQuestion {
    lessonTitle: string;
    question: string;
    options: string[];
    correct: number;
}

export default function QuizPage() {
    const params = useParams();
    const gradeId = parseInt(params.darjah as string);
    const gradeData = getGradeData(gradeId);
    const colorScheme = gradeColors[gradeId] || gradeColors[1];

    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [answers, setAnswers] = useState<(boolean | null)[]>([]);

    useEffect(() => {
        if (gradeData) {
            // Extract all quiz questions from lessons
            const allQuestions: QuizQuestion[] = [];
            gradeData.lessons.forEach((lesson: Lesson) => {
                lesson.contents.forEach((content: LessonContent) => {
                    if (content.type === 'quiz' && content.question && content.options) {
                        allQuestions.push({
                            lessonTitle: lesson.title,
                            question: content.question,
                            options: content.options,
                            correct: content.correct ?? 0,
                        });
                    }
                });
            });
            setQuestions(allQuestions);
            setAnswers(new Array(allQuestions.length).fill(null));
        }
    }, [gradeData]);

    if (!gradeData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Darjah tidak dijumpai</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Memuatkan kuiz...</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    const handleAnswerSelect = (index: number) => {
        if (showResult) return;
        setSelectedAnswer(index);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer === null) return;
        setShowResult(true);

        const isCorrect = selectedAnswer === currentQuestion.correct;
        const newAnswers = [...answers];
        newAnswers[currentIndex] = isCorrect;
        setAnswers(newAnswers);

        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setIsComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setIsComplete(false);
        setAnswers(new Array(questions.length).fill(null));
    };

    // Completion screen
    if (isComplete) {
        const percentage = Math.round((score / questions.length) * 100);
        let emoji = '😢';
        let message = 'Cuba lagi!';

        if (percentage >= 80) {
            emoji = '🏆';
            message = 'Cemerlang!';
        } else if (percentage >= 60) {
            emoji = '🎉';
            message = 'Bagus!';
        } else if (percentage >= 40) {
            emoji = '💪';
            message = 'Teruskan usaha!';
        }

        return (
            <main className="min-h-screen flex items-center justify-center p-4" style={{ background: `linear-gradient(135deg, ${colorScheme.bg}20, #FFF9E8)` }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-md w-full"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: 3 }}
                        className="text-6xl mb-4"
                    >
                        {emoji}
                    </motion.div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{message}</h2>
                    <p className="text-gray-600 mb-6">
                        Kuiz {gradeData.title} telah selesai!
                    </p>

                    {/* Score Circle */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke="#e5e7eb"
                                strokeWidth="12"
                                fill="none"
                            />
                            <motion.circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke={colorScheme.bg}
                                strokeWidth="12"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ strokeDashoffset: 352 }}
                                animate={{ strokeDashoffset: 352 - (352 * percentage) / 100 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                strokeDasharray="352"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold" style={{ color: colorScheme.bg }}>
                                {percentage}%
                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                        <div className="flex justify-center gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-500">{score}</div>
                                <div className="text-sm text-gray-500">Betul</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-500">{questions.length - score}</div>
                                <div className="text-sm text-gray-500">Salah</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleRestart}
                            className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Cuba Lagi
                        </motion.button>

                        <Link href={`/darjah/${gradeId}`} className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 rounded-xl bg-gradient-to-r ${colorScheme.gradient} text-white font-semibold flex items-center justify-center gap-2`}
                            >
                                <Home className="w-5 h-5" />
                                Kembali
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pb-32">
            {/* Header */}
            <header className={`bg-gradient-to-br ${colorScheme.gradient} text-white py-6 px-4`}>
                <div className="max-w-2xl mx-auto">
                    <Link
                        href={`/darjah/${gradeId}`}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{gradeData.title}</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Trophy className="w-10 h-10" />
                        <div>
                            <h1 className="text-xl font-bold">Kuiz {gradeData.title}</h1>
                            <p className="text-sm opacity-80">Uji kefahaman anda!</p>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span>Soalan {currentIndex + 1} / {questions.length}</span>
                            <span>Skor: {score}</span>
                        </div>
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Answer indicators */}
                    <div className="mt-4 flex gap-1 flex-wrap">
                        {answers.map((answer, i) => (
                            <div
                                key={i}
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${answer === null
                                        ? 'bg-white/30'
                                        : answer
                                            ? 'bg-green-400'
                                            : 'bg-red-400'
                                    } ${i === currentIndex ? 'ring-2 ring-white' : ''}`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Question */}
            <section className="px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-white rounded-3xl p-6 shadow-lg"
                        >
                            {/* Lesson context */}
                            <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4" style={{ color: colorScheme.bg }} />
                                Dari pelajaran: {currentQuestion.lessonTitle}
                            </div>

                            {/* Question */}
                            <h3 className="text-xl font-bold text-gray-800 mb-6">
                                {currentQuestion.question}
                            </h3>

                            {/* Options */}
                            <div className="space-y-3">
                                {currentQuestion.options.map((option, index) => {
                                    const isSelected = selectedAnswer === index;
                                    const isCorrect = index === currentQuestion.correct;

                                    let bgColor = 'bg-gray-50 hover:bg-gray-100';
                                    let borderColor = 'border-gray-200';
                                    let textColor = 'text-gray-700';

                                    if (showResult) {
                                        if (isCorrect) {
                                            bgColor = 'bg-green-50';
                                            borderColor = 'border-green-500';
                                            textColor = 'text-green-700';
                                        } else if (isSelected && !isCorrect) {
                                            bgColor = 'bg-red-50';
                                            borderColor = 'border-red-500';
                                            textColor = 'text-red-700';
                                        }
                                    } else if (isSelected) {
                                        bgColor = 'bg-blue-50';
                                        borderColor = 'border-blue-500';
                                        textColor = 'text-blue-700';
                                    }

                                    return (
                                        <motion.button
                                            key={index}
                                            whileHover={!showResult ? { scale: 1.02 } : {}}
                                            whileTap={!showResult ? { scale: 0.98 } : {}}
                                            onClick={() => handleAnswerSelect(index)}
                                            disabled={showResult}
                                            className={`w-full p-4 rounded-xl border-2 ${bgColor} ${borderColor} ${textColor} text-left font-medium transition-all flex items-center justify-between`}
                                        >
                                            <span>{option}</span>
                                            {showResult && isCorrect && (
                                                <CheckCircle className="w-6 h-6 text-green-500" />
                                            )}
                                            {showResult && isSelected && !isCorrect && (
                                                <XCircle className="w-6 h-6 text-red-500" />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Action Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-100 p-4">
                <div className="max-w-2xl mx-auto">
                    {!showResult ? (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleCheckAnswer}
                            disabled={selectedAnswer === null}
                            className={`w-full py-4 rounded-xl font-semibold text-lg ${selectedAnswer === null
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : `bg-gradient-to-r ${colorScheme.gradient} text-white`
                                }`}
                        >
                            Semak Jawapan
                        </motion.button>
                    ) : (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleNext}
                            className={`w-full py-4 rounded-xl bg-gradient-to-r ${colorScheme.gradient} text-white font-semibold text-lg`}
                        >
                            {currentIndex === questions.length - 1 ? 'Lihat Keputusan' : 'Soalan Seterusnya'}
                        </motion.button>
                    )}
                </div>
            </div>
        </main>
    );
}

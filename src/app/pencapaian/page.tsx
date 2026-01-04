'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Trophy, Star, Medal, Target, BookOpen, Award, Lock } from 'lucide-react';

const achievements = [
    {
        id: 'first-lesson',
        title: 'Langkah Pertama',
        description: 'Selesaikan pelajaran pertama',
        icon: BookOpen,
        color: '#4ECDC4',
        unlocked: false,
        progress: 0,
        total: 1,
    },
    {
        id: 'darjah1-complete',
        title: 'Murid Darjah 1',
        description: 'Selesaikan semua pelajaran Darjah 1',
        icon: Star,
        color: '#FF6B6B',
        unlocked: false,
        progress: 0,
        total: 5,
    },
    {
        id: 'darjah2-complete',
        title: 'Murid Darjah 2',
        description: 'Selesaikan semua pelajaran Darjah 2',
        icon: Star,
        color: '#FFD93D',
        unlocked: false,
        progress: 0,
        total: 5,
    },
    {
        id: 'darjah3-complete',
        title: 'Murid Darjah 3',
        description: 'Selesaikan semua pelajaran Darjah 3',
        icon: Star,
        color: '#4ECDC4',
        unlocked: false,
        progress: 0,
        total: 5,
    },
    {
        id: 'darjah4-complete',
        title: 'Murid Darjah 4',
        description: 'Selesaikan semua pelajaran Darjah 4',
        icon: Star,
        color: '#9B5DE5',
        unlocked: false,
        progress: 0,
        total: 5,
    },
    {
        id: 'darjah5-complete',
        title: 'Murid Darjah 5',
        description: 'Selesaikan semua pelajaran Darjah 5',
        icon: Star,
        color: '#54A0FF',
        unlocked: false,
        progress: 0,
        total: 5,
    },
    {
        id: 'quiz-master',
        title: 'Pakar Kuiz',
        description: 'Jawab 20 kuiz dengan betul',
        icon: Target,
        color: '#FF9F43',
        unlocked: false,
        progress: 0,
        total: 20,
    },
    {
        id: 'sirah-scholar',
        title: 'Ulama Sirah',
        description: 'Selesaikan semua pelajaran untuk semua darjah',
        icon: Trophy,
        color: '#C9A227',
        unlocked: false,
        progress: 0,
        total: 25,
    },
    {
        id: 'perfect-score',
        title: 'Skor Sempurna',
        description: 'Jawab semua kuiz dalam satu darjah dengan betul',
        icon: Award,
        color: '#2D9B6E',
        unlocked: false,
        progress: 0,
        total: 1,
    },
    {
        id: 'streak-7',
        title: 'Rajin Belajar',
        description: 'Belajar 7 hari berturut-turut',
        icon: Medal,
        color: '#E85D04',
        unlocked: false,
        progress: 0,
        total: 7,
    },
];

export default function AchievementsPage() {
    const unlockedCount = achievements.filter(a => a.unlocked).length;
    const totalPoints = 0; // Will be calculated from localStorage

    return (
        <main className="min-h-screen pb-16">
            {/* Header */}
            <header className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Kembali</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Trophy className="w-16 h-16" />
                        </motion.div>
                        <div>
                            <h1 className="text-3xl font-bold">Pencapaian Saya</h1>
                            <p className="opacity-90">Kumpul lencana dan jadi juara!</p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="bg-white/20 rounded-2xl p-4 text-center">
                            <div className="text-3xl font-bold">{unlockedCount}/{achievements.length}</div>
                            <div className="text-sm opacity-80">Lencana Dikumpul</div>
                        </div>
                        <div className="bg-white/20 rounded-2xl p-4 text-center">
                            <div className="text-3xl font-bold">{totalPoints}</div>
                            <div className="text-sm opacity-80">Jumlah Points</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Achievements Grid */}
            <section className="px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Semua Lencana</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            const progressPercent = (achievement.progress / achievement.total) * 100;

                            return (
                                <motion.div
                                    key={achievement.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`bg-white rounded-2xl p-5 shadow-md relative overflow-hidden ${!achievement.unlocked ? 'opacity-70' : ''
                                        }`}
                                >
                                    {/* Background decoration */}
                                    <div
                                        className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10"
                                        style={{
                                            backgroundColor: achievement.color,
                                            transform: 'translate(30%, -30%)'
                                        }}
                                    />

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <motion.div
                                            animate={achievement.unlocked ? { scale: [1, 1.1, 1] } : {}}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className={`w-14 h-14 rounded-xl flex items-center justify-center ${achievement.unlocked ? '' : 'bg-gray-200'
                                                }`}
                                            style={achievement.unlocked ? { backgroundColor: `${achievement.color}20` } : {}}
                                        >
                                            {achievement.unlocked ? (
                                                <Icon
                                                    className="w-8 h-8"
                                                    style={{ color: achievement.color }}
                                                />
                                            ) : (
                                                <Lock className="w-6 h-6 text-gray-400" />
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="font-bold text-gray-800 mb-1">{achievement.title}</h3>
                                    <p className="text-xs text-gray-500 mb-3">{achievement.description}</p>

                                    {/* Progress bar */}
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progressPercent}%` }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: achievement.color }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {achievement.progress}/{achievement.total}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <section className="px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-[#2D9B6E] to-[#4ECDC4] rounded-3xl p-6 text-white text-center"
                    >
                        <div className="text-4xl mb-3">🌟</div>
                        <h3 className="text-xl font-bold mb-2">Teruskan Usaha!</h3>
                        <p className="opacity-90">
                            Setiap pelajaran membawa anda lebih dekat untuk mengenali kehidupan Nabi Muhammad SAW.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

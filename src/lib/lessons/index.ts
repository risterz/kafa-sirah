export interface LessonContent {
    type: 'story' | 'interactive' | 'fact' | 'quiz';
    text?: string;
    image?: string;
    emoji?: string;
    question?: string;
    options?: string[];
    correct?: number;
}

export interface Lesson {
    id: string;
    title: string;
    subtitle: string;
    emoji: string;
    icon?: string;
    contents: LessonContent[];
}

export interface GradeData {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    lessons: Lesson[];
}

// Darjah 1 - Pengenalan Sirah & Kelahiran Nabi
export const darjah1: GradeData = {
    id: 1,
    title: 'Darjah 1',
    subtitle: 'Kelahiran Nabi',
    description: 'Kenali Sirah & Kelahiran Rasulullah SAW',
    color: '#FF6B6B',
    lessons: [
        {
            id: 'd1-l1',
            title: 'Apa itu Sirah?',
            subtitle: 'Pengenalan kepada Sirah',
            emoji: '📖',
            icon: '/assets/images/darjah1/bab1/header-icon.png',
            contents: [
                {
                    type: 'story',
                    emoji: '🌟',
                    text: 'Sirah bermaksud kisah hidup dan sejarah Nabi Muhammad SAW. Melalui Sirah, kita dapat mengenali siapa Nabi kita dan bagaimana baginda hidup.',
                    image: '/assets/images/darjah1/bab1/grandfather-telling-story.png',
                },
                {
                    type: 'fact',
                    emoji: '💡',
                    text: 'Belajar Sirah sangat penting kerana Nabi Muhammad SAW adalah contoh terbaik untuk kita ikuti dalam kehidupan seharian.',
                    image: '/assets/images/darjah1/bab1/ancient-city.png',
                },
                {
                    type: 'quiz',
                    question: 'Apa maksud Sirah?',
                    options: ['Kisah hidup Nabi Muhammad SAW', 'Nama sebuah negara', 'Nama buah'],
                    correct: 0,
                },
            ],
        },
        {
            id: 'd1-l2',
            title: 'Keturunan Nabi',
            subtitle: 'Nasab Rasulullah SAW',
            emoji: '👨‍👩‍👦',
            contents: [
                {
                    type: 'story',
                    emoji: '🕌',
                    text: 'Nabi Muhammad SAW berasal dari keturunan yang mulia. Bapa baginda bernama Abdullah dan ibu baginda bernama Aminah.',
                },
                {
                    type: 'fact',
                    emoji: '⭐',
                    text: 'Datuk Nabi Muhammad SAW bernama Abdul Muttalib. Beliau adalah ketua kaum Quraisy yang sangat dihormati.',
                },
                {
                    type: 'quiz',
                    question: 'Siapakah nama bapa Nabi Muhammad SAW?',
                    options: ['Abu Talib', 'Abdullah', 'Abdul Muttalib'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd1-l3',
            title: 'Kelahiran Rasulullah',
            subtitle: 'Tahun Gajah',
            emoji: '🐘',
            contents: [
                {
                    type: 'story',
                    emoji: '🌙',
                    text: 'Nabi Muhammad SAW dilahirkan pada hari Isnin, 12 Rabiulawal, Tahun Gajah, di kota Mekah yang mulia.',
                    image: '/assets/images/darjah1/baby-prophet-symbolism.jpg',
                },
                {
                    type: 'fact',
                    emoji: '🐘',
                    text: 'Tahun itu dipanggil Tahun Gajah kerana Raja Abrahah cuba menyerang Kaabah dengan tentera gajah, tetapi Allah melindungi Kaabah.',
                },
                {
                    type: 'story',
                    emoji: '✨',
                    text: 'Ketika Nabi lahir, banyak tanda keajaiban berlaku. Dunia menyambut kedatangan insan terbaik!',
                },
                {
                    type: 'quiz',
                    question: 'Di mana Nabi Muhammad SAW dilahirkan?',
                    options: ['Madinah', 'Mekah', 'Taif'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd1-l4',
            title: 'Ibu Susu Halimah',
            subtitle: 'Penjagaan di Perkampungan',
            emoji: '🏜️',
            contents: [
                {
                    type: 'story',
                    emoji: '👩',
                    text: 'Seperti kebiasaan orang Arab, Nabi Muhammad SAW dihantar ke perkampungan Bani Saad untuk disusukan oleh Halimatus Sa\'diyah.',
                },
                {
                    type: 'fact',
                    emoji: '🌿',
                    text: 'Di sana udara lebih segar dan baginda belajar bahasa Arab yang fasih. Halimah sangat menyayangi Nabi Muhammad SAW.',
                },
                {
                    type: 'quiz',
                    question: 'Siapakah ibu susu Nabi Muhammad SAW?',
                    options: ['Aminah', 'Halimatus Sa\'diyah', 'Khadijah'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd1-l5',
            title: 'Peristiwa Membelah Dada',
            subtitle: 'Dua Malaikat',
            emoji: '💫',
            contents: [
                {
                    type: 'story',
                    emoji: '👼',
                    text: 'Semasa kecil, dua malaikat telah membuka dada Nabi Muhammad SAW dan membersihkan hatinya. Ini adalah persiapan untuk menjadi Rasul.',
                },
                {
                    type: 'fact',
                    emoji: '❤️',
                    text: 'Selepas peristiwa ini, hati Nabi menjadi sangat bersih dan suci. Baginda dilindungi dari segala kejahatan.',
                },
                {
                    type: 'quiz',
                    question: 'Berapa malaikat yang membelah dada Nabi Muhammad SAW?',
                    options: ['Satu', 'Dua', 'Tiga'],
                    correct: 1,
                },
            ],
        },
    ],
};

// Darjah 2 - Zaman Kanak-kanak & Remaja Nabi
export const darjah2: GradeData = {
    id: 2,
    title: 'Darjah 2',
    subtitle: 'Zaman Kanak-kanak',
    description: 'Sifat Al-Amin & Kehidupan Awal Baginda',
    color: '#FFD93D',
    lessons: [
        {
            id: 'd2-l1',
            title: 'Kewafatan Ibu Aminah',
            subtitle: 'Perjalanan ke Madinah',
            emoji: '💔',
            contents: [
                {
                    type: 'story',
                    emoji: '🕊️',
                    text: 'Ketika Nabi berumur 6 tahun, ibu baginda Aminah membawa baginda ke Madinah untuk melawat kubur bapa baginda Abdullah.',
                },
                {
                    type: 'story',
                    emoji: '😢',
                    text: 'Dalam perjalanan pulang, ibu Aminah jatuh sakit dan meninggal dunia di Abwa. Nabi menjadi yatim piatu.',
                },
                {
                    type: 'quiz',
                    question: 'Berapa umur Nabi ketika ibu baginda meninggal?',
                    options: ['4 tahun', '6 tahun', '8 tahun'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd2-l2',
            title: 'Penjagaan Datuk & Bapa Saudara',
            subtitle: 'Abdul Muttalib & Abu Talib',
            emoji: '👴',
            contents: [
                {
                    type: 'story',
                    emoji: '❤️',
                    text: 'Selepas ibu meninggal, datuk Abdul Muttalib menjaga Nabi dengan penuh kasih sayang. Baginda sangat disayangi.',
                },
                {
                    type: 'story',
                    emoji: '👨',
                    text: 'Ketika datuk meninggal, bapa saudara Abu Talib pula menjaga Nabi. Abu Talib melindungi dan menyayangi baginda.',
                },
                {
                    type: 'quiz',
                    question: 'Siapa yang menjaga Nabi selepas datuk meninggal?',
                    options: ['Abu Lahab', 'Abu Talib', 'Abu Bakar'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd2-l3',
            title: 'Gelaran Al-Amin',
            subtitle: 'Yang Dipercayai',
            emoji: '⭐',
            contents: [
                {
                    type: 'story',
                    emoji: '🤝',
                    text: 'Sejak kecil, Nabi Muhammad SAW terkenal dengan sifat jujur dan amanah. Semua orang mempercayai baginda.',
                },
                {
                    type: 'fact',
                    emoji: '🏆',
                    text: 'Penduduk Mekah memberi gelaran "Al-Amin" kepada baginda yang bermaksud "Yang Dipercayai".',
                },
                {
                    type: 'quiz',
                    question: 'Apa maksud gelaran Al-Amin?',
                    options: ['Yang Kuat', 'Yang Dipercayai', 'Yang Pandai'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd2-l4',
            title: 'Pengembala Kambing',
            subtitle: 'Bekerja Sejak Kecil',
            emoji: '🐑',
            contents: [
                {
                    type: 'story',
                    emoji: '🌄',
                    text: 'Nabi Muhammad SAW bekerja sebagai pengembala kambing untuk membantu keluarga. Ini mengajar baginda tentang kesabaran.',
                },
                {
                    type: 'fact',
                    emoji: '📚',
                    text: 'Semua Nabi pernah menjadi pengembala. Ini mengajar mereka untuk menjaga umat dengan penuh kasih sayang.',
                },
                {
                    type: 'quiz',
                    question: 'Apakah pekerjaan Nabi semasa kecil?',
                    options: ['Pedagang', 'Pengembala kambing', 'Petani'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd2-l5',
            title: 'Berniaga dengan Khadijah',
            subtitle: 'Pedagang yang Jujur',
            emoji: '🐪',
            contents: [
                {
                    type: 'story',
                    emoji: '💰',
                    text: 'Apabila dewasa, Nabi bekerja sebagai pedagang untuk Khadijah. Kejujuran baginda menarik perhatian Khadijah.',
                },
                {
                    type: 'fact',
                    emoji: '💍',
                    text: 'Khadijah sangat kagum dengan akhlak Nabi. Kemudian, mereka berkahwin dan hidup bahagia.',
                },
                {
                    type: 'quiz',
                    question: 'Siapakah yang mengambil Nabi bekerja sebagai pedagang?',
                    options: ['Khadijah', 'Fatimah', 'Aisyah'],
                    correct: 0,
                },
            ],
        },
    ],
};

// Darjah 3 - Wahyu & Dakwah Rahsia
export const darjah3: GradeData = {
    id: 3,
    title: 'Darjah 3',
    subtitle: 'Wahyu Pertama',
    description: 'Turunnya Wahyu & Permulaan Dakwah',
    color: '#4ECDC4',
    lessons: [
        {
            id: 'd3-l1',
            title: 'Perkahwinan dengan Khadijah',
            subtitle: 'Isteri Tercinta',
            emoji: '💒',
            contents: [
                {
                    type: 'story',
                    emoji: '❤️',
                    text: 'Nabi Muhammad SAW berkahwin dengan Khadijah ketika berusia 25 tahun. Khadijah adalah wanita mulia yang menyokong Nabi.',
                },
                {
                    type: 'fact',
                    emoji: '👨‍👩‍👧‍👦',
                    text: 'Mereka dikurniakan beberapa orang anak termasuk Fatimah Az-Zahra yang sangat disayangi Nabi.',
                },
                {
                    type: 'quiz',
                    question: 'Berapa umur Nabi ketika berkahwin dengan Khadijah?',
                    options: ['20 tahun', '25 tahun', '30 tahun'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd3-l2',
            title: 'Meletakkan Hajarul Aswad',
            subtitle: 'Kebijaksanaan Nabi',
            emoji: '🕋',
            contents: [
                {
                    type: 'story',
                    emoji: '⬛',
                    text: 'Kaum Quraisy berselisih tentang siapa yang layak meletakkan Hajarul Aswad selepas Kaabah dibaiki.',
                },
                {
                    type: 'story',
                    emoji: '💡',
                    text: 'Nabi Muhammad SAW dengan bijak meletakkan batu itu di atas kain dan setiap ketua kabilah memegang hujung kain bersama.',
                },
                {
                    type: 'quiz',
                    question: 'Bagaimana Nabi menyelesaikan perselisihan Hajarul Aswad?',
                    options: ['Berperang', 'Meletakkan di atas kain', 'Meninggalkan tempat'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd3-l3',
            title: 'Wahyu Pertama',
            subtitle: 'Di Gua Hira',
            emoji: '⛰️',
            contents: [
                {
                    type: 'story',
                    emoji: '🏔️',
                    text: 'Nabi sering bersendirian di Gua Hira untuk bertafakur. Pada malam Lailatul Qadar, Jibril AS turun membawa wahyu pertama.',
                },
                {
                    type: 'fact',
                    emoji: '📖',
                    text: 'Wahyu pertama adalah surah Al-Alaq ayat 1-5: "Bacalah dengan nama Tuhanmu yang menciptakan..."',
                },
                {
                    type: 'quiz',
                    question: 'Di mana wahyu pertama diturunkan?',
                    options: ['Masjidil Haram', 'Gua Hira', 'Masjid Nabawi'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd3-l4',
            title: 'Dakwah Secara Rahsia',
            subtitle: '3 Tahun Pertama',
            emoji: '🤫',
            contents: [
                {
                    type: 'story',
                    emoji: '🏠',
                    text: 'Pada awalnya, Nabi berdakwah secara rahsia kepada keluarga dan sahabat terdekat di rumah Al-Arqam.',
                },
                {
                    type: 'fact',
                    emoji: '👥',
                    text: 'Antara orang pertama memeluk Islam ialah Khadijah, Abu Bakar, Ali bin Abu Talib, dan Zaid bin Harithah.',
                },
                {
                    type: 'quiz',
                    question: 'Siapakah wanita pertama memeluk Islam?',
                    options: ['Fatimah', 'Aisyah', 'Khadijah'],
                    correct: 2,
                },
            ],
        },
        {
            id: 'd3-l5',
            title: 'Sahabat-Sahabat Pertama',
            subtitle: 'As-Sabiqunal Awwalun',
            emoji: '🌟',
            contents: [
                {
                    type: 'story',
                    emoji: '👨‍👩‍👧‍👦',
                    text: 'Golongan pertama memeluk Islam dipanggil As-Sabiqunal Awwalun. Mereka sangat berani dan setia kepada Islam.',
                },
                {
                    type: 'fact',
                    emoji: '⭐',
                    text: 'Bilal bin Rabah adalah seorang hamba yang memeluk Islam. Beliau diseksa kerana imannya tetapi tetap bertahan.',
                },
                {
                    type: 'quiz',
                    question: 'Apa gelaran untuk orang pertama memeluk Islam?',
                    options: ['Muhajirin', 'As-Sabiqunal Awwalun', 'Ansar'],
                    correct: 1,
                },
            ],
        },
    ],
};

// Darjah 4 - Dakwah Terang & Hijrah
export const darjah4: GradeData = {
    id: 4,
    title: 'Darjah 4',
    subtitle: 'Dakwah & Hijrah',
    description: "Penentangan Quraisy & Isra' Mi'raj",
    color: '#9B5DE5',
    lessons: [
        {
            id: 'd4-l1',
            title: 'Dakwah Terang-terangan',
            subtitle: 'Di Bukit Safa',
            emoji: '📢',
            contents: [
                {
                    type: 'story',
                    emoji: '🗣️',
                    text: 'Allah memerintahkan Nabi berdakwah secara terang-terangan. Nabi naik ke Bukit Safa dan menyeru kaum Quraisy.',
                },
                {
                    type: 'story',
                    emoji: '💔',
                    text: 'Abu Lahab, bapa saudara Nabi sendiri, menentang dakwah baginda. Beliau sangat memusuhi Islam.',
                },
                {
                    type: 'quiz',
                    question: 'Di mana Nabi mula berdakwah secara terang-terangan?',
                    options: ['Gua Hira', 'Bukit Safa', 'Masjidil Haram'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd4-l2',
            title: 'Penentangan Quraisy',
            subtitle: 'Cubaan & Ujian',
            emoji: '😠',
            contents: [
                {
                    type: 'story',
                    emoji: '⚔️',
                    text: 'Kaum Quraisy sangat marah dengan dakwah Nabi. Mereka menyiksa orang Islam, memboikot, dan mengancam.',
                },
                {
                    type: 'fact',
                    emoji: '💪',
                    text: 'Walaupun disakiti, Nabi tetap sabar dan terus berdakwah. Baginda tidak pernah berputus asa.',
                },
                {
                    type: 'quiz',
                    question: 'Bagaimana sikap Nabi menghadapi penentangan?',
                    options: ['Marah', 'Sabar dan terus berdakwah', 'Melarikan diri'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd4-l3',
            title: "Isra' dan Mi'raj",
            subtitle: 'Perjalanan Ajaib',
            emoji: '🌙',
            contents: [
                {
                    type: 'story',
                    emoji: '🌃',
                    text: "Isra' adalah perjalanan Nabi dari Masjidil Haram ke Masjidil Aqsa pada waktu malam dengan Buraq.",
                },
                {
                    type: 'story',
                    emoji: '🚀',
                    text: "Mi'raj pula adalah perjalanan Nabi naik ke langit bertemu Allah SWT. Di sini, solat 5 waktu diwajibkan.",
                },
                {
                    type: 'quiz',
                    question: "Apa yang diwajibkan semasa Mi'raj?",
                    options: ['Puasa', 'Solat 5 waktu', 'Zakat'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd4-l4',
            title: 'Hijrah ke Madinah',
            subtitle: 'Penghijrahan Agung',
            emoji: '🐪',
            contents: [
                {
                    type: 'story',
                    emoji: '🏃',
                    text: 'Apabila ancaman semakin kuat, Allah izinkan Nabi berhijrah ke Madinah bersama Abu Bakar.',
                },
                {
                    type: 'fact',
                    emoji: '🕸️',
                    text: 'Di Gua Thur, Allah lindungi Nabi dengan sarang labah-labah dan sarang burung merpati. Musuh tidak menjumpai mereka.',
                },
                {
                    type: 'quiz',
                    question: 'Siapa yang menemani Nabi berhijrah?',
                    options: ['Ali', 'Abu Bakar', 'Umar'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd4-l5',
            title: 'Pembinaan Masjid',
            subtitle: 'Masjid Quba & Nabawi',
            emoji: '🕌',
            contents: [
                {
                    type: 'story',
                    emoji: '🏗️',
                    text: 'Masjid Quba adalah masjid pertama dibina dalam Islam. Nabi sendiri membantu membina masjid ini.',
                },
                {
                    type: 'fact',
                    emoji: '⭐',
                    text: 'Masjid Nabawi pula dibina di Madinah. Ini menjadi pusat pemerintahan dan pendidikan Islam.',
                },
                {
                    type: 'quiz',
                    question: 'Apakah masjid pertama dalam Islam?',
                    options: ['Masjidil Haram', 'Masjid Nabawi', 'Masjid Quba'],
                    correct: 2,
                },
            ],
        },
    ],
};

// Darjah 5 - Pembangunan Madinah & Wafat
export const darjah5: GradeData = {
    id: 5,
    title: 'Darjah 5',
    subtitle: 'Madinah & Wafat',
    description: 'Pembangunan Islam & Kewafatan Rasulullah',
    color: '#54A0FF',
    lessons: [
        {
            id: 'd5-l1',
            title: 'Piagam Madinah',
            subtitle: 'Perlembagaan Pertama',
            emoji: '📜',
            contents: [
                {
                    type: 'story',
                    emoji: '🤝',
                    text: 'Nabi membuat perjanjian dengan semua penduduk Madinah - Muslim, Yahudi, dan lain-lain - untuk hidup aman.',
                },
                {
                    type: 'fact',
                    emoji: '⚖️',
                    text: 'Piagam Madinah adalah perlembagaan bertulis pertama di dunia. Ia menjamin hak semua penduduk.',
                },
                {
                    type: 'quiz',
                    question: 'Apakah Piagam Madinah?',
                    options: ['Buku cerita', 'Perlembagaan bertulis', 'Surat perang'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd5-l2',
            title: 'Perang Badar',
            subtitle: 'Kemenangan Pertama',
            emoji: '⚔️',
            contents: [
                {
                    type: 'story',
                    emoji: '🏆',
                    text: 'Perang Badar adalah peperangan pertama antara umat Islam dan kaum Quraisy. Umat Islam menang walaupun bilangan sedikit.',
                },
                {
                    type: 'fact',
                    emoji: '👼',
                    text: 'Allah menghantar malaikat untuk membantu tentera Islam. Ini adalah kemenangan besar!',
                },
                {
                    type: 'quiz',
                    question: 'Siapa yang menang dalam Perang Badar?',
                    options: ['Kaum Quraisy', 'Umat Islam', 'Tiada pemenang'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd5-l3',
            title: 'Perjanjian Hudaibiyah',
            subtitle: 'Kemenangan Tersembunyi',
            emoji: '🤝',
            contents: [
                {
                    type: 'story',
                    emoji: '✍️',
                    text: 'Nabi membuat perjanjian damai dengan Quraisy di Hudaibiyah. Walaupun nampak rugi, ia sebenarnya menguntungkan Islam.',
                },
                {
                    type: 'fact',
                    emoji: '📈',
                    text: 'Selepas perjanjian ini, ramai orang memeluk Islam kerana boleh berdakwah dengan aman.',
                },
                {
                    type: 'quiz',
                    question: 'Di mana perjanjian damai dibuat?',
                    options: ['Madinah', 'Mekah', 'Hudaibiyah'],
                    correct: 2,
                },
            ],
        },
        {
            id: 'd5-l4',
            title: 'Pembukaan Mekah',
            subtitle: 'Fathu Makkah',
            emoji: '🏰',
            contents: [
                {
                    type: 'story',
                    emoji: '🕋',
                    text: 'Nabi dan 10,000 tentera Islam memasuki Mekah tanpa pertumpahan darah. Kaum Quraisy menyerah.',
                },
                {
                    type: 'story',
                    emoji: '❤️',
                    text: 'Nabi memaafkan semua musuh. Baginda berkata: "Pergilah, kamu bebas." Ini menunjukkan belas kasihan baginda.',
                },
                {
                    type: 'quiz',
                    question: 'Bagaimana Nabi memasuki Mekah?',
                    options: ['Dengan perang besar', 'Secara aman', 'Secara rahsia'],
                    correct: 1,
                },
            ],
        },
        {
            id: 'd5-l5',
            title: "Haji Wida' & Wafat",
            subtitle: 'Perpisahan Terakhir',
            emoji: '🌅',
            contents: [
                {
                    type: 'story',
                    emoji: '🕋',
                    text: "Haji Wida' adalah haji terakhir Nabi. Baginda menyampaikan khutbah terakhir kepada lebih 100,000 umat Islam.",
                },
                {
                    type: 'story',
                    emoji: '💔',
                    text: 'Pada 12 Rabiulawal, Nabi Muhammad SAW wafat di pangkuan Aisyah. Baginda dikebumikan di Madinah.',
                },
                {
                    type: 'fact',
                    emoji: '⭐',
                    text: 'Walaupun Nabi telah wafat, ajaran baginda tetap hidup dalam Al-Quran dan Sunnah untuk kita ikuti.',
                },
                {
                    type: 'quiz',
                    question: 'Di mana Nabi Muhammad SAW dikebumikan?',
                    options: ['Mekah', 'Madinah', 'Jerussalem'],
                    correct: 1,
                },
            ],
        },
    ],
};

// Helper function to get grade data
export function getGradeData(gradeId: number): GradeData | null {
    switch (gradeId) {
        case 1: return darjah1;
        case 2: return darjah2;
        case 3: return darjah3;
        case 4: return darjah4;
        case 5: return darjah5;
        default: return null;
    }
}

// Get all grades
export const allGrades = [darjah1, darjah2, darjah3, darjah4, darjah5];

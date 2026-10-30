import { parfumProducts, products, skincareProducts } from './content.js'

export const catalogContent = {
  home: {
    products,
    filters: ['Semua', 'Skincare', 'Parfum'],
    filterLabel: 'produk',
    heroEyebrow: 'Nengnanum Beauty · Skincare & parfum',
    titleLead: 'Cantik Berseri,',
    titleItalic: 'Aman Seutuhnya.',
    description:
      'Kulit sehat dan aroma yang jadi ciri khasmu. Untuk pria dan wanita, semua berhak punya kulit terawat dan wangi yang membuatnya percaya diri—bukan hasil instan, tapi perawatan yang tumbuh bersama kamu.',
    primaryLabel: 'Lihat koleksi',
    secondaryLabel: 'Kenali Nengnanum',
    secondaryTo: '/about-us',
    stats: [
      { value: 'BPOM', label: 'Terdaftar & teruji' },
      { value: 'Halal', label: 'Bersertifikat' },
      { value: 'Semua', label: 'Pria & wanita' },
    ],
    heroImage: '/images/heritage-hero.jpg',
    heroAlt: 'Rangkaian perawatan Nengnanum Beauty dalam cahaya hangat',
    cardEyebrow: 'Nengnanum Beauty',
    cardTitle: 'Skincare & parfum',
    cardText: 'Sehat · cerah · berkesan',
    collectionEyebrow: 'Rangkaian Nengnanum',
    collectionTitle: 'Dua dunia, satu ritual',
    collectionDescription:
      'Rawat kulitmu, lalu lengkapi dengan aroma yang jadi ciri khasmu. Semua dalam satu rumah Nengnanum Beauty.',
    storyEyebrow: 'Kenapa Nengnanum',
    storyTitleLead: 'Kulit sehat itu',
    storyTitleItalic: 'kebutuhan semua orang.',
    storyDescription:
      'Nengnanum hadir untuk kamu, pasanganmu, dan keluarga. Aman, efektif, dan cocok untuk siapa saja yang ingin tampil maksimal setiap hari.',
    storyPoints: [
      {
        title: 'Skincare yang merawat',
        text: 'Melembapkan, mencerahkan, dan menjaga kulit tetap sehat setiap hari.',
      },
      {
        title: 'Parfum yang berkesan',
        text: 'Aroma hangat dan botanik yang menemani hari, dari pagi sampai malam.',
      },
    ],
    storyLinkLabel: 'Baca cerita kami',
    storyLinkTo: '/about-us',
    benefits: [
      {
        icon: 'badge',
        title: 'Terdaftar BPOM',
        text: 'Teruji ketat dan memenuhi standar keamanan, tanpa ragu dipakai setiap hari.',
      },
      {
        icon: 'leaf',
        title: 'Halal & bahan pilihan',
        text: 'Bersertifikat halal, diracik dari bahan berkualitas tinggi yang bekerja untuk kulitmu.',
      },
      {
        icon: 'users',
        title: 'Untuk pria & wanita',
        text: 'Formulasi seimbang dan lembut untuk semua jenis kulit, aman dipakai jangka panjang.',
      },
    ],
    invitationEyebrow: 'Temukan duniamu',
    invitationTitle: 'Mulai dari kulitmu, atau dari aromamu.',
    invitationDescription:
      'Masuk ke Shop untuk memilih rangkaian skincare atau parfum yang paling sesuai denganmu.',
    invitationLabel: 'Masuk ke Shop',
    invitationTo: '/shop',
  },
  skincare: {
    products: skincareProducts,
    filters: ['Semua', 'Serum', 'Pelembap', 'Mist'],
    filterLabel: 'skincare',
    heroEyebrow: 'Nengnanum Skincare · Untuk semua',
    titleLead: 'Kulit sehat,',
    titleItalic: 'berseri setiap hari.',
    description:
      'Rangkaian perawatan untuk melembapkan, mencerahkan, dan menjaga kulit tetap sehat. Lembut untuk pria dan wanita, aman dipakai jangka panjang.',
    primaryLabel: 'Lihat skincare',
    secondaryLabel: 'Tanya tim kami',
    secondaryTo: '/qna?category=Konsultasi#faq-search',
    stats: [
      { value: 'BPOM', label: 'Terdaftar & teruji' },
      { value: 'Halal', label: 'Bersertifikat' },
      { value: 'Semua', label: 'Pria & wanita' },
    ],
    heroImage: '/images/heritage-hero.jpg',
    heroAlt: 'Rangkaian skincare Nengnanum Beauty dalam cahaya hangat',
    cardEyebrow: 'Nengnanum Skincare',
    cardTitle: 'Kulit sehat & berseri',
    cardText: 'Lembut · cerah · terawat',
    collectionEyebrow: 'Rangkaian Skincare',
    collectionTitle: 'Manfaat nyata untuk kulitmu',
    collectionDescription:
      'Tiga langkah perawatan untuk melembapkan, mencerahkan, dan menjaga kulit tetap sehat setiap hari.',
    storyEyebrow: 'Kenapa Nengnanum Skincare',
    storyTitleLead: 'Kulit sehat itu',
    storyTitleItalic: 'kebutuhan semua orang.',
    storyDescription:
      'Nengnanum hadir untuk kamu, pasanganmu, dan keluarga. Aman, efektif, dan cocok untuk siapa saja yang ingin tampil maksimal setiap hari.',
    storyPoints: [
      {
        title: 'Melembapkan tahan lama',
        text: 'Membantu menjaga kelembapan alami dan membuat kulit terasa lebih lembut.',
      },
      {
        title: 'Mencerahkan & meratakan',
        text: 'Membantu memudarkan noda, bekas jerawat, dan warna kulit yang tidak merata.',
      },
    ],
    storyLinkLabel: 'Baca cerita kami',
    storyLinkTo: '/about-us',
    benefits: [
      {
        icon: 'badge',
        title: 'Terdaftar BPOM',
        text: 'Teruji ketat dan memenuhi standar keamanan, tanpa ragu dipakai setiap hari.',
      },
      {
        icon: 'leaf',
        title: 'Halal & bahan pilihan',
        text: 'Bersertifikat halal, diracik dari bahan berkualitas tinggi yang bekerja untuk kulitmu.',
      },
      {
        icon: 'users',
        title: 'Untuk pria & wanita',
        text: 'Formulasi seimbang dan lembut untuk semua jenis kulit, aman dipakai jangka panjang.',
      },
    ],
    invitationEyebrow: 'Cintai kulitmu',
    invitationTitle: 'Karena kulitmu pantas dirawat, bukan sekadar diobati.',
    invitationDescription:
      'Temukan rangkaian yang tepat untuk kebutuhan kulitmu, atau tanya tim kami untuk panduan pemakaian.',
    invitationLabel: 'Tanya tim Nengnanum',
    invitationTo: '/qna?category=Konsultasi#faq-search',
  },
  parfum: {
    products: parfumProducts,
    filters: ['Semua', 'Eau de parfum', 'Extrait', 'Set'],
    filterLabel: 'parfum',
    heroEyebrow: 'Nengnanum Parfum · Eau de parfum',
    titleLead: 'Wangi yang,',
    titleItalic: 'jadi ciri khasmu.',
    description:
      'Parfum dengan karakter hangat dan botanik—oud, mawar, amber—untuk menemani hari dan meninggalkan kesan yang tak mudah dilupakan.',
    primaryLabel: 'Lihat parfum',
    secondaryLabel: 'Temukan aromamu',
    secondaryTo: '/contact',
    stats: [
      { value: 'EDP', label: 'Konsentrasi' },
      { value: 'Unisex', label: 'Pria & wanita' },
      { value: 'Set', label: 'Coba dulu' },
    ],
    heroImage: '/images/rose-harvest.jpg',
    heroAlt: 'Bahan botanik untuk parfum Nengnanum Beauty',
    cardEyebrow: 'Nengnanum Parfum',
    cardTitle: 'Wangi yang berkesan',
    cardText: 'Oud · mawar · amber',
    collectionEyebrow: 'Rangkaian Parfum',
    collectionTitle: 'Aroma yang jadi ciri khasmu',
    collectionDescription:
      'Empat komposisi untuk suasana berbeda. Pilih eau de parfum, extrait, atau mulai dari discovery set.',
    storyEyebrow: 'Filosofi aroma',
    storyTitleLead: 'Bukan sekadar wangi,',
    storyTitleItalic: 'tapi kesan.',
    storyDescription:
      'Parfum Nengnanum dirancang untuk menyatu dengan kulit dan menemani momenmu—dari pagi yang tenang sampai malam yang berkesan.',
    storyPoints: [
      {
        title: 'Oud & mawar',
        text: 'Karakter hangat dan floral untuk kesan yang dalam dan elegan.',
      },
      {
        title: 'Amber & musk',
        text: 'Sentuhan lembut yang menempel di kulit dan terasa lebih personal.',
      },
    ],
    storyLinkLabel: 'Kenali Nengnanum',
    storyLinkTo: '/about-us',
    benefits: [
      {
        icon: 'sparkle',
        title: 'Bahan parfum pilihan',
        text: 'Komposisi oud, mawar, amber, dan musk yang diracik untuk karakter yang berkesan.',
      },
      {
        icon: 'clock',
        title: 'Konsentrasi EDP',
        text: 'Aroma lebih pekat dan menemani lebih lama dibanding body mist biasa.',
      },
      {
        icon: 'gift',
        title: 'Discovery set',
        text: 'Coba beberapa aroma sebelum memilih ukuran penuh yang paling kamu suka.',
      },
    ],
    invitationEyebrow: 'Temukan aromamu',
    invitationTitle: 'Wangi yang paling kamu.',
    invitationDescription:
      'Belum yakin harus mulai dari mana? Mulai dari discovery set atau tanya tim kami untuk rekomendasi aroma.',
    invitationLabel: 'Tanya tim kami',
    invitationTo: '/contact',
  },
}

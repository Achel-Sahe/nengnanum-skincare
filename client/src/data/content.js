export const skincareProducts = [
  {
    slug: 'nengnanum-glow-serum',
    collection: 'skincare',
    name: 'Nengnanum Glow Serum',
    category: 'Serum',
    description: 'Serum ringan untuk membantu mencerahkan kulit kusam dan meratakan warna kulit.',
    price: 189000,
    image: '/images/night-serum.jpg',
    alt: 'Serum Nengnanum Beauty dengan dropper emas',
    note: 'Pencerah harian',
  },
  {
    slug: 'nengnanum-radiance-cream',
    collection: 'skincare',
    name: 'Nengnanum Radiance Cream',
    category: 'Pelembap',
    description: 'Krim pelembap harian yang menjaga kelembapan alami dan membuat kulit terasa lebih halus.',
    price: 199000,
    image: '/images/radiance-cream.jpg',
    alt: 'Krim pelembap Nengnanum Beauty dalam jar kaca biru',
    note: 'Pelembap harian',
  },
  {
    slug: 'nengnanum-rose-mist',
    collection: 'skincare',
    name: 'Nengnanum Rose Mist',
    category: 'Mist',
    description: 'Mist ringan untuk menyegarkan dan melembapkan kulit kapan saja.',
    price: 129000,
    image: '/images/rose-mist.jpg',
    alt: 'Mist mawar Nengnanum Beauty dengan botol rose-gold',
    note: 'Segar setiap saat',
  },
]

export const parfumProducts = [
  {
    slug: 'nengnanum-oud-absolu',
    collection: 'parfum',
    name: 'Nengnanum Oud Absolu',
    category: 'Eau de parfum',
    description: 'Oud, mawar, dan amber hangat dalam komposisi yang dalam dan berkesan.',
    price: 489000,
    image: '/images/oud-absolu.jpg',
    alt: 'Botol parfum Oud Absolu Nengnanum Beauty berwarna biru tua',
    note: 'Signature',
  },
  {
    slug: 'nengnanum-nectar-de-nuit',
    collection: 'parfum',
    name: 'Nengnanum Nectar de Nuit',
    category: 'Extrait',
    description: 'Amber, rempah, dan kehangatan botanik untuk malam yang tak mudah dilupakan.',
    price: 429000,
    image: '/images/night-elixir.jpg',
    alt: 'Botol parfum Nectar de Nuit Nengnanum Beauty dengan warna amber',
    note: 'Limited edition',
  },
  {
    slug: 'nengnanum-rose-de-minuit',
    collection: 'parfum',
    name: 'Nengnanum Rose de Minuit',
    category: 'Eau de parfum',
    description: 'Mawar lembut, musk, dan sentuhan kayu yang bersih dan menenangkan.',
    price: 379000,
    image: '/images/hero-fragrance.jpg',
    alt: 'Botol parfum Rose de Minuit Nengnanum Beauty',
    note: 'Floral',
  },
  {
    slug: 'nengnanum-discovery-set',
    collection: 'parfum',
    name: 'Nengnanum Discovery Set',
    category: 'Set',
    description: 'Tiga miniatur parfum untuk mencoba setiap karakter sebelum memilih ukuran penuh.',
    price: 299000,
    image: '/images/discovery-set.jpg',
    alt: 'Set miniatur parfum Nengnanum Beauty dalam kotak hadiah',
    note: 'Set perkenalan',
  },
]

export const products = [...skincareProducts, ...parfumProducts]

export const faqs = [
  {
    id: 'bpom-halal',
    category: 'BPOM & halal',
    question: 'Apakah produk Nengnanum Beauty sudah terdaftar BPOM dan halal?',
    answer:
      'Ya. Produk Nengnanum Beauty telah terdaftar di BPOM dan memiliki sertifikat halal. Setiap produk melewati uji keamanan sebelum dipasarkan, sehingga lebih tenang dipakai untuk perawatan sehari-hari.',
  },
  {
    id: 'semua-kulit',
    category: 'Jenis kulit',
    question: 'Apakah aman untuk pria dan semua jenis kulit?',
    answer:
      'Formulasi Nengnanum Beauty dirancang seimbang untuk pria maupun wanita. Jika kulitmu sangat sensitif atau sedang menjalani perawatan tertentu, lakukan uji di area kecil terlebih dahulu atau tanyakan pada tim kami sebelum memakai produk baru.',
  },
  {
    id: 'bahan',
    category: 'Bahan & formulasi',
    question: 'Bahan apa yang digunakan dalam produk Nengnanum Beauty?',
    answer:
      'Setiap produk diracik dari bahan pilihan berkualitas tinggi dengan formula yang lembut. Susunan bahan lengkap tercantum pada kemasan dan halaman produk. Hubungi customer care jika kamu ingin memastikan kecocokan bahan untuk kulitmu.',
  },
  {
    id: 'cara-pakai',
    category: 'Cara pakai',
    question: 'Bagaimana urutan pemakaian yang disarankan?',
    answer:
      'Mulai dari kulit yang bersih, gunakan serum, lanjutkan dengan pelembap, lalu mist kapan pun kulit terasa kering. Gunakan secara rutin pagi dan malam. Untuk hasil terbaik, sesuaikan jumlah produk dengan kebutuhan kulitmu.',
  },
  {
    id: 'konsultasi',
    category: 'Konsultasi',
    question: 'Bisakah saya berkonsultasi sebelum membeli?',
    answer:
      'Bisa. Tim Nengnanum Beauty siap membantu memilih rangkaian yang sesuai dengan kondisi kulitmu. Hubungi kami lewat WhatsApp atau form kontak, dan ceritakan jenis kulit serta masalah yang ingin kamu rawat.',
  },
  {
    id: 'pengiriman',
    category: 'Pengiriman',
    question: 'Bagaimana cara memesan dan mengirim produk?',
    answer:
      'Pilih produk di halaman koleksi, masukkan ke tas, lalu lanjutkan ke checkout. Metode pengiriman, estimasi waktu, dan biaya akan ditampilkan saat checkout. Untuk pengiriman hadiah atau pertanyaan khusus, hubungi customer care kami.',
  },
]

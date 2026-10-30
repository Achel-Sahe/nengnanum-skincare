import { useState } from 'react'
import { ArrowRight, ChevronDown, Clock3, Droplets, Flower2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PrimaryButton } from '../components/ProductCard.jsx'
import { Eyebrow, SectionHeading, TextLink } from '../components/layout/SiteChrome.jsx'
import { faqs } from '../data/content.js'

const pillars = [
  {
    icon: Flower2,
    roman: 'I',
    title: 'Terdaftar BPOM',
    text: 'Setiap produk teruji ketat dan memenuhi standar keamanan BPOM sebelum sampai ke tanganmu.',
    note: 'Aman & teruji',
  },
  {
    icon: Droplets,
    roman: 'II',
    title: 'Bersertifikat halal',
    text: 'Bersih, murni, dan tenang dipakai semua kalangan—untuk pria maupun wanita.',
    note: 'Halal MUI',
  },
  {
    icon: Clock3,
    roman: 'III',
    title: 'Bahan pilihan',
    text: 'Diracik dari bahan berkualitas tinggi yang benar-benar bekerja untuk kulitmu, bukan sekadar janji.',
    note: 'Bahan terbaik',
  },
]

const stages = [
  {
    no: '01',
    title: 'Bersihkan & segarkan',
    text: 'Mulai dari kulit yang bersih agar produk berikutnya meresap dengan baik.',
    detail: 'Pagi & malam',
  },
  {
    no: '02',
    title: 'Nutrisi & lembapkan',
    text: 'Gunakan serum, lalu kunci kelembapannya dengan pelembap yang sesuai.',
    detail: 'Sesuai kebutuhan kulit',
  },
  {
    no: '03',
    title: 'Lindungi & rawat',
    text: 'Jaga kelembapan alami dan konsisten merawat kulit setiap hari.',
    detail: 'Rutin setiap hari',
  },
]

const figures = [
  ['BPOM', 'Terdaftar', 'Standar keamanan teruji'],
  ['Halal', 'Bersertifikat', 'Tenang dipakai'],
  ['100%', 'Untuk semua', 'Pria & wanita'],
  ['8+', 'Manfaat kulit', 'Lembap, cerah, rata'],
]

function HeritageFAQ() {
  const heritageFAQs = faqs.filter(({ id }) =>
    ['bpom-halal', 'bahan', 'konsultasi'].includes(id),
  )
  const [openId, setOpenId] = useState('bpom-halal')

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto grid max-w-atelier gap-10 px-6 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12">
        <div>
          <Eyebrow>Tanya jawab</Eyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Beberapa jawaban yang sering dicari.
          </h2>
          <p className="mt-4 max-w-md font-sans text-sm leading-6 text-slate">
            Catatan seputar BPOM, halal, bahan, dan cara memilih perawatan untuk kulitmu.
          </p>
          <Link
            to="/qna"
            className="mt-7 inline-flex items-center gap-2 border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.17em] text-ink hover:text-champagne"
          >
            Lihat semua pertanyaan <ArrowRight size={14} />
          </Link>
        </div>
        <div className="divide-y divide-hairline border-y border-hairline">
          {heritageFAQs.map((item) => {
            const isOpen = openId === item.id
            const answerId = `heritage-answer-${item.id}`

            return (
              <article key={item.id} className="py-5">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
                >
                  <span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.17em] text-champagne">
                      {item.category}
                    </span>
                    <span className="mt-2 block font-display text-2xl leading-tight text-ink">
                      {item.question}
                    </span>
                  </span>
                  <ChevronDown
                    size={17}
                    className={`mt-5 shrink-0 text-champagne transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p id={answerId} className="max-w-3xl pt-4 font-sans text-sm leading-6 text-slate">
                    {item.answer}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <>
      <section className="overflow-hidden bg-ink text-ivory">
        <div className="mx-auto grid subpage-hero max-w-atelier items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-20">
          <div className="max-w-xl">
            <Eyebrow>Tentang Nengnanum Beauty</Eyebrow>
            <h1 className="mt-6 font-display text-6xl leading-[.94] tracking-[-0.04em] sm:text-7xl">
              Cantik Berseri,
              <br />
              <em className="font-normal text-goldlight">Aman Seutuhnya.</em>
            </h1>
            <p className="mt-7 max-w-lg font-sans text-sm leading-6 text-ivory/65 sm:text-base sm:leading-7">
              Nengnanum Beauty lahir dari keyakinan sederhana: kulit sehat adalah hak semua orang.
              Pria maupun wanita, semua berhak punya kulit yang lembut, cerah, dan terawat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="#foundation">Kenali nilai kami</PrimaryButton>
              <TextLink to="/qna?category=Konsultasi#faq-search" light>
                Tanya tim kami
              </TextLink>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-white/15 pt-5">
              <div>
                <span className="font-display text-2xl text-goldlight">BPOM</span>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/45">
                  Terdaftar
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-goldlight">Halal</span>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/45">
                  Bersertifikat
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-goldlight">Semua</span>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/45">
                  Pria &amp; wanita
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[450px]">
            <div className="absolute -inset-4 rounded-t-[14rem] border border-champagne/35" />
            <img
              src="/images/heritage-hero.jpg"
              alt="Rangkaian perawatan Nengnanum Beauty dengan latar hangat"
              className="relative aspect-[.88/1] w-full rounded-t-[13rem] object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-midnight/90 px-5 py-4">
              <p className="eyebrow text-champagne">Nengnanum Beauty</p>
              <p className="mt-1 font-display text-xl text-ivory">Sehat &amp; berseri</p>
            </div>
          </div>
        </div>
      </section>

      <section id="foundation" className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Nilai yang kami pegang"
            title="Perawatan yang tumbuh bersama kamu"
            description="Bukan hasil kilat yang menipu—tapi keindahan yang terbentuk hari demi hari, dari bahan yang aman dan formula yang lembut."
            align="center"
          />
          <div className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-3">
            {pillars.map(({ icon: Icon, roman, title, text, note }) => (
              <article
                key={title}
                className="border-b border-hairline pb-7 md:border-b-0 md:pb-0 md:pr-8 md:last:border-0"
              >
                <div className="flex items-center justify-between">
                  <Icon size={19} strokeWidth={1.25} className="text-champagne" />
                  <span className="font-display text-xl text-champagne/70">{roman}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-6 text-slate">{text}</p>
                <p className="mt-6 font-sans text-[9px] uppercase tracking-[0.18em] text-champagne">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ivory sm:py-24">
        <div className="mx-auto grid max-w-atelier items-center gap-12 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-champagne/35" />
            <img
              src="/images/rose-harvest.jpg"
              alt="Bahan botanik yang diolah dengan hati-hati untuk Nengnanum Beauty"
              loading="lazy"
              className="relative aspect-[1.2/1] w-full object-cover"
            />
          </div>
          <div className="md:pl-4">
            <SectionHeading
              eyebrow="Rangkaian manfaat"
              title="Seribu manfaat dalam satu rangkaian"
              description="Melembapkan tahan lama, mencerahkan kulit kusam, membantu memudarkan noda dan bekas jerawat, meratakan warna kulit, menjaga elastisitas, serta menutrisi dari dalam."
              light
            />
            <TextLink to="/qna" light className="mt-8">
              Lihat panduan perawatan
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-atelier items-center gap-12 px-6 sm:px-8 md:grid-cols-[.82fr_1.18fr] lg:px-12">
          <div className="mx-auto w-full max-w-[420px] overflow-hidden bg-paper">
            <img
              src="/images/founder-atelier.jpg"
              alt="Tim Nengnanum Beauty meracik perawatan dengan teliti"
              loading="lazy"
              className="aspect-[.86/1] w-full object-cover object-right"
            />
          </div>
          <div>
            <Eyebrow>Yang kami percaya</Eyebrow>
            <blockquote className="mt-6 font-display text-3xl italic leading-[1.15] text-ink sm:text-4xl">
              “Kulit sehat bukan kemewahan. Setiap orang berhak merasa nyaman dan percaya diri
              dengan kulitnya sendiri.”
            </blockquote>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-6 text-slate">
              Nengnanum Beauty hadir menemani perjalananmu mencintai kulitmu. Kami memilih bahan
              dengan hati-hati, merancang formula yang lembut, dan memastikan setiap produk aman
              dipakai jangka panjang.
            </p>
            <div className="mt-7 border-t border-hairline pt-5">
              <p className="font-display text-2xl italic text-champagne">Nengnanum Beauty</p>
              <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.17em] text-slate">
                Skincare untuk semua · Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-ink py-20 text-ivory sm:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Ritual harian"
            title="Tiga langkah merawat kulitmu"
            description="Sederhana, konsisten, dan lembut—untuk kulit yang sehat setiap hari."
            light
          />
          <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-3">
            {stages.map(({ no, title, text, detail }) => (
              <article key={no} className="border-b border-white/15 pb-7 md:border-0 md:pb-0">
                <span className="font-display text-3xl text-champagne/65">{no}</span>
                <h3 className="mt-5 font-display text-2xl text-ivory">{title}</h3>
                <p className="mt-3 min-h-12 font-sans text-sm leading-6 text-ivory/60">{text}</p>
                <p className="mt-7 border-t border-white/15 pt-4 font-sans text-[9px] uppercase tracking-[0.18em] text-goldlight">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto grid max-w-atelier grid-cols-2 gap-y-8 px-6 sm:px-8 md:grid-cols-4 lg:px-12">
          {figures.map(([value, label, note]) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl text-champagne sm:text-5xl">{value}</p>
              <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.16em] text-ink">
                {label}
              </p>
              <p className="mt-1 font-sans text-xs text-slate">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-midnight px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-atelier gap-10 border border-champagne/25 bg-[radial-gradient(ellipse_at_0%_0%,rgba(35,42,112,.7),transparent_55%)] p-7 sm:p-12 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <Eyebrow>Butuh panduan?</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
              Rawat kulitmu, bukan sekadar mengobatinya.
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-ivory/65">
              Ceritakan jenis kulit dan masalah yang ingin kamu rawat. Tim Nengnanum Beauty siap
              membantu memilih rangkaian yang paling sesuai.
            </p>
            <PrimaryButton to="/qna?category=Konsultasi#faq-search" className="mt-7">
              Tanya tim kami
            </PrimaryButton>
          </div>
          <div className="border-t border-white/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="eyebrow text-champagne">Konsultasi</p>
            <p className="mt-2 font-display text-xl text-ivory">Online &amp; gratis</p>
            <p className="mt-6 eyebrow text-champagne">Customer care</p>
            <p className="mt-2 font-display text-xl text-ivory">WhatsApp &amp; email</p>
          </div>
        </div>
      </section>

      <HeritageFAQ />
    </>
  )
}

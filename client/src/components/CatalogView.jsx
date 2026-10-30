import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Gift,
  Leaf,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProductCard, PrimaryButton } from './ProductCard.jsx'
import { Eyebrow, SectionHeading, TextLink } from './layout/SiteChrome.jsx'
import { catalogContent } from '../data/catalogContent.js'
import { useCartStore } from '../features/cart/store.js'

const benefitIcons = {
  badge: BadgeCheck,
  leaf: Leaf,
  users: Users,
  sparkle: Sparkles,
  clock: Clock3,
  gift: Gift,
}

export function CatalogView({ showcase = false, variant = 'skincare' }) {
  const content = catalogContent[variant]
  const [activeFilter, setActiveFilter] = useState('Semua')
  const addItem = useCartStore((state) => state.addItem)

  const visibleProducts = content.products.filter((product) => {
    if (activeFilter === 'Semua') return true
    return (
      product.category === activeFilter || product.collection === activeFilter.toLowerCase()
    )
  })

  function handleAdd(product) {
    addItem(
      {
        variantId: product.slug,
        productId: product.slug,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.image,
      },
      1,
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(35,42,112,.7),transparent_55%)]" />
        <div
          className={`relative mx-auto grid ${
            showcase ? 'min-h-[calc(100svh-74px)]' : 'subpage-hero'
          } max-w-atelier items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-20`}
        >
          <div className="max-w-xl">
            <Eyebrow>{content.heroEyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-[3.2rem] leading-[.94] tracking-[-0.035em] sm:text-7xl lg:text-[5.4rem]">
              {content.titleLead}
              <br />
              <em className="font-normal text-goldlight">{content.titleItalic}</em>
            </h1>
            <p className="mt-7 max-w-lg font-sans text-sm leading-6 text-ivory/65 sm:text-base sm:leading-7">
              {content.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <PrimaryButton href="#collection">{content.primaryLabel}</PrimaryButton>
              <TextLink to={content.secondaryTo} light>
                {content.secondaryLabel}
              </TextLink>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-white/15 pt-5">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl text-goldlight">{stat.value}</span>
                  <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.14em] text-ivory/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-4 rounded-t-[13rem] border border-champagne/30" />
            <div className="relative overflow-hidden rounded-t-[12rem] bg-indigo">
              <img
                src={content.heroImage}
                alt={content.heroAlt}
                className="aspect-[.9/1] w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 left-5 max-w-[250px] border border-white/15 bg-midnight/95 px-5 py-4 shadow-gold sm:left-[-2rem]">
              <p className="eyebrow text-champagne">{content.cardEyebrow}</p>
              <p className="mt-2 font-display text-xl text-ivory">{content.cardTitle}</p>
              <p className="mt-1 font-sans text-xs text-ivory/55">{content.cardText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="scroll-mt-20 bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={content.collectionEyebrow}
              title={content.collectionTitle}
              description={content.collectionDescription}
            />
            <div
              className="flex flex-wrap gap-x-5 gap-y-2 pb-1"
              role="group"
              aria-label={`Filter ${content.filterLabel} berdasarkan kategori`}
            >
              {content.filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`border-b pb-2 font-sans text-[10px] uppercase tracking-[0.16em] transition-colors ${activeFilter === filter ? 'border-champagne text-ink' : 'border-transparent text-slate hover:text-ink'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onAdd={showcase ? undefined : handleAdd}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ivory sm:py-24">
        <div className="mx-auto grid max-w-atelier gap-10 px-6 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-center lg:px-12">
          <div className="relative mx-auto w-full max-w-[410px]">
            <div className="absolute -left-4 -top-4 h-full w-full border border-champagne/35" />
            <img
              src="/images/rose-harvest.jpg"
              alt="Bahan botanik yang diolah dengan hati-hati untuk Nengnanum Beauty"
              loading="lazy"
              className="relative aspect-[1.05/1] w-full object-cover"
            />
          </div>
          <div className="md:pl-8 lg:pl-16">
            <SectionHeading
              eyebrow={content.storyEyebrow}
              title={
                <>
                  {content.storyTitleLead}
                  <br />
                  <em className="font-normal text-goldlight">{content.storyTitleItalic}</em>
                </>
              }
              description={content.storyDescription}
              light
            />
            <div className="mt-8 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2">
              {content.storyPoints.map((point) => (
                <div key={point.title}>
                  <p className="font-display text-xl">{point.title}</p>
                  <p className="mt-2 font-sans text-xs leading-5 text-ivory/55">{point.text}</p>
                </div>
              ))}
            </div>
            <TextLink to={content.storyLinkTo} light className="mt-8">
              {content.storyLinkLabel}
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto grid max-w-atelier gap-8 px-6 sm:px-8 md:grid-cols-3 lg:px-12">
          {content.benefits.map(({ icon, title, text }) => {
            const Icon = benefitIcons[icon]

            return (
              <div key={title} className="flex gap-4 border-t border-hairline pt-5">
                <Icon size={19} strokeWidth={1.3} className="mt-1 shrink-0 text-champagne" />
                <div>
                  <h3 className="font-display text-xl text-ink">{title}</h3>
                  <p className="mt-2 font-sans text-sm leading-5 text-slate">{text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-atelier border-y border-hairline py-12 text-center sm:py-16">
          <Eyebrow>{content.invitationEyebrow}</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            {content.invitationTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-6 text-slate">
            {content.invitationDescription}
          </p>
          <Link
            to={content.invitationTo}
            className="mt-7 inline-flex items-center gap-2 border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-champagne"
          >
            {content.invitationLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}

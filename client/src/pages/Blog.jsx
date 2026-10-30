import { ArrowUpRight } from 'lucide-react'

import { Eyebrow, SectionHeading } from '../components/layout/SiteChrome.jsx'
import { blogPosts } from '../data/blogPosts.js'

function ArticleLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

function ArticleImage({ post, className, loading = 'lazy' }) {
  return <img src={post.image} alt={post.imageAlt} loading={loading} className={className} />
}

function FeaturedArticle({ post }) {
  return (
    <article className="grid overflow-hidden border border-hairline bg-paper lg:grid-cols-[1.08fr_.92fr]">
      <ArticleLink href={post.href} className="group relative block overflow-hidden bg-ivory">
        <ArticleImage
          post={post}
          loading="eager"
          className="aspect-[1.3/1] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </ArticleLink>
      <div className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
        <div className="flex items-center gap-3">
          <Eyebrow>Cerita utama</Eyebrow>
          <span aria-hidden="true" className="h-px w-8 bg-champagne/60" />
          <time dateTime={post.dateTime} className="font-sans text-[10px] uppercase tracking-[0.12em] text-slate">{post.published}</time>
        </div>
        <h2 className="mt-5 font-display text-3xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl">{post.title}</h2>
        <p className="mt-5 font-sans text-sm leading-6 text-slate">{post.excerpt}</p>
        <ArticleLink href={post.href} className="group mt-8 inline-flex w-fit items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:text-champagne">
          Baca artikel <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </ArticleLink>
      </div>
    </article>
  )
}

function ArticleCard({ post, index }) {
  return (
    <article className="group min-w-0">
      <ArticleLink href={post.href} className="block overflow-hidden border border-champagne/25 bg-paper">
        <ArticleImage
          post={post}
          className="aspect-[1.18/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </ArticleLink>
      <div className="pt-5">
        <div className="flex items-center justify-between gap-3">
          <Eyebrow>Jurnal · {String(index + 2).padStart(2, '0')}</Eyebrow>
          <time dateTime={post.dateTime} className="shrink-0 font-sans text-[9px] uppercase tracking-[0.1em] text-slate">{post.published}</time>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{post.title}</h3>
        <p className="mt-3 font-sans text-sm leading-6 text-slate">{post.excerpt}</p>
        <ArticleLink href={post.href} className="group/link mt-5 inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.17em] text-ink transition-colors hover:text-champagne">
          Baca artikel <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </ArticleLink>
      </div>
    </article>
  )
}

export function Blog() {
  const [featured, ...latest] = blogPosts

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_46%,rgba(35,42,112,.55),transparent_49%)]" />
        <div className="relative mx-auto flex subpage-hero max-w-atelier flex-col justify-center px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <Eyebrow>Jurnal Nengnanum</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-7xl">Cerita tentang kulit, perawatan &amp; kepercayaan diri</h1>
          <p className="mt-6 max-w-2xl font-sans text-sm leading-6 text-ivory/65 sm:text-base">Artikel terbaru dari Nengnanum Beauty.</p>
          <div className="mt-8 flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-goldlight"><span className="h-px w-10 bg-champagne" /> {String(blogPosts.length).padStart(2, '0')} artikel</div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Dari jurnal" title="Cerita terbaru" className="mb-10 sm:mb-12" />
          {featured && <FeaturedArticle post={featured} />}
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-16">
            {latest.map((post, index) => <ArticleCard key={post.href} post={post} index={index} />)}
          </div>
        </div>
      </section>
    </>
  )
}

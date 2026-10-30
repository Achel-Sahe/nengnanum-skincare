import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Eyebrow, SectionHeading } from '../../components/layout/SiteChrome.jsx'

const contact = {
  address: 'Komp. Pasar Kajase, Wersar Taminabuan Banyuwangi',
  phoneLabel: '+62 812-4831-8777',
  phone: '+6281248318777',
  email: 'Sumbercell7798@gmail.com',
  whatsapp: 'https://wa.me/6281248318777',
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Nama minimal 2 karakter.')
    .max(80, 'Nama maksimal 80 karakter.'),
  email: z.email('Masukkan alamat email yang valid.'),
  phone: z
    .string()
    .trim()
    .max(20, 'Nomor telepon maksimal 20 karakter.')
    .refine((value) => value === '' || /^\+?[\d\s().-]{8,20}$/.test(value), {
      message: 'Masukkan nomor telepon yang valid, misal +62 812-3456-7890.',
    }),
  message: z
    .string()
    .trim()
    .min(10, 'Pesan minimal 10 karakter.')
    .max(1000, 'Pesan maksimal 1000 karakter.'),
})

function ContactDetail({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4 border-t border-hairline py-5 first:border-t-0">
      <Icon size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
      <div className="min-w-0">
        <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-slate">{label}</p>
        <div className="mt-2 font-display text-xl leading-snug text-ink">{children}</div>
      </div>
    </div>
  )
}

export function Contact() {
  const [formNotice, setFormNotice] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  })

  function onSubmit(values) {
    const message = [
      'Halo Nengnanum Beauty, saya ingin menghubungi tim.',
      `Nama: ${values.name}`,
      `Email: ${values.email}`,
      `Telepon: ${values.phone || '-'}`,
      `Pesan: ${values.message}`,
    ].join('\n')
    const url = `${contact.whatsapp}?text=${encodeURIComponent(message)}`
    const popup = window.open(url, '_blank')
    if (popup) {
      popup.opener = null
      setFormNotice('Draf WhatsApp telah dibuka. Pesan belum terkirim sampai Anda menekan tombol kirim di WhatsApp.')
    } else {
      setFormNotice('Pop-up diblokir browser. Gunakan tombol Hubungi via WhatsApp untuk melanjutkan.')
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(35,42,112,.62),transparent_52%)]" />
        <div className="relative mx-auto grid subpage-hero max-w-atelier items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <Eyebrow>Contact · Customer care</Eyebrow>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.03em] sm:text-7xl">Pesan untuk Kami</h1>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-6 text-ivory/65 sm:text-base sm:leading-7">
              Untuk informasi, kritik, saran dan pelayanan customer service, Anda bisa langsung menghubungi kontak di bawah ini. Atau Anda bisa menulis pesan di form.
            </p>
            <a href="#contact-details" className="mt-8 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.18em] text-goldlight transition-colors hover:text-champagne">
              Info kontak <ArrowRight size={14} />
            </a>
          </div>
          <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[290px] items-center justify-center lg:flex">
            <span className="absolute inset-3 rounded-full border border-champagne/15" />
            <span className="absolute inset-10 rounded-full border border-champagne/25" />
            <span className="relative grid h-32 w-32 place-items-center rounded-full border border-champagne/45 bg-midnight/60 shadow-gold">
              <span className="absolute inset-2 rounded-full border border-champagne/20" />
              <MessageCircle size={42} strokeWidth={1} className="text-goldlight" />
            </span>
          </div>
        </div>
      </section>

      <section id="contact-details" className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Nengnanum Beauty"
                title="Info Kontak"
                description="Hubungi kami secara langsung atau tinggalkan pesan melalui form."
              />
              <div className="mt-8 border-y border-hairline py-1">
                <ContactDetail icon={MapPin} label="Alamat">{contact.address}</ContactDetail>
                <ContactDetail icon={Phone} label="Telepon">
                  <a className="transition-colors hover:text-champagne" href={`tel:${contact.phone}`}>{contact.phoneLabel}</a>
                </ContactDetail>
                <ContactDetail icon={Mail} label="Email">
                  <a className="break-all transition-colors hover:text-champagne" href={`mailto:${contact.email}`}>{contact.email}</a>
                </ContactDetail>
              </div>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 items-center gap-2 bg-champagne px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-goldlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                Hubungi via WhatsApp <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="border border-hairline bg-paper p-6 sm:p-9 lg:p-10">
              <Eyebrow>Send us a message</Eyebrow>
              <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">Tuliskan pesan Anda.</h2>
              <p className="mt-3 font-sans text-sm leading-6 text-slate">Pesan akan disiapkan di WhatsApp. Anda dapat meninjau dan mengirimnya dari aplikasi WhatsApp.</p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Nama <span aria-hidden="true" className="text-[#9b3d2e]">*</span></label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className="contact-field"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-2 font-sans text-[11px] leading-5 text-[#9b3d2e]">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Email <span aria-hidden="true" className="text-[#9b3d2e]">*</span></label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className="contact-field"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-2 font-sans text-[11px] leading-5 text-[#9b3d2e]">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Telepon</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    className="contact-field"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p id="contact-phone-error" className="mt-2 font-sans text-[11px] leading-5 text-[#9b3d2e]">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Pesan <span aria-hidden="true" className="text-[#9b3d2e]">*</span></label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className="contact-field resize-y"
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-2 font-sans text-[11px] leading-5 text-[#9b3d2e]">{errors.message.message}</p>
                  )}
                </div>
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
                  Siapkan pesan WhatsApp <ArrowUpRight size={15} />
                </button>
                {formNotice && <p role="status" className="font-sans text-xs leading-5 text-ink">{formNotice}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

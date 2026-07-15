'use client'

import { useState } from 'react'
import {
  Globe2,
  Newspaper,
  Briefcase,
  CalendarDays,
  MessagesSquare,
  UserCircle,
  MapPin,
  Users,
  Wifi,
  Heart,
  Bookmark,
  Share2,
  Search,
  Filter,
  BadgeCheck,
  Bell,
  CalendarCheck,
  Clock,
  Lock,
  CheckCheck,
  Star,
  Activity,
  Award,
} from 'lucide-react'
import { PhoneMockup } from '@/components/phone-mockup'
import { ScrollReveal } from '@/components/scroll-reveal'
import { cn } from '@/lib/utils'

type FeaturePoint = {
  icon: React.ElementType
  label: string
  detail: string
}

type Screen = {
  icon: React.ElementType
  label: string
  title: string
  description: string
  points: FeaturePoint[]
  image: string
  imageAlt: string
}

const screens: Screen[] = [
  {
    icon: Globe2,
    label: 'The Atlas',
    title: 'A global map of your tribe',
    description:
      'See exactly where your community lives — alumni grouped by city and country, with member lists and live online status you can expand and explore.',
    points: [
      {
        icon: MapPin,
        label: 'City & country breakdown',
        detail: 'Every alumnus pinned to their current location with a clean grouped list.',
      },
      {
        icon: Wifi,
        label: 'Live online status',
        detail: 'A green dot shows who is active right now — perfect for spontaneous catch-ups.',
      },
      {
        icon: Users,
        label: 'Expandable member cards',
        detail: 'Tap any city to reveal names, batches and profile photos at a glance.',
      },
    ],
    image: '/images/app-network.png',
    imageAlt: 'Alumnest Network screen showing the Atlas of alumni by city',
  },
  {
    icon: Newspaper,
    label: 'Posts',
    title: 'What your alumni are saying',
    description:
      'A community feed of photos, updates and legacy memories from verified graduates — react, comment, share and bookmark the moments that matter.',
    points: [
      {
        icon: Heart,
        label: 'Reactions & comments',
        detail: 'Like and reply to posts from batchmates, seniors and juniors in real time.',
      },
      {
        icon: Bookmark,
        label: 'Save for later',
        detail: 'Bookmark any post to revisit opportunities, announcements or memories.',
      },
      {
        icon: Share2,
        label: 'Share with your circle',
        detail: 'Forward notable posts directly to classmates or outside the network.',
      },
    ],
    image: '/images/app-posts.png',
    imageAlt: 'Alumnest Posts feed with alumni updates and photos',
  },
  {
    icon: Briefcase,
    label: 'Opportunities',
    title: 'Jobs & referrals from insiders',
    description:
      'Search full-time, part-time and internship openings shared and referred by fellow alumni — a trusted job board built around your network.',
    points: [
      {
        icon: Search,
        label: 'Powerful job search',
        detail: 'Filter by role type — full-time, part-time or internship — in seconds.',
      },
      {
        icon: Filter,
        label: 'Alumni-posted listings',
        detail: 'Every opportunity is posted by a verified member of your community.',
      },
      {
        icon: BadgeCheck,
        label: 'Trusted referrals',
        detail: 'Get warm introductions and referrals from alumni who know the company.',
      },
    ],
    image: '/images/app-opportunities.png',
    imageAlt: 'Alumnest Opportunities screen with a searchable job board',
  },
  {
    icon: CalendarDays,
    label: 'Events',
    title: 'Reunions, talks & meetups',
    description:
      'Track ongoing and past events with dates, venues and status at a glance, and never miss a reunion, guest talk or chapter meetup again.',
    points: [
      {
        icon: Bell,
        label: 'Event reminders',
        detail: 'Get notified before an event goes live so you never miss the moment.',
      },
      {
        icon: CalendarCheck,
        label: 'Ongoing & past events',
        detail: 'Clear status badges separate what is live now from what has happened.',
      },
      {
        icon: Clock,
        label: 'Date, time & venue',
        detail: 'Every listing shows full details — when, where and how to register.',
      },
    ],
    image: '/images/app-events.png',
    imageAlt: 'Alumnest Events screen with ongoing and past events',
  },
  {
    icon: MessagesSquare,
    label: 'Messages',
    title: 'Private, secure conversations',
    description:
      'Connect one-to-one with your peers through direct chats with read receipts and end-to-end encrypted messages — filtered by unread, circle and starred.',
    points: [
      {
        icon: Lock,
        label: 'End-to-end encrypted',
        detail: 'Every message is secured so only you and your recipient can read it.',
      },
      {
        icon: CheckCheck,
        label: 'Read receipts',
        detail: 'Know the moment your message has been seen with double-tick indicators.',
      },
      {
        icon: Star,
        label: 'Starred & circle filters',
        detail: 'Organise chats by unread, inner circle or starred for quick navigation.',
      },
    ],
    image: '/images/app-chat.png',
    imageAlt: 'Alumnest direct message conversation with read receipts',
  },
  {
    icon: UserCircle,
    label: 'Profile',
    title: 'A verified identity you own',
    description:
      'Your profile ties your institution, batch and connections together — with quick access to your activity, posts, opportunities and events.',
    points: [
      {
        icon: Award,
        label: 'Institution & batch verified',
        detail: 'Every profile is tied to a real college and graduation year — no fakes.',
      },
      {
        icon: Activity,
        label: 'Activity dashboard',
        detail: 'A single hub for your posts, opportunities and events in one tap.',
      },
      {
        icon: Users,
        label: 'Connections counter',
        detail: 'Watch your verified network grow as you connect with batchmates and alumni.',
      },
    ],
    image: '/images/app-profile.png',
    imageAlt: 'Alumnest verified profile with institution and connections',
  },
]

export function AppShowcase() {
  const [active, setActive] = useState(0)
  const current = screens[active]

  return (
    <section id="app" className="bg-transparent py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Inside the app
          </p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Everything your alumni community needs, in one place
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            From a global Atlas of your tribe to a verified feed, job referrals, events
            and encrypted chats — take a tour of the Alumnest experience.
          </p>
        </ScrollReveal>

        {/* Feature tabs */}
        <div className="mb-10 flex justify-start gap-2 overflow-x-auto pb-2 md:mb-14 md:justify-center md:flex-wrap md:overflow-visible">
          {screens.map((screen, index) => (
            <button
              key={screen.label}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={cn(
                'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200',
                active === index
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-white/15 bg-black/40 text-muted-foreground backdrop-blur-sm hover:border-primary/40 hover:text-foreground',
              )}
            >
              <screen.icon className="size-4" aria-hidden="true" />
              {screen.label}
            </button>
          ))}
        </div>

        {/* Split feature card */}
        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm md:grid-cols-2 md:gap-16 md:p-14">

          {/* Left: text + feature points */}
          <div className="order-2 md:order-1 flex flex-col justify-between gap-8">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                <current.icon className="size-3.5" aria-hidden="true" />
                {current.label}
              </span>
              <h3
                key={current.title}
                className="mt-5 animate-in fade-in slide-in-from-bottom-2 text-balance text-2xl font-extrabold tracking-tight text-foreground duration-500 md:text-3xl"
              >
                {current.title}
              </h3>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {current.description}
              </p>
            </div>

            {/* Feature bullet points */}
            <ul
              key={current.label}
              className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              {current.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <point.icon className="size-4 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{point.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: phone mockup */}
          <div className="order-1 flex justify-center md:order-2">
            <PhoneMockup
              key={current.image}
              src={current.image}
              alt={current.imageAlt}
              className="w-56 animate-in fade-in zoom-in-95 duration-500 sm:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

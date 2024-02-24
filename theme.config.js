/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'

/**
 * Main Menu Items
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000'
export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
    // number: 1,
  },
  // {
  //   name: 'Home (2)',
  //   slug: '/index-2',
  //   Icon: TfiHome,
  //   number: 2,
  // },
  // {
  //   name: 'Home (3)',
  //   slug: '/index-3',
  //   Icon: TfiHome,
  //   number: 3,
  // },
  // {
  //   name: 'Home (4)',
  //   slug: '/index-4',
  //   Icon: TfiHome,
  //   number: 4,
  // },
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },
  // {
  //   name: 'Articles',
  //   slug: '/blog',
  //   Icon: TfiPencilAlt,
  // },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: SlTrophy,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'GitHub',
    url: 'https://github.com/deeveloperx',
    Icon: IoLogoGithub,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/mahadraja_offic',
    Icon: IoLogoTwitter,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mahad-raja/',
    Icon: IoLogoLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mahadraja_official/',
    Icon: IoLogoInstagram,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'mahadmnzr@gmail.com',
    sender: 'codecrack822@gmail.com',
    subject: 'Contact Message - ' + process.env.NEXT_DOAMIN,
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: SITE_URL,
  authorName: 'Mahad Manzoor',
  siteName: 'Mahad Manzoor',
  defaultTitle: 'Mahad Manzoor Personal Site',
  titleTemplate: 'Mahad Manzoor | %s',
  description:
    "Empower your digital journey with a skilled Website Developer. Expert in ReactJS, JavaScript, Bootstrap, Sass and more. Elevate your web and mobile experience. Unleash innovation for impactful results. Let's build success together!",
  email: 'mahadmnzr@gmail.com',
  locale: 'en_US',
  twitter: {
    handle: '@mahadraja_offic',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

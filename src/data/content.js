// Centralized site content for Mamas and Mentors International.
// All copy here is sourced from Dr. CK's NotebookLM brief and the
// original creative brief — keep this file as the single source of
// truth for voice, nav, and topic content.

// -------------------- LINKS --------------------
// Real GoHighLevel funnels live; a few funnels still need URLs.
export const LINKS = {
  REGISTER: 'https://register.mamasandmentors.com',
  VIP: 'https://register.mamasandmentors.com/vip-swag-bag-909920',
  ASSESSMENT: '[ASSESSMENT_LINK]',
  VIP_SWAG_BAG: 'https://register.mamasandmentors.com/vip-swag-bag-909920',
  INSTAGRAM: 'https://www.instagram.com/immvc2026',
  TIKTOK: 'https://www.tiktok.com/@immvc2026',
  FACEBOOK: 'https://www.facebook.com/DrCharityTVPage',
  YOUTUBE: 'https://www.youtube.com/DrCharityTV',
  LINKEDIN: '[LINKEDIN_LINK]',
  EMAIL: 'mailto:hello@mamasandmentors.com',
  BOOKING: '[BOOKING_LINK]',
};

// -------------------- NAVIGATION --------------------
export const NAV_PRIMARY = [
  { to: '/', label: 'Home' },
  { to: '/motherhood-otherhood', label: 'Motherhood & Otherhood' },
  { to: '/mentorship-leadership', label: 'Mentorship & Leadership' },
  { to: '/healing-wellness', label: 'Healing & Wellness' },
  { to: '/grief-grace', label: 'Grief & Grace' },
  { to: '/immvc', label: 'IMMVC' },
];

export const NAV_SECONDARY = [
  { to: '/about', label: 'About' },
  { to: '/community-lounges', label: 'Community Lounges' },
  { to: '/resources', label: 'Resource Hub' },
  { to: '/connect', label: 'Connect' },
];

// -------------------- HERO --------------------
export const TAGLINE = 'The #1 Event for All Things Motherhood & Otherhood';
export const HERO_HEADLINE_LINES = ['Real Women.', 'Real Stories.', 'Real Support.'];
export const HERO_SUB =
  'Welcome to a safe space celebrating motherhood and "otherhood" at every stage of life. You are not alone.';

// -------------------- ABOUT --------------------
export const ABOUT_INTRO =
  'Welcome to a community that goes beyond the highlight reel. Whether you are navigating the complexities of raising children, stepping into a mentorship role, overcoming deep personal loss, or building your own business, you belong here.';

export const ABOUT_BODY =
  'We exist to break the silence on the unspoken challenges women face. By sharing our authentic journeys, we empower one another to break generational curses, find epic love, regulate our nervous systems, and walk boldly in our God-given purposes.';

export const ABOUT_TAGLINE = 'We are here to push, pour, and prosper together.';

export const MISSION =
  'Celebrating motherhood and otherhood at every stage of life — the good, the bad, the ups, the downs, the messy, the pretty — and everything in between.';

// -------------------- WHO IT'S FOR --------------------
export const WHO_ITS_FOR = [
  'The mama who pours into everyone and is finally ready to receive',
  'The mentor who pours into others all year and needs her own renewal',
  'The woman navigating a season she didn’t choose — grief, waiting, healing, transition',
  'The daughter, the bonus mama, the mother-in-waiting',
  'Anyone who has ever loved a mother, lost one, or longed to be one',
  'You do not have to be a mother or mentor to belong here',
];

// -------------------- TESTIMONIALS --------------------
export const TESTIMONIALS = [
  {
    quote:
      'Attending Mamas & Mentors was a turning point in my life. The stories shared and connections made were truly life-changing.',
    name: 'Alissa R.',
    role: '2022 Attendee',
  },
  {
    quote:
      'This conference provided the support and inspiration I didn’t know I needed. I’m returning this year with friends!',
    name: 'Mariama L.',
    role: 'Mentor & Mother',
  },
];

// -------------------- TOPIC PAGE CONTENT --------------------
// Each topic page is structured: hero → intro → 3-4 sections → CTA.
// All copy below comes directly from Dr. CK's NotebookLM-extracted
// source material. Do not paraphrase without confirming with Dr. CK.

export const TOPIC_PAGES = {
  motherhood: {
    slug: 'motherhood-otherhood',
    eyebrow: 'Motherhood & Otherhood',
    title: 'Parenting Through Every Season',
    accent: 'with grace.',
    quote:
      'We reject the pressure of the “perfect mom” syndrome and celebrate our imperfections, raw courage, and growth.',
    intro:
      'Motherhood does not come with a manual. On this page, we explore the unvarnished realities of raising the next generation.',
    sections: [
      {
        eyebrow: '01',
        title: 'Navigating the Stages',
        body:
          'From the challenges of new motherhood and raising special needs children, to guiding teenagers and navigating the emotional transition of an empty nest. Every stage is real. Every stage is held here.',
      },
      {
        eyebrow: '02',
        title: 'Overcoming Perfectionism',
        body:
          'Learn how to silence your inner critic, stop comparing your behind-the-scenes to someone else’s highlight reel, and understand that progress is better than perfection.',
      },
      {
        eyebrow: '03',
        title: 'Single Motherhood & Dating',
        body:
          'Guidance on setting boundaries, healing past patterns, and moving from single and struggling to finding epic, magnetic love.',
      },
    ],
  },

  mentorship: {
    slug: 'mentorship-leadership',
    eyebrow: 'Mentorship & Leadership',
    title: 'Iron Sharpening Iron:',
    accent: 'The Power of Pouring',
    quote: 'Mentorship is not showmanship; it is fellowship.',
    intro:
      'We are passionate about the Titus 2 model of women teaching and pouring into the next generation so they don’t have to navigate life blindly.',
    sections: [
      {
        eyebrow: '01',
        title: 'Finding the Right Mentor',
        body:
          'Learn the importance of watching, listening, praying, and seeking mentors who offer transparency and have the “receipts” to guide you through the trenches.',
      },
      {
        eyebrow: '02',
        title: 'Becoming a Mentor',
        body:
          'Don’t suffer from “spiritual obesity” by hoarding your wisdom. Discover how to pour your experiences into others, recognizing that your flaws and past traumas actually make you a tremendous guide for someone else.',
      },
      {
        eyebrow: '03',
        title: 'Building Your Legacy',
        body:
          'Whether you are building a business, leading a ministry, or raising a family, learn how to align your purpose and build a legacy that outlives you.',
      },
    ],
  },

  healing: {
    slug: 'healing-wellness',
    eyebrow: 'Healing & Wellness',
    title: 'Mind, Body, and Spirit',
    accent: 'Restoration.',
    quote: 'You cannot pour from an empty cup.',
    intro:
      'True wellness requires us to take a holistic approach to our physical bodies, our emotional health, and our spiritual alignment.',
    sections: [
      {
        eyebrow: '01',
        title: 'Nervous System Regulation',
        body:
          'Build a business and a life out of peace, not survival. Learn to recognize “fight, flight, or freeze” responses, avoid burnout, and use tools to regulate your nervous system on a daily basis.',
      },
      {
        eyebrow: '02',
        title: 'Body Image & Self-Love',
        body:
          'Combat the unrealistic standards of social media and learn to embrace your body — especially postpartum — as a vessel of purpose rather than just an image.',
      },
      {
        eyebrow: '03',
        title: 'Natural Healing',
        body:
          'Explore how setting intentions and utilizing holistic, natural remedies can help heal your body from the inside out, addressing issues like PCOS and overall women’s health.',
      },
      {
        eyebrow: '04',
        title: 'Faith & Strategic Prayer',
        body:
          'Discover the authority you hold to protect your family and break agreements with generational trauma and abuse.',
      },
    ],
  },

  grief: {
    slug: 'grief-grace',
    eyebrow: 'Grief & Grace',
    title: 'Finding Hope in the',
    accent: 'Hardest Chapters.',
    quote:
      'Grief is cyclical, like the waves of the ocean — and navigating it requires a community that understands.',
    intro:
      'We hold space for the deeply sensitive topics that society often ignores. You don’t have to figure it out in silence.',
    sections: [
      {
        eyebrow: '01',
        title: 'Infertility & IVF',
        body:
          'Support for those standing in the waiting room of motherhood, dealing with the emotional triggers of holidays like Mother’s Day, and holding onto hope (the symbolism of the pineapple) through the journey.',
      },
      {
        eyebrow: '02',
        title: 'Miscarriage & Infant Loss',
        body:
          'You don’t have to figure it out in silence. Connect with a community that honors the lives of your children and provides a safe space for your pain and healing.',
      },
      {
        eyebrow: '03',
        title: 'Losing a Mother',
        body:
          'Guidance on navigating life and honoring the legacy of a mother who has passed away — turning sorrow into a legacy of impact.',
      },
      {
        eyebrow: '04',
        title: 'Forgiving the Past',
        body:
          'Finding grace and healing from the regret of past choices, such as abortion, or the pain of estranged family relationships and substance abuse.',
      },
    ],
  },
};

// -------------------- COMMUNITY LOUNGES --------------------
// Conference-only feature; lives in the Community Lounges page (footer nav).
export const LOUNGES = [
  'Mother–Daughter Duos',
  'Fertility Difficulties & IVF',
  'Grief & Grace (Infant Loss & Miscarriage)',
  'Postpartum Depression & Body Image',
  'Single Mom Life & Dating',
  'Caring for Elderly Parents',
  'The Prayer Room',
];

// -------------------- VIP PERKS (IMMVC) --------------------
export const VIP_PERKS = [
  {
    color: 'magenta',
    title: 'Full Replay Library',
    body: 'Instant access to 2022, 2025, and 2026 conference replays as soon as the conference wraps — yours for a full year. ($200 value)',
  },
  {
    color: 'teal',
    title: 'Private Community Access',
    body: 'Connect and go deeper with women from across the IMMVC community.',
  },
  {
    color: 'magenta',
    title: 'VIP After-Hours Sessions',
    body: 'Exclusive conversations that go beyond the main stage.',
  },
  {
    color: 'teal',
    title: 'Priority Q&A',
    body: 'Your questions get to the front of the line.',
  },
  {
    color: 'magenta',
    title: 'Resource Vault',
    body: 'A curated collection of tools and resources to support your journey.',
  },
  {
    color: 'teal',
    title: 'IMMVC VIP Swag Bag',
    body: 'Speaker gifts and bonuses handpicked just for you.',
  },
];

// -------------------- FAQS --------------------
export const FAQS = [
  {
    q: 'Do I have to be a mother or mentor to attend?',
    a: 'No. Anyone is welcome. This community is for the mama, the mentor, and every woman who has ever loved one, lost one, or longed to be one.',
  },
  {
    q: 'Are the presentations live?',
    a: 'Main sessions are pre-recorded for international accessibility. Supplemental activities — Q&A, networking, prayer calls — are live.',
  },
  {
    q: 'Is there a purchase required to attend?',
    a: 'No. General access is completely free. VIP is an optional upgrade for those who want the full immersive experience.',
  },
  {
    q: 'What is the VIP refund policy?',
    a: 'No refunds once access is granted.',
  },
  {
    q: 'How do I access replays?',
    a: 'Portal access is sent by email after upgrading to VIP.',
  },
];

// -------------------- STOCK PHOTOGRAPHY PLACEHOLDERS --------------------
// Curated Unsplash URLs that match the multi-generational, diverse,
// emotional-range mood Dr. CK shared. ALL of these are stock and must
// be replaced with brand photography before launch.
export const STOCK_PHOTOS = {
  heroLounge:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80', // diverse women laughing
  motherDaughter:
    'https://images.unsplash.com/photo-1518050227004-c4cb7104d79a?auto=format&fit=crop&w=1200&q=80', // mother with daughter
  mentorship:
    'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?auto=format&fit=crop&w=1200&q=80', // women in conversation
  prayer:
    'https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=1200&q=80', // hands in prayer
  reflection:
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80', // black woman in soft light
  group:
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80', // group of women
  multigen:
    'https://images.unsplash.com/photo-1581579189379-44e26ee05b25?auto=format&fit=crop&w=1200&q=80', // multi-generational
  singleMom:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80', // mother and child
  drCK:
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80', // confident professional woman portrait
  conference:
    'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1400&q=80', // event/conference scene
};

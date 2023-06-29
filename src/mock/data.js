import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eugene Cross', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
  logoImg: 'GenoxLogo.png',
  logoUrl: 'https://www.genox.io',
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Eugene Cross',
  subtitle: 'Senior Web & Mobile Developer',
  cta: 'More...',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    "I'm a freelance web and mobile developer based in London, with over 15 years experience specialising in React, Angular, JavaScript, TypeScript, HTML, CSS and cross platform mobile frameworks like Ionic.",
  paragraphTwo:
    "I've worked for small startups through to Fortune 500s and am always happy to collaborate with clients to discuss any requirements.",
  paragraphThree: '',
  resume: 'https://eugenes-cv.web.app', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hostcomm-rva.png',
    title: 'Hostcomm Remote Visual Assistance',
    info: 'A remote video insepection web application used on desktop and mobile devices.',
    info2: 'Architected and built on the MERN stack using the Twilio SDK hosted on AWS.',
    url: 'https://www.hostcomm.co.uk/solutions/remote-visual-assistance',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rocketlawyer.png',
    title: 'Rocket Lawyer',
    info: 'Create legal documents & ask a question to a lawyer.',
    info2:
      'Reworked, refreshed and upgraded an Ionic 3 / Cordova app to Ionic 5 and increased the rating to 4+ stars',
    url: 'https://apps.apple.com/us/app/rocket-lawyer-easy-legal-help/id605512447',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'pfizerpro.png',
    title: 'Pfizer HCP Portal',
    info: 'Main sales site for US healthcare professionals.',
    info2:
      'Implemented the My Account feature using standards based web components authored using StencilJS.',
    url: 'https://www.pfizerpro.com/',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'brenger.png',
    title: 'Brenger',
    info: 'A transportation app, tracking drivers geolocation whilst out on deliveries.',
    info2: 'Built using React & Capacitor.',
    url: 'https://apps.apple.com/nl/app/brenger-voor-koeriers/id1504096160',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'available_beauty_appstore.png',
    title: 'Available Beauty',
    info: 'An app connecting stylists and other beauty professionals with potential clients.',
    info2:
      'Features include user authentication, geolocation tracking, push notifications, camera and photo library usage and in app purchases.',
    info3: 'Built using Ionic, Angular, Firebase.',
    url: 'https://www.availablebeauty.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'breakroom_overview.png',
    title: 'Breakroom',
    info: 'A quit smoking app, taking users through their journey to giving up smoking.',
    info2:
      'Features include login and registration, gamification through unlocking badges, a social feed and tracking progress on money saved.',
    info3: 'Built using Ionic & Angular.',
    url: 'https://www.breakroom.com.au/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mibrance.png',
    title: 'Mibrance',
    info: "A cancer treatment companion app, enabling tracking of symptoms, doctor's appointments and medication reminders.",
    info2:
      'Features include a calendar, notifications, multi language support and graphical reporting of symptoms over time with the ability to export to PDF.',
    info3: 'Built using Ionic & Angular.',
    url: 'https://apps.apple.com/be/app/mibrance/id1457076811',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'miguia.png',
    title: 'Mi Guia',
    info: 'A cancer treatment companion app, enabling patients to track exercise, moods, doctors appointments and set reminders.',
    info2: 'Built using Ionic & Angular.',
    url: 'https://play.google.com/store/apps/details?id=com.pfizer.ar.MiGuia',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Like to find out more? Please get in touch for a chat!',
  btn: '',
  email: 'eugene@genox.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/yoojene',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eugenecross/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/yoojene',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/yoojene/pens/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

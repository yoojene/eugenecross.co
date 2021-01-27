import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
    "I've worked for small startups through to Fortune 500s and always keen to collaborate with my clients to discuss any requirements.",
  paragraphThree: '',
  resume: 'https://eugenes-cv.web.app', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'breakroom_overview.png',
    title: 'Breakroom',
    info: 'A quit smoking app, taking users through their journey to giving up smoking.',
    info2:
      'Features include login and registration, gamification through unlocking badges, a social feed and tracking progress on money saved.',
    url: 'https://www.breakroom.com.au/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brenger.png',
    title: 'Brenger',
    info: 'A transportation app, tracking drivers geolocation whilst out on deliveries.',
    info2: '',
    url: 'https://apps.apple.com/nl/app/brenger-voor-koeriers/id1504096160',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'miguia.png',
    title: 'Mi Guia',
    info: 'A cancer companion app, track exercise, moods, doctors appointments and set reminders',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.pfizer.ar.MiGuia',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Like to find out more? Please get in touch, I'd be happy to have a chat.",
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

import type { Textos } from './i18n.es';

/** English strings. Shape is checked against the Spanish dictionary. */
export const en: Textos = {
  codigo: 'en',
  etiqueta: 'EN',
  otro: 'Español',

  meta: {
    inicio: {
      titulo: 'yourpr · Workouts, PRs and competitions for your gym',
      desc: "Today's programming, your Box/Gym leaderboard and every one of your PRs in one place. No spreadsheets, no wiped whiteboards.",
    },
    privacidad: {
      titulo: 'Privacy policy · yourpr',
      desc: 'What yourpr stores, why, who can see it and how to delete it.',
    },
    eliminar: {
      titulo: 'Delete your account · yourpr',
      desc: 'How to delete your yourpr account and all your data, from the app or by email.',
    },
    soporte: {
      titulo: 'Support · yourpr',
      desc: 'Help, frequently asked questions and how to reach the yourpr team.',
    },
  },

  nav: {
    que: 'What it is',
    funciones: 'Features',
    competencias: 'Competitions',
    descarga: 'Download',
    contacto: 'Contact',
    entrar: 'Log in',
    menu: 'Open menu',
    cerrar: 'Close menu',
    idioma: 'Switch to Spanish',
  },

  hero: {
    insignia: 'Coming soon to the App Store and Google Play',
    titulo1: 'Program. Compete.',
    titulo2: 'Break your PR.',
    sub: "Today's programming, your Box/Gym leaderboard and every one of your personal records in one place. No spreadsheets, no wiped whiteboards.",
    ctaPrincipal: 'I want yourpr in my Box/Gym',
    ctaSecundario: 'See what it does',
    fichas: ['Workout of the day', 'Live leaderboard', 'PRs with history', 'Competitions'],
    scroll: 'Scroll',
  },

  datos: [
    { valor: 5, sufijo: '', titulo: 'score types', pie: 'Time, rounds, reps, capped-not-finished and max weight.' },
    { valor: 3, sufijo: '', titulo: 'scaling tiers', pie: 'RX+, RX and Scaled, each weighted differently in the ranking.' },
    { valor: 2, sufijo: '', titulo: 'unit systems', pie: 'Kilos or pounds: pick one in your profile and the whole app follows.' },
    { valor: 100, sufijo: 'pts', titulo: 'for first place', pie: 'Points-per-position table, just like the Games leaderboard.' },
  ],

  que: {
    etiqueta: 'What yourpr is',
    titulo: 'Your gym in an app, not one more notebook',
    p1: "yourpr connects the coach who programs, the athlete who trains and the manager who bills. The coach builds the week, you open the app and see today's workout exactly as programmed, log your result when you finish, and the day's leaderboard builds itself.",
    p2: 'Every mark you log keeps its date, so your progress is a full history and not a loose number that disappears when someone wipes the whiteboard.',
    puntos: [
      'Works on iPhone, Android and the browser.',
      'Each gym only sees its own data, with admin, coach and athlete roles.',
      'No ads, no tracking, no selling data.',
    ],
  },

  publicos: {
    etiqueta: 'Features',
    titulo: 'Three ways to use it',
    sub: 'The same app changes shape depending on who signs in.',
    tabs: [
      {
        id: 'atleta',
        icono: 'atleta',
        nombre: 'For athletes',
        titulo: 'Open the app and you already know the plan',
        color: '#1565ff',
        items: [
          { t: "Today's workout, block by block", d: 'Exactly as your coach programmed it, with the loads and scaling meant for you.' },
          { t: 'Log your score and see where you land', d: "The day's leaderboard updates instantly, within your Box/Gym and your category." },
          { t: 'Your PRs with the full history', d: 'By movement and by rep scheme. You see them climb, not just today’s number.' },
          { t: 'Featured records on your profile', d: 'You choose which ones show first when somebody opens your profile.' },
          { t: 'Kilos or pounds, your call', d: 'Switch it in your profile and the whole app adapts, leaderboards included.' },
        ],
      },
      {
        id: 'gimnasio',
        icono: 'gimnasio',
        nombre: 'For the gym',
        titulo: 'Program once, clone the rest',
        color: '#00c853',
        items: [
          { t: 'The whole week in one sitting', d: 'Program once and clone from one day to another without retyping it.' },
          { t: 'Members, memberships and payments', d: 'Per-member control with automatic warnings when a membership is about to expire.' },
          { t: 'Your coaches validate results', d: 'Each coach reviews only the classes assigned to them — nobody touches what is not theirs.' },
          { t: 'Your Box/Gym community', d: 'Profiles, marks and rankings for your people, visible only inside the Box/Gym.' },
        ],
      },
      {
        id: 'competencia',
        icono: 'trofeo',
        nombre: 'For competitions',
        titulo: 'From heat 1 to the overall table, on its own',
        color: '#ffc400',
        items: [
          { t: 'Categories and teams', d: 'Free-form names, not just elite and rookie. Individual or team registration.' },
          { t: 'Invitations each athlete accepts', d: 'You build the team and each person confirms from their own account.' },
          { t: 'Automatic scoring per workout', d: 'RX+ above RX, finishers above non-finishers, and points come from the position table.' },
          { t: 'Live leaderboard', d: 'The overall table updates itself as results come in.' },
        ],
      },
    ],
  },

  pasos: {
    etiqueta: 'How it works',
    titulo: 'Three steps and you are on the board',
    lista: [
      { n: '01', t: 'Your coach programs', d: "Builds the day's blocks: warm-up, strength, the WOD and its RX+ version. Defines how each one is scored." },
      { n: '02', t: 'You train and log your score', d: 'Time, rounds, reps, weight or whatever the block asks for. Pick your scaling and you are done.' },
      { n: '03', t: 'The leaderboard builds itself', d: 'yourpr sorts by scaling and performance, hands out the points and updates the monthly standings.' },
    ],
  },

  cinta: ['Snatch', 'Clean & Jerk', 'Back Squat', 'Fran', 'Murph', 'AMRAP', 'EMOM', 'Deadlift', 'Muscle-up', 'Thruster', 'Front Squat', 'Grace', 'Row', 'Assault Bike', 'Wall Ball'],

  descarga: {
    etiqueta: 'Download',
    titulo: 'Coming soon to the stores',
    sub: 'We are wrapping up App Store and Google Play review. Leave us your email below and we will let you know the day it ships.',
    pronto: 'Coming soon',
    ios: { arriba: 'Soon on the', abajo: 'App Store' },
    android: { arriba: 'Soon on', abajo: 'Google Play' },
    nota: 'Run a Box/Gym and want yourpr from day one? Write to us and we will set you up in the first batch of gyms.',
    notaCta: 'Get in touch',
  },

  contacto: {
    etiqueta: 'Contact',
    titulo: "Let's talk about your gym",
    sub: 'Tell us what you need and we will reply to the address you leave. We usually answer the same day.',
    nombre: 'Name',
    nombrePh: 'Your name',
    correo: 'Email',
    correoPh: 'you@example.com',
    gimnasio: 'Box/Gym',
    gimnasioPh: 'Optional',
    asunto: 'Reason',
    asuntos: ['I want yourpr in my gym', 'I am an athlete with a question', 'Technical support', 'Something else'],
    mensaje: 'Message',
    mensajePh: 'How many members your Box/Gym has, what you need to solve…',
    enviar: 'Send message',
    enviando: 'Sending…',
    exito: 'Done! Your message is on its way. We will reply to your email as soon as we can.',
    error: 'It could not be sent. Write to us directly at',
    otroCanal: 'Or write to us directly at',
    errores: {
      nombre: 'Please enter your name.',
      correo: 'Please enter a valid email.',
      mensaje: 'Tell us a bit more (10 characters minimum).',
    },
  },

  pie: {
    tagline: 'Workouts, scores, personal records and competitions for gyms.',
    producto: 'Product',
    legal: 'Legal',
    contacto: 'Contact',
    privacidad: 'Privacy policy',
    eliminar: 'Delete your account',
    soporte: 'Support',
    hechoPor: 'A product by',
    derechos: 'All rights reserved.',
  },

  legal: {
    volver: 'Back to home',
    actualizado: 'Last updated: August 30, 2026',
    indice: 'On this page',
  },
};

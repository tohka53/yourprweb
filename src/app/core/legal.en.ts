import type { Legal } from './legal.tipos';

const CORREO = 'mcabreracto@techsolutionsgt.dev';
const MAILTO = `<a href="mailto:${CORREO}">${CORREO}</a>`;

export const legalEn: Legal = {
  privacidad: {
    titulo: 'Privacy policy',
    entradilla:
      'yourpr is an app for gyms: it stores the daily programming, the results of every class, personal records (PRs) and competitions. This policy explains what we store, why, and how you can delete it.',
    bloques: [
      {
        tipo: 'aviso',
        titulo: 'In short',
        texto:
          'We only store what the app needs to work. We do not sell or share your data with advertisers, there are no ads and there is no cross-app tracking. You can delete your account and your entire history from inside the app, without asking anyone.',
      },
      { tipo: 'h2', id: 'responsable', texto: 'Who is responsible' },
      {
        tipo: 'p',
        texto: `The data controller is <strong>Tech Solutions GT, Sociedad Anónima</strong>, the developer of yourpr. For any question about your data write to ${MAILTO}.`,
      },
      { tipo: 'h2', id: 'datos', texto: 'What we store' },
      {
        tipo: 'tabla',
        encabezados: ['Data', 'What for'],
        filas: [
          ['Name and email', 'To identify you and let you sign in to your account.'],
          ['Profile photo (optional)', 'So your gym mates recognise you on the leaderboard.'],
          [
            'Profile: username, phone, date of birth, gender, height, weight and bio',
            'All optional except your name. They are used for competition categories and to calculate your marks relative to body weight.',
          ],
          [
            'Your training: personal records, class results, competition registrations and results',
            "It is the content of the app: your history, the day's leaderboard and the competition tables.",
          ],
          [
            'Your relationship with the gym: role, membership dates and payments recorded by the manager',
            'So the gym knows whether your membership is active. Payments are recorded by the gym; yourpr does not process charges and never stores card data.',
          ],
        ],
      },
      {
        tipo: 'p',
        texto:
          'The app asks for <strong>camera</strong> and <strong>photo library</strong> permission only when you pick or take your profile photo, or when you upload a payment receipt. We do not access your photos at any other time.',
      },
      {
        tipo: 'p',
        texto:
          'The app does <strong>not</strong> collect your location, does not read your contacts, uses no analytics or advertising tooling, and includes no SDK that follows you across other apps or websites. What this website does collect is explained <a href="#sitio-web">further down</a>.',
      },
      { tipo: 'h2', id: 'proveedores', texto: 'If you sign in with Google or Apple' },
      {
        tipo: 'p',
        texto:
          'If you choose “Continue with Google” or “Continue with Apple”, that provider gives us your email and your name to create the account. Nothing else: we never receive your password or the rest of your information with them.',
      },
      {
        tipo: 'p',
        texto:
          'If you use Apple and turn on <strong>“Hide My Email”</strong>, we only ever see the relay address Apple generates; everything works the same and your real address never reaches our servers.',
      },
      { tipo: 'h2', id: 'quien-ve', texto: 'Who can see your data' },
      {
        tipo: 'lista',
        items: [
          '<strong>You</strong>, always and all of it.',
          "<strong>The managers and coaches of your gym</strong>: your name, your photo, your class results, your records and your membership status. That is what they need in order to program, validate results and keep track of payments.",
          '<strong>Your gym mates</strong>: your name, your photo and your results on leaderboards and competitions. You can mark your profile as not public from Edit profile.',
        ],
      },
      { tipo: 'p', texto: 'We do not share data with anyone else, unless the law requires it.' },
      { tipo: 'h2', id: 'donde', texto: 'Where the data lives' },
      {
        tipo: 'p',
        texto:
          'The database and the files are hosted on <a href="https://supabase.com/privacy" target="_blank" rel="noopener">Supabase</a>, which in turn runs on Amazon Web Services infrastructure. The connection between the app and the server is always encrypted (HTTPS).',
      },
      { tipo: 'h2', id: 'sitio-web', texto: 'This website' },
      {
        tipo: 'p',
        texto: 'Everything above describes the app. This website is a separate thing, and it collects two:',
      },
      {
        tipo: 'lista',
        items: [
          '<strong>Visit statistics</strong>, through Vercel Web Analytics. It uses no cookies and does not follow you across other sites: it only records which page you opened, where you came from, the country, the browser and the device type. To count unique visitors, Vercel derives an identifier from the request data and rotates it daily, so nothing is left that points back to you.',
          '<strong>Whatever you type into the contact form</strong>: your name, your email, the gym if you fill it in, and your message. It travels through <a href="https://formsubmit.co/legal" target="_blank" rel="noopener">FormSubmit</a>, a service that forwards it to our inbox, and we use it only to reply to you.',
        ],
      },
      { tipo: 'h2', id: 'cuanto', texto: 'How long we keep it' },
      {
        tipo: 'p',
        texto:
          'As long as you have an account. When you delete it, your profile, your records, your results, your registrations and your photos are removed immediately. Whatever you programmed or recorded on behalf of the gym (workouts, payments you collected as a manager) is kept without your name, because it belongs to the gym and not to your account.',
      },
      { tipo: 'h2', id: 'borrar', texto: 'Deleting your account' },
      {
        tipo: 'aviso',
        titulo: 'From the app',
        texto:
          'Go to <strong>Profile → Delete my account</strong>. We ask you to type ELIMINAR to confirm and the deletion is immediate and permanent. There is no need to write to us or wait for approval. The full detail is on <a href="/delete-account">Delete your account</a>.',
      },
      {
        tipo: 'p',
        texto: `If you have lost access to your account and need us to delete it for you, write to ${MAILTO} from the address you signed up with and we will do it within 30 days.`,
      },
      { tipo: 'h2', id: 'derechos', texto: 'Your rights' },
      {
        tipo: 'p',
        texto:
          'You can view and correct your data from Edit profile, export it by asking us over email, and delete it whenever you want. If you think something is being misused, write to us and we will look into it.',
      },
      { tipo: 'h2', id: 'menores', texto: 'Minors' },
      {
        tipo: 'p',
        texto:
          'yourpr is intended for people over 13. If a gym registers a minor, it must do so with the consent of a parent or guardian, who can ask us to delete the account at any time.',
      },
      { tipo: 'h2', id: 'cambios', texto: 'Changes to this policy' },
      {
        tipo: 'p',
        texto:
          'If we change something important we update the date above and announce it inside the app before it takes effect.',
      },
    ],
  },

  eliminar: {
    titulo: 'Delete your account',
    entradilla:
      'This page explains how to delete your <strong>yourpr</strong> account (com.techsolutiosgt.yourpr) and what happens to your data when you do. You can do it yourself from inside the app, without asking anyone for permission.',
    bloques: [
      {
        tipo: 'aviso',
        titulo: 'Deletion is immediate and permanent',
        texto:
          'There is no grace period and no trash bin: once you confirm, your account and your training history are gone and cannot be recovered.',
      },
      { tipo: 'h2', id: 'desde-la-app', texto: 'Option 1 · From the app (recommended)' },
      {
        tipo: 'pasos',
        items: [
          { t: 'Open yourpr and sign in', d: 'With the method you always use: email, Google or Apple.' },
          { t: 'Go to the Profile tab', d: 'It is the last one in the bottom menu; on wide screens it sits in the side rail.' },
          { t: 'Tap “Delete my account”', d: 'It is at the bottom of the profile screen, in red.' },
          { t: 'Type ELIMINAR and confirm', d: 'We ask for the full word so it can never happen by accident. Once you confirm, the deletion runs straight away and your session is closed.' },
        ],
      },
      { tipo: 'h2', id: 'por-correo', texto: 'Option 2 · By email' },
      {
        tipo: 'p',
        texto: `If you lost access to your account or cannot open the app, write to ${MAILTO} <strong>from the address you signed up with</strong>, with the subject “Delete my account”.`,
      },
      {
        tipo: 'p',
        texto:
          'We verify that the request comes from the account owner and complete the deletion within <strong>30 days</strong>. We confirm by the same email once it is done.',
      },
      { tipo: 'h2', id: 'que-se-borra', texto: 'What gets deleted' },
      {
        tipo: 'lista',
        items: [
          'Your sign-in account and your email address.',
          'Your entire profile: name, username, photo, phone, date of birth, gender, height, weight and bio.',
          'All of your personal records (PRs) and their history.',
          'All of your class and competition results.',
          'Your competition registrations and team invitations.',
          'Your link to the gym: role, memberships and any payment receipts you uploaded.',
          'Your notifications and any photos you uploaded to storage.',
        ],
      },
      { tipo: 'h2', id: 'que-se-conserva', texto: 'What is kept, and why' },
      {
        tipo: 'p',
        texto:
          'Whatever you created <strong>for the gym</strong> rather than for your own account stays, but <strong>without your name</strong>: it is detached from your identity and can no longer be traced back to you.',
      },
      {
        tipo: 'tabla',
        encabezados: ['What stays', 'Why'],
        filas: [
          [
            'Workouts and competitions you programmed as a coach or manager',
            'They belong to the gym: deleting them would wipe the training history of every other member.',
          ],
          [
            'Payments and memberships you recorded as a manager for other members',
            "They are the gym's accounting record, not your personal data.",
          ],
          [
            'Database backups',
            'They overwrite themselves within 30 days at most. Nobody reads them except to restore from a disaster.',
          ],
        ],
      },
      { tipo: 'h2', id: 'dudas', texto: 'Second thoughts?' },
      {
        tipo: 'p',
        texto: `If you only want to stop appearing on leaderboards there is no need to delete your account: under <strong>Edit profile</strong> you can mark your profile as not public. For anything else, write to ${MAILTO} and we will help before you decide.`,
      },
    ],
  },

  soporte: {
    titulo: 'Support',
    entradilla:
      'Everything you need to sort out a problem with yourpr. If none of this helps, write to us — we usually reply the same day.',
    bloques: [
      { tipo: 'h2', id: 'contacto', texto: 'Direct contact' },
      {
        tipo: 'p',
        texto: `Write to ${MAILTO} telling us what happened, on which phone and on which screen. That is usually enough to solve it in the first reply.`,
      },
      { tipo: 'h2', id: 'faq', texto: 'Frequently asked questions' },
      {
        tipo: 'pasos',
        items: [
          {
            t: 'I cannot sign in / my gym does not show up',
            d: 'To use yourpr your gym has to be registered and the manager has to add you to its roster. Ask your coach; if the gym does not use yourpr yet, write to us and we will set it up.',
          },
          {
            t: 'I logged a result wrong',
            d: "You can edit it from the day's screen as long as the coach has not validated it. Once validated, ask your coach or the gym manager.",
          },
          {
            t: 'I want to switch from kilos to pounds',
            d: 'Under Profile → Edit profile you pick the unit. The whole app adapts, including leaderboards and your previous PRs.',
          },
          {
            t: 'My PR is not showing on the leaderboard',
            d: "A workout's leaderboard only considers blocks with ranking enabled. PRs live on your profile and in the records tab, not on the day's leaderboard.",
          },
          {
            t: 'I want to delete my account',
            d: 'Profile → Delete my account. The full steps are on the Delete your account page.',
          },
        ],
      },
      { tipo: 'h2', id: 'gimnasios', texto: 'Run a gym?' },
      {
        tipo: 'p',
        texto:
          'Write to us from the <a href="/#contacto">contact form</a> and we will set you up. We help with the initial member import and with your first week of programming.',
      },
    ],
  },
};

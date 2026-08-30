/**
 * Textos en español. Es el idioma de referencia: la forma de este objeto
 * define el tipo `Textos`, así que si agregas una clave aquí, TypeScript te
 * obliga a agregarla también en i18n.en.ts.
 */
export const es = {
  codigo: 'es',
  etiqueta: 'ES',
  otro: 'English',

  meta: {
    inicio: {
      titulo: 'yourpr · Rutinas, PRs y competencias de tu gimnasio',
      desc: 'La programación del día, el ranking de tu Box/Gym y todos tus PRs en un solo lugar. Sin hojas de cálculo ni pizarras borradas.',
    },
    privacidad: {
      titulo: 'Política de privacidad · yourpr',
      desc: 'Qué datos guarda yourpr, para qué, quién puede verlos y cómo borrarlos.',
    },
    eliminar: {
      titulo: 'Eliminar tu cuenta · yourpr',
      desc: 'Cómo borrar tu cuenta de yourpr y todos tus datos, desde la app o por correo.',
    },
    soporte: {
      titulo: 'Soporte · yourpr',
      desc: 'Ayuda, preguntas frecuentes y contacto del equipo de yourpr.',
    },
  },

  nav: {
    que: 'Qué es',
    funciones: 'Funciones',
    competencias: 'Competencias',
    descarga: 'Descarga',
    contacto: 'Contacto',
    entrar: 'Entrar',
    menu: 'Abrir menú',
    cerrar: 'Cerrar menú',
    idioma: 'Cambiar a inglés',
  },

  hero: {
    insignia: 'Muy pronto en App Store y Google Play',
    titulo1: 'Programa. Compite.',
    titulo2: 'Rompe tu PR.',
    sub: 'La programación del día, el ranking de tu Box/Gym y todos tus records personales en un solo lugar. Sin hojas de cálculo ni pizarras borradas.',
    ctaPrincipal: 'Quiero yourpr en mi Box/Gym',
    ctaSecundario: 'Ver qué hace',
    fichas: ['WOD del día', 'Ranking en vivo', 'PRs con histórico', 'Competencias'],
    scroll: 'Desliza',
  },

  datos: [
    { valor: 5, sufijo: '', titulo: 'tipos de score', pie: 'Tiempo, rondas, reps, cap sin terminar y peso máximo.' },
    { valor: 3, sufijo: '', titulo: 'niveles de escalado', pie: 'RX+, RX y Scaled, cada uno con su peso en el ranking.' },
    { valor: 2, sufijo: '', titulo: 'unidades', pie: 'Kilos o libras: lo eliges en tu perfil y toda la app se adapta.' },
    { valor: 100, sufijo: 'pts', titulo: 'al primer lugar', pie: 'Tabla de puntos por posición, como el leaderboard de los Games.' },
  ],

  que: {
    etiqueta: 'Qué es yourpr',
    titulo: 'La app de tu gimnasio, no una libreta más',
    p1: 'yourpr conecta al coach que programa, al atleta que entrena y al administrador que cobra. El coach arma la semana, tú abres la app y ves el WOD de hoy tal como lo programó, subes tu resultado al terminar y el ranking del día se arma solo.',
    p2: 'Cada marca que registras queda con su fecha, así que tu progreso es un histórico completo y no un número suelto que se pierde cuando alguien borra la pizarra.',
    puntos: [
      'Funciona en iPhone, Android y navegador.',
      'Cada gimnasio ve solo lo suyo, con roles de administrador, coach y atleta.',
      'Sin publicidad, sin rastreo y sin vender datos.',
    ],
  },

  publicos: {
    etiqueta: 'Funciones',
    titulo: 'Tres formas de usarla',
    sub: 'La misma app cambia de cara según quién entra.',
    tabs: [
      {
        id: 'atleta',
        icono: 'atleta',
        nombre: 'Para quien entrena',
        titulo: 'Abre la app y ya sabes qué toca hoy',
        color: '#1565ff',
        items: [
          { t: 'El WOD de hoy, bloque por bloque', d: 'Tal como lo programó tu coach, con los pesos y el escalado que te toca.' },
          { t: 'Sube tu score y mira dónde quedaste', d: 'El ranking del día se actualiza al instante, con tu Box/Gym y en tu categoría.' },
          { t: 'Tus PRs con todo el histórico', d: 'Por ejercicio y por esquema de repeticiones. Ves cómo suben, no solo el número de hoy.' },
          { t: 'Records destacados en tu perfil', d: 'Eliges cuáles se ven primero cuando alguien entra a verte.' },
          { t: 'Kilos o libras, tú decides', d: 'Lo cambias en tu perfil y toda la app se adapta, rankings incluidos.' },
        ],
      },
      {
        id: 'gimnasio',
        icono: 'gimnasio',
        nombre: 'Para el gimnasio',
        titulo: 'Programa una vez, clona el resto',
        color: '#00c853',
        items: [
          { t: 'La semana completa de un jalón', d: 'Programas una vez y clonas de un día a otro sin volver a escribirla.' },
          { t: 'Clientes, membresías y pagos', d: 'Control por cliente con avisos automáticos cuando una membresía está por vencer.' },
          { t: 'Tus coaches validan resultados', d: 'Cada coach revisa las clases que tiene asignadas, nadie toca lo que no le toca.' },
          { t: 'La comunidad de tu Box/Gym', d: 'Perfiles, marcas y rankings de tu gente, visibles solo dentro del Box/Gym.' },
        ],
      },
      {
        id: 'competencia',
        icono: 'trofeo',
        nombre: 'Para competir',
        titulo: 'Del heat 1 a la tabla general, solo',
        color: '#ffc400',
        items: [
          { t: 'Categorías y equipos', d: 'Nombres libres, no solo elite y rookie. Inscripción individual o por equipo.' },
          { t: 'Invitaciones que cada atleta acepta', d: 'Armas el equipo y cada quien confirma desde su cuenta.' },
          { t: 'Puntuación automática por WOD', d: 'RX+ arriba de RX, quien termina antes que quien no, y los puntos salen de la tabla por posición.' },
          { t: 'Leaderboard en vivo', d: 'La tabla general se actualiza sola conforme entran los resultados.' },
        ],
      },
    ],
  },

  pasos: {
    etiqueta: 'Cómo funciona',
    titulo: 'Tres pasos y ya estás en la tabla',
    lista: [
      { n: '01', t: 'Tu coach programa', d: 'Arma los bloques del día: calentamiento, fuerza, WOD y su versión RX+. Define cómo se puntúa cada uno.' },
      { n: '02', t: 'Entrenas y subes tu score', d: 'Tiempo, rondas, reps, peso o lo que pida el bloque. Marcas tu escalado y listo.' },
      { n: '03', t: 'El ranking se arma solo', d: 'yourpr ordena por escalado y desempeño, reparte los puntos y actualiza el acumulado del mes.' },
    ],
  },

  cinta: ['Snatch', 'Clean & Jerk', 'Back Squat', 'Fran', 'Murph', 'AMRAP', 'EMOM', 'Deadlift', 'Muscle-up', 'Thruster', 'Front Squat', 'Grace', 'Row', 'Assault Bike', 'Wall Ball'],

  descarga: {
    etiqueta: 'Descarga',
    titulo: 'Muy pronto en las tiendas',
    sub: 'Estamos terminando la revisión de App Store y Google Play. Déjanos tu correo abajo y te avisamos el día que salga.',
    pronto: 'Próximamente',
    ios: { arriba: 'Pronto en el', abajo: 'App Store' },
    android: { arriba: 'Pronto en', abajo: 'Google Play' },
    nota: '¿Tienes un Box/Gym y quieres usar yourpr desde el día uno? Escríbenos y te damos de alta para la primera camada de gimnasios.',
    notaCta: 'Escríbenos',
  },

  contacto: {
    etiqueta: 'Contacto',
    titulo: 'Hablemos de tu gimnasio',
    sub: 'Cuéntanos qué necesitas y te respondemos al correo que nos dejes. Normalmente contestamos el mismo día.',
    nombre: 'Nombre',
    nombrePh: 'Cómo te llamas',
    correo: 'Correo',
    correoPh: 'tucorreo@ejemplo.com',
    gimnasio: 'Box/Gym',
    gimnasioPh: 'Opcional',
    asunto: 'Motivo',
    asuntos: ['Quiero yourpr en mi gimnasio', 'Soy atleta y tengo una duda', 'Soporte técnico', 'Otro'],
    mensaje: 'Mensaje',
    mensajePh: 'Cuántos socios tiene tu Box/Gym, qué necesitas resolver…',
    enviar: 'Enviar mensaje',
    enviando: 'Enviando…',
    exito: '¡Listo! Tu mensaje salió. Te respondemos a tu correo lo antes posible.',
    error: 'No se pudo enviar. Escríbenos directo a',
    otroCanal: 'O escríbenos directo a',
    errores: {
      nombre: 'Escribe tu nombre.',
      correo: 'Escribe un correo válido.',
      mensaje: 'Cuéntanos algo más (mínimo 10 caracteres).',
    },
  },

  pie: {
    tagline: 'Rutinas, scores, records personales y competencias para gimnasios.',
    producto: 'Producto',
    legal: 'Legal',
    contacto: 'Contacto',
    privacidad: 'Política de privacidad',
    eliminar: 'Eliminar tu cuenta',
    soporte: 'Soporte',
    hechoPor: 'Un producto de',
    derechos: 'Todos los derechos reservados.',
  },

  legal: {
    volver: 'Volver al inicio',
    actualizado: 'Última actualización: 30 de agosto de 2026',
    indice: 'En esta página',
  },
};

export type Textos = typeof es;

import type { Legal } from './legal.tipos';

const CORREO = 'mcabreracto@techsolutionsgt.dev';
const MAILTO = `<a href="mailto:${CORREO}">${CORREO}</a>`;

export const legalEs: Legal = {
  privacidad: {
    titulo: 'Política de privacidad',
    entradilla:
      'yourpr es una app para gimnasios: guarda la programación del día, los resultados de cada clase, los records personales (PR) y las competencias. Esta política explica qué datos guardamos, por qué, y cómo puedes borrarlos.',
    bloques: [
      {
        tipo: 'aviso',
        titulo: 'En corto',
        texto:
          'Solo guardamos lo necesario para que la app funcione. No vendemos ni compartimos tus datos con anunciantes, no hay publicidad y no hay rastreo entre apps. Puedes borrar tu cuenta y todo tu historial desde la app, sin pedírselo a nadie.',
      },
      { tipo: 'h2', id: 'responsable', texto: 'Quién es responsable' },
      {
        tipo: 'p',
        texto: `El responsable del tratamiento es <strong>Tech Solutions GT, Sociedad Anónima</strong>, desarrollador de yourpr. Para cualquier consulta sobre tus datos escribe a ${MAILTO}.`,
      },
      { tipo: 'h2', id: 'datos', texto: 'Qué datos guardamos' },
      {
        tipo: 'tabla',
        encabezados: ['Dato', 'Para qué'],
        filas: [
          ['Nombre y correo', 'Identificarte y que puedas entrar a tu cuenta.'],
          ['Foto de perfil (opcional)', 'Que tus compañeros de gimnasio te reconozcan en el ranking.'],
          [
            'Perfil: usuario, teléfono, fecha de nacimiento, género, altura, peso y biografía',
            'Todos opcionales salvo el nombre. Sirven para las categorías de las competencias y para calcular tus marcas relativas al peso corporal.',
          ],
          [
            'Tu entrenamiento: records personales, resultados de las clases, inscripciones y resultados de competencias',
            'Es el contenido de la app: tu historial, el ranking del día y las tablas de las competencias.',
          ],
          [
            'Tu relación con el gimnasio: rol, fechas de membresía y pagos registrados por el administrador',
            'Que el gimnasio sepa si tu membresía está vigente. Los pagos los registra el gimnasio; yourpr no procesa cobros ni guarda datos de tarjetas.',
          ],
        ],
      },
      {
        tipo: 'p',
        texto:
          'La app pide permiso de <strong>cámara</strong> y <strong>galería de fotos</strong> únicamente cuando eliges o tomas tu foto de perfil, o cuando subes el comprobante de un pago. No accedemos a tus fotos en ningún otro momento.',
      },
      {
        tipo: 'p',
        texto:
          'yourpr <strong>no</strong> recoge tu ubicación, no lee tu agenda de contactos, no usa herramientas de analítica ni publicidad, y no incluye ningún SDK que te siga por otras apps o sitios web.',
      },
      { tipo: 'h2', id: 'proveedores', texto: 'Si entras con Google o con Apple' },
      {
        tipo: 'p',
        texto:
          'Si eliges “Continuar con Google” o “Continuar con Apple”, ese proveedor nos entrega tu correo y tu nombre para crear la cuenta. Nada más: no recibimos tu contraseña ni el resto de tu información con ellos.',
      },
      {
        tipo: 'p',
        texto:
          'Si usas Apple y activas <strong>“Ocultar mi correo”</strong>, solo veremos la dirección de reenvío que Apple genera; funciona igual y tu correo real nunca llega a nuestros servidores.',
      },
      { tipo: 'h2', id: 'quien-ve', texto: 'Quién puede ver tus datos' },
      {
        tipo: 'lista',
        items: [
          '<strong>Tú</strong>, siempre y todo.',
          '<strong>Los administradores y coaches de tu gimnasio</strong>: tu nombre, tu foto, tus resultados de las clases, tus records y el estado de tu membresía. Es lo que necesitan para programar, validar resultados y llevar el control de pagos.',
          '<strong>Tus compañeros del mismo gimnasio</strong>: tu nombre, tu foto y tus resultados en los rankings y competencias. Puedes marcar tu perfil como no público desde Editar perfil.',
        ],
      },
      { tipo: 'p', texto: 'No compartimos datos con nadie más, salvo que la ley lo exija.' },
      { tipo: 'h2', id: 'donde', texto: 'Dónde viven los datos' },
      {
        tipo: 'p',
        texto:
          'La base de datos y los archivos están alojados en <a href="https://supabase.com/privacy" target="_blank" rel="noopener">Supabase</a>, que a su vez usa infraestructura de Amazon Web Services. La conexión entre la app y el servidor va siempre cifrada (HTTPS).',
      },
      { tipo: 'h2', id: 'cuanto', texto: 'Cuánto tiempo los guardamos' },
      {
        tipo: 'p',
        texto:
          'Mientras tengas cuenta. Cuando la borras, se eliminan de inmediato tu perfil, tus records, tus resultados, tus inscripciones y tus fotos. Lo que programaste o registraste para el gimnasio (rutinas, pagos que cobraste como administrador) se conserva sin tu nombre, porque le pertenece al gimnasio y no a tu cuenta.',
      },
      { tipo: 'h2', id: 'borrar', texto: 'Borrar tu cuenta' },
      {
        tipo: 'aviso',
        titulo: 'Desde la app',
        texto:
          'Entra a <strong>Perfil → Eliminar mi cuenta</strong>. Te pedimos escribir ELIMINAR para confirmar y el borrado es inmediato y definitivo. No hace falta escribirnos ni esperar aprobación. El detalle completo está en <a href="/eliminar-cuenta">Eliminar tu cuenta</a>.',
      },
      {
        tipo: 'p',
        texto: `Si perdiste el acceso a tu cuenta y necesitas que la borremos nosotros, escríbenos a ${MAILTO} desde el correo con el que te registraste y lo hacemos dentro de los 30 días siguientes.`,
      },
      { tipo: 'h2', id: 'derechos', texto: 'Tus derechos' },
      {
        tipo: 'p',
        texto:
          'Puedes ver y corregir tus datos desde Editar perfil, exportarlos pidiéndolos por correo, y borrarlos cuando quieras. Si crees que algo se está usando mal, escríbenos y lo revisamos.',
      },
      { tipo: 'h2', id: 'menores', texto: 'Menores de edad' },
      {
        tipo: 'p',
        texto:
          'yourpr está pensada para mayores de 13 años. Si un gimnasio inscribe a un menor, debe hacerlo con el consentimiento de su padre, madre o tutor, quien puede pedirnos el borrado de la cuenta en cualquier momento.',
      },
      { tipo: 'h2', id: 'cambios', texto: 'Cambios a esta política' },
      {
        tipo: 'p',
        texto:
          'Si cambiamos algo importante, actualizamos la fecha de arriba y lo avisamos dentro de la app antes de que entre en vigor.',
      },
    ],
  },

  eliminar: {
    titulo: 'Eliminar tu cuenta',
    entradilla:
      'Esta página explica cómo borrar tu cuenta de <strong>yourpr</strong> (com.techsolutiosgt.yourpr) y qué pasa con tus datos cuando lo haces. Puedes hacerlo tú mismo desde la app, sin pedir permiso a nadie.',
    bloques: [
      {
        tipo: 'aviso',
        titulo: 'El borrado es inmediato y definitivo',
        texto:
          'No hay periodo de gracia ni papelera: una vez confirmas, tu cuenta y tu historial de entrenamiento desaparecen y no se pueden recuperar.',
      },
      { tipo: 'h2', id: 'desde-la-app', texto: 'Opción 1 · Desde la app (recomendado)' },
      {
        tipo: 'pasos',
        items: [
          { t: 'Abre yourpr e inicia sesión', d: 'Con el mismo método que usas siempre: correo, Google o Apple.' },
          { t: 'Ve a la pestaña Perfil', d: 'Es la última del menú inferior; en pantallas anchas está en la barra lateral.' },
          { t: 'Toca “Eliminar mi cuenta”', d: 'Está al final de la pantalla de perfil, en rojo.' },
          { t: 'Escribe ELIMINAR y confirma', d: 'Te pedimos escribir la palabra completa para que no pase por accidente. Al confirmar, el borrado se ejecuta de una vez y se cierra la sesión.' },
        ],
      },
      { tipo: 'h2', id: 'por-correo', texto: 'Opción 2 · Por correo' },
      {
        tipo: 'p',
        texto: `Si perdiste el acceso a tu cuenta o no puedes entrar a la app, escríbenos a ${MAILTO} <strong>desde el correo con el que te registraste</strong>, con el asunto “Eliminar mi cuenta”.`,
      },
      {
        tipo: 'p',
        texto:
          'Verificamos que la solicitud viene de la persona dueña de la cuenta y completamos el borrado dentro de los <strong>30 días</strong> siguientes. Te confirmamos por el mismo correo cuando esté hecho.',
      },
      { tipo: 'h2', id: 'que-se-borra', texto: 'Qué se borra' },
      {
        tipo: 'lista',
        items: [
          'Tu cuenta de acceso y tu correo.',
          'Tu perfil completo: nombre, usuario, foto, teléfono, fecha de nacimiento, género, altura, peso y biografía.',
          'Todos tus records personales (PR) y su histórico.',
          'Todos tus resultados de clases y de competencias.',
          'Tus inscripciones a competencias y tus invitaciones de equipo.',
          'Tu vínculo con el gimnasio: rol, membresías y los comprobantes de pago que hayas subido.',
          'Tus notificaciones y las fotos que hayas subido al almacenamiento.',
        ],
      },
      { tipo: 'h2', id: 'que-se-conserva', texto: 'Qué se conserva y por qué' },
      {
        tipo: 'p',
        texto:
          'Lo que creaste <strong>para el gimnasio</strong> y no para tu cuenta se queda, pero <strong>sin tu nombre</strong>: se desliga de tu identidad y ya no se puede volver a asociar contigo.',
      },
      {
        tipo: 'tabla',
        encabezados: ['Qué queda', 'Por qué'],
        filas: [
          [
            'Rutinas y competencias que programaste como coach o administrador',
            'Le pertenecen al gimnasio: si se borraran, el resto de socios perdería su propio historial.',
          ],
          [
            'Pagos y membresías que registraste como administrador de otros socios',
            'Son el registro contable del gimnasio, no tus datos personales.',
          ],
          [
            'Copias de seguridad de la base de datos',
            'Se sobrescriben solas en un máximo de 30 días. Nadie las consulta salvo para restaurar un desastre.',
          ],
        ],
      },
      { tipo: 'h2', id: 'dudas', texto: '¿Dudas antes de borrar?' },
      {
        tipo: 'p',
        texto: `Si solo quieres dejar de aparecer en los rankings, no hace falta borrar la cuenta: en <strong>Editar perfil</strong> puedes marcar tu perfil como no público. Si tienes cualquier otra duda, escríbenos a ${MAILTO} y te ayudamos antes de que tomes la decisión.`,
      },
    ],
  },

  soporte: {
    titulo: 'Soporte',
    entradilla:
      'Todo lo que necesitas para resolver un problema con yourpr. Si nada de esto te sirve, escríbenos y te contestamos, normalmente el mismo día.',
    bloques: [
      { tipo: 'h2', id: 'contacto', texto: 'Contacto directo' },
      {
        tipo: 'p',
        texto: `Escríbenos a ${MAILTO} contándonos qué pasó, desde qué teléfono y en qué pantalla. Con eso solemos resolverlo en el primer correo.`,
      },
      { tipo: 'h2', id: 'faq', texto: 'Preguntas frecuentes' },
      {
        tipo: 'pasos',
        items: [
          {
            t: 'No puedo entrar / no me aparece mi gimnasio',
            d: 'Para usar yourpr tu gimnasio tiene que estar dado de alta y el administrador debe agregarte a su lista. Pídeselo a tu coach; si el gimnasio todavía no usa yourpr, escríbenos y lo damos de alta.',
          },
          {
            t: 'Subí mal un resultado',
            d: 'Puedes editarlo desde la pantalla del día mientras el coach no lo haya validado. Si ya está validado, pídeselo a tu coach o al administrador del gimnasio.',
          },
          {
            t: 'Quiero cambiar de kilos a libras',
            d: 'En Perfil → Editar perfil eliges la unidad. Toda la app se adapta, incluidos los rankings y tus PRs anteriores.',
          },
          {
            t: 'Mi PR no aparece en el ranking',
            d: 'Los rankings de un WOD solo consideran los bloques con ranking habilitado. Los PRs viven en tu perfil y en la pestaña de records, no en el leaderboard del día.',
          },
          {
            t: 'Quiero borrar mi cuenta',
            d: 'Perfil → Eliminar mi cuenta. Los pasos completos están en la página Eliminar tu cuenta.',
          },
        ],
      },
      { tipo: 'h2', id: 'gimnasios', texto: '¿Tienes un gimnasio?' },
      {
        tipo: 'p',
        texto:
          'Escríbenos desde el <a href="/#contacto">formulario de contacto</a> y te damos de alta. Te acompañamos en la carga inicial de socios y en la primera semana de programación.',
      },
    ],
  },
};

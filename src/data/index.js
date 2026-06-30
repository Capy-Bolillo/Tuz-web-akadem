import tuzImg from '@assets/person/tuz.webp';
import damarisImg from '@assets/person/damaris.webp';
import paulaImg from '@assets/person/paula.webp';
import keniaImg from '@assets/person/kenia.webp';
import rosaImg from '@assets/person/Rosa-Martínez.jpeg';

const ringNavy = "linear-gradient(135deg, #1B2D6B, #2B3F86)";
const ringGold = "linear-gradient(135deg, #C9A84C, #E0C878)";
const ringGray = "linear-gradient(135deg, #C2C7D2, #DDE1E8)";

export const SERVICES = [
  {
    title: "Diagnóstico Integral Institucional",
    ayuda:
      "Identifica fallas estructurales en comunicación, trato y percepción del servicio — la base de toda mejora posterior.",
    incluye: [
      "Observación de canales de comunicación escolar",
      "Encuestas a padres de familia y personal",
      "Entrevistas a directivos y docentes",
      "Evaluación de experiencia y satisfacción",
      "Mapa de problemáticas clave",
    ],
    noIncluye:
      "Diseño de soluciones · Capacitación · Implementación de cambios.",
  },
  {
    title: "Capacitación en Atención, Trato y Comunicación Escolar",
    ayuda:
      "Mejora la calidad del servicio humano, reduce conflictos y aumenta la claridad en la comunicación con las familias.",
    incluye: [
      "Comunicación asertiva en el entorno escolar",
      "Manejo de quejas y conflictos",
      "Escucha activa y empatía",
      "Simulación de casos reales",
    ],
    noIncluye:
      "Diseño de protocolos · Evaluación institucional · Implementación operativa.",
  },
  {
    title: "Diseño de Protocolos de Atención y Seguimiento Escolar",
    ayuda:
      "Reduce la improvisación y asegura una atención ordenada, rápida y consistente en toda la escuela.",
    incluye: [
      "Flujos de atención para solicitudes, quejas e incidencias",
      "Tiempos de respuesta definidos",
      "Roles y responsabilidades",
      "Formatos de seguimiento",
    ],
    noIncluye:
      "Capacitación del personal · Ejecución diaria · Evaluación de resultados.",
  },
  {
    title: "Estrategia de Experiencia y Fidelización de Familias",
    ayuda:
      "Incrementa la satisfacción y la permanencia mejorando la experiencia en momentos clave del ciclo escolar.",
    incluye: [
      "Diseño de experiencia escolar por etapas",
      "Estrategias de integración escuela–familia",
      "Comunicación emocional institucional",
      "Mejoras en puntos de contacto clave",
    ],
    noIncluye: "Diagnóstico inicial · Protocolos internos · Capacitación.",
  },
  {
    title: "Estrategia de Imagen y Posicionamiento Institucional",
    ayuda:
      "Mejora la reputación de la escuela y genera mayor confianza en la calidad de su servicio educativo.",
    incluye: [
      "Mensajes clave de identidad institucional",
      "Estrategia de comunicación externa",
      "Lineamientos para redes sociales escolares",
      "Recomendaciones de posicionamiento comunitario",
    ],
    noIncluye: "Atención interna · Diagnóstico · Capacitación o protocolos.",
  },
  {
    title: "Evaluación del Clima Organizacional Escolar",
    ayuda:
      "Detecta factores que afectan la motivación, la colaboración y el desempeño del equipo — y, con ello, el servicio a las familias.",
    incluye: [
      "Encuestas de clima laboral",
      "Entrevistas al personal",
      "Identificación de áreas de conflicto",
      "Análisis de liderazgo y trabajo en equipo",
      "Informe de resultados y recomendaciones",
    ],
    noIncluye:
      "Capacitación · Mediación de conflictos · Implementación de mejoras.",
  },
];

export const TEAM = [
  {
    name: "Ángel Eduardo Tuz Rejón",
    tag: "Dirección",
    role: "Director General. Guía y supervisa la empresa, toma decisiones estratégicas y representa a AKADEM.",
    ring: ringNavy,
    initials: "AT",
    initColor: "#1B2D6B",
    img: tuzImg,
  },
  {
    name: "Damaris Izel Miss Arcos",
    tag: "Innovación",
    role: "Especialista en Innovación y Evaluación Educativa. Evalúa procesos y propone estrategias innovadoras.",
    ring: ringGold,
    initials: "DM",
    initColor: "#B8923A",
    img: damarisImg,
  },
  {
    name: "Paula Estefanía Pech Lugo",
    tag: "Comunicación",
    role: "Especialista en Marketing y Comunicación. Fortalece la imagen de AKADEM y su difusión.",
    ring: ringNavy,
    initials: "PP",
    initColor: "#1B2D6B",
    img: paulaImg,
  },
  {
    name: "Kenia Estrella Álvarez Castro",
    tag: "Consultoría",
    role: "Consultora Educativa. Realiza diagnósticos y propone mejoras en los procesos de enseñanza y aprendizaje.",
    ring: ringGold,
    initials: "KA",
    initColor: "#B8923A",
    img: keniaImg,
  },
  {
    name: "Rosa Martínez",
    tag: "Vinculación",
    role: "Gestora de Desarrollo y Vinculación Empresarial. Crea alianzas con escuelas y busca oportunidades de expansión.",
    ring: ringNavy,
    initials: "RM",
    initColor: "#1B2D6B",
    img: rosaImg,
  },
  {
    name: "Vacante",
    tag: "Finanzas",
    role: "Administrador/a Financiero/a. Lleva el control económico: presupuestos, pagos y documentación.",
    ring: ringGray,
    initials: "?",
    initColor: "#9AA1AE",
  },
];

export const VALORES = [
  {
    n: "01",
    title: "Profesionalismo",
    desc: "Preparación, responsabilidad y calidad en cada servicio.",
  },
  {
    n: "02",
    title: "Integridad",
    desc: "Ética, honestidad y transparencia en cada proceso.",
  },
  {
    n: "03",
    title: "Innovación",
    desc: "Soluciones creativas para los desafíos educativos.",
  },
  {
    n: "04",
    title: "Excelencia",
    desc: "Resultados de alto impacto mediante la mejora continua.",
  },
  {
    n: "05",
    title: "Desarrollo",
    desc: "Crecimiento del talento académico, personal y profesional.",
  },
];

export const RESENAS = [
  {
    quote: "Desde el primer contacto sentí que entendían exactamente lo que necesitaba. El proceso fue claro, ordenado y los resultados superaron mis expectativas.",
    author: "Directora general",
    org: "Institución privada · Cancún, Q. Roo",
    stars: 5,
  },
  {
    quote: "Lo que más me sorprendió fue la velocidad. En pocas semanas ya teníamos un diagnóstico completo y un plan de acción concreto. El equipo de AKADEM sabe lo que hace.",
    author: "Coordinador académico",
    org: "Centro educativo · Playa del Carmen, Q. Roo",
    stars: 5,
  },
  {
    quote: "Llevábamos meses buscando soluciones por nuestra cuenta sin resultados. AKADEM llegó, identificó el problema de fondo y nos dio herramientas reales para resolverlo.",
    author: "Subdirectora",
    org: "Escuela bilingüe · Mérida, Yuc.",
    stars: 5,
  },
  {
    quote: "Muy profesionales y cercanos a la vez. No te venden fórmulas genéricas, diseñan algo para tu institución específicamente. Totalmente recomendados.",
    author: "Director administrativo",
    org: "Institución educativa · Q. Roo",
    stars: 5,
  },
  {
    quote: "El taller de atención y comunicación cambió la dinámica de nuestro equipo. Los padres lo notaron y empezamos a recibir comentarios positivos que antes no teníamos.",
    author: "Coordinadora de vinculación",
    org: "Colegio privado · Cancún, Q. Roo",
    stars: 5,
  },
  {
    quote: "Trabajo serio, resultados concretos. Si tu escuela necesita mejorar la relación con las familias, AKADEM es la respuesta. No lo duden.",
    author: "Directora fundadora",
    org: "Instituto educativo · Q. Roo",
    stars: 5,
  },
];

export const CASOS = [
  {
    index: "01",
    tag: "Diagnóstico + Fidelización",
    location: "Institución privada · Cancún, Q. Roo",
    headline: "Matrículas en aumento, familias que no se van",
    metric: "7 de 8",
    metricLabel: "familias renuevan cada ciclo",
    quote: "En cuanto empezamos a trabajar con AKADEM el cambio fue notorio. Hoy varias familias nos recomiendan solas.",
  },
  {
    index: "02",
    tag: "Capacitación en Atención",
    location: "Escuela bilingüe · Playa del Carmen, Q. Roo",
    headline: "De la queja constante al reconocimiento de la comunidad",
    metric: "–50 %",
    metricLabel: "quejas de padres en un semestre",
    quote: "El equipo aprendió a atender a los padres con calidez y claridad. Hoy somos la institución más recomendada en la zona.",
  },
  {
    index: "03",
    tag: "Diseño de Protocolos",
    location: "Institución educativa · Mérida, Yuc.",
    headline: "En tres semanas ordenamos lo que tardamos años en descuidar",
    metric: "3 sem.",
    metricLabel: "para entregar protocolos completos",
    quote: "Con los protocolos de AKADEM, el equipo trabaja con una sola voz. Las familias lo notaron desde el primer día.",
  },
  {
    index: "04",
    tag: "Imagen y Posicionamiento",
    location: "Centro educativo · Quintana Roo",
    headline: "Más consultas de nuevas familias que en cualquier año anterior",
    metric: "×2",
    metricLabel: "solicitudes de nuevas familias",
    quote: "AKADEM nos ayudó a comunicar lo que realmente somos. Los resultados llegaron más rápido de lo que esperaba.",
  },
];

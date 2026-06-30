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

export const TESTIMONIALS = [
  {
    tag: "Diagnóstico Institucional",
    school: "Institución privada · Cancún, Q. Roo",
    headline: "Familias insatisfechas y matrícula en riesgo",
    body: "Padres reportaban atención fría e inconsistente en recepción. El diagnóstico integral reveló los puntos de quiebre exactos: encuesta a padres, entrevistas al personal y mapa completo de flujos de atención.",
    impact: ["Puntos críticos identificados", "Base sólida para rediseñar la atención", "Plan entregado en 3 semanas"],
  },
  {
    tag: "Capacitación",
    school: "Escuela bilingüe · Playa del Carmen, Q. Roo",
    headline: "Sin herramientas, el personal convierte quejas en conflictos",
    body: "El equipo administrativo carecía de protocolo para situaciones difíciles con padres. Taller de comunicación asertiva y simulación de casos reales con todo el personal del colegio.",
    impact: ["Protocolo claro ante situaciones difíciles", "Reducción de conflictos con familias", "Mejor clima en el equipo"],
  },
  {
    tag: "Protocolos de Atención",
    school: "Institución educativa · Mérida, Yuc.",
    headline: "La improvisación cotidiana erosiona la confianza institucional",
    body: "Sin flujos definidos, cada empleado resolvía a su criterio: respuestas tardías, mensajes contradictorios, familias desorientadas. Diseño de protocolos, flujos de respuesta y formatos de seguimiento a la medida del colegio.",
    impact: ["Atención estandarizada y predecible", "Tiempos de respuesta definidos", "Documentación que permanece en el equipo"],
  },
];

import type { Project, Experience, Education } from "../types";

export const projects: Project[] = [
  {
    name: "ThePromptBook",
    image: "img/thepromptbook.png",
    description:
      "Una aplicación web que permite a los usuarios crear y compartir prompts para modelos de IA.",
    href: "https://www.thepromptbook.cloud",
  },
];

export const experiences: Experience[] = [
  {
    role: "Desarrollador Fullstack",
    company: "ThePromptBook",
    startDate: new Date("2025-09-01"),
    endDate: new Date(),
    description: `
Construí una aplicación web SPA utilizando el stack FARM (FastAPI, React, MongoDB).
Desarrollé una API RESTful con FastAPI (Python), implementando operaciones CRUD y modelos de datos flexibles en MongoDB para almacenar prompts, metadatos de LLMs y comentarios.
Creé una interfaz reactiva con React.js, integrando renderizado de Markdown para visualizar correctamente las respuestas de código de los LLMs.
Gestioné todo el ciclo de vida del desarrollo durante 5 meses, desde la concepción hasta el despliegue en producción.
Tecnologías: Python, FastAPI, React, MongoDB, TypeScript, TailwindCSS, Git.`,
  },
  {
    role: "Pasante PMO/OPEX",
    company: "WTW Colombia",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2025-01-31"),
    description: `
Apoyé al equipo de PMO y operaciones diseñando e implementando soluciones RPA utilizando Python, Power BI y Power Automate para optimizar procesos operativos y mejorar la eficiencia.
Realicé y lideré reuniones de seguimiento regulares con equipos de desarrollo, empleando metodologías ágiles, para monitorear el progreso del desarrollo de aplicaciones B2B.
Creé y presenté informes integrales de estado del proyecto, incorporando indicadores clave de rendimiento (KPIs) para rastrear el progreso y comunicar actualizaciones a los interesados.
Coordiné eficazmente con los equipos de Aseguramiento de Calidad, diseño y desarrollo para garantizar una alineación clara sobre los requisitos del proyecto y facilitar una progresión fluida del flujo de trabajo.
Automaticé el procesamiento de facturas utilizando Python, reduciendo el tiempo invertido en un 90%.
Construí una automatización del sistema de archivos para verificar la presencia de facturas, ahorrando el 80% del tiempo del equipo.`,
  },
];


export const educations: Education[] = [
  {
    title: "Ingeniería de Sistemas",
    institution: "Universidad EAN",
    startDate: new Date("2021-01-25"),
    endDate: new Date("2025-11-25"),
  },
];
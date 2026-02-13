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
    startDate: new Date("2024-09-01"),
    endDate: new Date(),
    description:
      "Diseñé e implementé una arquitectura monolítica basada en FastAPI y React, estructurando el backend por capas (routers, servicios y modelos) en el sitio: https://www.thepromptbook.cloud.\nDesarrollé una API RESTful con FastAPI (Python), implementando operaciones CRUD y modelos de datos flexibles en MongoDB para almacenar prompts, usando pytest y testcontainers como herramientas de testing.\nImplementé autenticación de usuarios y sistema de roles utilizando JWT.\nCreé una interfaz reactiva con React.js, utilizando React Testing Library y MSW para testing.\nContainericé la aplicación con Docker y gestioné su despliegue en un VPS mediante Dockploy, configurando variables de entorno, red interna y persistencia de base de datos.",
  },
  {
    role: "Pasante PMO/OPEX",
    company: "WTW Colombia",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2025-01-31"),
    description:
      "Apoyé al equipo de PMO y operaciones diseñando e implementando soluciones RPA utilizando Python, Power BI y Power Automate para optimizar procesos operativos y mejorar la eficiencia.\nRealicé y lideré reuniones de seguimiento regulares con equipos de desarrollo, empleando metodologías ágiles, para monitorear el progreso del desarrollo de aplicaciones B2B.\nCreé y presenté informes integrales de estado del proyecto, incorporando indicadores clave de rendimiento (KPIs) para rastrear el progreso y comunicar actualizaciones a los interesados.\nCoordiné eficazmente con los equipos de Aseguramiento de Calidad, diseño y desarrollo para garantizar una alineación clara sobre los requisitos del proyecto y facilitar una progresión fluida del flujo de trabajo.\nAutomaticé el procesamiento de facturas utilizando Python, reduciendo el tiempo invertido en un 90%.\nConstruí una automatización del sistema de archivos para verificar la presencia de facturas, ahorrando el 80% del tiempo del equipo.",
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

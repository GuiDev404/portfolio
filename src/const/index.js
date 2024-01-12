import hotel_00 from '../assets/images/hotel_00.jpeg'
import app_servicioPreview from '../assets/images/app_servicio.jpeg'
import gustaveDorePreview from '../assets/images/preview_gustave_dore_page.jpeg'
import flagsAppPreview from '../assets/images/preview_flags_app.png'
import taskAppPreview from '../assets/images/preview_task_net_core.jpeg'
import filmAppPreview from '../assets/images/film_app.jpeg'

export const TECHS = [
  'HTML',
  'CSS',
  'TailwindCSS',
  'Javascript',
  'ReactJS',
  'ChakraUI',
  'Bootstrap',
  'NodeJS',
  'ExpressJS',
  'GIT',
  'Github',
  'Postman/RapidAPIClient',
  'VS',
  'VSCode',
  'Vite/CRA',
  'ESLint/Standard',
  'Fetch/Axios',
  'React Query/SWR',
  'ASP .NET Core',
  '.NET Framework',
  'SQLServer',
  'SQLite',
]

export const PROYECTOS = [
  {
    title: "Sistema de Gestión Hotelera",
    description: "Brinda una solución integral para la administración eficiente de hoteles. Con una interfaz intuitiva y avanzadas funcionalidades, simplifica desde reservas hasta análisis de datos, brindando una gestión centralizada para establecimientos de cualquier tamaño.",
    img: hotel_00,
    links: ["", "http://168.196.255.94:20232/Identity/Account/Login"],
    tags: [".NET Core", "Razor", "MVC", "Roles", "Bootstrap", "JS", "JQuery"],
  },
  {
    title: "Wikipedia",
    description: "Versión más simple de la enciclopedia más grande del mundo, utilizando las APIs que ellos mismos ofrecen.",
    img: "https://raw.githubusercontent.com/GuiDev404/wikipedia-simple/main/src/assets/preview.jpeg",
    links: ["https://github.com/GuiDev404/wikipedia-simple", "https://wikipedia-simple.vercel.app/"],
    tags: ["ReactJS", "React Router DOM", "SWR", "TailwindCSS", "Zustand", "Debounce"],
  },
 
  {
    title: "Space X",
    description: "Listado de las misiones de SpaceX, cohetes usados y más detalles.",
    img: "https://raw.githubusercontent.com/GuiDev404/space-x-react/main/src/assets/preview.jpeg",
    links: ["https://github.com/GuiDev404/space-x-react", "https://react-space-x-missions.netlify.app/"],
    tags: ["ReactJS", "ChakraUI",  "React Icons","React Router DOM"],
  },
  {
    title: "FilAnima",
    description: "Es un buscador de series y películas con detalles de las mismas y la posibilidad de guardar listas localmente. Se utiliza la API de TMDB.",
    img: filmAppPreview,
    links: ["https://github.com/GuiDev404/film-anima", "https://anima-film.vercel.app/"],
    tags: ["ReactJS", "ChakraUI", "React Router DOM", "React modal sheet", "Local storage"],
  },
 
  {
    title: "Página tributo a Gustave Doré",
    description: "Tributo a Gustave Doré, ya que me gustan mucho sus ilustraciones y grabados. Además, esta fue la primera página que desplegué.",
    img: gustaveDorePreview,
    links: ["https://github.com/GuiDev404/gustave-dore-website", "https://guidev404.github.io/gustave-dore-website/"],
    tags: ["JS", "CSS", "HTML"],
  },
  {
    title: "E-commerce",
    description:"Funcionalidad básica de un e-commerce, utilizando una API falsa.",
    img: "https://raw.githubusercontent.com/GuiDev404/e-commerce-react/main/src/assets/preview.jpeg",
    links: ["https://github.com/GuiDev404/e-commerce-react", "https://e-commerce-react-guidev.netlify.app/"],
    tags: ["ReactJS", "React Router DOM", "Axios", "React Query", "Zustand", "Slide"],
  },
  {
    title: "Flag React",
    description:"Flag React es un buscador de las banderas de todos los países del mundo.",
    img: flagsAppPreview,
    links: ["https://github.com/GuiDev404/flags-react", "https://flags-react.vercel.app/"],
    tags: ["ReactJS", "React Router DOM", "Axios", "Skeleton"],
  },
  {
    title: "Servify",
    description:"App simple para gestionar servicios",
    img: app_servicioPreview,
    links: ["https://github.com/GuiDev404/tp-servicios", ""],
    tags: ["SweetAlert2", "Datatable", "Skeleton", "filtros", "JQuery", "ajax", ".NET Core"],
  },

  {
    title: "App de sorteos (v1)",
    description: "Aplicación para generar sorteos.",
    img: "https://raw.githubusercontent.com/GuiDev404/app-sorteo/main/preview.png",
    links: ["https://github.com/GuiDev404/app-sorteo", "https://sortea-te.netlify.app/"],
    tags: ["ReactJS", "TailwindCSS", "HTML a img", "Lectura de .xlsx", "React Hook Form"],
  },
  {
    title: "App de sorteos (v2)",
    description: "Aplicación para generar sorteos, guiando al usuario con pasos.",
    img: "https://raw.githubusercontent.com/GuiDev404/app-sorteo-with-steps/main/src/assets/preview.jpeg",
    links: ["https://github.com/GuiDev404/app-sorteo-with-steps"],
    tags: ["ReactJS", "Zustand", "ChakraUI"],
  },
  {
    title: "Gestor de tareas",
    description: "Aplicacion simple pero poderosa, para gestionar tareas de una forma comoda",
    img: taskAppPreview,
    links: ["https://github.com/GuiDev404/tp-tareas-app"],
    tags: [".NET Core", "Razor", "MVC", "Bootstrap", "JS", "JQuery"],
  },

  // {
  //   title: "HEIMDAL ᛉ",
  //   description: "HEIMDAL es una aplicación para saber el clima en tu ubicación o en cualquier lugar que desees.",
  //   img: heimdalPreview,
  //   links: ["https://github.com/GuiDev404/app-clima", "https://heimdal-clima.vercel.app/"],
  //   tags: ["ReactJS", "API Geolocalización"],
  // },

   // {
  //   title: "uGiffy",
  //   description: "Buscador de gifs, creado con ReactJS, usando como servicio la API de Giphy",
  //   img: "https://miro.medium.com/max/720/1*4NXg63IZjClSQ7hiCt_eXA.webp",
  //   links: ["github", "live"],
  //   tags: ["JS", "ReactJS", "CSS", "HTML"],
  // },
];
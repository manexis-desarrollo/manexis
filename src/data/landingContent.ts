export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  chips: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  highlight: boolean;
  features: string[];
  note: string;
};

export type ProjectTech = {
  name: string;
  icon?: string;
};

export type Project = {
  title: string;
  result: string;
  stack: string;
  tech: ProjectTech[];
};

export type Faq = {
  q: string;
  a: string;
};

export const whatsappLink = "https://wa.me/525560056607?text=Hola%20MANEXIS%2C%20quiero%20una%20propuesta";

export const navLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Trabajo", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
  { label: "FAQ", href: "#faq" }
];

export const services: Service[] = [
  {
    title: "Productos web a medida",
    description: "Portales, paneles internos y experiencias que elevan tus operaciones sin plantillas genéricas.",
    chips: ["Astro/React", "Arquitectura API", "Accesibilidad"]
  },
  {
    title: "Integraciones y automatización",
    description: "Conectamos ERP, CRM, facturación y tus herramientas actuales para que los datos fluyan.",
    chips: ["APIs REST/GraphQL", "ETL ligero", "Workflows gamificados"]
  },
  {
    title: "Mantenimiento por periodos",
    description: "Planes recurrentes con SLA claro: estabilizamos, monitoreamos y evolucionamos tu plataforma.",
    chips: ["Observabilidad", "Mejoras evolutivas", "QA continuo"]
  }
];

export const pricing: PricingPlan[] = [
  {
    name: "Despegue",
    price: "$12,000 MXN",
    cadence: "desde / proyecto",
    highlight: false,
    features: [
      "Landing o micrositio listo en 2-3 semanas",
      "Copy + UX listos para captar leads",
      "Optimización para Netlify y SEO técnico",
      "1 sprint de ajustes incluidos"
    ],
    note: "Ideal para validar rápido"
  },
  {
    name: "Crecimiento",
    price: "$28,000 MXN",
    cadence: "desde / proyecto",
    highlight: true,
    features: [
      "Backoffice + componentes a medida",
      "Integraciones con APIs o ERP",
      "Dashboard con métricas clave",
      "Soporte trimestral incluido"
    ],
    note: "Nuestro plan más elegido"
  },
  {
    name: "Enterprise",
    price: "A la medida",
    cadence: "retainer / mensual",
    highlight: false,
    features: [
      "Roadmap conjunto y células dedicadas",
      "SLA, monitoreo y alertas 24/7",
      "Automatizaciones y QA continuo",
      "Gobernanza de releases y seguridad"
    ],
    note: "Para operaciones críticas"
  }
];

export const projects: Project[] = [
  {
    title: "Portal de onboarding B2B",
    result: "Redujimos tiempos de alta de clientes de 5 días a 36 horas con flujos guiados.",
    stack: "Astro + Supabase + Tailwind",
    tech: [
      { name: "Astro", icon: "A" },
      { name: "Supabase", icon: "S" },
      { name: "Tailwind", icon: "T" }
    ]
  },
  {
    title: "Control operativo para campo",
    result: "Ciclos de captura 40% más rápidos con vistas móviles, badges y logros de equipo.",
    stack: "React + API Node + Postgres",
    tech: [
      { name: "React", icon: "R" },
      { name: "Node", icon: "N" },
      { name: "Postgres", icon: "P" }
    ]
  },
  {
    title: "Automatización de reportes",
    result: "Reportes semanales sin esfuerzo: datos consolidados y enviados automáticamente al equipo.",
    stack: "APIs REST + ETL ligero",
    tech: [
      { name: "APIs", icon: "API" },
      { name: "Node", icon: "N" }
    ]
  }
];

export const faqs: Faq[] = [
  {
    q: "¿Trabajan con empresas pequeñas y grandes?",
    a: "Sí. Adaptamos el alcance: desde un sitio de lanzamiento hasta plataformas con SLA y gobernanza."
  },
  {
    q: "¿Cómo funciona el mantenimiento por periodos?",
    a: "Definimos un paquete de horas y entregables por trimestre, con métricas de salud, soporte y mejoras evolutivas."
  },
  {
    q: "¿Pueden integrar con mis sistemas actuales?",
    a: "Integramos con ERP, CRM, pasarelas de pago y servicios internos a través de APIs REST o GraphQL."
  },
  {
    q: "¿En qué stack trabajan?",
    a: "Preferimos Astro + Tailwind para velocidad en front, y Node/TypeScript para APIs. También trabajamos con stacks existentes si ya están en producción."
  }
];

export const techImageMap: Record<string, string> = {
  Astro: "/images/logos/astro.png",
  Mongo: "/images/logos/mongo.png",
  Node: "/images/logos/node.png",
  Postgres: "/images/logos/postgres.png",
  React: "/images/logos/react.png",
  Tailwind: "/images/logos/tailwind.png",
  Vue: "/images/logos/vue.png"
};

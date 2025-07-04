interface Exp  {
    position: string;
    company: string;
    description: string;
    date: string;
    goals: string[]
    tech?: string[],
    demoLink?: string;
    githubLink?: string;
}

const experienceList: Exp[] = [
    {
        position: 'Desarrollador FullStack para Cencosud',
        company: 'BC Tecnología',
        description: 'En mi rol como desarrollador FullStack para Cencosud, me enfoco en el desarrollo y mantenimiento de productos digitales, colaborando con equipos multidisciplinarios para entregar soluciones tecnológicas eficientes y de alta calidad.',
        date: 'Octubre 2024 - Enero 2025',
        goals: ['Desarrollo exitoso de aplicación interna para el área de Marketing, cumpliendo con los plazos de entrega por encima de lo esperado y obteniendo un producto de muy alta calidad.', 'Cumplimiento de estándares de desarrollo según los lineamientos del área.', 'Solución de incidencias reportadas en proyectos de cara al cliente.'],
        tech: [ "React", "Next.js", "Nx", "Astro", "Nest.js", "MongoDB",  "MySQL", "AWS", "Github", "Gitlab", "Jira" ],
    },
    {
        position: 'Líder Técnico',
        company: 'TCIT Cloud Solutions',
        description: 'Lideré una célula de desarrollo a medida, combinando dirección técnica, gestión de equipo y trato directo con clientes.',
        date: 'Agosto 2023 - Abril 2024',
        goals: ['Entregué proyectos a medida puntuales y de alta calidad, superando expectativas de funcionalidad y satisfacción.', 'Fomenté relaciones sólidas con clientes, logrando alta satisfacción y retroalimentación positiva continua.', 'Mejoré la calidad del equipo mediante revisiones de código detalladas y fomentando buenas prácticas.'],
    },
    {
        position: 'Ingeniero en Desarrollo Cloud',
        company: 'TCIT Cloud Solutions',
        description: 'Diseñé e implementé soluciones web robustas y escalables, participando activamente en frontend y backend.',
        date: 'Octubre 2020 - Agosto 2023',
        goals: ['Entregué proyectos dentro de plazo y presupuesto, generando confianza y nuevas oportunidades con los clientes.', 'Implementé funciones clave que mejoraron la usabilidad y elevaron la satisfacción del usuario.', 'Optimizé una plataforma automotriz, reduciendo los tiempos de carga en un 40% con mejoras de código y recursos.'],
        tech: ["Node.js", "NestJS", "React", "Angular", "Typescript", "SQL", "Docker", "Firebase", "AWS", "GCP", "Heroku", "Git" ],
        // demoLink: null,
        // githubLink: null
    }
]

export default experienceList;
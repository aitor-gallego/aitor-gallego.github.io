import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Github, Linkedin, Mail, Phone, ExternalLink, Code2, Database, Wrench, ChevronDown, MapPin } from 'lucide-react';

interface Translation {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translation = {
  name: {
    en: "Aitor Gallego",
    es: "Aitor Gallego"
  },
  subtitle: {
    en: "Software Developer",
    es: "Desarrollador de Software"
  },
  tagline: {
    en: "Passionate about development, always learning and improving.",
    es: "Apasionado por el desarrollo, siempre dispuesto a aprender y mejorar mis habilidades."
  },
  viewCode: {
    en: "View My Code",
    es: "Ver Mi Código"
  },
  about: {
    en: "About Me",
    es: "Sobre Mí"
  },
  aboutText: {
    en: "I’m a developer who values solid methodologies and best practices, always ready to learn and refine my skills. I strive to grow professionally and give my best in every project.",
    es: "Soy un programador que valora las buenas metodologías y prácticas, siempre dispuesto a aprender y perfeccionar mis habilidades. Busco crecer profesionalmente y dar lo mejor de mí en cada proyecto."
  },
  experience: {
    en: "Experience",
    es: "Experiencia"
  },
  education: {
    en: "Education",
    es: "Educación"
  },
  skills: {
    en: "Skills & Technologies",
    es: "Habilidades y Tecnologías"
  },
  projects: {
    en: "Projects",
    es: "Proyectos"
  },
  contact: {
    en: "Contact",
    es: "Contacto"
  },
  languages: {
    en: "Languages",
    es: "Idiomas"
  },
  phone: {
    en: "Phone",
    es: "Teléfono"
  },
  email: {
    en: "Email",
    es: "Email"
  }
};

const experienceData = [
  {
    period: "Mar 2025 – Jun 2025",
    company: "MindShore",
    role: {
      en: "Cross-platform application developer (Flutter)",
      es: "Desarrollador de aplicaciones multiplataforma (Flutter)"
    },
    details: [
      {
        en: "Applied Clean Architecture & SOLID",
        es: "Aplicación de Clean Architecture y principios SOLID"
      },
      {
        en: "Agile team collaboration",
        es: "Trabajo en equipo con metodologías ágiles"
      }
    ]
  },
  {
    period: "Mar 2023 – Jun 2023",
    company: "Colegio Gamarra",
    role: {
      en: "IT systems & networks technician",
      es: "Técnico en sistemas microinformáticos y redes"
    },
    details: [
      {
        en: "Deployed full network & hardware for tech classrooms",
        es: "Instalación completa de redes y equipos para aulas"
      },
      {
        en: "Configured systems, automated tasks & provided general support",
        es: "Configuración y mantenimiento de sistemas; automatización y soporte técnico"
      }
    ]
  }
];

const educationData = [
  {
    period: "2023–2025",
    title: {
      en: "Higher Vocational Degree in Cross-Platform Apps",
      es: "Desarrollo de Aplicaciones Multiplataformas"
    },
    institution: "IES Portada Alta, Málaga"
  },
  {
    period: "2021–2023",
    title: {
      en: "Higher Vocational Degree in IT Systems & Networks",
      es: "Sistemas Microinformáticos y Redes"
    },
    institution: "IES Belén, Málaga"
  }
];

const skillsData = {
  languages: {
    title: {
      en: "Languages & Frameworks",
      es: "Lenguajes & Frameworks"
    },
    items: ["C#", "Java", "Kotlin", "Dart (Flutter)", "Unity", "Avalonia UI"]
  },
  databases: {
    title: {
      en: "Databases",
      es: "Bases de datos"
    },
    items: ["MySQL", "MongoDB", "SQLite", "Firebase"]
  },
  tools: {
    title: {
      en: "Tools",
      es: "Herramientas"
    },
    items: ["Git & version control", "Linux scripting", ".NET ecosystem", "Android Studio"]
  }
};

const projectsData = [
  {
    title: "LUMINA",
    url: "https://github.com/aitor-gallego/Lumina",
    description: {
      en: "2D video game (TFG): multimedia modules, interfaces, services, data access",
      es: "Videojuego 2D (TFG): módulos multimedia, interfaces, servicios y acceso a datos"
    },
    technologies: ["C#", "Unity", "JSON", "AES256", "HMAC"]
  },
  {
    title: "EVELYN",
    url: "https://github.com/ursulacg/Evelyn",
    description: {
      en: "Team Android app (Kotlin + Jetpack Compose) for inventory management",
      es: "App Android en equipo (Kotlin + Jetpack Compose) para gestión de inventarios"
    },
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "SQLite"]
  },
  {
    title: "AGENDA",
    url: "https://github.com/aitor-gallego/agenda-flutter",
    description: {
      en: "Contacts agenda with Firebase backend to master Flutter & Dart",
      es: "Agenda de contactos con Firebase para practicar Flutter y Dart"
    },
    technologies: ["Flutter", "Dart", "Firebase", "Shared Preferences"]
  }
];

const languagesData = [
  {
    language: {
      en: "Spanish",
      es: "Español"
    },
    level: {
      en: "Native",
      es: "Nativo"
    }
  },
  {
    language: {
      en: "English",
      es: "Inglés"
    },
    level: {
      en: "Fluent",
      es: "Fluido"
    }
  },
  {
    language: {
      en: "Portuguese",
      es: "Portugués"
    },
    level: {
      en: "Intermediate",
      es: "Intermedio"
    }
  }
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    const savedLanguage = localStorage.getItem('language') as 'en' | 'es' || 'es';
    setTheme(savedTheme);
    setLanguage(savedLanguage);

    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string) => translations[key]?.[language] || key;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
              AG
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <a href="mailto:aitorgalle@gmail.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>aitorgalle@gmail.com</span>
                </a>
                <a href="tel:+34615897065" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+34 615 897 065</span>
                </a>
                <a href="https://github.com/aitor-gallego" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com/in/aitor-gallego" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 relative min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content Column */}
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight py-2">
                {t('name')}
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300 font-medium">
                {t('subtitle')}
              </p>
              <p className="text-lg mb-12 text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                {t('aboutText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/aitor-gallego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Github className="h-5 w-5 mr-2" />
                  {t('viewCode')}
                </a>
                <a
                  href="/aitor_gallego_cv.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Descargar CV' : 'Download CV'}
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>

                {/* Image placeholder */}
                <div className="relative w-80 h-80 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="profile.jpg"
                    alt={language === 'es' ? 'Foto de perfil' : 'Profile photo'}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Contact Section Mobile */}
      <section className="md:hidden py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:aitorgalle@gmail.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </a>
            <a href="tel:+34615897065" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Teléfono</span>
            </a>
            <a href="https://github.com/aitor-gallego" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/aitor-gallego" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section - Tree Layout */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            {t('experience')}
          </h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>

            {experienceData.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                      {exp.role[language]}
                    </p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600 dark:text-gray-400 flex items-start text-left">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          {detail[language]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Branch line */}
                <div className={`absolute top-1/2 w-8 h-0.5 bg-blue-600 ${index % 2 === 0 ? 'right-1/2 mr-3' : 'left-1/2 ml-3'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            {t('education')}
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {edu.period}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {edu.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            {t('skills')}
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillsData.languages.title[language]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.languages.items.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillsData.databases.title[language]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.databases.items.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillsData.tools.title[language]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.items.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            {t('projects')}
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section - Compact */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-48 mx-auto text-center">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              {t('languages')}
            </h3>
            <div className="space-y-2">
              {languagesData.map((lang, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg px-3 py-2 shadow-sm text-center">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white text-sm block">
                      {lang.language[language]}
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-400">
                      {lang.level[language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Aitor Gallego</p>
      </footer>
    </div>
  );
}

export default App;
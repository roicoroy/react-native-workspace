export const CV_DATA = {
  header: {
    name: 'Ricardo Watanabe Bento',
    title: 'Senior Frontend / Hybrid Mobile Engineer',
    location: 'Flat 26/46 Newhaven Place, EH6 4UH, Edinburgh, UK',
    phone: '+44 7510 963961',
    email: 'roicoroy@yahoo.com.br',
    linkedin: 'linkedin.com/in/ricardo-watanabe-bento',
    nationality: 'British / Italian / Brazilian',
  },
  profile:
    'A highly skilled Senior Frontend and Hybrid Mobile Engineer with over a decade of experience building robust, high-performance web and mobile applications. An expert in the Angular ecosystem (from AngularJS/v1 to modern Angular) and cross-platform mobile development using Ionic, Capacitor, and custom native iOS/Android plugin development, alongside experience with Flutter and React Native. Proven track record of shipping production-grade applications to the Google Play Store and Apple App Store, as well as desktop clients via Electron. Highly adaptable, with recent professional experience in React, backend Python/Docker integration, and Agile methodologies. Passionate about delivering seamless user experiences, clean architecture, and scalable design systems.',
  skills: [
    'Frameworks & Libraries: Angular, React, Ionic, Capacitor, Electron, jQuery, Backbone.js, Material Design, Tailwind and more.',
    'Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS/SASS, Python',
    'State Management & Async: NGXS, RxJS, Redux/Context API',
    'Testing & Quality Assurance: Jest, Cypress, Playwright, Appium, Mobilewright',
    'DevOps & Tooling: Git, Webpack, Vite, CI/CD (Azure DevOps, App Center), Docker',
    'APIs & Backend Integration: RESTful APIs, Firebase, JWT, OAuth, WebSockets',
  ],
  experience: [
    {
      id: '1',
      role: 'Software Engineer',
      company: 'IQGEO',
      period: 'Remote (Cambridge/Edinburgh, UK) | July 2025 – Present',
      description: [
        'Architect and maintain cross-platform hybrid applications across Android, iOS, Windows (Electron), and Web environments.',
        'Develop and maintain in-house native plugins to bridge Capacitor web applications with native device APIs.',
        'Utilize React.js for modern features while supporting and refactoring legacy jQuery and Backbone.js frontend views.',
        'Coordinate with Python backends and maintain Docker-based development environments to ensure consistency across staging.',
      ],
    },
    {
      id: '2',
      role: 'Frontend / Angular Developer',
      company: 'Codere Online',
      period: 'Remote (Spain/South America) | Feb 2024 – Dec 2024',
      description: [
        'Built and optimized modular Angular/Ionic interfaces, enhancing mobile responsive performance and Core Web Vitals.',
        'Designed and published a custom native Capacitor plugin to integrate the XtremePush SDK for real-time notification delivery across iOS and Android.',
        'Partnered with backend and UX teams to integrate low-latency, real-time communication services and data streams.',
        'Configured automated CI/CD pipelines to build, test, and release app builds smoothly to public app stores.',
      ],
    },
    {
      id: '3',
      role: 'Frontend Developer',
      company: 'Computershare',
      period: 'Remote (UK) | 2021 – Nov 2023',
      description: [
        'Contributed to EquateMobile, a complex financial asset management app built on Angular and Ionic.',
        'Refactored core components and implemented robust state management using NGXS, significantly reducing state mutations and CPU overhead.',
        'Collaborated closely with UI/UX designers to implement pixel-perfect, accessible (WCAG compliant), and highly responsive interfaces.',
        'Standardized REST API integrations and drove the adoption of shared component design system guidelines.',
      ],
    },
    {
      id: '4',
      role: 'Web & Mobile Developer',
      company: 'Flow Hospitality',
      period: 'Edinburgh, UK | 2018 – 2021',
      description: [
        'Modernized legacy Cordova projects by upgrading them to Capacitor and current Angular frameworks.',
        'Built interactive, mobile-first dashboards and integrated secure authentication flows using JWT and Firebase.',
        'Managed the lifecycle of app store submissions, beta testing groups, and resolved production crash logs.',
      ],
    },
  ],
  education: [
    {
      id: '1',
      degree: 'BSc in Creative Computing',
      school: 'Napier University, Edinburgh, UK',
      year: '2015',
    },
    {
      id: '2',
      degree: 'Interactive Media (HND)',
      school: 'Edinburgh College, Edinburgh, UK',
      year: '2014',
    },
    {
      id: '3',
      degree: 'BA in Journalism',
      school: 'CUV, Brazil',
      year: '2002',
    },
  ],
  projects: [
    {
      id: '1',
      name: 'Native Capacitor Plugin for XtremePush SDK',
      description:
        'Developed and published a custom integration plugin for the XtremePush SDK, bridging native Android (Java/Kotlin) and iOS (Swift/Obj-C) push messaging architectures with Capacitor web clients.',
    },
    {
      id: '2',
      name: 'Native Capacitor Plugins enhancement',
      description:
        'At IQGeo enhanced and maintained the native plugins developed in house, we used Capacitor to deploy custom solutions on iOS, Android and Electron. Worked on various projects implementation, such Background Download plugin, sqlite db, Spatialite plugin, also have experience in the Biometrics login with passkey on hybrid applications.',
    },
  ],
};

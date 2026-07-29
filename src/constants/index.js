
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Work',
    href: '#work',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Bharat FPO Connect (Production Mobile Application)',
    desc: 'A production-ready agricultural platform connecting Farmers, FPOs, and Staff through a multi-tenant mobile application.',
    subdesc:
      'Key Features: Multi-tenant architecture, role-based access, procurement management, agricultural marketplace, community discussion forum, farm & crop management, crop calendar, AI Crop Doctor, AI chatbot, government schemes, live mandi prices, nearby shops, khata book, Agri news, multilingual support, Firebase push notifications, OTP authentication.',
    href: 'https://play.google.com/store/apps/details?id=com.bharatfpo',
    texture: '/textures/project/BharatFPOConnect.mp4',
    modelType: 'phone',
    logo: '/assets/react-native.png',
    logoStyle: {
      backgroundColor: '#0E1F12',
      border: '0.2px solid #1C3D24',
      boxShadow: '0px 0px 60px 0px #22C55E4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react-native.png',
      },
      {
        id: 2,
        name: 'Redux Toolkit',
        path: '/assets/redux.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/Js.svg',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
    ],
  },
  {
    title: 'E-Commerce Website',
    desc: 'An E-Commerce web application that enables users to browse and buy electronic devices like mobiles, laptops, and televisions.',
    subdesc:
      'Built as a dynamic web app with React.js, HTML, Vanilla CSS, and JavaScript, designed for optimal performance and responsiveness.',
    texture: '/textures/project/E-com.mp4',
    modelType: 'computer',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'Css',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/Js.svg',
      },
    ],
  },
  {
    title: 'Personal Portfolio',
    desc: 'An interactive 3D developer portfolio showcasing my skills, projects, and work experience.',
    subdesc:
      'Created with React.js, Tailwind CSS, JavaScript, Three.js, GSAP, and custom 3D web graphics.',
    texture: '/textures/project/Portfolio.mp4',
    modelType: 'computer',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/Js.svg',
      },
      {
        id: 4,
        name: 'Three JS',
        path: '/assets/ThreeJS.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isSmall ? [0.5, -4.5, 0] : isMobile ? [0.5, -4.5, 0] : isTablet ? [0.3, -6.5, 0] : [0.25, -7.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Luminoid Technologies Pvt Ltd.',
    pos: 'React Native Developer',
    duration: '01-Nov-25 To Present',
    title: "Currently working as a React Native Developer, building dynamic and high-performance mobile applications. Leveraging React Native, I create responsive user interfaces, integrate APIs, and deliver seamless user experience.",
    icon: '/assets/luminoid.jpg',
    animation: 'hiphopdancing',
  },
  {
    id: 2,
    name: 'Chortz Technologies Pvt. Ltd.',
    pos: 'React Native Intern',
    duration: '01-Jan-25 To 01-Jun-25',
    title: "During my React Native and Expo internship, I developed the ability to create dynamic and interactive mobile applications with attractive user interfaces. By leveraging React Native and Expo, I built responsive front-end components that delivered seamless user experiences.",
    icon: '/assets/chortz.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Racksons It Developers Pvt. Ltd.',
    pos: 'MERN Stack Intern',
    duration: '01-Jan-24 To 01-May-24',
    title: "During my MERN stack internship, I developed the ability to create dynamic and interactive web applications with compelling user interfaces. By leveraging React.js, I built responsive front-end components that delivered seamless user experiences.",
    icon: '/assets/Racksons_IT.jpg',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Shivneri Developers Pvt. Ltd.',
    pos: 'Web Developer Intern',
    duration: '01-Jan-20 To 01-Mar-20',
    title: "During my front-end development internship, I gained hands-on experience building dynamic and interactive web interfaces using modern JavaScript frameworks. By working extensively with React.js, I developed responsive single-page applications with engaging user experiences.",
    icon: '/assets/Shivneri.png',
    animation: 'salute',
  },
];

export const skillsData = [
  {
    category: "React Native Mobile Development",
    icon: "/assets/react-native.png",
    skills: [
      {
        title: "Responsive UI/UX",
        desc: "Crafting pixel-perfect, adaptive, and fluid mobile user interfaces across various screen sizes and device orientations.",
        badge: "Mobile UI",
      },
      {
        title: "Redux Toolkit",
        desc: "Scalable centralized state management using redux toolkit.",
        badge: "State Management",
      },
      {
        title: "OTA Updates",
        desc: "Instant live update deployments directly to user devices without requiring Play Store re-approvals.",
        badge: "Live Updates",
      },
      {
        title: "App Deployment",
        desc: "End-to-end preparation, signing, build automation, and publishing to Google Play Store.",
        badge: "Publishing",
      },
    ],
  },
  {
    category: "AI & Smart Features",
    icon: "/assets/ai.png",
    skills: [
      {
        title: "Crop Disease Prediction AI",
        desc: "Integrating Gemini API into mobile applications for real-time plant and crop health analysis.",
        badge: "Gemini API",
      },
      {
        title: "AI Chatbots",
        desc: "Embedding conversational Gemini API to provide interactive user support and dynamic guidance.",
        badge: "Gemini API",
      },
    ],
  },
  {
    category: "Integrations & Services",
    icon: "/assets/Js.svg",
    skills: [
      {
        title: "Firebase Cloud Messaging (FCM)",
        desc: "Targeted push notifications, real-time messaging, background tasks, and deep linking.",
        badge: "Push Notifications",
      },
      {
        title: "Google Maps Integration",
        desc: "Custom interactive maps, user geolocation tracking, geo-coding and marker clustering.",
        badge: "Location Services",
      },
      {
        title: "Dynamic Translation",
        desc: "Multi-language support with dynamic translation using local storage and DB.",
        badge: "Translation",
      },
      {
        title: "Payment Gateway Integration",
        desc: "Secure checkout flows, in-app purchases, and integration with Cashify, Razorpay, and payment APIs.",
        badge: "Payments",
      },
    ],
  },
];

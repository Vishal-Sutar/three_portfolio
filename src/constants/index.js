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
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'E-Commerse Website',
      desc: 'It an E-Com Website that sells electroinc devices like Mobiles, Laptops And Televisions.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React.js , HTML, Vanella CSS and JavaScript , This is designed for optimal performance and scalability.',
      href: '',
      texture: '/textures/project/E-com.mp4',
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
          path: '/assets/react.svg',
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
      desc: 'This website shows my skills and information about me.',
      subdesc:
        'Created with HTML, Tailwind CSS, JS, G-SAP, React Three.js and other frontend libraries.',
      href: '',
      texture: '/textures/project/Portfolio.mp4',
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
          path: '/assets/react.svg',
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
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Racksons It Developers Pvt',
      pos: 'MERN Stack Intern',
      duration: '01-01-24 To 01-05-24',
      title: "During my MERN stack internship, I developed the ability to create dynamic and interactive web applications with compelling user interfaces. By leveraging React.js, I built responsive front-end components that delivered seamless user experiences.",
      icon: '/assets/Racksons_IT.jpg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Quesective Solutions',
      pos: 'Android Developer',
      duration: '01-01-2023 To 01-03-2023',
      title: "During my Android development internship, I gained hands-on experience in building dynamic and interactive mobile applications with polished user interfaces. Using Kotlin and Jetpack Compose, I created responsive UIs that adapted seamlessly across different device sizes and orientations.",
      icon: '/assets/Qsective.jpg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Shivneri Developers',
      pos: 'Web Developer',
      duration: '2019 - 2020',
      title: "During my front-end development internship, I gained hands-on experience building dynamic and interactive web interfaces using modern JavaScript frameworks. By working extensively with React.js, I developed responsive single-page applications with engaging user experiences.",
      icon: '/assets/Shivneri.png',
      animation: 'salute',
    },
  ]; 
import { Project, Experience, Certification, Education, Achievement, Blog, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 'doctor-appointment',
    title: 'Doctor Appointment Management System',
    description: 'A full-fledged appointment booking system with user authentication, doctor profile management, and admin dashboard.',
    techStack: ['Django', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'student-portal',
    title: 'Student Portal Management System',
    description: 'A portal for students to manage courses, tuition, grades, and profiles. Includes JWT-based login and protected APIs.',
    techStack: ['Django REST API', 'React.js', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'crop-disease',
    title: 'Crop Disease Detection System',
    description: 'Deep learning model to classify crop and leaf diseases using ANN. Built for farmers and agriculture support.',
    techStack: ['Python', 'HTML/CSS', 'React', 'Machine Learning'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    description: 'An e-commerce platform with user login, product listing, shopping cart, and secure checkout.',
    techStack: ['Django', 'React.js', 'Redux'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: 'xyz-tech',
    position: 'Intern – Software Developer',
    company: 'XYZ Tech Pvt. Ltd.',
    duration: 'June 2024 – August 2024',
    responsibilities: [
      'Built APIs using Django REST Framework',
      'Integrated frontend with backend using React',
      'Participated in daily Agile Scrum meetings',
      'Debugged and optimized backend queries',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'python',
    title: 'Python for Everybody',
    issuer: 'Coursera (University of Michigan)',
    url: '#',
  },
  {
    id: 'web-dev',
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    url: '#',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    issuer: 'Andrew Ng (Coursera)',
    url: '#',
  },
  {
    id: 'ds',
    title: 'Data Structures in Python',
    issuer: 'GeeksforGeeks',
    url: '#',
  },
  {
    id: 'sql',
    title: 'SQL & Database Management',
    issuer: 'HackerRank',
    url: '#',
  },
];

export const education: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science Engineering (Data Science)',
    institution: 'Maharishi Markandeshwar Deemed to be University (MMDU), Mullana',
    duration: '2021 – 2025',
    grade: 'CGPA: 8.9/10',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'sih',
    title: 'Finalist – Smart India Hackathon 2024',
    description: 'Competed against top teams nationally',
  },
  {
    id: 'projects',
    title: 'Built 10+ full-stack projects',
    description: 'From concept to deployment',
  },
  {
    id: 'leetcode',
    title: 'Solved 70+ problems on LeetCode, 60+ on GFG',
    description: 'Strengthened algorithm skills',
  },
  {
    id: 'google',
    title: 'Completed Google Tech Challenge 2023 – Top 5%',
    description: 'Demonstrated technical excellence',
  },
];

export const blogs: Blog[] = [
  {
    id: 'blog-1',
    title: 'How I Built a Doctor Appointment App with Django',
    url: '#',
  },
  {
    id: 'blog-2',
    title: 'Introduction to JWT Authentication in React',
    url: '#',
  },
  {
    id: 'blog-3',
    title: 'Top 5 Tips to Improve Coding Logic for Beginners',
    url: '#',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Django', 'Django REST Framework'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Netlify', 'Firebase (basic)', 'VS Code'],
  },
  {
    category: 'Concepts',
    items: ['REST APIs', 'JWT Auth', 'MVC', 'CRUD', 'Responsive Design', 'Data Structures', 'OOP'],
  },
];

export const contactInfo = {
  email: 'chhotusimaria@.com',
  phone: '+91-7542077327',
  location: 'Bihar, India',
  github: 'https://github.com/jhachhotu',
  linkedin: 'https://www.linkedin.com/in/kumarchhotu',
};

export const aboutMe = `
I'm a passionate Software Engineer and Full-Stack Web Developer with strong experience in building robust backend systems and intuitive user interfaces.

Currently pursuing B.Tech in Computer Science Engineering (Specialization: Data Science) from MMDU. I love solving real-world problems with code, building full-stack projects, and learning new technologies.

🔍 Focused on Django, React.js, REST APIs, and data-driven applications.
`;
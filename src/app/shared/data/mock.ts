import { MockData } from '../../../shared/models/projects';

export const mockData: MockData = {
  hero: {
    name: 'Rodrigo Teixeira de Andrade',
    title: 'Frontend Developer & Fullstack Specialist',
    subtitle: 'Especialista em Angular com 4+ anos de experiência',
    description:
      'Desenvolvendo aplicações web escaláveis e de alto desempenho. Expertise em Angular, TypeScript, arquitetura de microfrontends e práticas ágeis em ambientes multidisciplinares internacionais.',
    location: 'São Paulo, Brasil',
    availability: 'Disponível para oportunidades',
  },
  about: {
    bio: 'Desenvolvedor Frontend com 4+ anos de experiência e quase 1 ano em Fullstack, especializado em aplicações web escaláveis. Expertise comprovada em Angular (v13–20), TypeScript, RxJS, Angular Material e design responsivo. Experiência prática com CI/CD (GitHub Actions, Azure DevOps), princípios SOLID, testes automatizados e garantia de qualidade com SonarQube. Contribuindo atualmente para a plataforma global de apostas da Entain, trabalhando com equipes multidisciplinares em Brasil, Índia, Canadá e Inglaterra.',
    highlights: [
      { label: 'Anos de Experiência', value: '4+ anos' },
      { label: 'Expertise', value: 'Frontend & Fullstack' },
      { label: 'Cobertura de Testes', value: '65-80%' },
      { label: 'Idiomas', value: 'PT, EN, ES' },
    ],
  },
  experiences: [
    {
      id: 1,
      company: 'Entain',
      position: 'Frontend Developer – Global Sporting Bet and Casino Project',
      period: 'Jan 2026 - Presente',
      description:
        'Desenvolvendo aplicações web de alto desempenho em Angular para a plataforma global de apostas e cassino. Responsável por soluções frontend escaláveis para mercados globais. Colaboração em ambiente ágil internacional com discussões técnicas diárias e cerimônias de sprint em inglês.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'REST API', 'Agile'],
    },
    {
      id: 2,
      company: 'F1rst Digital Services',
      position: 'Full Stack Developer – Global Santander Project',
      period: 'May 2025 - Jan 2026',
      description:
        'Desenvolvendo e mantendo aplicações web de alta performance em ambiente bancário global. Contribuições em soluções frontend e backend, seguindo princípios API-first. Redução de 25-40% no tempo de carregamento, 70% de redução no tempo de desenvolvimento e resolução de 40+ tickets críticos.',
      technologies: ['Angular', 'TypeScript', 'C#', '.NET', 'REST API', 'Agile', 'CI/CD'],
    },
    {
      id: 3,
      company: 'Minsait',
      position: 'Frontend Developer – Global Santander Project',
      period: 'Oct 2024 - May 2025',
      description:
        'Mantendo aplicações web de alto desempenho em Angular para a plataforma bancária global do Santander. Liderança na adoção de microfrontends em múltiplos países. Otimização de performance reduzindo chamadas API redundantes de 15 para 2-5.',
      technologies: ['Angular', 'TypeScript', 'Microfrontend', 'RxJS', 'Jasmine/Karma'],
    },
    {
      id: 4,
      company: 'Wiz Co',
      position: 'Frontend Developer – Intranet & Internal Systems',
      period: 'Feb 2022 - Feb 2024',
      description:
        'Desenvolvimento e suporte de plataformas internas e soluções de intranet em Angular. Renovação da intranet para 1.500+ usuários com aumento de 65% na adoção. Aumento de cobertura de testes de 40% para 80% e redução de 40% no tempo de carregamento.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Angular Material', 'Acessibilidade'],
    },
  ],
  technologies: [
    { name: 'Angular', category: 'Frontend Framework', proficiency: 95, icon: 'angular' },
    { name: 'TypeScript', category: 'Language', proficiency: 95, icon: 'code' },
    { name: 'JavaScript (ES6+)', category: 'Language', proficiency: 95, icon: 'code' },
    { name: 'RxJS', category: 'Library', proficiency: 85, icon: 'workflow' },
    { name: 'Angular Material', category: 'UI Library', proficiency: 90, icon: 'palette' },
    { name: 'HTML5', category: 'Markup', proficiency: 95, icon: 'file-code' },
    { name: 'CSS3/SCSS/SASS', category: 'Styling', proficiency: 90, icon: 'palette' },
    { name: 'Bootstrap', category: 'CSS Framework', proficiency: 85, icon: 'wind' },
    { name: 'C#/.NET', category: 'Backend', proficiency: 35, icon: 'code' },
    { name: 'Java/Spring Boot', category: 'Backend', proficiency: 50, icon: 'code' },
    { name: 'Node.js', category: 'Backend', proficiency: 50, icon: 'code' },
    { name: 'Git/GitHub Actions', category: 'Version Control', proficiency: 95, icon: 'git-branch' },
    { name: 'Gitlab', category: 'Version Control', proficiency: 25, icon: 'git-branch' },
    { name: 'Azure DevOps', category: 'DevOps', proficiency: 80, icon: 'workflow' },
    { name: 'Oracle/PostgreSQL', category: 'Database', proficiency: 50, icon: 'database' },
    { name: 'MongoDB', category: 'Database', proficiency: 45, icon: 'database' },
    { name: 'REST API', category: 'Architecture', proficiency: 90, icon: 'file-code' },
    { name: 'Jasmine/Karma', category: 'Testing', proficiency: 90, icon: 'check-circle' },
    { name: 'SonarQube', category: 'Quality Assurance', proficiency: 80, icon: 'check-circle' },
    { name: 'Acessibilidade Web', category: 'Best Practices', proficiency: 85, icon: 'check-circle' },
    { name: 'Agile/Scrum', category: 'Methodology', proficiency: 90, icon: 'workflow' },
    { name: 'Figma', category: 'Design', proficiency: 70, icon: 'figma' },
    { name: 'Postman/Insomnia', category: 'API Tools', proficiency: 85, icon: 'file-code' },
  ],
  projects: [
    {
      id: 1,
      title: 'Taskflow - Microfrontends Platform',
      description:
        'Plataforma de orquestração de Microfrontends usando Module Federation. Sistema completo com shell, componentes reativos e dashboard analítico. TCC do MBA em Engenharia de Software (nota 10).',
      technologies: ['Angular 19', 'TypeScript', 'Module Federation', 'RxJS', 'Tailwind CSS', 'Angular Material', 'Jest'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
      link: 'https://taskflow-shell-project.com',
      github: 'https://github.com/RTAcps/taskflow-shell',
    },
    {
      id: 2,
      title: 'MediRemind - Healthcare Full Stack',
      description:
        'Aplicação Full Stack para gerenciamento de medicamentos e lembretes de saúde. POC da especialização em Full Stack na Descomplica com arquitetura moderna e testes abrangentes (nota 10).',
      technologies: ['Angular 19', 'TypeScript', 'Angular SSR', 'Jest', 'RxJS', 'Angular Material', 'Authentication OIDC'],
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
      link: 'https://mediremind-app.com',
      github: 'https://github.com/RTAcps/mediremind',
    },
    {
      id: 3,
      title: 'CalcOffer - Career Decision Tool',
      description:
        'Ferramenta interativa para análise de viabilidade ao trocar de emprego. Calcula e compara ofertas CLT versus contrato atual, considerando benefícios e custos. Projeto pessoal em construção.',
      technologies: ['Angular 20', 'TypeScript', 'Tailwind CSS', 'RxJS', 'SweetAlert2', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1574258496837-41115a9ba748?w=600&h=400&fit=crop',
      link: '#',
      github: 'https://github.com/RTAcps/calcoffer',
    },
    {
      id: 4,
      title: 'TaskBlind - Unbiased Recruitment',
      description:
        'Plataforma de gestão de projetos e avaliação de talentos sem viés. POC do MBA em Liderança e Gestão de Pessoas na Descomplica. Backend em Java Spring Boot com PostgreSQL.',
      technologies: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'Java 21', 'Spring Boot 3.4', 'PostgreSQL', 'Lucide Angular'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      link: '#',
      github: 'https://github.com/RTAcps/TaskBlind',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'USP/ESALQ',
      degree: 'MBA',
      field: 'Software Engineering',
      year: 'Expected Feb 2026',
      description: 'Advanced degree in Software Engineering focusing on enterprise architecture and development practices',
    },
    {
      id: 2,
      institution: 'Descomplica College',
      degree: 'MBA',
      field: 'Leadership and People Management',
      year: 'Expected Apr 2026',
      description: 'MBA program focusing on leadership development, team management, and organizational behavior',
    },
    {
      id: 3,
      institution: 'Descomplica College',
      degree: 'Postgraduate',
      field: 'Full Stack Development',
      year: 'Completed Apr 2025',
      description: 'Comprehensive postgraduate program in full stack development covering frontend and backend technologies',
    },
    {
      id: 4,
      institution: 'Descomplica College',
      degree: 'Bachelor of Science',
      field: 'Systems Analysis and Development',
      year: 'Completed Apr 2024',
      description: 'Formal degree in systems analysis and development with focus on software engineering principles',
    },
  ],
  curiosities: [
    {
      id: 1,
      title: 'Science Educator for 13+ Years',
      description: 'Worked as a Biology and Science teacher from February 2011 to September 2024, teaching physics, chemistry, and biology to middle and high school students. This experience shaped my passion for education and communication.',
      icon: 'book-open',
    },
    {
      id: 2,
      title: 'Bachelor & Teaching Degree in Biology',
      description: 'Hold both a Bachelor\'s degree and a Teaching License (Licenciatura) in Biology, providing deep expertise in natural sciences education and scientific methodology.',
      icon: 'book-open',
    },
    {
      id: 3,
      title: 'Master\'s Degree in Pedagogy',
      description: 'Completed a Master\'s degree in Pedagogy, focusing on learning theories, educational processes, and instructional design.',
      icon: 'book-open',
    },
    {
      id: 4,
      title: 'Specialization in Science & Technology',
      description: 'Completed a specialization in Science and Technology, bridging traditional education with modern technological innovations.',
      icon: 'zap',
    },
    {
      id: 5,
      title: 'Career Transition to Tech',
      description: 'Transitioned from traditional education to software development, bringing unique perspectives on problem-solving, mentoring, and collaborative learning to tech teams.',
      icon: 'zap',
    },
  ],
  contact: {
    email: 'rodrigotdeandrade@yahoo.com.br',
    phone: '+55 19 99968-0203',
    social: [
      { platform: 'GitHub', url: 'https://github.com/RTAcps', icon: 'github' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/rodrigo-teixeira-de-andrade/', icon: 'linkedin' },
      { platform: 'Instagram', url: 'https://www.instagram.com/rodrigo_teixeira_de_andrade/', icon: 'instagram' },
    ],
  },
};

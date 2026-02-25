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
      title: 'E-Commerce Platform',
      description:
        'Plataforma completa de e-commerce desenvolvida em Angular com checkout otimizado e painel administrativo.',
      technologies: ['Angular 17', 'NgRx', 'Material UI', 'Firebase'],
      image: 'https://via.placeholder.com/600x400/0066ff/ffffff?text=E-Commerce',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo com visualização de dados em tempo real, gráficos dinâmicos e relatórios customizáveis.',
      technologies: ['Angular', 'D3.js', 'RxJS', 'REST API'],
      image: 'https://via.placeholder.com/600x400/00fff9/000000?text=Dashboard',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'Aplicação de gerenciamento de tarefas com drag-and-drop, notificações em tempo real e colaboração em equipe.',
      technologies: ['Angular', 'TypeScript', 'WebSockets', 'SCSS'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Task+App',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description:
        'Rede social com feed dinâmico, sistema de posts, comentários e mensagens instantâneas.',
      technologies: ['Angular', 'NgRx', 'Socket.io', 'Material'],
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Social+App',
      link: '#',
      github: '#',
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

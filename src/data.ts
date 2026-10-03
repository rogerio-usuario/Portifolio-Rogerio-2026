import vitaImage from "./assets/images/ProjetoVita.jpeg";
import musculoImage from "./assets/images/ProjetoMusculoArtificial.jpeg";
import linkedinImage from "./assets/images/LinkedIn.png";
import githubImage from "./assets/images/GitHub.png";
import whatsappImage from "./assets/images/WhatsApp.jpeg";
import siteVitaImage from "./assets/images/site-dom-ignacio.jpg";
import siteMultasImage from "./assets/images/site-portfolio-v1.jpg";

import cert1 from "./assets/images/Certificado_Semana_Academica_do_Bem_Estar.jpeg";
import cert2 from "./assets/images/Certificado_MasterClass_O_Poder_da_Escolha_na_Qualidade_de_vida.jpeg";
import cert3 from "./assets/images/Certificado_AWS_Cloud_Economics_for_Startups.jpeg";
import cert4 from "./assets/images/Certificado_Como_Lançar_um_MVP_na_Nuvem_Pronto_para_Escalar.jpeg";
import cert5 from "./assets/images/Certificado_Linguagem_de_Programação_Java_Básico.jpeg";
import cert6 from "./assets/images/Certificado_Linguagem_de_Programação_Java_Avançado.jpeg";
import cert7 from "./assets/images/Certificado_Como_Escalar_na_Nuvem_para_Atrair_Financiamento.jpeg";
import cert8 from "./assets/images/Certificado_Crie_Um_Site_Simples_Usando_HTML_CSS_e_JavaScript.jpeg";
import cert9 from "./assets/images/Certificado_Curriculariação_da_Extensão.jpeg";
import cert10 from "./assets/images/Certificado_Inteligencia_Artificial_e_o_Novo_Contexto_da_Cultura_Digital.jpeg";
import cert11 from "./assets/images/Certificado_Formação_em_Liderança.jpeg";
import cert12 from "./assets/images/Certificado_Gestão_de_Pessoas.jpeg";
import cert13 from "./assets/images/Certificado_Assistente_de_logistica.jpeg";
import cert14 from "./assets/images/Certificado_Marca_Pessoal_360°.jpeg";
import cert15 from "./assets/images/Certificado_Administrador _de_Bancos_de_Dados.jpeg";

export interface AcademicModule {
  name: string;
  grade: string;
  period: string;
}

export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "cloud"
    | "logistics"
    | "leadership"
    | "creative";
  level: "Básico" | "Intermediário" | "Avançado";
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: "Protótipo" | "Em Desenvolvimento" | "Idealizado";
  image: string;
  summary: string;
  details: string[];
  specs: { [key: string]: string };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  duration: string;
  image: string;
  category:
    | "banco-de-dados"
    | "cloud"
    | "desenvolvimento"
    | "lideranca"
    | "bem-estar";
  modules?: string[];
  summary: string;
  conclusion?: string;
}

export interface CustomLink {
  id: string;
  type: "site" | "perfil";
  title: string;
  url: string;
  description: string;
  platform?: string;
  image?: string;
}

export const PERSONAL_INFO = {
  name: "Rogério Ignacio Barbosa",
  title: "Software Engineer & Tech Innovator",
  age: 38,
  bio: "Desde criança, sou fascinado por tecnologia, desmontava brinquedos para entender o funcionamento e criar soluções. Hoje, curso Engenharia de Software e crio projetos de inovação disruptiva.",
  location: "Rio de Janeiro, RJ",
  email: "rogerioignacio85@gmail.com",
  phone: "+55 (21) 99088-7330",
  linkedin: "https://www.linkedin.com/in/rogerio-ignacio-barbosa-512a34103",
  github: "#", // placeholder
  status: "Disponível para Oportunidades",
};

export const PROJECTS: Project[] = [ 
  {
    id: "vita",
    title: "VITA (Vida Inteligente Tática Autônoma)",
    tagline:
      "Plataforma aérea inteligente, silenciosa e interativa voltada para o resgate e suporte à vida.",
    status: "Em Desenvolvimento",
    image: vitaImage,
    summary:
      "O VITA é um drone inteligente projetado para suporte médico e busca de pessoas. Integra inteligência artificial avançada, processamento de voz natural, reconhecimento facial e propulsão acústica.",
    details: [
      "IA Conversacional integrada com síntese de voz humanizada para guiar vítimas.",
      "Algoritmos de Reconhecimento Facial e detecção de objetos em tempo real.",
      "Monitoramento remoto via aplicativo móvel seguro com transmissão de vídeo criptografada.",
      "Estrutura otimizada para propulsão acústica de baixo ruído e recarga regenerativa.",
      "Destinado a médicos, bombeiros, defense civil e assistência a idosos ou PCDs.",
    ],
    specs: {
      "Sistema de Controle": "ArduPilot / Raspberry Pi 4",
      "Processamento de IA": "Local Edge Computing com acelerador neural",
      "Visão Computacional": "OpenCV com detecção térmica noturna",
      Autonomia: "Baterias LiPo avançadas de alta densidade",
      Propulsão: "Hélices silenciosas com aerodinâmica computacional",
    },
  },
  {
    id: "musculo_artificial",
    title: "Músculos Artificiais de Nylon",
    tagline:
      "Atuadores robóticos de alta força inspirados na biologia utilizando polímeros de nylon.",
    status: "Protótipo",
    image: musculoImage,
    summary:
      "Desenvolvimento e fabricação de atuadores lineares térmicos utilizando filamentos de nylon altamente torcidos. Esse sistema mimetiza o movimento dos tecidos musculares orgânicos e desempenha força extraordinária.",
    details: [
      "Fabricação própria utilizando filamentos poliméricos de alta precisão.",
      "Atuação por efeito térmico (aquecimento elétrico por resistência Joule).",
      "Excelente custo-benefício em comparação com ligas de memória de forma (SMA).",
      "Aplicável em próteses robóticas leves, órteses médicas e exoesqueletos ativos.",
    ],
    specs: {
      "Material Base": "Polímero de Nylon helicoidal",
      Atuação: "Térmica / Elétrica (Corrente contínua)",
      "Proporção de Carga": "Capacidade de erguer até 100x o próprio peso",
      Aplicação: "Próteses robóticas e biomimética ativa",
    },
  },
];

export const DEFAULT_LINKS: CustomLink[] = [
  {
    id: "site-1",
    type: "site",
    title: "Dom Ignacio Design",
    url: "https://dom-ignacio.pages.dev/",
    description: `{"title":"Análise Editorial: Dom Ignacio Design","subtitle":"Publicado em Julho de 2026 • Seção Tecnologia & Design","intro":"O ecossistema digital contemporâneo exige das marcas uma presença visual forte. Dom Ignacio Design é um projeto web minimalista focado em portfólio visual e projetos de design."}`,
    image: siteVitaImage,
  },
  {
    id: "site-2",
    type: "site",
    title: "Portfólio Pessoal (Versão 1)",
    url: "https://rogerio-usuario.github.io/portifolio/",
    description: `{"title":"A Excelência em Design e Usabilidade no Portfólio Rogério","subtitle":"Publicado em Julho de 2026 • Seção Tecnologia & Design","intro":"O ecossistema digital comporta diferentes formatos de apresentação. Esta versão anterior do portfólio mantém registros de experiências anteriores."}`,
    image: siteMultasImage,
  },
  {
    id: "perfil-1",
    type: "perfil",
    title: "LinkedIn Profissional",
    url: "https://www.linkedin.com/in/rogerio-ignacio-barbosa-512a34103",
    description:
      "Rede profissional oficial com atualizações de carreira, conexões acadêmicas e portfólio de engenharia.",
    platform: "LinkedIn",
    image: linkedinImage,
  },
  {
    id: "perfil-2",
    type: "perfil",
    title: "GitHub Developer Hub",
    url: "https://github.com/rogerioignacio85",
    description:
      "Repositórios de código fonte, projetos acadêmicos e códigos de automação de banco de dados.",
    platform: "GitHub",
    image: githubImage,
  },
  {
    id: "perfil-3",
    type: "perfil",
    title: "WhatsApp Business Direct",
    url: "https://wa.me/5521990887330",
    description:
      "Linha profissional de contato direto e agendamento de reuniões técnicas de desenvolvimento.",
    platform: "WhatsApp",
    image: whatsappImage,
  },
];

export const SKILLS: Skill[] = [
  { name: "HTML5 / CSS3", category: "frontend", level: "Avançado" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Avançado" },
  { name: "React.js", category: "frontend", level: "Intermediário" },
  { name: "Tailwind CSS", category: "frontend", level: "Avançado" },
  { name: "Java SE", category: "backend", level: "Intermediário" },
  { name: "SQL (DDL / DML)", category: "backend", level: "Avançado" },
  { name: "PostgreSQL", category: "backend", level: "Avançado" },
  { name: "MySQL", category: "backend", level: "Avançado" },
  { name: "NoSQL (MongoDB)", category: "backend", level: "Básico" },
  { name: "AWS Cloud Foundations", category: "cloud", level: "Intermediário" },
  { name: "MVP Cloud Scaling", category: "cloud", level: "Intermediário" },
  { name: "Gestão de Estoque", category: "logistics", level: "Avançado" },
  { name: "Cadeia de Suprimentos", category: "logistics", level: "Avançado" },
  { name: "Liderança de Equipes", category: "leadership", level: "Avançado" },
  { name: "Gestão de Pessoas", category: "leadership", level: "Avançado" },
  {
    name: "Marca Pessoal Estratégica",
    category: "leadership",
    level: "Avançado",
  },
  { name: "Fotografia & Edição", category: "creative", level: "Avançado" },
  { name: "Operação de Áudio", category: "creative", level: "Avançado" },
];

export const ACADEMIC_UNIASSELVI: AcademicModule[] = [
  { name: "Metodologia Científica", grade: "9.05", period: "Módulo 1" },
  {
    name: "Seminário Interdisciplinar: Introdução à Pesquisa",
    grade: "8.95",
    period: "Módulo 1",
  },
  { name: "Ética, Política e Sociedade", grade: "7.70", period: "Módulo 1" },
  { name: "Processo de Software", grade: "7.65", period: "Módulo 1" },
  {
    name: "Linguagens de Programação e Estruturas de Dados",
    grade: "7.80",
    period: "Módulo 1",
  },
  { name: "Probabilidade e Estatística", grade: "9.45", period: "Módulo 2" },
  {
    name: "Seminário Interdisciplinar: Banco de Dados Relacional",
    grade: "10.00",
    period: "Módulo 2",
  },
  { name: "Arquitetura de Computadores", grade: "8.85", period: "Módulo 2" },
  { name: "Programação Orientada a Objeto", grade: "8.70", period: "Módulo 2" },
  {
    name: "Lógica e Técnicas de Programação",
    grade: "8.35",
    period: "Módulo 2",
  },
  { name: "Interação Humano-Computador", grade: "8.35", period: "Módulo 2" },
  { name: "Princípios de Banco de Dados", grade: "7.65", period: "Módulo 2" },
  { name: "Perspectivas Profissionais", grade: "7.60", period: "Módulo 2" },
  { name: "Introdução ao Cálculo", grade: "7.35", period: "Módulo 2" },
  {
    name: "Engenharia e Projeto de Software",
    grade: "7.25",
    period: "Módulo 2",
  },
];

export const ACADEMIC_UNICESUMAR: AcademicModule[] = [
  {
    name: "Análise e Projetos Orientados a Objetos",
    grade: "9.00",
    period: "Módulo 51",
  },
  {
    name: "Estudo Contemporâneo: Inovação e Pensamento Criativo",
    grade: "7.20",
    period: "Módulo 51",
  },
  {
    name: "Mentalidade Criativa e Empreendedora",
    grade: "7.80",
    period: "Módulo 51",
  },
  {
    name: "Estudo Contemporâneo: Indústria e Transformação Digital",
    grade: "8.10",
    period: "Módulo 52",
  },
  { name: "Estruturas de Dados", grade: "8.70", period: "Módulo 52" },
  { name: "Programação Front-End", grade: "7.80", period: "Módulo 52" },
  {
    name: "Estudo Contemporâneo: Leitura de Imagens, Gráficos e Mapas",
    grade: "Em Andamento",
    period: "Módulo 53",
  },
  { name: "Banco de Dados NoSQL", grade: "Em Andamento", period: "Módulo 53" },
  {
    name: "Projeto, Implementação e Teste de Software",
    grade: "Em Andamento",
    period: "Módulo 53",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert15",
    title: "Administrador de Bancos de Dados",
    issuer: "Instituto Federal do Rio Grande do Sul (IFRS)",
    date: "14 de Novembro de 2025",
    duration: "200 Horas",
    image: cert15,
    category: "banco-de-dados",
    summary:
      "Curso de qualificação profissional que aborda desde a modelagem de dados relacional até a administração avançada de bancos de dados, incluindo otimização de consultas, segurança, backup e escalabilidade.",
    modules: [
      "**Bancos de Dados: Conceitos:** Introdução aos princípios básicos de bancos de dados, incluindo modelos de dados, arquitetura, normalização e importância da integridade da informação.",
      "**Bancos de Dados: SQL:** Estudo da linguagem SQL, cobrindo comandos de definição, manipulação e consulta de dados. Aprendi a criar tabelas, relacionamentos, consultas complexas e operações avançadas.",
      "**Prática de Bancos de Dados PostgreSQL:** Aplicação prática dos conceitos em um dos sistemas de gerenciamento mais robustos e utilizados no mercado. Trabalhei com criação de esquemas, índices e otimização.",
      "**Prática de Bancos de Dados MySQL:** Exercícios práticos com o MySQL, focando em administração, configuração e uso em aplicações web. Aprendi sobre replicação, backup e recuperação.",
      "**Administração de Bancos de Dados:** Neste segundo momento, o foco foi em planejamento e consistência. Módulo final voltado para gestão e manutenção de ambientes de dados. Incluiu segurança e performance.",
    ],
    conclusion:
      "O curso proporcionou uma formação sólida e prática em administração de bancos de dados, permitindo compreender desde os conceitos fundamentais até a aplicação em sistemas reais complexos.",
  },
  {
    id: "cert14",
    title: "Marca Pessoal 360°: Referência Visível",
    issuer: "Santander Open Academy",
    date: "26 de Agosto de 2025",
    duration: "8 Horas",
    image: cert14,
    category: "lideranca",
    summary:
      "Imersão de branding pessoal estratégico voltada para profissionais de tecnologia que desejam consolidar sua autoridade, comunicar seus diferenciais técnicos com clareza e gerenciar reputação digital.",
    modules: [
      "**O novo paradigma da marca pessoal I:** Neste primeiro contato, entendi que marca pessoal não é sobre autopromoção, mas sobre reputação e valor percebido. Foi apresentado o conceito de visibilidade estratégica.",
      "**O novo paradigma da marca pessoal II:** Aprofundamos a ideia de que visibilidade não é vaidade, é estratégia. Aprendi a identificar os pilares que sustentam uma marca pessoal forte.",
      "**Encontre o seu diferencial exclusivo (seu ponto de ouro):** Este módulo foi um dos mais transformadores. Fiz exercícios práticos para identificar meu diferencial único no mercado.",
      "**Estratégia de comunicação e visibilidade I:** Aqui, mergulhei nas ferramentas de comunicação que ajudam a tornar a marca pessoal visível. Aprendi sobre storytelling e tom de voz.",
      "**Rede estratégica e relacionamentos de alto valor:** Este módulo mostrou que marca pessoal também se constrói por meio de conexões. Aprendi a cultivar relacionamentos estratégicos.",
      "**Monetização da sua marca pessoal:** Aqui, entendi como transformar autoridade em oportunidades reais. Foram apresentadas formas de monetizar a marca pessoal por meio de produtos e serviços.",
      "**Amplie e automatize a sua marca pessoal I:** Este módulo trouxe ferramentas para escalar minha presença digital. Aprendi sobre automação de conteúdo e gestão de plataformas.",
      "**Dimensione e automatize a sua marca pessoal II:** Finalizamos com estratégias para manter a marca pessoal viva e relevante ao longo do tempo.",
    ],
    conclusion:
      "O curso foi extremamente prático, com vídeos curtos, atividades reflexivas e exemplos reais. A linguagem acessível e os exercícios aplicáveis tornaram o aprendizado fluido e envolvente.",
  },
  {
    id: "cert13",
    title: "Assistente de Logística",
    issuer: "Instituto Federal do Rio Grande do Sul (IFRS)",
    date: "12 de Outubro de 2023",
    duration: "200 Horas",
    image: cert13,
    category: "lideranca",
    summary:
      "Curso aprofundado em gestão operacional de processos de suprimento, armazenagem inteligente, canais de distribuição e conformidade legislativa para cadeias complexas de suprimento.",
    modules: [
      "**Logística e Planejamento Estratégico:** Estruturação de canais eficientes.",
      "**Gestão de Estoque Avançada:** Técnicas de contagem, PEPS, classificação ABC e controle integrado.",
      "**Cadeia de Suprimentos (Supply Chain):** Integração ponta-a-ponta entre fornecedores, fábrica e cliente.",
      "**Transportes, Rotas e Modais:** Planejamento inteligente de tráfego físico.",
      "**Custos Logísticos e Métricas:** Indicadores de economia e eficiência operacional.",
    ],
    conclusion:
      "O curso foi realizado na plataforma Moodle do IFRS, de forma totalmente online e gratuita. Mesmo sem tutoria, o conteúdo era claro e bem estruturado. Recebi o certificado após concluir toda a carga horária.",
  },
  {
    id: "cert12",
    title: "Gestão de Pessoas",
    issuer: "Sebrae",
    date: "12 de Setembro de 2023",
    duration: "8 Horas",
    image: cert12,
    category: "lideranca",
    summary:
      "Capacitação voltada para desenvolvimento humano, mediação de conflitos corporativos e metodologias para manter equipes de alta performance motivadas e integradas sob objetivos comuns.",
    modules: [
      "**A gestão de pessoas no contexto atual:** Esse módulo me fez refletir sobre o papel da liderança no cenário atual. Aprendi como a gestão de pessoas impacta diretamente nos resultados.",
      "**Recrutamento e seleção de pessoas:** Aqui aprendi técnicas para atrair e escolher os profissionais certos. Foi interessante entender como montar processos seletivos mais eficientes.",
      "**Desenvolvimento de equipes:** Um dos pontos altos do curso. Aprendi como uma liderança inspiradora pode transformar o ambiente de trabalho. Foram apresentadas estratégias para motivar.",
      "**Liderança e motivação:** Um dos pontos altos do curso. Como uma liderança inspiradora pode transformar o ambiente de trabalho.",
      "**Gestão de conflitos em equipe:** Esse módulo trouxe ferramentas para lidar com situações delicadas de forma construtiva. Identificar conflitos e mediar conversas.",
    ],
    conclusion:
      "No geral, o curso foi muito bem estruturado e direto ao ponto. Cada módulo trouxe exemplos práticos e reflexões que me ajudaram a enxergar a gestão de pessoas como uma área estratégica.",
  },
  {
    id: "cert11",
    title: "Formação em Liderança",
    issuer: "Conquer Business School",
    date: "12 de Setembro de 2023",
    duration: "8 Horas",
    image: cert11,
    category: "lideranca",
    summary:
      "Curso dinâmico de liderança corporativa moderna, ensinando soft-skills fundamentais para delegar atividades de alta complexidade, garantir segurança psicológica e orientar equipes para resultados.",
    modules: [
      "**A Base da Liderança:** Esse módulo faz repensar o que é ser líder. Que liderança vai muito além de cargo ou autoridade, envolve autenticidade, responsabilidade e influência.",
      "**Assumindo a responsa:** Um mergulho nos desafios da liderança na nova economia. Um Aprendizado sobre transformação digital, design organizacional e como liderar em ambientes em constante mudança.",
      "**Comunicação e influência:** Esse foi um dos meus favoritos. Técnicas de comunicação assertiva, como dar e receber feedbacks construtivos, delegar com clareza e tomar decisões.",
      "**Liderança estratégica:** Nesse módulo, foi um grande aprendizado sobre contratação, ambientação de novos colaboradores, definição de metas e motivação.",
      "**Olhando para o futuro:** O último módulo trouxe uma visão sobre liderança em tempos de mudança. Sobre a inovação, diversidade, benchmarking e como construir uma carreira.",
    ],
    conclusion:
      "No geral, o curso foi leve, dinâmico e muito prático. Cada módulo trouxe ferramentas que eu já comecei a aplicar no meu dia a dia. Saí com uma visão mais clara sobre o papel do líder.",
  },
  {
    id: "cert10",
    title: "Inteligência Artificial e Cultura Digital",
    issuer: "Fundação Bradesco - Escola Virtual",
    date: "20 de Agosto de 2023",
    duration: "20 Horas",
    image: cert10,
    category: "desenvolvimento",
    summary:
      "Visão sistêmica do impacto de algoritmos de inteligência artificial na sociedade contemporânea, com forte ênfase em regulamentações de dados (LGPD), ética algorítmica e democratização do acesso.",
    modules: [
      "**Contexto e relevância da IA:** Esse módulo abriu minha mente para o impacto da IA na sociedade atual. Aprendi como ela está presente em aplicativos, redes sociais, plataformas de streaming.",
      "**Cultura digital na contemporaneidade:** Aqui entendi como a tecnologia molda nossos comportamentos e relações. Foi interessante perceber como a IA influencia até mesmo a forma como nos relacionamos.",
      "**Dados e direitos digitais:** Esse foi um dos módulos mais importantes. Aprendi sobre privacidade, segurança e legislação digital incluindo a LGPD, o Marco Civil da Internet.",
      "**IA na educação:** Descobri como a inteligência artificial pode ser usada para melhorar o ensino, com plataformas adaptativas e ferramentas que ajudam tanto alunos quanto professores.",
    ],
    conclusion:
      "Um dos módulos que mais gostei foi sobre privacidade e direitos digitais. Aprendi sobre leis como a LGPD e o Marco Civil da Internet, e isso me fez pensar bastante sobre como usamos nossos dados.",
  },
  {
    id: "cert9",
    title: "Master Class: Curricularização da Extensão",
    issuer: "Uniasselvi",
    date: "16 de Agosto de 2023",
    duration: "2 Horas",
    image: cert9,
    category: "desenvolvimento",
    summary:
      "Formação teórica e prática sobre a inserção de projetos de utilidade social e extensão universitária nas grades curriculares, fortalecendo a conexão direta entre a academia e a comunidade.",
    modules: [
      "**Fundamentos e Conceitos:** Mergulhei nos princípios da extensão universitária e em sua função transformadora na educação. Discutimos definições, objetivos sociais e acadêmicos.",
      "**Planejamento de Atividades e Projetos:** Abordamos o desenho completo de projetos de extensão. Aprendi a identificar demandas reais da comunidade, definir objetivos claros, estabelecer recursos.",
      "**Execução, Monitoramento e Avaliação:** No momento da execução, descobri quais ferramentas usar para coletar dados de entrevistas a questionários e como medir impactos acadêmicos.",
    ],
    conclusion:
      "O curso foi dinâmico e interativo, combinando exposições teóricas com estudos de caso e dinâmicas em pequenos grupos. A concisão das atividades permitiu aplicar cada conceito imediatamente.",
  },
  {
    id: "cert8",
    title: "Crie um Site Simples (HTML, CSS e JS)",
    issuer: "Fundação Bradesco - Escola Virtual",
    date: "31 de Julho de 2023",
    duration: "2 Horas",
    image: cert8,
    category: "desenvolvimento",
    summary:
      "Passo a passo no desenvolvimento web nativo, ensinando os padrões semânticos de marcação HTML5, modelagem visual CSS3 e manipulação elementar do DOM com JavaScript baunilha.",
    modules: [
      "**Estrutura do aplicativo web:** Comecei aprendendo como organizar os arquivos e pastas do projeto. Essa parte foi essencial para entender a base de qualquer site.",
      "**HTML básico:** Aqui mergulhei nas principais tags que dão forma ao conteúdo: títulos, parágrafos, listas, links e imagens. Foi empolgante ver como uma página começa a ganhar vida.",
      "**Estilização com CSS:** Esse módulo foi onde o visual começou a aparecer. Aprendi a aplicar cores, fontes, espaçamentos e posicionamentos.",
      "**Interatividade com JavaScript:** Por fim, adicionei funcionalidades simples como cliques e alertas. Foi ótimo entender como o JavaScript dá movimento e resposta ao que o usuário faz na página.",
    ],
    conclusion:
      "Durante o curso, utilizei o Visual Studio Code como editor de código e testei tudo diretamente no navegador. Mesmo sendo uma introdução, me deu uma boa noção de como HTML, CSS e JavaScript funcionam juntos.",
  },
  {
    id: "cert7",
    title: "Como Escalar na Nuvem para Atrair Investimento",
    issuer: "Ka Solution (AWS Academy Partner)",
    date: "23 de Julho de 2023",
    duration: "2 Horas",
    image: cert7,
    category: "cloud",
    summary:
      "Abordagem focada em negócios e infraestrutura de TI, conectando o custo e flexibilidade do ecossistema de nuvem aos olhos dos investidores de Venture Capital.",
    modules: [
      "**Escalabilidade como diferencial competitivo:** Aprendi como a nuvem permite que empresas cresçam de forma flexível, sem precisar investir pesado em infraestrutura física.",
      "**Redução de custos e otimização de recursos:** O conteúdo mostrou como migrar para a nuvem pode ajudar a reduzir despesas operacionais, melhorar o uso de recursos e aumentar a eficiência.",
      "**Modelos de negócio baseados em nuvem:** Foi interessante entender como empresas que adotam soluções cloud conseguem oferecer serviços mais escaláveis e personalizados.",
      "**Indicadores que atraem investimento:** O curso também trouxe dicas sobre como apresentar métricas de desempenho, uso de tecnologia e escalabilidade em pitchs com investidores.",
    ],
    conclusion:
      "Foi uma experiência rápida, mas muito útil para entender como a tecnologia pode ser usada estrategicamente para impulsionar o crescimento de um negócio e torná-lo mais atrativo para financiamento.",
  },
  {
    id: "cert6",
    title: "Linguagem de Programação Java - Avançado",
    issuer: "Fundação Bradesco - Escola Virtual",
    date: "20 de Julho de 2023",
    duration: "16 Horas",
    image: cert6,
    category: "desenvolvimento",
    summary:
      "Aprofundamento na plataforma Java SE, englobando polimorfismo refinado, tratamento seguro de exceções, concorrência (Threads), persistência relacional com JDBC e manipulação de fluxos.",
    modules: [
      "**Programação orientada a objetos avançada:** Esse módulo revisou os fundamentos da orientação a objetos, mas com uma abordagem mais profunda. Aprendi a trabalhar com herança, polimorfismo.",
      "**Tratamento de exceções:** Aqui entendi como lidar com erros de forma segura e eficiente. Aprender a tratar exceções corretamente me deu mais confiança para desenvolver aplicações robustas.",
      "**Acesso a banco de dados com JDBC:** Esse foi um dos módulos mais marcantes. Aprendi a conectar aplicações Java a bancos de dados, realizar consultas e manipular registros.",
      "**Manipulação de arquivos:** Aprendi a ler e escrever arquivos externos, o que é essencial para lidar com dados fora do sistema. Esse módulo mostrou como trabalhar com diferentes formatos.",
      "**Coleções em Java:** Esse módulo abordou estruturas como listas, mapas e conjuntos. Entender como organizar e acessar grandes volumes de dados com eficiência foi fundamental.",
      "**Threads e processamento paralelo:** Por fim, aprendi sobre execução de tarefas simultâneas com threads. Esse conteúdo me ajudou a entender como melhorar o desempenho das aplicações.",
    ],
    conclusion:
      "O curso foi bem estruturado, com explicações claras e exemplos práticos. Cada módulo trouxe algo novo e aplicável, e no final me senti muito mais preparado para desenvolver projetos em Java.",
  },
  {
    id: "cert5",
    title: "Linguagem de Programação Java - Básico",
    issuer: "Fundação Bradesco - Escola Virtual",
    date: "12 de Julho de 2023",
    duration: "5 Horas",
    image: cert5,
    category: "desenvolvimento",
    summary:
      "Introdução à sintaxe robusta do Java, ensinando compilação, variáveis fortemente tipadas, estruturas condicionais e de repetição e os fundamentos da modelagem orientada a objetos.",
    modules: [
      "**Introdução à linguagem Java:** Aprendi sobre a história da linguagem, suas principais características e onde ela é usada no mercado. Foi interessante entender como o Java se tornou tão popular.",
      "**Instalação e configuração do ambiente:** Esse módulo me ensinou a instalar o JDK e configurar o ambiente de desenvolvimento. Também aprendi a usar o terminal e os primeiros comandos.",
      "**Estrutura básica de um programa Java:** Aqui entendi como funciona a sintaxe da linguagem, como declarar variáveis, usar operadores, estruturas condicionais e de repetição.",
      "**Orientação a objetos – introdução:** Mesmo sendo um curso básico, ele já introduziu conceitos como classes, objetos, atributos e métodos. Isso me ajudou a entender a base da programação orientada a objetos.",
      "**Boas práticas e resolução de erros comuns:** Por fim, aprendi a identificar erros simples de sintaxe e lógica, além de aplicar boas práticas para escrever um código mais limpo.",
    ],
    conclusion:
      "Foi uma ótima porta de entrada para o universo Java. O curso me deu segurança para seguir para o nível avançado e começar a desenvolver meus próprios projetos com mais clareza.",
  },
  {
    id: "cert4",
    title: "Como Lançar um MVP na Nuvem Pronto para Escalar",
    issuer: "Ka Solution (AWS Academy Partner)",
    date: "11 de Julho de 2023",
    duration: "2 Horas",
    image: cert4,
    category: "cloud",
    summary:
      "Curso prático sobre modelagem ágil e arquitetura desacoplada de software usando microsserviços integrados de nuvem para deploy rápido de MVPs confiáveis.",
    modules: [
      "**Conceito de MVP e visão estratégica:** Esse módulo trouxe uma visão clara do que é um MVP (Produto Mínimo Viável) e como ele deve ser pensado desde o início com foco em escalabilidade.",
      "**Arquitetura na nuvem para MVPs:** Aqui entendi como montar uma infraestrutura enxuta e eficiente usando serviços da AWS. Aprendi a escolher os recursos certos para validar uma solução.",
      "**Preparando o MVP para atrair investidores:** Esse módulo foi voltado para estratégia de negócio. Aprendi como apresentar um MVP de forma profissional, destacando métricas.",
    ],
    conclusion:
      "No geral, o curso foi direto ao ponto e me ajudou a conectar desenvolvimento ágil com visão de negócio. Saí com uma noção muito mais clara de como lançar um produto funcional, seguro e escalável.",
  },
  {
    id: "cert3",
    title: "AWS Cloud Economics for Startups",
    issuer: "Ka Solution (AWS Academy Partner)",
    date: "13 de Junho de 2023",
    duration: "3 Horas",
    image: cert3,
    category: "cloud",
    summary:
      "Análise profunda de gestão financeira na AWS (FinOps) focada em diminuir desperdício de infraestrutura física e obter o máximo custo-benefício de instâncias elásticas e serverless.",
    modules: [
      "**Vantagens da AWS para startups:** Aprendi como a nuvem pode reduzir custos, aumentar a produtividade e oferecer escalabilidade para negócios em crescimento.",
      "**Cloud Value Framework:** Esse módulo mostrou como avaliar os benefícios da nuvem em quatro pilares: redução de custos, agilidade, resiliência e produtividade.",
      "**Estudo de caso prático:** Acompanhei exemplos de startups que escalaram seus serviços com elasticidade e modelos de preços adequados, o que me ajudou a visualizar aplicações práticas.",
      "**Planejamento de infraestrutura:** Entendi como escolher o tipo de armazenamento, calcular orçamento e estruturar serviços de forma eficiente na nuvem.",
    ],
    conclusion:
      "Foi uma formação rápida, mas muito útil para entender os fundamentos econômicos da AWS e como aplicar esses conceitos em soluções escaláveis.",
  },
  {
    id: "cert2",
    title: "O Poder da Escolha na Qualidade de Vida",
    issuer: "Uniasselvi",
    date: "07 de Junho de 2023",
    duration: "2 Horas",
    image: cert2,
    category: "bem-estar",
    summary:
      "Semana acadêmica focada em hábitos saudáveis, saúde mental de profissionais de tecnologia e o impacto de decisões cotidianas na longevidade e foco produtivo.",
    modules: [
      "**Fundamentos do poder da escolha:** Neste módulo, entendi como cada decisão impacta diretamente nossa qualidade de vida e saúde física. Identifiquei padrões de comportamento repetido.",
      "**Nutrição e movimento como atos de escolha:** Aqui, descobri estratégias para transformar a alimentação equilibrada e a atividade física em práticas fáceis de seguir.",
      "**Saúde mental e gestão do estresse:** Neste momento, aprendi técnicas de respiração, atenção plena (mindfulness) e identificação de gatilhos emocionais.",
      "**Planejamento e aplicação prática:** No último módulo, elaborei um plano de ação pessoal com metas de bem-estar de curto e médio prazo.",
    ],
    conclusion:
      "A Semana Acadêmica do Bem-Estar mostrou que o poder da escolha vai muito além de decisões isoladas. Cada ação consciente constrói um caminho mais saudável e equilibrado.",
  },
  {
    id: "cert1",
    title: "Semana Acadêmica do Bem-Estar",
    issuer: "Uniasselvi",
    date: "06 de Junho de 2023",
    duration: "2 Horas",
    image: cert1,
    category: "bem-estar",
    summary:
      "Palestras e workshops integrados de ergonomia, gerenciamento de estresse sob pressão acadêmica/profissional e criação de rotinas focadas em alta produtividade equilibrada.",
    modules: [
      "**Consciência sobre pequenas escolhas:** No primeiro módulo, mergulhei na importância das pequenas decisões. Identifiquei hábitos repetidos, avaliei seus efeitos a longo prazo.",
      "**Nutrição e movimento como aliados:** Aprendi a planejar refeições simples, saborosas e equilibradas, além de encaixar micro-hábitos de exercício.",
      "**Gerenciamento do estresse e saúde mental:** Voltamos nosso olhar para a saúde mental e o estresse. Fui apresentado a técnicas de respiração e práticas de mindfulness.",
      "**Plano de ação personalizado:** Reuni teoria e prática ao elaborar meu próprio plano de ação. Defini metas de bem-estar para as próximas semanas.",
    ],
    conclusion:
      "O curso foi dinâmico e interativo, mesclando apresentações breves, debates em grupo e atividades hands-on. Em poucas horas, absorvi ferramentas simples e eficazes para melhorar qualidade de vida.",
  },
];

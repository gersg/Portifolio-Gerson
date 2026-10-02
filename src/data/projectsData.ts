// Image assets
import hortaImage from '../assets/images/horta do futuro2.png';
import guaraImage from '../assets/images/guara.png';
import healSafeImage from '../assets/images/healsafelogo.png';
import mentisImage from '../assets/images/mentis.png';
import nasa2Image from '../assets/images/nasa2.jpg';
import tatuitechImage from '../assets/images/tatuilogo.png';
import zoni2Image from '../assets/images/zoni2.png';
import imagerenovaSystem from '../assets/images/image.png';
import ecoflixImage from '../assets/images/ecoflix.png';
import logosynapse from '../assets/images/logosynapse.png';
import logosynapse1 from '../assets/images/logosynapse1.png';

export interface ProjectFeature {
  title: string;
  description: string;
  iconType: 'code' | 'trending' | 'shield' | 'cloud' | 'bot' | 'leaf' | 'rocket' | 'database';
}

export interface ProjectDetail {
  id: string;
  category: 'tatui' | 'hackathons' | 'flow' | 'academic';
  categoryLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  badges: string[];
  award?: string;
  year: string;
  clientOrContext: string;
  role: string;
  shortDescription: string;
  heroPitch: string;
  metrics: { value: string; label: string }[];
  problemStatement: string;
  solutionOverview: string;
  features: ProjectFeature[];
  techStack: {
    frontend: string[];
    backend: string[];
    databaseAndCloud: string[];
    integrations: string[];
  };
  businessImpact: string;
  gersonContribution: string;
  links: {
    live?: string;
    youtube?: string;
    github?: string;
    whatsappMessage: string;
  };
}

export const allProjects: ProjectDetail[] = [
  // 1. Landing Page TATUi TECH
  {
    id: "tatui-landing",
    category: "tatui",
    categoryLabel: "TATUi TECH",
    title: "TATUi TECH — Landing Page Institucional",
    subtitle: "Inovação que se adapta · Soluções robustas sob medida",
    tagline: "Software House & Laboratório de Produtos Digitais Escaláveis",
    image: tatuitechImage,
    badges: ["Empresa Oficial", "Software House", "Next.js / React"],
    year: "2024 - 2025",
    clientOrContext: "TATUi TECH (Empresa Proprietária)",
    role: "Fundador, Designer UI/UX & Desenvolvedor Full Stack",
    shortDescription: "Portal institucional e de geração de leads da TATUi TECH, software house fundada por Gerson Espíndola, especializada em desenvolvimento sob medida, IA e SaaS escalável.",
    heroPitch: "Uma plataforma digital de alta conversão criada para posicionar a TATUi TECH no mercado de desenvolvimento corporativo, demonstrando autoridade técnica, design adaptativo e propostas de valor claras para clientes B2B.",
    metrics: [
      { value: "100%", label: "Desenvolvimento Sob Medida" },
      { value: "< 1.2s", label: "Tempo de Carregamento" },
      { value: "+45%", label: "Taxa de Conversão de Leads" }
    ],
    problemStatement: "Muitas empresas sofrem com softwares genéricos e inflexíveis que não acompanham a evolução de seus modelos de negócio. Além disso, a contratação de desenvolvimento tradicional costuma ser lenta e desconectada das métricas reais de vendas e marketing do cliente.",
    solutionOverview: "Criamos a presença digital da TATUi TECH com base na metáfora do tatu: blindagem, agilidade e adaptação ao terreno. A landing page conecta clientes corporativos diretamente a esteiras de diagnóstico, apresentando serviços de SaaS sob medida, automações digitais e consultoria em IA.",
    features: [
      {
        title: "Arquitetura Modular Adaptativa",
        description: "Estrutura componível que permite a apresentação dinâmica de serviços sob demanda conforme o perfil do visitante.",
        iconType: "code"
      },
      {
        title: "Funil de Captação B2B Otimizado",
        description: "Formulários integrados com validação em tempo real e encaminhamento instantâneo para consultores via WhatsApp.",
        iconType: "trending"
      },
      {
        title: "Segurança & Performance Global",
        description: "Construído sobre Next.js e TypeScript com renderização ultra-otimizada e conformidade de privacidade de dados.",
        iconType: "shield"
      }
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Serverless Functions", "Express"],
      databaseAndCloud: ["Vercel Edge Network", "PostgreSQL", "Cloudflare DNS"],
      integrations: ["WhatsApp Business API", "Google Analytics 4", "Meta Pixel"]
    },
    businessImpact: "Consolidou a marca TATUi TECH perante investidores e clientes empresariais, reduzindo em 60% o ciclo médio de prospecção e fechamento de contratos de software.",
    gersonContribution: "Idealização do conceito de marca, redação de copywriting persuasivo B2B, arquitetura completa de código front-end e estruturação da esteira de atendimento comercial.",
    links: {
      live: "https://tatuitech.com.br",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi a landing page da TATUi TECH e gostaria de solicitar um orçamento para o meu negócio."
    }
  },

  // 2. Konnekti SaaS
  {
    id: "konnekti-saas",
    category: "tatui",
    categoryLabel: "TATUi TECH & Konnekti",
    title: "Konnekti — Ecossistema SaaS de Vendas & CRM",
    subtitle: "Conectando leads, marketing digital e equipe comercial em fluxo unificado",
    tagline: "A ponte definitiva entre campanhas de atração e fechamento de receita",
    image: logosynapse1,
    badges: ["Produto Proprietário", "CRM & Vendas", "Flow Digital"],
    year: "2024 - 2025",
    clientOrContext: "Produto Proprietário TATUi TECH",
    role: "Idealizador, Arquiteto de Software & Lead Full Stack",
    shortDescription: "Principal produto proprietário da TATUi TECH. Plataforma inteligente que centraliza funis de atração, qualifica contatos automaticamente e orquestra follow-ups no WhatsApp.",
    heroPitch: "O Konnekti elimina o abismo entre o marketing e o comercial. Uma esteira fluida que recebe leads de anúncios, aplica inteligência artificial para qualificação instantânea e coloca o vendedor em contato em menos de 60 segundos.",
    metrics: [
      { value: "< 60s", label: "Tempo de Primeiro Contato" },
      { value: "3.2x", label: "Aumento de Fechamento" },
      { value: "0%", label: "Leads Perdidos por Inércia" }
    ],
    problemStatement: "Empresas investem milhares de reais em tráfego pago, mas perdem até 70% dos contatos qualificados porque o tempo de resposta do time comercial é demorado ou porque os leads ficam espalhados em planilhas sem rastreamento.",
    solutionOverview: "O Konnekti centraliza múltiplos canais de atração em um painel único com pipeline visual (estilo Kanban inteligente), automações de resposta no WhatsApp e pontuação de leads (Lead Scoring) baseada no perfil de compra.",
    features: [
      {
        title: "Triagem Inteligente com IA",
        description: "Agente cognitivo analisa as respostas do formulário e categoriza a prontidão de compra do lead imediatamente.",
        iconType: "bot"
      },
      {
        title: "Disparo Automático no WhatsApp",
        description: "Notificação contextual no WhatsApp do lead e alerta simultâneo para o corretor ou consultor responsável.",
        iconType: "trending"
      },
      {
        title: "Analytics de CAC e Conversão",
        description: "Métricas transparentes cruzando gasto de anúncios com faturamento real gerado por cada canal.",
        iconType: "database"
      }
    ],
    techStack: {
      frontend: ["React 18", "TypeScript", "Tailwind CSS", "Chart.js"],
      backend: ["Node.js", "NestJS", "RESTful APIs", "WebSocket em tempo real"],
      databaseAndCloud: ["PostgreSQL", "Prisma ORM", "Redis Cache", "Docker"],
      integrations: ["WhatsApp Cloud API", "Google Gemini API", "Meta Webhooks", "Stripe"]
    },
    businessImpact: "Capacita empresas de médio e grande porte a escalarem suas operações comerciais sem precisar inflar desproporcionalmente o quadro de pré-vendedores.",
    gersonContribution: "Arquitetura completa do produto: modelagem do banco de dados relacional com Prisma, desenvolvimento das rotas autenticadas, integração de webhooks e esteira de vendas.",
    links: {
      live: "https://konnekti.tatuitech.com.br",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Tenho interesse em implementar a plataforma Konnekti na minha empresa."
    }
  },

  // 3. NASA Space Apps 2024
  {
    id: "nasa-space-apps",
    category: "hackathons",
    categoryLabel: "Hackathons",
    title: "NASA Space Apps 2024 — NASA Parts",
    subtitle: "Democratização e visualização de bio-pesquisas espaciais da NASA",
    tagline: "Vencedor do 1º Lugar Local e Selecionado para a Avaliação Global",
    image: nasa2Image,
    badges: ["🏆 1º Lugar Local", "Global Nominee", "NASA Space Apps 2024"],
    award: "1º Lugar Local & Indicado à Etapa Mundial",
    year: "2024",
    clientOrContext: "NASA Space Apps Challenge 2024",
    role: "Full Stack Developer & Apresentador do Pitch",
    shortDescription: "Projeto premiado no maior hackathon do planeta. Plataforma que traduz e democratiza o acesso a dados de experimentos biológicos realizados na Estação Espacial Internacional.",
    heroPitch: "Transformando terabytes de dados complexos sobre pesquisas biológicas em microgravidade em uma experiência visual intuitiva para cientistas, estudantes e entusiastas da exploração espacial.",
    metrics: [
      { value: "1º Lugar", label: "Classificação Regional" },
      { value: "Top Global", label: "Indicado à Etapa Mundial" },
      { value: "48 Horas", label: "Tempo de Prototipagem" }
    ],
    problemStatement: "Os resultados de experimentos biológicos realizados a bordo da ISS contêm dados valiosos sobre envelhecimento celular, radiação e medicina regenerativa, porém ficam dispersos em bases de dados governamentais de difícil interpretação.",
    solutionOverview: "Criamos o 'NASA Parts', uma aplicação web rica em visualizações que unifica os repositórios da NASA, permitindo cruzar linhagens celulares, duração de missões e impactos de radiação com poucos cliques.",
    features: [
      {
        title: "Explorador de Experimentos da ISS",
        description: "Filtros multidimensionais por espécie, missão espacial e tipo de microgravidade simulada.",
        iconType: "rocket"
      },
      {
        title: "Visualizador de Bio-Telemetria",
        description: "Gráficos comparativos que mostram variações genéticas e fisiológicas no espaço versus na Terra.",
        iconType: "database"
      },
      {
        title: "Interface Aberta para Educação",
        description: "Modo didático para estudantes do ensino médio e universidades com resumos em linguagem acessível.",
        iconType: "code"
      }
    ],
    techStack: {
      frontend: ["React", "TypeScript", "D3.js / Chart.js", "Sass"],
      backend: ["Node.js", "Express", "NASA Open Data APIs"],
      databaseAndCloud: ["NASA GeneLab API", "OSDR NASA", "Vercel"],
      integrations: ["APIs Públicas da NASA", "Data Normalization Pipelines"]
    },
    businessImpact: "Reconhecimento internacional do potencial da equipe, abrindo diálogo com comunidades de pesquisa espacial e comprovando a capacidade de entrega técnica sob alta pressão.",
    gersonContribution: "Desenvolvimento do motor de busca e consumo das APIs da NASA, criação de gráficos responsivos e redação e apresentação do pitch vencedor.",
    links: {
      live: "https://placeholder.com/nasa-part",
      youtube: "https://www.youtube.com/watch?v=t0YhLlujkHY&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=2",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Parabéns pelo prêmio no NASA Space Apps! Gostaria de conversar com você sobre projetos de inovação."
    }
  },

  // 4. Zonia INEP 2024
  {
    id: "zonia-inep",
    category: "hackathons",
    categoryLabel: "Hackathons",
    title: "Zonia — Sistema IoT de Alerta Contra Queimadas",
    subtitle: "Sensores infravermelhos distribuídos com alertas em tempo real via Telegram",
    tagline: "2º Lugar no Hackathon Impulso Regional INEP 2024",
    image: zoni2Image,
    badges: ["🥈 2º Lugar INEP", "IoT & Arduino", "Tempo Real"],
    award: "2º Lugar no Hackathon Impulso Regional INEP 2024",
    year: "2024",
    clientOrContext: "Hackathon Impulso Regional INEP",
    role: "Desenvolvedor Full Stack, Integração Hardware & Pitch",
    shortDescription: "Hardware IoT e software de monitoramento ambiental que detecta picos térmicos em frentes de expansão de desmatamento, disparando alertas imediatos para brigadistas.",
    heroPitch: "Detecção precoce de focos de incêndio antes que virem desastres incontroláveis: rede de sensores infravermelhos com transmissão remota e acionamento instantâneo de brigadas.",
    metrics: [
      { value: "2º Lugar", label: "Premiação Nacional INEP" },
      { value: "< 30s", label: "Tempo de Alerta Térmico" },
      { value: "100%", label: "Hardware de Baixo Custo" }
    ],
    problemStatement: "O monitoramento tradicional por satélite possui intervalos de horas entre passagens, permitindo que queimadas e ações criminosas de desmatamento destruam hectares antes de qualquer intervenção.",
    solutionOverview: "Zonia posiciona sensores térmicos infravermelhos compactos com microcontroladores Arduino em bordas de floresta e áreas vulneráveis. Ao detectar temperatura fora da curva natural, envia geolocalização e intensidade para um bot no Telegram e painel web.",
    features: [
      {
        title: "Malha de Sensores Infravermelhos",
        description: "Hardware de baixo custo e alta sensibilidade térmica para operação autônoma em campo.",
        iconType: "shield"
      },
      {
        title: "Alertas Automáticos no Telegram & WhatsApp",
        description: "Envio instantâneo do mapa com coordenadas exatas para os celulares dos brigadistas florestais.",
        iconType: "bot"
      },
      {
        title: "Dashboard Central de Risco",
        description: "Visualização geográfica dos nós da rede e previsão de direção do fogo baseada no vento local.",
        iconType: "database"
      }
    ],
    techStack: {
      frontend: ["React", "Leaflet Maps API", "CSS Modules"],
      backend: ["Node.js", "Express", "C++ / Firmware Arduino"],
      databaseAndCloud: ["PostgreSQL com suporte GIS", "MQTT Broker"],
      integrations: ["Telegram Bot API", "Sensores MLX90614", "Módulos GSM/GPRS"]
    },
    businessImpact: "Projeto viável para prefeituras, parques nacionais e cooperativas agrícolas com custo 10 vezes menor do que equipamentos importados de telemetria.",
    gersonContribution: "Programação da interface entre o microcontrolador e a API Node.js, testes de recepção de telemetria e apresentação do pitch para a banca de jurados do INEP.",
    links: {
      youtube: "https://www.youtube.com/watch?v=CLxz5DEV0qw&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=3",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi o projeto Zonia e achei incrível a proposta de monitoramento ambiental IoT."
    }
  },

  // 5. HealSafe Hackathon 2025
  {
    id: "healsafe-hackathon",
    category: "hackathons",
    categoryLabel: "Hackathons",
    title: "HealSafe — Cibersegurança Inteligente para a Saúde",
    subtitle: "Proteção hospitalar com monitoramento em tempo real e resposta a incidentes",
    tagline: "Blindagem digital preditiva para clínicas, laboratórios e hospitais",
    image: healSafeImage,
    badges: ["Hackathon Imdcode81 2025", "Cibersegurança", "IA Preditiva"],
    year: "2025",
    clientOrContext: "Hackathon Imdcode81 2025",
    role: "Front-End Lead & Modelagem de Solução",
    shortDescription: "Solução voltada à blindagem digital de prontuários clínicos e infraestrutura de saúde contra ataques cibernéticos e vazamento de dados em hospitais.",
    heroPitch: "Em hospitais, a segurança da informação é uma questão de vida ou morte. O HealSafe combina inteligência artificial e monitoramento ativo para isolar ameaças antes de qualquer interrupção operacional.",
    metrics: [
      { value: "99.8%", label: "Detecção de Anomalias" },
      { value: "LGPD", label: "Conformidade Total de Dados" },
      { value: "0ms", label: "Downtime em Simulações" }
    ],
    problemStatement: "Ataques de ransomware contra hospitais paralisam UTIs, cirurgias e prontuários. Os sistemas legados da saúde são frequentemente desatualizados e vulneráveis a sequestro de dados sensíveis.",
    solutionOverview: "Uma plataforma de cibersegurança preditiva que audita requisições aos prontuários eletrônicos, detecta padrões incomuns de exfiltração de dados e aciona contra-medidas automáticas em milissegundos.",
    features: [
      {
        title: "Análise Preditiva de Tráfego",
        description: "Algoritmos que identificam comportamento anômalo de usuários e tentativas de invasão interna.",
        iconType: "shield"
      },
      {
        title: "Controle de Acessos Granulares",
        description: "Princípio do menor privilégio para médicos, enfermeiros e equipes administrativas.",
        iconType: "code"
      },
      {
        title: "Isolamento Automatizado de Incidentes",
        description: "Desconexão instantânea de máquinas comprometidas sem derrubar o restante da rede clínica.",
        iconType: "cloud"
      }
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Material UI", "Tailwind CSS"],
      backend: ["Node.js", "Python (Modelos Preditivos)", "FastAPI"],
      databaseAndCloud: ["PostgreSQL Criptografado", "Redis"],
      integrations: ["SIEM Connectors", "Alertas em Tempo Real"]
    },
    businessImpact: "Protege instituições médicas contra multas milionárias da LGPD e previne paradas catastróficas em procedimentos cirúrgicos e laboratoriais.",
    gersonContribution: "Liderança do front-end, modelagem das telas de monitoramento e alinhamento da proposta de valor comercial para hospitais e planos de saúde.",
    links: {
      youtube: "https://www.youtube.com/",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi o projeto HealSafe e gostaria de entender mais sobre a arquitetura de segurança desenvolvida."
    }
  },

  // 6. Guardião Guará
  {
    id: "guardiao-guara",
    category: "hackathons",
    categoryLabel: "Hackathons",
    title: "Guardião Guará — Gestão Inteligente de Recursos",
    subtitle: "Plataforma de eficiência no consumo de água e energia com gamificação",
    tagline: "Gamificação e dados IoT para cidades sustentáveis e inteligentes",
    image: guaraImage,
    badges: ["Campus Party Goiás 2024", "Smart Cities", "Gamificação"],
    year: "2024",
    clientOrContext: "Campus Party Goiás 2024",
    role: "Full Stack Developer & Estratégia de Produto",
    shortDescription: "Plataforma concebida no Hackathon da Campus Party Goiás 2024 para conectar cidadãos, empresas e gestores públicos na economia sustentável de água e energia.",
    heroPitch: "Engajando cidadãos na conservação hídrica e elétrica através de desafios comunitários, telemetria em tempo real e incentivos econômicos de consumo sustentável.",
    metrics: [
      { value: "-22%", label: "Redução Média de Desperdício" },
      { value: "+80%", label: "Engajamento Comunitário" },
      { value: "Campus Party", label: "Destaque no Hackathon" }
    ],
    problemStatement: "A escassez hídrica e os custos elevados de energia afetam cidades inteiras, mas a população em geral não tem visibilidade clara de onde ocorrem os maiores desperdícios em seus imóveis.",
    solutionOverview: "O Guardião Guará transforma relatórios frios de contas públicas em uma experiência gamificada. O usuário monitora seus medidores inteligentes, ganha pontos por metas atingidas e compara bairros em rankings sustentáveis.",
    features: [
      {
        title: "Telemetria de Consumo Hídrico",
        description: "Gráficos hora a hora que detectam vazamentos ocultos e torneiras abertas.",
        iconType: "database"
      },
      {
        title: "Desafios Gamificados",
        description: "Missões comunitárias onde a economia de recursos é convertida em descontos em impostos ou comércio local.",
        iconType: "trending"
      },
      {
        title: "Painel para Gestores Públicos",
        description: "Mapa de calor do município apontando sobrecargas na rede de abastecimento e perdas físicas.",
        iconType: "cloud"
      }
    ],
    techStack: {
      frontend: ["React", "JavaScript ES6+", "Sass / SCSS"],
      backend: ["Node.js", "Express", "Microserviços REST"],
      databaseAndCloud: ["PostgreSQL", "Supabase"],
      integrations: ["Módulos de Telemetria IoT", "Ranking Engine"]
    },
    businessImpact: "Modelo inovador de parceria público-privada que estimula sustentabilidade urbana gerando economia direta para cofres públicos e famílias.",
    gersonContribution: "Desenvolvimento dos módulos de visualização de dados de consumo, design da interface e estruturação do modelo de incentivos gamificados.",
    links: {
      youtube: "https://www.youtube.com/watch?v=t0YhLlujkHY&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=2",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi o Guardião Guará na Campus Party Goiás e achei fantástica a abordagem."
    }
  },

  // 7. Flow Digital Comercial
  {
    id: "flow-digital-sales",
    category: "flow",
    categoryLabel: "Flow Digital & Automação",
    title: "Flow Digital — Automação de Funis Comerciais",
    subtitle: "Integração ponta a ponta de aquisição, CRM e follow-up inteligente",
    tagline: "Acelerando esteiras de vendas com automação orientada a ROI",
    image: logosynapse,
    badges: ["Automação B2B", "Webhooks & APIs", "n8n / Zapier"],
    year: "2024 - 2025",
    clientOrContext: "TATUi TECH & Consultorias Corporativas",
    role: "Arquiteto de Integrações & Flow Engineer",
    shortDescription: "Orquestração de fluxos digitais que conectam campanhas de anúncios, captação em landing pages, qualificação instantânea de leads e roteamento para o time de vendas.",
    heroPitch: "Automatizando os 80% do trabalho repetitivo para que seus vendedores se concentrem nos 20% que realmente fecham contratos: negociação humana e fechamento.",
    metrics: [
      { value: "4x Mais", label: "Velocidade de Atendimento" },
      { value: "-75%", label: "Tarefas Manuais de Cadastro" },
      { value: "100%", label: "Sincronização com CRM" }
    ],
    problemStatement: "Em times comerciais convencionais, corretores e consultores perdem metade do dia preenchendo planilhas, copiando dados de contatos e enviando mensagens manuais de follow-up que poderiam ser automatizadas.",
    solutionOverview: "Projetamos pipelines completos de Flow Digital utilizando n8n, webhooks seguros e APIs corporativas. Assim que um cliente emite sinal de interesse, o sistema enriquece os dados, gera proposta personalizada e agenda reunião.",
    features: [
      {
        title: "Orquestrador de Webhooks Multicanal",
        description: "Recebe eventos de landing pages, anúncios do Facebook, Google e gateways de pagamento sem perda de pacotes.",
        iconType: "cloud"
      },
      {
        title: "Lead Scoring e Priorização",
        description: "Classificação automática de acordo com faturamento, urgência e cargo do contato.",
        iconType: "trending"
      },
      {
        title: "Disparo Contextual de WhatsApp",
        description: "Mensagens com tom humano e links personalizados de agendamento enviados em segundos.",
        iconType: "bot"
      }
    ],
    techStack: {
      frontend: ["React Dashboard", "Tailwind CSS"],
      backend: ["n8n Workflow Engine", "Node.js", "Express Webhooks"],
      databaseAndCloud: ["PostgreSQL", "AWS EC2 / DigitalOcean"],
      integrations: ["WhatsApp Cloud API", "Meta Ads API", "Google Calendar API", "ActiveCampaign"]
    },
    businessImpact: "Gera aumento imediato na taxa de conversão de leads (de 3% para até 12%) ao reduzir o tempo de resposta e garantir cadência rigorosa de follow-up.",
    gersonContribution: "Mapeamento dos funis de vendas, estruturação da lógica dos fluxos no n8n, segurança das chaves de API e integração com bancos de dados relacionais.",
    links: {
      live: "https://tatuitech.com.br",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Quero implementar uma esteira de Flow Digital na operação de vendas da minha empresa."
    }
  },

  // 8. Synapse AI Flow
  {
    id: "flow-digital-ai",
    category: "flow",
    categoryLabel: "Flow Digital & Automação",
    title: "Synapse AI Flow — Agente Cognitivo de Triagem",
    subtitle: "Atendimento inteligente 24/7 com LLMs e agendamento automático",
    tagline: "Inteligência Artificial Generativa a serviço do crescimento de negócios",
    image: logosynapse1,
    badges: ["IA Generativa", "Google Gemini API", "Agentes Autônomos"],
    year: "2024 - 2025",
    clientOrContext: "TATUi TECH AI Labs",
    role: "AI Integration Lead",
    shortDescription: "Agente conversacional alimentado por inteligência artificial que qualifica solicitações de clientes, responde dúvidas operacionais e marca reuniões comerciais.",
    heroPitch: "Substitua chatbots mecânicos que irritam clientes por um assistente inteligente capaz de conduzir conversas naturais, tirar dúvidas técnicas e qualificar vendas 24 horas por dia.",
    metrics: [
      { value: "24/7", label: "Disponibilidade Total" },
      { value: "< 1.5s", label: "Tempo de Resposta com Gemini" },
      { value: "+50%", label: "Agendamentos Concluídos" }
    ],
    problemStatement: "Chatbots baseados em árvores de decisão antigas falham miseravelmente ao lidar com variações da linguagem humana, afastando potenciais compradores no primeiro contato.",
    solutionOverview: "Utilizando a moderna API do Google Gemini com técnicas avançadas de Prompt Engineering e grounding em bases de conhecimento do cliente, o Synapse AI Flow compreende intenções sutis e direciona o usuário ao fechamento.",
    features: [
      {
        title: "Compreensão de Linguagem Natural",
        description: "Capaz de interpretar perguntas complexas sobre produtos, serviços, preços e prazos.",
        iconType: "bot"
      },
      {
        title: "Agendamento Automático de Reuniões",
        description: "Consulta disponibilidade de horários no Google Calendar e envia convites com link de videoconferência.",
        iconType: "trending"
      },
      {
        title: "Transbordo Suave para Humanos",
        description: "Identifica o momento exato em que a intervenção de um consultor humano é recomendada e passa o contexto completo.",
        iconType: "code"
      }
    ],
    techStack: {
      frontend: ["React Chat Interface", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Python", "LangChain / GenAI SDK"],
      databaseAndCloud: ["PostgreSQL", "Vector Embeddings", "Google Cloud Platform"],
      integrations: ["Google Gemini API", "WhatsApp Business API", "Google Calendar API"]
    },
    businessImpact: "Permite que empresas atendam picos de tráfego de campanhas sem perder qualidade de resposta e sem aumentar o custo de suporte.",
    gersonContribution: "Engenharia de prompts com regras de conformidade corporativa, integração da API do Google Gemini e conexão com a esteira de atendimento WhatsApp.",
    links: {
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Gostaria de testar ou contratar o Synapse AI Flow para minha empresa."
    }
  },

  // 9. SIGCT Sistema
  {
    id: "sigct-sistema",
    category: "academic",
    categoryLabel: "Projetos Acadêmicos",
    title: "SIGCT — Gestão de Comunidades Terapêuticas",
    subtitle: "Sistema web integrado e autônomo para suporte clínico e administrativo",
    tagline: "Software corporativo para digitalização completa do cuidado em saúde",
    image: imagerenovaSystem,
    badges: ["Engenharia de Software", "Saúde & Gestão", "Arquitetura Web"],
    year: "2024",
    clientOrContext: "Projeto Acadêmico · Engenharia de Software",
    role: "Desenvolvedor Full Stack & Arquiteto de Software",
    shortDescription: "Sistema web robusto desenvolvido para digitalizar rotinas complexas de comunidades terapêuticas, incluindo prontuários clínicos, farmácia e hotelaria.",
    heroPitch: "Digitalizando o acolhimento humano: uma solução holística que gerencia desde a entrada do residente até a dispensação de medicamentos controlados e o acompanhamento terapêutico.",
    metrics: [
      { value: "100%", label: "Controle de Medicamentos" },
      { value: "RBAC", label: "Níveis de Permissão Seguros" },
      { value: "0 Erros", label: "Na Dispensação Farmacêutica" }
    ],
    problemStatement: "Comunidades terapêuticas lidam com informações médicas altamente confidenciais e dispensação de fármacos de controle especial, frequentemente registradas em cadernos manuais suscetíveis a perdas e fraudes.",
    solutionOverview: "O SIGCT organiza a instituição em módulos interdependentes: Triagem e Prontuário, Farmácia com auditoria de lote e validade, Hotelaria com controle de leitos e Agenda de Atividades Terapêuticas.",
    features: [
      {
        title: "Prontuário Multidisciplinar",
        description: "Evoluções médicas, psicológicas e de assistência social armazenadas com histórico inalterável.",
        iconType: "shield"
      },
      {
        title: "Módulo Farmacêutico Rastreável",
        description: "Controle de estoque, alerta de validade e baixa de receitas vinculadas ao residente.",
        iconType: "database"
      },
      {
        title: "Gestão Hoteleira e de Ocupação",
        description: "Visualização gráfica de quartos, leitos ocupados e cronogramas de atividades diárias.",
        iconType: "code"
      }
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Material UI", "Sass"],
      backend: ["Node.js", "Express", "JWT Authentication", "RBAC"],
      databaseAndCloud: ["PostgreSQL", "Prisma ORM", "Docker"],
      integrations: ["Relatórios PDF Dinâmicos", "Auditoria de Logs"]
    },
    businessImpact: "Eliminou 90% do tempo gasto em conferências burocráticas de estoque e garantiu conformidade com exigências da vigilância sanitária.",
    gersonContribution: "Arquitetura completa de dados no PostgreSQL, implementação das regras de controle de acesso (RBAC) e desenvolvimento do front-end em React.",
    links: {
      live: "https://placeholder.com/nasa-eco",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi o projeto SIGCT e gostaria de conversar sobre soluções de software para a área da saúde."
    }
  },

  // 10. Horta Resiliente
  {
    id: "horta-resiliente",
    category: "academic",
    categoryLabel: "Projetos Acadêmicos",
    title: "Horta Resiliente e Circular com IoT",
    subtitle: "Tecnologia e economia circular para escolas e enfrentamento climático",
    tagline: "Automação sensorial aliada à segurança alimentar e educação prática",
    image: hortaImage,
    badges: ["Sustentabilidade", "IoT & Sensores", "Educação Prática"],
    year: "2023 - 2024",
    clientOrContext: "Iniciativa de Inovação Socioambiental",
    role: "Desenvolvedor IoT & Coordenador",
    shortDescription: "Horta comunitária com sensores inteligentes de irrigação e monitoramento de solo, servindo como laboratório pedagógico de economia circular.",
    heroPitch: "Conectando agricultura urbana à Internet das Coisas: irrigação automática inteligente baseada em dados meteorológicos para máxima economia de água e geração de alimentos.",
    metrics: [
      { value: "-40%", label: "Economia de Água de Irrigação" },
      { value: "100%", label: "Alimentos Orgânicos" },
      { value: "IoT", label: "Automação com Arduino" }
    ],
    problemStatement: "Escolas e hortas urbanas frequentemente perdem colheitas por falta de rega nos fins de semana ou por uso excessivo de água potável em períodos de seca extrema.",
    solutionOverview: "Desenvolvemos canteiros automatizados equipados com sensores de umidade de solo e coletores de dados pluviométricos. O sistema só aciona as bombas quando o solo atinge o limiar crítico de estresse hídrico.",
    features: [
      {
        title: "Sensoriamento Contínuo de Umidade",
        description: "Sensores resistivos e capacitivos calibrados para diferentes tipos de hortaliças.",
        iconType: "leaf"
      },
      {
        title: "Irrigação por Gotejamento Automatizada",
        description: "Válvulas solenoides acionadas por relés programados no microcontrolador.",
        iconType: "cloud"
      },
      {
        title: "Laboratório de Economia Circular",
        description: "Compostagem de resíduos orgânicos integrada ao ciclo de enriquecimento da terra.",
        iconType: "database"
      }
    ],
    techStack: {
      frontend: ["React Dashboard", "Chart.js"],
      backend: ["Node.js", "C++ / Arduino IDE"],
      databaseAndCloud: ["SQLite / PostgreSQL", "ThingSpeak IoT Cloud"],
      integrations: ["Sensores de Umidade de Solo", "Relés Solenoides"]
    },
    businessImpact: "Criou um modelo replicável de baixo custo para cidades resilientes e combate à insegurança nutricional em escolas.",
    gersonContribution: "Montagem física do circuito de hardware, calibração dos sensores e criação da interface de acompanhamento.",
    links: {
      live: "https://placeholder.com/ecopraca",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi o projeto da Horta Resiliente com IoT e achei muito inspiradora a proposta."
    }
  },

  // 11. Mentis Portal
  {
    id: "mentis-portal",
    category: "academic",
    categoryLabel: "Projetos Acadêmicos",
    title: "Mentis — Conhecimento sobre Mente e Bem-Estar",
    subtitle: "Plataforma de divulgação científica, psiquiatria, psicologia e consciência",
    tagline: "Desmistificando a mente humana com ciência, empatia e tecnologia",
    image: mentisImage,
    badges: ["Saúde Mental", "Neurociência", "Comunidade Digital"],
    year: "2023 - 2024",
    clientOrContext: "Plataforma Digital & Comunidade",
    role: "Criador, Curador & Desenvolvedor Web",
    shortDescription: "Plataforma digital dedicada a democratizar o acesso a saberes sobre saúde mental, neurociência, espiritualidade e física quântica.",
    heroPitch: "Um refúgio digital de conhecimento aprofundado: conectando os avanços da neurociência e da psicologia comportamental à busca cotidiana por bem-estar e autodomínio.",
    metrics: [
      { value: "Artigos", label: "Conteúdos Científicos Curados" },
      { value: "Comunidade", label: "Leitores Engajados" },
      { value: "Design", label: "Experiência de Leitura Imersiva" }
    ],
    problemStatement: "A internet está repleta de desinformação sobre saúde mental e pseudociência vazia. As pessoas carecem de um espaço sério e acolhedor que traduza pesquisas acadêmicas para a vida prática.",
    solutionOverview: "Mentis atua como portal e hub comunitário, publicando ensaios fundamentados sobre neuroplasticidade, manejo do estresse, sono, inteligência emocional e a relação mente-corpo.",
    features: [
      {
        title: "Design Editorial Tipográfico",
        description: "Tipografia cuidadosa e paleta neutra projetada para relaxar a visão e incentivar a leitura focada.",
        iconType: "code"
      },
      {
        title: "Acervo de Guias Práticos",
        description: "Exercícios de mindfulness, respiração e higiene do sono explicados passo a passo.",
        iconType: "leaf"
      },
      {
        title: "Fórum de Troca Segura",
        description: "Espaço moderado para debates sobre desenvolvimento pessoal e reflexões existenciais.",
        iconType: "shield"
      }
    ],
    techStack: {
      frontend: ["React", "Next.js", "Sass / SCSS"],
      backend: ["Node.js", "Markdown / MDX Engine"],
      databaseAndCloud: ["PostgreSQL", "Vercel"],
      integrations: ["Instagram API", "Newsletter Engine"]
    },
    businessImpact: "Construiu uma audiência fiel e posicionou Gerson como comunicador empático e articulador de projetos humanizados.",
    gersonContribution: "Criação de toda a identidade visual, desenvolvimento do portal web e curadoria e redação dos primeiros ensaios conceituais.",
    links: {
      live: "https://placeholder.com/mentis",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Conheci o projeto Mentis e me identifiquei muito com a visão sobre saúde mental e consciência."
    }
  },

  // 12. EcoFlix Streaming
  {
    id: "ecoflix-streaming",
    category: "academic",
    categoryLabel: "Projetos Acadêmicos",
    title: "EcoFlix — Streaming Socioambiental",
    subtitle: "Educação ambiental e documentários de impacto sobre o planeta",
    tagline: "O poder do audiovisual a serviço da regeneração ecológica global",
    image: ecoflixImage,
    badges: ["Streaming Educativo", "Audiovisual", "Clima & Biodiversidade"],
    year: "2023 - 2024",
    clientOrContext: "Iniciativa Cultural & Socioambiental",
    role: "Front-End Developer & UI Designer",
    shortDescription: "Interface inspirada em streaming com catálogo curado de produções audiovisuais voltadas para energias renováveis e conservação ambiental.",
    heroPitch: "Entretenimento com propósito: uma plataforma sob demanda que reúne os documentários e séries mais inspiradores sobre a preservação do planeta Terra.",
    metrics: [
      { value: "Catálogo", label: "Documentários e Aulas" },
      { value: "Full HD", label: "Experiência Cinematográfica" },
      { value: "Impacto", label: "Conscientização Climática" }
    ],
    problemStatement: "A crise climática parece distante ou assustadora quando explicada apenas por gráficos científicos. É através de histórias humanas e imagens de tirar o fôlego que a conscientização real acontece.",
    solutionOverview: "O EcoFlix emula a experiência moderna das maiores plataformas de streaming (Netflix/Prime), organizando documentários por temas: Transição Energética, Florestas Tropicais, Oceanos e Agroecologia.",
    features: [
      {
        title: "Interface Estilo Streaming",
        description: "Carrosséis dinâmicos, trailers em destaque e reprodução otimizada para qualquer dispositivo.",
        iconType: "code"
      },
      {
        title: "Categorização Temática por Bioma",
        description: "Filtros rápidos para Amazônia, Mata Atlântica, Cerrado e Oceanos.",
        iconType: "leaf"
      },
      {
        title: "Ações Práticas Pós-Exibição",
        description: "Cada filme inclui links para ONGs e projetos reais onde o espectador pode se voluntariar ou doar.",
        iconType: "trending"
      }
    ],
    techStack: {
      frontend: ["React", "TypeScript", "CSS3 / Sass", "Video.js"],
      backend: ["Node.js", "Express Streaming API"],
      databaseAndCloud: ["PostgreSQL", "Cloudinary Video CDN"],
      integrations: ["YouTube Embed API", "Vimeo Player SDK"]
    },
    businessImpact: "Modelo inovador de edutainment (educação + entretenimento) com alto potencial de adoção em escolas e centros culturais.",
    gersonContribution: "Desenvolvimento da interface responsiva do catálogo, animações de transição e responsividade total para celulares e tablets.",
    links: {
      live: "https://placeholder.com/nasa-eco",
      github: "https://github.com/gersg",
      whatsappMessage: "Olá Gerson! Vi a plataforma EcoFlix e adorei a proposta de streaming socioambiental."
    }
  }
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return allProjects.find((p) => p.id === id);
}

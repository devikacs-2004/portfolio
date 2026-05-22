import { ExternalLink, Github, Brain, Wallet, Code, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Churn Intervention Intelligence System',
    description:
      'An end-to-end SaaS churn intelligence system that predicts customer churn using XGBoost, clustering, and survival analysis, combined with SHAP for explainability and business-driven insights. Deployed as an interactive Streamlit app that generates churn risk scores, time-to-churn estimates, ROI impact, and AI-powered personalised retention messages via Google Gemini API.',
    tags: ['Python', 'XGBoost', 'SHAP', 'Lifelines', 'Gemini API', 'Streamlit'],
    icon: Brain,
    featured: true,
    githubUrl: 'https://github.com/devikacs-2004/churn-intervention-system',
    demoUrl: 'https://churn-intervention-system-jbftk3ovuxu7xrttoha6l2.streamlit.app/',
  },
  {
    title: 'Customer Churn — Exploratory Data Analysis',
    description:
      'Published end-to-end EDA on IBM Telco Churn dataset. Uncovered key churn drivers: month-to-month customers churn 3x more than yearly contracts, first 10 months is the highest risk window, and Fiber Optic + high charges = highest churn segment. Visualised with Seaborn and Matplotlib.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'EDA'],
    icon: BarChart2,
    featured: true,
    githubUrl: '',
    demoUrl: 'https://www.kaggle.com/code/devikasubij/saas-customer-churn-eda',
  },
  {
    title: 'Amazon Clone',
    description:
      'A responsive Amazon-inspired e-commerce landing page showcasing a clean UI with navigation, search bar, promotional banners, and product sections. Built to demonstrate front-end design skills, responsive layouts, and real-world e-commerce interface patterns.',
    tags: ['CSS', 'HTML5', 'Responsive Design'],
    icon: Wallet,
    featured: true,
    githubUrl: 'https://github.com/devikacs-2004/amazon-clone',
    demoUrl: '',
  },
  {
    title: 'TBR Tracker – Personal Reading List Manager',
    description:
      'A simple, terminal-based Python project to manage your TBR (To Be Read) list. All data is stored in a local JSON file.',
    tags: ['JSON', 'Python'],
    icon: Code,
    featured: false,
    githubUrl: 'https://github.com/devikacs-2004/tbr-tracker',
    demoUrl: '',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Real-world applications built to solve problems and demonstrate skills
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group relative p-6 rounded-xl border border-border bg-card card-hover ${
              project.featured ? 'lg:col-span-1' : ''
            }`}
          >
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                  Featured
                </span>
              </div>
            )}

            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <project.icon className="w-6 h-6 text-primary" />
            </div>

            <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {project.title.includes('EDA') ? 'Kaggle' : 'Live App'}
                  </Button>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
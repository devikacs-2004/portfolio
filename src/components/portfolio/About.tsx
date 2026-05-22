import { Brain, Database, Briefcase, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'ML Engineer',
    description: 'Building end-to-end machine learning systems from EDA to deployed applications',
  },
  {
    icon: Database,
    title: 'Data Driven',
    description: 'Extracting business insights from data using Python, SQL, and statistical analysis ',
  },
  {
    icon: Rocket,
    title: 'Ships Products',
    description: 'Not just notebooks — deployed live ML apps with real URLs and real users',
  },
  {
    icon: Briefcase,
    title: 'Industry Ready',
    description: 'Hands-on internship experience in data analytics and cloud environments',
  },
];

export function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a Computer Science Engineering Graduate specialising in{' '}
            <span className="text-foreground font-medium">Data Science</span> and{' '}
            <span className="text-foreground font-medium">Machine Learning</span>. 
            I build systems that don't just predict — they explain, quantify, and act.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            My flagship project is a live churn intervention system combining XGBoost, 
            SHAP explainability, survival analysis, and a Google Gemini GenAI layer — 
            deployed as a Streamlit web app. Built from scratch, end to end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
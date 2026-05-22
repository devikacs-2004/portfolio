const skillCategories = [
  {
    title: 'Data Science & ML',
    skills: ['Python', 'XGBoost', 'Scikit-learn', 'SHAP', 'Pandas', 'NumPy', 'Lifelines'],
  },
  {
    title: 'Data & Analytics',
    skills: ['SQL', 'Data Analysis', 'EDA', 'Excel', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Deployment & AI',
    skills: ['Streamlit', 'Google Gemini API', 'Prompt Engineering', 'GitHub'],
  },
  {
    title: 'Cloud & Other',
    skills: ['Microsoft Azure', 'Cloud Security', 'HTML', 'CSS'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-container bg-card/50">
      <div className="text-center mb-16">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          A focused toolkit for building ML systems and extracting business value from data
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-xl border border-border bg-background"
          >
            <h3 className="font-display font-semibold text-lg mb-4 text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-secondary rounded-md text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
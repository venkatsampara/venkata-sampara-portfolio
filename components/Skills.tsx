// components/Skills.tsx
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: ".NET Core", level: 95 },
        { name: "C#", level: 95 },
        { name: "ASP.NET MVC", level: 90 },
        { name: "Web API/REST", level: 90 },
        { name: "WCF/SOAP", level: 85 },
        { name: "Entity Framework", level: 85 },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "AngularJS", level: 75 },
        { name: "jQuery", level: 80 },
      ],
    },
    {
      title: "Cloud & Databases",
      skills: [
        { name: "Microsoft Azure", level: 80 },
        { name: "AWS", level: 75 },
        { name: "SQL Server", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Oracle", level: 75 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git/TFS", level: 85 },
        { name: "Docker", level: 70 },
        { name: "ITIL/ITSM", level: 80 },
        { name: "Agile/Scrum", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "JIRA", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

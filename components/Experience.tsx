// components/Experience.tsx
import { BriefcaseIcon, CalendarIcon } from './Icons'

const Experience = () => {
  const experiences = [
    {
      title: '.Net Full Stack Web Developer',
      company: 'Pinacca Software Services Pvt Ltd',
      period: 'Jan 2024 - Present',
      description: 'Full stack development using .NET Core, React, and cloud technologies for enterprise applications.',
      technologies: ['.NET Core', 'React', 'Azure', 'Microservices']
    },
    {
      title: 'Freelance Sr .Net Core Developer',
      company: 'Getright Software Solutions Pvt Ltd',
      period: 'Dec 2022 - Dec 2023',
      description: 'Provided freelance development services focusing on .NET Core applications and cloud solutions.',
      technologies: ['.NET Core', 'AWS', 'C#', 'SQL Server']
    },
    {
      title: 'Technical Lead',
      company: 'Yugen Technologies',
      period: 'Nov 2018 - Nov 2022',
      description: 'Led technical teams in developing enterprise applications and provided architectural guidance.',
      technologies: ['MVC', 'AngularJS', 'Redis', 'Team Leadership']
    },
    {
      title: 'Sr. Analyst',
      company: 'ATTSPACE Ventures',
      period: 'April 2015 - Oct 2018',
      description: 'Senior analysis and development role focusing on enterprise application support and enhancements.',
      technologies: ['.NET', 'WCF', 'SQL Server', 'Analysis']
    },
    {
      title: 'Sr. Software Developer',
      company: 'ValueLabs Sdn. Bhd',
      period: 'July 2013 - April 2015',
      description: 'Software development and implementation for various client projects.',
      technologies: ['C#', 'MVC', 'Entity Framework', 'Web Services']
    },
    {
      title: 'Sr. Software Engineer',
      company: 'VenCore Inc., India',
      period: 'June 2008 - June 2013',
      description: 'Started professional career focusing on .NET technologies and web development.',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'JavaScript']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10">
                  <BriefcaseIcon />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1 sm:mt-0">
                      <CalendarIcon />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    {exp.company}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
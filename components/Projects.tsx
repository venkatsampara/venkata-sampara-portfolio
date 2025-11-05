// components/Projects.tsx
const Projects = () => {
  const featuredProjects = [
    {
      title: 'CryptoConverter',
      period: 'JAN 2024 - JAN 2025',
      description: 'Greenfield development of a Crypto Coin Sales and Purchase Application enabling end users to buy/sell crypto coins and convert to local currency.',
      technologies: ['.Net Core', 'Azure', 'ReactJs', 'MicroServices', 'Azure SQL'],
      accomplishments: [
        'Integrated blockchain technology for secure transactions',
        'Real-time data visualization and automated currency conversion',
        'Bank API integration for local currency transfers'
      ],
      image: '/crypto-converter.jpg'
    },
    {
      title: 'Billing Engine',
      period: 'DEC 2022 - DEC 2023',
      description: 'Infrastructure systems to collect VM utilization data and process billing information.',
      technologies: ['C#.NET', 'AWS', 'MicroServices', 'RDS', 'MSSQL'],
      accomplishments: [
        'Designed complete billing related applications',
        'Improved application stability and monitoring',
        'Worked with change and build teams for enhancements'
      ],
      image: '/billing-engine.jpg'
    },
    {
      title: 'Enterprise Self-Serve Portal',
      period: 'SEP 2018 - OCT 2022',
      description: 'Telecom company integrated business administrative portal for managing business accounts and services.',
      technologies: ['MVC5', 'C#', 'ReactJs', 'Redis', 'Hangfire'],
      accomplishments: [
        '24/7 production support and monitoring',
        'Developed automation scripts for support team',
        'Proactive issue identification and resolution'
      ],
      image: '/telecom-portal.jpg'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-20">
                  {project.title.split(' ')[0]}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Accomplishments:</h4>
                  <ul className="space-y-1">
                    {project.accomplishments.map((accomplishment, accIndex) => (
                      <li key={accIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {accomplishment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more projects? Check out my full portfolio
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
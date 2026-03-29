// components/Projects.tsx
import { projects, categoryColors } from '@/lib/projects-data'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Enterprise apps, AI/ML solutions, AIOps platforms, and healthcare systems —
          delivered end-to-end for clients in India and worldwide.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = categoryColors[project.category] ?? {
              bg: 'bg-gray-100',
              text: 'text-gray-700',
            }

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Card header */}
                <div className="h-44 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <div className="text-white text-4xl font-bold opacity-20">
                    {project.title.split(' ')[0]}
                  </div>
                  {/* Category badge */}
                  <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Title + period */}
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Outcome / impact callout */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded mb-4 text-sm text-green-800">
                    <strong>Outcome:</strong> {project.outcome}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key accomplishments */}
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Key Accomplishments
                    </h4>
                    <ul className="space-y-1">
                      {project.accomplishments.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust fields */}
                  {project.trustFields && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      {project.trustFields.impact && (
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          📈 {project.trustFields.impact}
                        </span>
                      )}
                      {project.trustFields.reliability && (
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                          🛡️ {project.trustFields.reliability}
                        </span>
                      )}
                      {project.trustFields.automation && (
                        <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          ⚡ {project.trustFields.automation}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Looking for a developer to bring your next idea to life?
          </p>
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
// components/Hero.tsx
import { DownloadIcon, MailIcon } from "./Icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 pt-24"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary">Venkat S</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Senior .NET Full Stack Developer - Architect.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 19 years of hands-on experience in enterprise
              applications development, cloud migrations, and full-stack
              solutions. Specialized in Microsoft technologies, microservices
              architecture, and delivering robust, scalable applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MailIcon />
                Get In Touch
              </a>
              <a
                href="/Venkat_Resume.pdf"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/40 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">19</div>
                      <div className="text-white font-medium">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

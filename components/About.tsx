// components/About.tsx
import { AwardIcon, UserIcon, TargetIcon } from "./Icons";

const About = () => {
  const stats = [
    { icon: AwardIcon, number: "19+", text: "Years Experience" },
    { icon: UserIcon, number: "50+", text: "Projects Delivered" },
    { icon: TargetIcon, number: "100%", text: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Professional Summary
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Achievement-oriented and innovative Software & Application
              Delivery professional with over 19 years of hands-on experience in
              spearheading and executing Enterprise applications development,
              delivery and maintenance. Highly expertise in Microsoft
              technologies (ASP.NET, MVC, C# & SQL Server).
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Possess excellent troubleshooting and analytical skills coupled
              with strong client focus. Dedicated, patient and self-motivated in
              leaving no stone unturned in achieving set goals.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((StatIcon, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 text-primary mx-auto mb-2">
                    {" "}
                    <StatIcon.icon />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {StatIcon.number}
                  </div>
                  <div className="text-sm text-gray-600">{StatIcon.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold mb-6 text-gray-900">
              Professional Strengths
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Automating Production Tasks",
                "Self-healing Mechanisms",
                "Performance Optimization",
                "Client Management",
                "Cloud Migrations",
                "Enterprise Support",
                "Problem Solving",
                "Proactive Monitoring",
              ].map((strength, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

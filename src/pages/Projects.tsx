import { Rocket, Users } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-gray-900/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Replace with your hero image in `public/projects-hero.png` or change to a hosted URL
            backgroundImage: 'url(/projects-hero.png)',
          }}
        ></div>
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-white text-center">Flagship Projects</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative group">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/projects-aquila.jpg"
                  alt="Project Aquila"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 rounded-xl p-6 shadow-xl">
                <Rocket size={48} className="text-white" />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                PROJECT AQUILA
              </h2>
              <p className="text-xl text-teal-400 mb-4 font-semibold">
                Competition Team
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 mx-auto">
                This is our faculty's flagship competition team. The Ruhuna Engineering Hub will be
                be the official home for Project Aquila's R&D, 3D printing, and testing, giving them the
                high-tech tools and space needed to compete and win.
              </p>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Key Benefits:</h3>
                <ul className="mx-auto space-y-2 text-gray-300 list-disc list-inside max-w-md">
                  <li>Dedicated workspace for research and development</li>
                  <li>Access to professional-grade 3D printing facilities</li>
                  <li>Advanced testing and prototyping equipment</li>
                  <li>Collaborative environment for team innovation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                ENABLING MULTI-YEAR INNOVATION
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 mx-auto">
                The Hub's most important job is to solve the 'batch gap.' It's built to be the home
                for large-scale projects that can be passed down, improved, and perfected, year after
                year. This is how we build a true legacy of engineering.
              </p>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Breaking the Batch Gap:</h3>
                <ul className="mx-auto space-y-2 text-gray-300 list-disc list-inside max-w-md">
                  <li>Seamless knowledge transfer between graduating and incoming students</li>
                  <li>Comprehensive project documentation preserved in digital repository</li>
                  <li>Continuous improvement across academic years</li>
                  <li>Building institutional memory for complex engineering projects</li>
                </ul>
              </div>
            </div>

            <div className="relative order-1 md:order-2 group">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/projects-collaboration.png"
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-500 rounded-xl p-6 shadow-xl">
                <Users size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Projects That Will Call the Hub Home
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Robotics & Automation',
              'Sustainable Energy Solutions',
              'IoT & Smart Systems',
              'Advanced Manufacturing',
              'Autonomous Vehicles',
              'Aerospace Engineering',
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-teal-500 transition-colors"
              >
                <p className="text-white font-semibold">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

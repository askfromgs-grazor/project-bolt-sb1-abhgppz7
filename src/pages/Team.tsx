import { Mail, Users } from 'lucide-react';

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-gray-900/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-white text-center">Our Team</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center">
            OFFICIAL BACKING
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center hover:border-teal-500 transition-colors">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Users size={64} className="text-teal-400" />
              </div>
              <p className="text-white font-bold text-lg text-center">University of Ruhuna</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center hover:border-teal-500 transition-colors">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Users size={64} className="text-teal-400" />
              </div>
              <p className="text-white font-bold text-lg text-center">Faculty of Engineering</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center hover:border-teal-500 transition-colors">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Users size={64} className="text-teal-400" />
              </div>
              <p className="text-white font-bold text-lg text-center">MMESS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">
            A PROJECT PROUDLY LED BY MMESS
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            We are a dedicated team of students, proudly led by the Mechanical & Manufacturing
            Engineering Student Society (MMESS) and fully supported by our faculty. We are committed
            to building a lasting legacy that will give all future students the tools they need to
            succeed.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-400 mb-6">GET IN TOUCH</h2>
            <p className="text-gray-300 text-lg">
              For corporate partnerships or any inquiries, please contact our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-teal-500 transition-all transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500 rounded-lg p-3 flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Project Lead</h3>
                  <p className="text-gray-400 mb-2">[Your Name]</p>
                  <a
                    href="mailto:your.email@eng.ruh.ac.lk"
                    className="text-teal-400 hover:text-teal-300 text-sm break-all"
                  >
                    your.email@eng.ruh.ac.lk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-teal-500 transition-all transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500 rounded-lg p-3 flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Faculty Advisor</h3>
                  <p className="text-gray-400 mb-2">[Professor's Name]</p>
                  <a
                    href="mailto:prof.email@eng.ruh.ac.lk"
                    className="text-teal-400 hover:text-teal-300 text-sm break-all"
                  >
                    prof.email@eng.ruh.ac.lk
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h3 className="text-white font-bold text-xl mb-4 text-center">
              Join Us in Building the Future
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Whether you're an alumnus, industry partner, or supporter of engineering education, we
              invite you to be part of this transformative initiative. Together, we can create a
              lasting impact on the next generation of engineers at Ruhuna.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

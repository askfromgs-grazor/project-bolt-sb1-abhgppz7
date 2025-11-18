import { Cpu, Database, Globe, BookOpen } from 'lucide-react';

export default function Ecosystem() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 to-gray-900/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Replace with your hero image in `public/ecosystem-hero.jpg` or change to a hosted URL
            backgroundImage: 'url(/ecosystem-hero.jpg)',
          }}
        ></div>
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-white text-center">The Ecosystem</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src="/ecosystem-makerspace.png"
                  alt="Makerspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 rounded-xl p-6 shadow-xl">
                <Cpu size={48} className="text-white" />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                1. THE MAKERSPACE
              </h2>
              <p className="text-xl text-teal-400 mb-4 font-semibold">
                "The Innovation Hub"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mx-auto">
                This is the physical heart of our ecosystem. It's the central 'Innovation Hub' that
                gives our students the 3D printers, AI boards, and electronics stations needed to
                build, test, and learn in one professional, collaborative home.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white mb-6">
                2. THE PROJECT REPOSITORY
              </h2>
              <p className="text-xl text-teal-400 mb-4 font-semibold">
                "The Digital Brain"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This is our solution to the 'batch gap.' The 'Digital Brain' is a central archive
                that captures the designs, code, and critical learnings from all projects. This
                ensures that knowledge is never lost, and new students can start where their seniors
                left off.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src="/ecosystem-repository.png"
                  alt="Project Repository"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-500 rounded-xl p-6 shadow-xl">
                <Database size={48} className="text-white" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src="/ecosystem-portal.png"
                  alt="Web Portal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 rounded-xl p-6 shadow-xl">
                <Globe size={48} className="text-white" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                3. THE WEB PORTAL
              </h2>
              <p className="text-xl text-teal-400 mb-4 font-semibold">
                "The Smart Inventory"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                To protect our sponsors' investment, this is a professional system. The 'Smart
                Inventory' portal tracks every tool, manages bookings for 3D printers, and ensures
                all students are accountable for the high-tech gear they borrow.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white mb-6">
                4. THE TECH MAGAZINE
              </h2>
              <p className="text-xl text-teal-400 mb-4 font-semibold">
                "Our Voice"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This is our 'proof of performance.' A bi-annual digital magazine to showcase the
                projects built in the Hub. This is how we share our success stories with the alumni,
                students, and partners who support us.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
                {/* Left blurred side */}
                <div
                  className="absolute inset-y-0 left-0 w-1/6 pointer-events-none bg-center bg-cover filter blur-2xl scale-110"
                  style={{ backgroundImage: "url(/ecosystem-magazine.png)" }}
                />

                {/* Right blurred side */}
                <div
                  className="absolute inset-y-0 right-0 w-1/6 pointer-events-none bg-center bg-cover filter blur-2xl scale-110"
                  style={{ backgroundImage: "url(/ecosystem-magazine.png)" }}
                />

                {/* Center image (keeps important part visible) */}
                <img
                  src="/ecosystem-magazine.png"
                  alt="Tech Magazine"
                  className="w-full h-full object-cover object-center relative z-10"
                />
                {/* subtle gradient overlays to blend blurred edges into center */}
                <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-900/80 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-500 rounded-xl p-6 shadow-xl">
                <BookOpen size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

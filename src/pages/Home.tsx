import { ArrowRight, Play } from 'lucide-react';
import { PageType } from '../types';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-gray-900/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Replace with your own hero image in `public/hero-bg.jpg` or change to a hosted URL
            backgroundImage: 'url(/hero-bg.jpg)',
          }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building the Future of
            <br />
            <span className="text-teal-400">Ruhuna Engineering</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-8">OUR MISSION</h2>
          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p>
              To launch the <span className="font-semibold">Ruhuna Engineering Hub</span>—a central,
              supported Makerspace, proudly led by MMESS, to solve our faculty's biggest innovation
              challenges: isolation and knowledge loss.
            </p>
            <p>
              The Hub will be a professional home for our most ambitious projects, moving them out of
              scattered, unofficial spaces and into one collaborative environment.
            </p>
            <p>
              This is the 'Faculty Upgrade' that solves the 'batch gap,' enabling large-scale,
              multi-year projects to be passed down from seniors to juniors, all powered by our
              digital 'Project Repository'.
            </p>
            <p className="text-gray-300">
              Explore our vision, and help us build the Hub that will define our legacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => onNavigate('support')}
            className="group inline-flex items-center space-x-3 bg-teal-500 hover:bg-teal-400 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
          >
            <span>SUPPORT US NOW</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={28} />
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                {/* Autoplaying video: place a `vision.mp4` file in the project's `public/` folder, or update the src to a hosted file */}
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/vision.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10 transition-all pointer-events-none">
                  {/* subtle overlay for visual depth */}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                OUR VISION IN 60 SECONDS
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mx-auto">
                This is our 'Faculty Upgrade' in action. See the future we are building, from the
                collaborative spaces to the high-tech prototyping that will power Project Aquila and
                our 'Project Repository'.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                THE ECOSYSTEM AT A GLANCE
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mx-auto">
                Our Hub is more than a room; it's a complete system. This 'Ecosystem' combines a
                physical Makerspace with a 'Digital Brain' (Project Repository) and 'Smart Inventory'
                (Web Portal) to solve the 'batch gap' and enable multi-year innovation.
              </p>
              <button
                onClick={() => onNavigate('ecosystem')}
                className="mt-8 inline-flex items-center justify-center mx-auto space-x-2 text-teal-400 hover:text-teal-300 font-semibold text-lg group"
              >
                <span>Explore the Ecosystem</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-gray-800 rounded-xl p-0 border border-gray-700 shadow-2xl overflow-hidden">
                {/* Autoplaying ecosystem video. Put `ecosystem.mp4` and an optional poster `ecosystem-poster.jpg` in `public/` or update paths to hosted files. */}
                <video
                  className="w-full rounded-lg object-cover"
                  poster="/ecosystem-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/ecosystem.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

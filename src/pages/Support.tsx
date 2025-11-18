import { Building2, Heart, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const [showAllTiers, setShowAllTiers] = useState(false);

  // Sponsorship tiers as per blueprint
  const sponsorshipTiers = [
    {
      tier: 'Tier 1: Core Kits',
      items: [
        { name: 'Fund an Arduino Uno Starter Kit', amount: '5,000 LKR' },
        { name: 'Fund a Digital Multimeter', amount: '15,000 LKR' },
        { name: 'Fund a Raspberry Pi 4 Kit', amount: '35,000 LKR' },
      ],
    },
    {
      tier: 'Tier 2: Prototyping Tools',
      items: [
        { name: 'Fund a Soldering & Hot Air Station', amount: '18,000 LKR' },
        { name: 'Fund a Benchtop Drill Press', amount: '45,000 LKR' },
        { name: 'Fund a 3D Printer (FDM)', amount: '75,000 LKR' },
        { name: 'Fund an Oscilloscope', amount: '90,000 LKR' },
      ],
    },
    {
      tier: 'Tier 3: Capstone Machines',
      items: [
        { name: 'Fund a Prosumer CNC Milling Machine', amount: '100,000 LKR' },
        { name: 'Fund a Handheld 3D Scanner', amount: '150,000 LKR' },
        { name: 'Fund a High-Fidelity Resin 3D Printer', amount: '175,000 LKR' },
        { name: 'Fund the CAD/Slicing Workstation', amount: '220,000 LKR' },
        { name: 'Fund the Advanced AI Rover Kit (DJI RoboMaster)', amount: '350,000 LKR' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 to-gray-900/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-white text-center">Support Us</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Official Donation Channel */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">HOW TO DONATE</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              To support the Ruhuna Engineering Hub, please use the official Faculty of Engineering bank account. Your contribution, no matter the size, directly funds the tools for our students.
            </p>
            <div className="bg-gray-900 border border-teal-500/30 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Bank Name</p>
                  <p className="text-white font-semibold text-lg">[GET THIS FROM THE FACULTY TOMORROW]</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Account Name</p>
                  <p className="text-white font-semibold text-lg">[GET THIS FROM THE FACULTY TOMORROW]</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Account Number</p>
                  <p className="text-white font-semibold text-lg">[GET THIS FROM THE FACULTY TOMORROW]</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-500/10 border border-teal-500 rounded-lg p-6">
              <p className="text-teal-400 font-bold text-lg mb-2">REFERENCE: <span className="text-teal-400">"Makerspace Fund"</span> <span className="text-white font-normal">(This is critical for tracking your donation!)</span></p>
            </div>
          </div>

          {/* Section 2: Our Funding Goals */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">OUR FUNDING GOALS</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We have two main goals to get the Hub operational. Stage One provides the "Bare Essentials" for prototyping and electronics. Stage Two adds "Advanced" capabilities for AI, robotics, and high-fidelity fabrication.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Stage One Goal <span className="font-normal">(Bare Essentials):</span> <span className="text-teal-400">LKR 1,106,900</span></h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Stage Two Goal <span className="font-normal">(Advanced Tooling):</span> <span className="text-teal-400">LKR 994,400</span></h3>
              </div>
            </div>
          </div>

          {/* Section 3: Sponsorship Tiers */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">SPONSOR A SPECIFIC ITEM</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Want to fund a specific piece of equipment? Choose from our official shopping list. If you fund a "Capstone" item, a plaque with your name or company will be placed on the machine.
            </p>
            <div className="space-y-8">
              {sponsorshipTiers.map((tier, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-teal-400 mb-3">{tier.tier}</h3>
                  <ul className="space-y-2">
                    {tier.items.map((item, i) => (
                      <li key={i} className="flex justify-between items-center bg-gray-900 border border-gray-700 rounded-lg px-4 py-3">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-teal-400 font-bold">{item.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Corporate & In-Kind Donations */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">CORPORATE & IN-KIND DONATIONS</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-2">
              We also gratefully accept 'in-kind' donations of new or used tools (as listed in our PDFs), software licenses, and materials. For all corporate partnerships, please contact our team directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

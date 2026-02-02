import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface Plan3DProps {
  plans3D: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export function Plans3DSection({ plans3D }: Plan3DProps) {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <>
      {/* 3D Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Plans 3D & Études Techniques</h2>
            <p className="text-lg text-gray-700">Conception détaillée et modélisation professionnelle de vos projets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans3D.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedPlan(index)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm">Cliquez pour voir les détails</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-[#1a3a52] mb-3">{plan.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{plan.description}</p>
                    <button className="text-[#E02B20] hover:text-[#c02318] mt-4 inline-flex items-center gap-2">
                      Voir plus →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Plan Details */}
      {selectedPlan !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-2xl text-[#1a3a52]">{plans3D[selectedPlan].title}</h3>
              <button 
                onClick={() => setSelectedPlan(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img 
                src={plans3D[selectedPlan].image}
                alt={plans3D[selectedPlan].title}
                className="w-full h-auto mb-6 rounded-lg"
              />
              <p className="text-gray-700 leading-relaxed text-lg">
                {plans3D[selectedPlan].description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

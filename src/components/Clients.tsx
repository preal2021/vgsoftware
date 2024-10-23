import React from 'react'
import { Briefcase } from 'lucide-react'

const Clients = () => {
  const clients = [
    'TechCorp',
    'InnovateSoft',
    'DataDynamics',
    'CloudNine',
    'SmartSystems',
    'FutureTech',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-600">Our Customers</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center bg-gray-100 rounded-lg p-4 w-40 h-20">
              <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-lg font-semibold text-gray-800">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
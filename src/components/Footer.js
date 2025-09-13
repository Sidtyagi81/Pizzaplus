import React from 'react'
import { Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-slate-800 py-12 px-4 sm:px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Pizza Plus+</h3>
              <p className="text-slate-400 leading-relaxed">
                Serving delicious pizzas with fresh ingredients and authentic recipes. Experience the perfect blend of flavors!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                  order@pizzaplus.com
                </p>
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-400 mt-1" />
                  123 Pizza Street, Food City - 12345
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
              <div className="space-y-2 text-slate-400">
                <a href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 by Pizza Plus+.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Facebook</a>
                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Instagram</a>
                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">WhatsApp</a>
                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Zomato</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
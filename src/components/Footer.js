import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="order" className="bg-black/80 backdrop-blur-xl border-t border-slate-800 py-12 px-4 sm:px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pizza Plus+</h3>
            <p className="text-slate-400 leading-relaxed">
              Serving delicious pizzas with fresh ingredients and authentic recipes.
              Experience the perfect blend of flavors!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-400">
              {/* Phone Numbers with Click-to-Call */}
              <p className="flex items-center flex-wrap">
                <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                <a href="tel:8865981598" className="hover:text-yellow-400 mr-4">8865981598</a>
                <a href="tel:9355215478" className="hover:text-yellow-400 mr-4">9355215478</a>
                <a href="tel:9368508518" className="hover:text-yellow-400">9368508518</a>
              </p>


              {/* Email */}
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                pizzaplus120@gmail.com
              </p>


            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
            <div className="space-y-2 text-slate-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
        {/* Addresses */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <div className="flex items-start text-slate-400">
          <div>
                  <div className='flex items-center'><MapPin className="w-4 h-4 mr-2 text-yellow-400 mt-1" /><p>Main Garh Bus Stand, Opp Jio Office, Siyana - 203412</p></div>
                  <div className='flex items-center'><MapPin className="w-4 h-4 mr-2 text-yellow-400 mt-1" /><p>Old Dibai Road, Chainpura, Near Swagat Garden Marriage Home, Shikarpur, Bulandshahr - 203395</p></div>
                  <div className='flex items-center'><MapPin className="w-4 h-4 mr-2 text-yellow-400 mt-1" /><p>Railway Station Road, Opp. Dev Nandini Hospital, Garhmukteshwar - 245205</p></div>
                  <div className='flex items-center'><MapPin className="w-4 h-4 mr-2 text-yellow-400 mt-1" /><p>Old Hariyali Bazar, Opp. Naveen Anaz Mandi, Near R.C. Farm House, Jhangirabad - 203394</p></div>
                </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 by Pizza Plus+.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/share/18vEgPzrR3/" className="text-slate-400 hover:text-yellow-400 transition-colors">Facebook</a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=z9nyxcs" className="text-slate-400 hover:text-yellow-400 transition-colors">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Zomato</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

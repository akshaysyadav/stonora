import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#E4B04F] to-[#C6922E] text-[#0D392E] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <img
                src="/media/logo1.jpg"
                alt="Stonora Logo"
                className="w-36 h-auto object-contain drop-shadow-lg rounded-lg"
              />
            </div>

            <p className="text-sm text-[#0D392E]/80 leading-relaxed">
              Your one-stop solution for all home services —
              save time, save money, live better.
            </p>

            <div className="flex space-x-4 mt-4 text-[#0D392E]">
              <a className="hover:text-white transition"><Facebook size={20} /></a>
              <a className="hover:text-white transition"><Twitter size={20} /></a>

              <a
                href="https://www.instagram.com/reel/DPfqOCBCDx7/?igsh=MXRpZG1vdXkyYjZ2cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/stonora-official/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D392E] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-white transition" to="/">Home</Link></li>
              <li><Link className="hover:text-white transition" to="/about">About Us</Link></li>
              <li><Link className="hover:text-white transition" to="/services">Services</Link></li>
              <li><Link className="hover:text-white transition" to="/how-it-works">How It Works</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D392E] mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-[#0D392E]/80">
              <li>Car Washing</li>
              <li>Pest Control</li>
              <li>Supply Drivers</li>
              <li>Plumbing</li>
              <li>Electrical Services</li>
              <li>Home Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D392E] mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-[#0D392E]/90">
              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <span>Mira Road, Gaurav Valley, near JP Infra, 401107</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98900 03000</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>official.stonora@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#0D392E]/20 mt-12 pt-6 text-center text-sm text-[#0D392E]/80">
          © {currentYear} <span className="font-semibold ">Stonora</span>.
          All rights reserved. | Privacy Policy | Terms of Service
        </div>

      </div>
    </footer>
  );
};

export default Footer;

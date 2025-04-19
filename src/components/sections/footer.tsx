import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0014] text-white py-12 border-t border-purple-800/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nexas Digi Solutions</h3>
            <p className="text-purple-300">
              Transforming businesses through innovative digital solutions
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-purple-300 hover:text-white transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-purple-300 hover:text-white transition cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("why-choose-us")} 
                  className="text-purple-300 hover:text-white transition cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-purple-300 hover:text-white transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-purple-300 hover:text-white transition"
                >
                  +91 XXXXXXXX80
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-400 min-w-[20px]" />
                <a
                  href="mailto:nexasdigisolutions@gmail.com"
                  className="text-purple-300 hover:text-white transition truncate"
                >
                  nexasdigisolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-purple-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-purple-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-purple-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-800/20 mt-8 pt-8 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Nexas Digi Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

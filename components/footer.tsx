import Image from "next/image"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/xtreme-couture-logo.png"
              alt="Xtreme Couture"
              width={200}
              height={80}
              className="mx-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8 text-white text-lg font-medium tracking-wider">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300 uppercase">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300 uppercase">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300 uppercase">
                  COURSES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300 uppercase">
                  PRICING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300 uppercase">
                  GALLERY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300 uppercase">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-6"></div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            Copyright ©2025 All rights reserved | XTREME COUTURE
          </p>
        </div>
      </div>
    </footer>
  )
}

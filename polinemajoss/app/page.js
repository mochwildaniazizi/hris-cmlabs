import Image from "next/image";
import Logo from '../public/images/hris-logo.png';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"



export default function Home() {
  return (
    <div className="items-center justify-items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full sticky top-5 z-50"> {/* z-50 untuk memastikan navbar berada di atas */}
        <nav className="bg-black text-white px-10 py-5 flex justify-between items-center rounded-full shadow-md max-w-8xl mx-auto">
          {/* Menu */}
          <ul className="flex space-x-10 text-sm font-medium">
            <li><a href="#home" className="hover:text-[#7CA5BF] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#7CA5BF] transition">About</a></li>
            <li><a href="#services" className="hover:text-[#7CA5BF] transition">Service</a></li>
          </ul>
          
          {/* Logo */}
          <div className="group flex items-center justify-center w-24 h-12 bg-white rounded-full overflow-hidden">
            <Image 
              src={Logo} 
              alt="Logo HRIS" 
              width={40} 
              height={40} 
              className="rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-80"
            />
          </div>

          {/* Menu */}
          <ul className="flex space-x-10 text-sm font-medium">
            <li><a href="#resume" className="hover:text-[#7CA5BF] transition">Resume</a></li>
            <li><a href="#projects" className="hover:text-[#7CA5BF] transition">Project</a></li>
            <li><a href="#contact" className="hover:text-[#7CA5BF] transition">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="row-start-2 flex flex-col items-center gap-10 sm:items-start text-center sm:text-left">
        <section id="hero" className="w-full text-center flex flex-col items-center py-16 bg-white px-6 sm:px-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            I'm <span className="text-[#1E3A5F]">CMLABS HRIS</span>, <br />
            Human Resource Information System
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Sistem terintegrasi untuk mengelola absensi, penggajian, data karyawan, dan surat menyurat dalam satu platform yang efisien.
          </p>

          <div className="mt-8 flex gap-4">
          <a
            href="#features"
            className="px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-full hover:bg-[#162e49] transition"
          >
            Lihat Fitur
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 text-gray-700 rounded-full hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition"
          >
            Hubungi Kami
          </a>
          </div>

          {/* Optional: Add image */}
          <div className="mt-12">
            <img src="/images/hris-illustration.png" alt="HRIS Illustration" className="w-full max-w-md" />
          </div>
        </section>

        <section id="services" className="bg-[#595959] text-white py-20 px-6 sm:px-12 rounded-t-4xl">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
              <h2 className="text-3xl font-bold">
                <span className="text-orange-500">My</span> Services
              </h2>
              <p className="text-gray-300 max-w-md text-sm sm:text-base mt-4 sm:mt-0">
                Kami menyediakan solusi HRIS berbasis web dan mobile untuk memenuhi kebutuhan perusahaan modern.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-[#1a1a1a] p-6 rounded-t-xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-bold mb-3">Absensi & Lembur</h3>
                <img src="/images/absensi.png" alt="Absensi" className="rounded-xl mb-4" />
                <p className="text-gray-400 text-sm">Pencatatan kehadiran otomatis dengan dukungan GPS, biometrik, dan cuti.</p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-[#1a1a1a] p-6 rounded-t-xl shadow hover:shadow-lg transition border-t-4 border-orange-500">
                <h3 className="text-lg font-bold mb-3">Payroll System</h3>
                <img src="/images/payroll.png" alt="Payroll" className="rounded-xl mb-4" />
                <p className="text-gray-400 text-sm">Penggajian otomatis lengkap dengan tunjangan, potongan, dan slip gaji.</p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-[#1a1a1a] p-6 rounded-t-xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-bold mb-3">Manajemen Karyawan</h3>
                <img src="/images/employee-management.png" alt="Manajemen" className="rounded-xl mb-4" />
                <p className="text-gray-400 text-sm">Pantau status, dokumen, dan histori karyawan secara real-time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>


      <footer className="row-start-3 w-full bg-gray-100 py-8 px-6 text-sm text-gray-600 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Left: Copyright */}
          <p>&copy; {new Date().getFullYear()} Jenny. All rights reserved.</p>
          
          {/* Middle: Links */}
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-orange-500 transition">Terms</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </div>

          {/* Right: Social Media */}
          <div className="flex gap-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Twitter size={20} />
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  LucideLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={"/logo.svg"}
                height={64}
                width={120}
                className=" w-30 lg:w-44 h-auto"
                alt="logo"
                priority
              />
            </Link>
          </div>
            <p className="text-sm text-background/90">
              Serene Urgent Care And Mind Clinic - Providing compassionate
              healthcare when you need it most.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary-hover transition"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary-hover transition"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary-hover transition"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary-hover transition"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#membership"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm hover:text-primary-hover transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#urgent-care"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Urgent Care
                </Link>
              </li>
              <li>
                <Link
                  href="#primary-care"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Primary Care
                </Link>
              </li>
              <li>
                <Link
                  href="#mental-health"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Mental Health
                </Link>
              </li>
              <li>
                <Link
                  href="#tms-therapy"
                  className="text-sm hover:text-primary-hover transition"
                >
                  TMS Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="#insurance"
                  className="text-sm hover:text-primary-hover transition"
                >
                  Insurance & Payments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-background mt-0.5 shrink-0" />
                <span className="text-sm">
                  4508 W Imperial HighwayInglewood, CA 90304
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background shrink-0" />
                <Link
                  href="tel:+1234567890"
                  className="text-sm hover:text-primary-hover transition"
                >
                  (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background shrink-0" />
                <Link
                  href="mailto:info@serenecare.com"
                  className="text-sm hover:text-primary-hover transition"
                >
                  info@serenecare.com
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-background mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p>Mon-Fri: 8AM - 8PM</p>
                  <p>Sat-Sun: 9AM - 5PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Serene Urgent Care And Mind Clinic.
              All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#privacy"
                className="text-sm text-background/60 hover:text-primary-hover transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-sm text-background/60 hover:text-primary-hover transition"
              >
                Terms of Service
              </Link>
              <Link
                href="#hipaa"
                className="text-sm text-background/60 hover:text-primary-hover transition"
              >
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

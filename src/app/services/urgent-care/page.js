import React from 'react';
import { Clock, Heart, Stethoscope, Activity, Shield, CheckCircle, Phone, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';

const UrgentCarePage = () => {
 const services = [
    "Minor injuries and wounds",
    "Sprains, strains, and fractures",
    "Cuts requiring stitches",
    "Burns and skin conditions",
    "Flu, cold, and respiratory infections",
    "COVID-19 testing and treatment",
    "Allergic reactions",
    "Fever and infections",
    "Nausea, vomiting, and diarrhea",
    "Urinary tract infections",
    "Minor eye and ear problems",
    "Work and school physicals"
  ];

  const features = [
    {
      icon: Clock,
      title: "No Appointment Needed",
      description: "Walk in anytime during our extended hours"
    },
    {
      icon: Activity,
      title: "Minimal Wait Times",
      description: "Get care quickly when you need it most"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Calm, supportive environment for your comfort"
    },
    {
      icon: Shield,
      title: "Integrated Support",
      description: "Medical and mental health services in one place"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-accent/20 via-white to-background py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Fast & Compassionate Care</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Urgent Care When You <span className="text-primary">Need It Most</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Serene Urgent Care & Mind Clinic offers fast, compassionate medical care when you need it most. Our team treats minor injuries, illnesses, and everyday health concerns with minimal wait times and a calm, supportive environment.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              We combine high-quality urgent care services with integrated mental-health support, ensuring you receive complete care for both body and mind - all in one convenient location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link href="tel:+1234567890" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  text-center mb-12">
            Why Choose Our Urgent Care
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold  mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Treated Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Conditions We Treat
            </h2>
            <p className="text-lg text-slate-600">
              Our experienced team is equipped to handle a wide range of urgent medical needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hours & Info Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Walk-in Hours */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold ">Walk-In Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Monday - Friday</span>
                  <span className="text-primary font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-slate-700">Saturday - Sunday</span>
                  <span className="text-primary font-semibold">9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="mt-6 bg-primary/10 border border-primary rounded-lg p-4">
                <p className="text-sm text-primary">
                  <strong>No appointment necessary!</strong> Walk in anytime during our hours. Online booking available to reduce wait time.
                </p>
              </div>
            </div>

            {/* What to Bring */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold ">What to Bring</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Valid photo ID</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Insurance card (if applicable)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">List of current medications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Payment method</span>
                </li>
              </ul>
              <div className="mt-6 bg-primary/10 border border-primary rounded-lg p-4">
                <p className="text-sm text-primary">
                  We accept most major insurance plans, Medicare, and Medi-Cal. Affordable membership plans available for uninsured patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
            Ready to Get the Care You Need?
          </h2>
          <p className="text-xl mb-8">
            Walk in today or book an appointment online for faster service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-background hover:bg-text  font-semibold rounded-lg hover:text-background transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Online Now
            </Link>
            <Link href="#locations" className="inline-flex items-center justify-center px-8 py-4 bg-text text-white font-semibold rounded-lg hover:bg-background transition hover:text-text ">
              Find Our Location
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UrgentCarePage;
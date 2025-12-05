import React from 'react';
import { Heart, Users, Activity, Calendar, Shield, CheckCircle, Phone, Sparkles, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

const PrimaryCarePage = () => {
 const services = [
    "Annual physical exams and wellness visits",
    "Chronic disease management (diabetes, hypertension, etc.)",
    "Preventive care and health screenings",
    "Immunizations and vaccinations",
    "Women's health services",
    "Men's health services",
    "Pediatric and family care",
    "Lab work and diagnostic testing",
    "Prescription management",
    "Weight management programs",
    "Nutrition and lifestyle counseling",
    "Coordination of specialist referrals"
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored healthcare plans that fit your unique needs and goals"
    },
    {
      icon: Activity,
      title: "Preventive Focus",
      description: "Proactive approach to keep you healthy and prevent illness"
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Comprehensive care for patients of all ages"
    },
    {
      icon: Shield,
      title: "Integrated Wellness",
      description: "Medical and mental health services in one location"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-accent/10 via-background to-primary/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Comprehensive Family Healthcare</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Primary Care for Your <span className="text-primary">Whole Family</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Primary Care at Serene Urgent Care & Mind Clinic provides personalized, continuous healthcare for you and your family. Our providers focus on preventive care, chronic condition management, and overall wellness, taking the time to understand your needs and support your long-term health goals.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              With a calm environment and convenient access to both medical and mental-health services, we make comprehensive, whole-person care simple and accessible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Visit
              </Link>
              <Link href="#new-patient" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition">
                <ClipboardCheck className="w-5 h-5 mr-2" />
                New Patient Forms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  text-center mb-12">
            Why Choose Us for Primary Care
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold  mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold  mb-4">
              Our Primary Care Services
            </h2>
            <p className="text-lg text-slate-600">
              Complete healthcare solutions for every stage of life
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="py-16 bg-linear-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Whole-Person Approach
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Preventive First</h3>
                    <p className="text-slate-600">Regular screenings and wellness exams to catch issues early</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Continuity of Care</h3>
                    <p className="text-slate-600">Build lasting relationships with providers who know your history</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Integrated Mental Health</h3>
                    <p className="text-slate-600">Address both physical and mental wellness in one place</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Patient Education</h3>
                    <p className="text-slate-600">Empower you with knowledge to make informed health decisions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Getting Started</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Schedule Your Visit</h4>
                    <p className="text-sm text-slate-600">Book online or call us directly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Complete New Patient Forms</h4>
                    <p className="text-sm text-slate-600">Fill out forms online before your visit</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Meet Your Provider</h4>
                    <p className="text-sm text-slate-600">Comprehensive assessment and care plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
            Become a Patient Today
          </h2>
          <p className="text-xl mb-8">
            Join our family and experience personalized, compassionate healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg hover:bg-text hover:text-background transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your First Visit
            </Link>
            <Link href="tel:+1234567890" className="inline-flex items-center justify-center px-8 py-4 bg-text text-white font-semibold rounded-lg hover:bg-background transition hover:text-text">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PrimaryCarePage;
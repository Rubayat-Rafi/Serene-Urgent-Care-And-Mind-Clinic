"use client";
import React from "react";
import {
  Brain,
  Heart,
  Shield,
  Users,
  CheckCircle,
  Calendar,
  Phone,
  Sparkles,
  Lock,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";

const MentalHealthPage = () => {
  const conditions = [
    "Depression and mood disorders",
    "Anxiety and panic disorders",
    "ADHD (Adult and pediatric)",
    "PTSD and trauma",
    "Bipolar disorder",
    "OCD (Obsessive-Compulsive Disorder)",
    "Stress management",
    "Grief and loss counseling",
    "Relationship issues",
    "Addiction and substance abuse support",
    "Sleep disorders",
    "Eating disorders",
  ];

  const treatments = [
    {
      icon: Brain,
      title: "Personalized Assessments",
      description: "Comprehensive evaluations tailored to your unique needs",
    },
    {
      icon: Users,
      title: "Therapy Options",
      description: "Individual, family, and group therapy sessions available",
    },
    {
      icon: Shield,
      title: "Evidence-Based Treatment",
      description:
        "Proven methods including CBT, DBT, and medication management",
    },
    {
      icon: Heart,
      title: "Brain Mapping & TMS",
      description: "Advanced diagnostic tools and innovative treatment options",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-liner-to-br from-background py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-third/20 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Compassionate Mental Health Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Mental Health Services for{" "}
              <span className="text-primary">Your Well-Being</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Mental Health Services at Serene Urgent Care & Mind Clinic offer
              compassionate, confidential support for those navigating stress,
              anxiety, depression, and other emotional challenges. Our skilled
              clinicians provide personalized assessments, therapy options, and
              evidence-based treatments, including brain mapping and TMS to help
              you regain balance and well-being.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              With a serene environment and integrated medical care, we make it
              easier to access the mental-health support you deserve, all in one
              convenient place.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center space-x-3 bg-primary/5 border border-primary/60 rounded-lg p-4 mb-8">
              <Lock className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-primary">
                <strong>100% Confidential:</strong> Your privacy is our
                priority. All services are HIPAA-compliant and completely
                confidential.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Evaluation
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak with Someone
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Approaches */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Treatment Approach
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <treatment.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-slate-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conditions Treated */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-lg text-slate-600">
              Expert care for a wide range of mental health concerns
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Same-Day Evaluations */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Same-Day Mental Health Evaluations
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                We understand that mental health concerns can&apos;t always
                wait. That&apos;s why we offer same-day evaluations to help you
                get the support you need, when you need it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Quick Access
                    </h3>
                    <p className="text-slate-600">
                      Get evaluated and begin treatment on the same day
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Comprehensive Assessment
                    </h3>
                    <p className="text-slate-600">
                      Thorough evaluation by experienced mental health
                      professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Immediate Treatment Plan
                    </h3>
                    <p className="text-slate-600">
                      Leave with a clear path forward and next steps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What to Expect
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Initial Consultation
                  </h4>
                  <p className="text-slate-600">
                    Meet with a mental health professional to discuss your
                    concerns and goals
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Assessment
                  </h4>
                  <p className="text-slate-600">
                    Comprehensive evaluation including medical history and
                    symptom review
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Treatment Options
                  </h4>
                  <p className="text-slate-600">
                    Review of therapy, medication, and innovative treatments
                    like TMS
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Personalized Plan
                  </h4>
                  <p className="text-slate-600">
                    Customized treatment plan tailored to your specific needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHQ-9 Assessment Promotion */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-primary to-primary-hover rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Free Depression Screening
                </h2>
                <p className="text-purple-100 text-lg">
                  Take our online PHQ-9 assessment before your visit
                </p>
              </div>
            </div>
            <p className="text-purple-50 mb-6">
              Our Patient Health Questionnaire-9 (PHQ-9) is a quick,
              confidential tool that helps us understand your current mental
              health status. Complete it online and bring the results to your
              appointment for a more efficient evaluation.
            </p>
            <Link
              href="#phq9"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-purple-50 transition shadow-lg"
            >
              <ClipboardList className="w-5 h-5 mr-2" />
              Take PHQ-9 Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Crisis Support */}
      <div className="py-12 bg-red-50 border-y border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Crisis Support Available
              </h3>
              <p className="text-slate-700 mb-4">
                If you&apos;re experiencing a mental health crisis or thoughts
                of self-harm, please call 988 (Suicide & Crisis Lifeline) or go
                to your nearest emergency room. We&apos;re here to help, but
                emergency situations require immediate intervention.
              </p>
              <p className="text-sm text-slate-600">
                <strong>National Suicide Prevention Lifeline:</strong> 988 (24/7
                Support) | <strong>Crisis Text Line:</strong> Text HOME to
                741741
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
            Take the First Step Toward Better Mental Health
          </h2>
          <p className="text-xl mb-8">
            You don&apos;t have to face mental health challenges alone.
            We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-background font-semibold rounded-lg hover:bg-text hover:text-background transition shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Evaluation
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-text text-background font-semibold rounded-lg hover:bg-background hover:text-text transition "
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthPage;

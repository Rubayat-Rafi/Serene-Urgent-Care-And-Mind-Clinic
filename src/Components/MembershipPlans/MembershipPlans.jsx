import { AlertCircle, CheckCircle, Shield, Sparkles } from "lucide-react";
import React from "react";

const MembershipPlans = ({setShowPlans}) => {

  const plans = [
    {
      name: "SERENE BASIC",
      subtitle: "Access & Wellness Essentials",
      monthly: 39,
      yearly: 399,
    //   color: "from-cyan-500 to-blue-500",
      color: "bg-text",
      benefits: [
        "1 Annual Non-covered Wellness & Lifestyle Assessment",
        "Unlimited Virtual Access Check-ins (administrative or wellness; no diagnosis or treatment)",
        "Priority scheduling",
        "Medication refill coordination (not prescribing visits)",
        "Digital health access portal",
        "10% off imaging",
        "10% off labs",
        "40% discount on self-pay office visits",
      ],
    },
    {
      name: "SERENE PLUS",
      subtitle: "Wellness & Care Access Plan",
      monthly: 89,
      yearly: 949,
    //   color: "from-primary to-accent",
      color: "bg-primary-hover",
      popular: true,
      benefits: [
        "2 Non-covered Wellness & Preventive Assessments per year",
        "4 Discounted In-clinic Visits per year",
        "Unlimited Virtual Access Check-ins",
        "20% off most self-pay labs & imaging",
        "1 Non-covered Mental Health Wellness Consultation",
        "Basic non-billable in-house tests (flu/strep/UA/glucose/pregnancy)",
      ],
    },
    {
      name: "SERENE PREMIUM",
      subtitle: "Comprehensive Access Plan",
      monthly: 159,
      yearly: 1699,
    //   color: "from-purple-500 to-indigo-500",
      color: "bg-text",
      benefits: [
        "4 Non-covered Wellness Assessments per year",
        "Unlimited Same-Day Scheduling Access",
        "Unlimited Virtual Access Check-ins",
        "Most in-house non-billable tests included",
        "40% off self-pay imaging & advanced diagnostics",
        "2 Non-covered Mental Health Optimization Sessions",
        "50% off TMS evaluation",
        "Annual body composition scan",
      ],
      familyAddon: "$49/month per additional member",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Membership Plans</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Serene Care{" "}
            <span className="text-primary">Membership Program</span>
          </h1>

          {/* Important Notice */}
          <div className="max-w-4xl mx-auto mt-8 bg-third/10 border-2 border-third rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-third shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm text-slate-900 leading-relaxed">
                  <strong>This membership is not health insurance.</strong> It
                  does not replace insurance, cover medically necessary
                  services, or alter insurance billing requirements. All
                  clinical treatment will be billed to insurance or self-pay
                  according to law.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 ${
                plan.popular
                  ? "border-primary shadow-2xl scale-105"
                  : "border-slate-200"
              } overflow-hidden hover:shadow-xl transition-all`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className={`bg-linear-to-br ${plan.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm opacity-90 mb-4">{plan.subtitle}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-3xl font-bold">${plan.monthly}</span>
                    <span className="text-sm opacity-90">/month</span>
                  </div>
                  <div className="text-sm opacity-90">
                    or ${plan.yearly}/year
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Includes:</h4>
                <ul className="space-y-3 mb-6">
                  {plan.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {plan.familyAddon && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                    <p className="text-xs text-purple-900">
                      <strong>Family Add-On:</strong> {plan.familyAddon}
                    </p>
                  </div>
                )}

                <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition cursor-pointer">
                  Select Plan
                </button>
              </div>

              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
                <p className="text-xs text-slate-600 italic">
                  <strong>Important:</strong> All diagnostic or treatment-based
                  visits will be billed per insurance rules or paid
                  out-of-pocket.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimers */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Legal Disclaimers
          </h2>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center">
              <Shield className="w-5 h-5 text-primary mr-2" />
              This Membership Is Not Insurance
            </h3>
            <p className="text-sm text-slate-700">
              This program is not a health insurance plan and does not provide
              coverage for medical necessities, emergencies, chronic care
              treatment, or any service normally covered by insurance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">
              Insurance Billing Rules Still Apply
            </h3>
            <p className="text-sm text-slate-700">
              If members use insurance for any covered medical service, all
              co-pays, deductibles, and coinsurance remain due. Membership does
              not reduce or waive legal insurance obligations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">
              No Prepaid Medical Services
            </h3>
            <p className="text-sm text-slate-700">
              The membership fee pays only for access, wellness, administrative
              conveniences, and discounted services—not for diagnosis,
              evaluation, or treatment of medical conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">
              Medically Necessary Services Are Billed Separately
            </h3>
            <p className="text-sm text-slate-700">
              Any service that constitutes medical evaluation, treatment,
              diagnostic interpretation, mental health care, or prescription
              management will be billed to insurance or charged as self-pay.
            </p>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary">
            <h3 className="font-bold text-primary mb-2">
              Cancel Anytime / No Contract
            </h3>
            <p className="text-sm text-primary">
              Required for California compliance. Members may cancel at any time
              with written notice.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowPlans(false)}
            className="px-8 py-3 bg-text text-white font-semibold rounded-lg hover:bg-slate-900 transition cursor-pointer"
          >
            Back to Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;

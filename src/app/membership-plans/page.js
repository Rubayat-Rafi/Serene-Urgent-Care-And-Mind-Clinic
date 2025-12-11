"use client";
import React from "react";
import { useState } from "react";
import {FileText} from "lucide-react";
import MembershipPlans from "@/Components/MembershipPlans/MembershipPlans";

const MembershipPlansPage = () => {
  const [showPlans, setShowPlans] = useState(false);
  const [formData, setFormData] = useState({
    memberName: "",
    dateOfBirth: "",
    address: "",
    effectiveDate: new Date().toISOString().split("T")[0],
    agreed: false,
    signature: "",
    signatureDate: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed || !formData.signature) {
      alert("Please complete all required fields and sign the agreement");
      return;
    }

    console.table(formData);
    setShowPlans(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showPlans) {
    return <MembershipPlans setShowPlans={setShowPlans} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl p-8 border-b border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Membership Program Agreement
              </h1>
              <p className="text-sm text-slate-600">
                Serene Urgent Care & Mind Clinic
              </p>
            </div>
          </div>
        </div>

        {/* Agreement Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8">
          {/* Member Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Member Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.memberName}
                  onChange={(e) =>
                    setFormData({ ...formData, memberName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Effective Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.effectiveDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        effectiveDate: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address *
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  rows="2"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
                  placeholder="Enter your full address"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Agreement Text */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8 max-h-96 overflow-y-auto border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">
              Membership Agreement Terms
            </h3>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  1. PURPOSE OF THIS AGREEMENT
                </h4>
                <p>
                  This Agreement establishes the terms under which the Member
                  may participate in the Serene Care Membership Program. The
                  Membership Program provides wellness, administrative, and
                  non-covered benefits and is not insurance or a substitute for
                  health insurance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  2. MEMBERSHIP IS NOT INSURANCE
                </h4>
                <p className="mb-2">The Member acknowledges and agrees that:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The Membership Program is not a health insurance plan, HMO,
                    PPO, or any form of medical coverage.
                  </li>
                  <li>
                    The Clinic does not assume financial risk for the
                    Member&apos;s future medical needs.
                  </li>
                  <li>
                    Members are strongly encouraged to maintain separate health
                    insurance coverage.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  3. MEMBERSHIP FEES
                </h4>
                <p>
                  Membership fees cover only the amenities, discounts, and
                  wellness benefits. Membership fees do NOT cover any medical,
                  diagnostic, therapeutic, or mental health treatment. All
                  medically necessary services will be billed to the
                  Member&apos;s insurance plan or charged as self-pay per the
                  Clinic&apos;s standard rates.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  4. CANCELLATION & TERMINATION
                </h4>
                <p>
                  The Member may cancel this Membership at any time with written
                  notice. No long-term contract is created. Monthly membership
                  fees are nonrefundable. Annual memberships may be refunded pro
                  rata minus services already used.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  5. NO EMERGENCY CARE GUARANTEED
                </h4>
                <p>
                  This Membership does not guarantee or include emergency
                  services, after-hours medical care, or immediate physician
                  availability. Members experiencing emergencies must call 911
                  or go to the nearest emergency department.
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-third/10 border border-third rounded-xl p-6 mb-6">
            <h3 className="font-bold text-slate-900 mb-3">Acknowledgment</h3>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="mt-1 w-5 h-5 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm text-slate-700">
                I acknowledge that I have read and understand this Agreement. I
                understand that Membership is not insurance, that medical
                services are billed separately, and I agree to comply with all
                terms.
              </span>
            </label>
          </div>

          {/* Signature */}
          <div className="mb-8">
            <h3 className="font-bold text-slate-900 mb-4">
              Electronic Signature
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Type Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.signature}
                  onChange={(e) =>
                    setFormData({ ...formData, signature: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  placeholder="Your signature"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.signatureDate}
                  onChange={(e) =>
                    setFormData({ ...formData, signatureDate: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg text-lg cursor-pointer"
          >
            Continue to Membership Plans
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipPlansPage;

"use client"
import { useState } from 'react';
import { AlertCircle, CheckCircle, FileText } from 'lucide-react';

const ResourcesForm = () => {
 const [formData, setFormData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    answers: Array(9).fill(null),
    difficulty: null,
    comments: '',
    clinicianNotes: ''
  });

  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself—or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way"
  ];

  const options = [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 }
  ];

  const difficultyOptions = [
    "Not difficult at all",
    "Somewhat difficult",
    "Very difficult",
    "Extremely difficult"
  ];

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...formData.answers];
    newAnswers[questionIndex] = value;
    setFormData({ ...formData, answers: newAnswers });
  };

  const calculateTotal = () => {
    return formData.answers.reduce((sum, answer) => sum + (answer || 0), 0);
  };

  const getInterpretation = (score) => {
    if (score <= 4) return { level: "Minimal depression", color: "text-emerald-600", bg: "bg-emerald-50" };
    if (score <= 9) return { level: "Mild depression", color: "text-cyan-600", bg: "bg-cyan-50" };
    if (score <= 14) return { level: "Moderate depression", color: "text-amber-600", bg: "bg-amber-50" };
    if (score <= 19) return { level: "Moderately severe depression", color: "text-orange-600", bg: "bg-orange-50" };
    return { level: "Severe depression", color: "text-red-600", bg: "bg-red-50" };
  };

  const totalScore = calculateTotal();
  const interpretation = getInterpretation(totalScore);
  const hasAnswer9 = formData.answers[8] !== null && formData.answers[8] > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-t-2xl p-8 border-b border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Patient Health Questionnaire-9 (PHQ-9)</h1>
              <p className="text-sm text-slate-600">Depression Screening Assessment</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-blue-900">
              <strong>Instructions:</strong> Over the last two weeks, how often have you been bothered by any of the following problems? Mark the box that best applies to you for each question below.
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="bg-white p-8 space-y-8">
          
          {/* Patient Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                placeholder="Enter patient name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              />
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
                <div className="flex items-start space-x-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-slate-900 font-medium pt-1">{question}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-11">
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className={`relative flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.answers[index] === option.value
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-slate-200 hover:border-teal-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option.value}
                        checked={formData.answers[index] === option.value}
                        onChange={() => handleAnswerChange(index, option.value)}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">{option.label}</div>
                        <div className="text-xs text-slate-500 mt-1">({option.value})</div>
                      </div>
                      {formData.answers[index] === option.value && (
                        <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-teal-600" />
                      )}
                    </label>
                  ))}
                </div>

                {/* Warning for Question 9 */}
                {index === 8 && hasAnswer9 && (
                  <div className="mt-4 ml-11 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-900">
                      <strong>Important:</strong> This response indicates thoughts of self-harm. Please ensure immediate clinical follow-up and assessment.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Score Display */}
          <div className={`${interpretation.bg} border-2 border-${interpretation.color.replace('text-', '')} rounded-xl p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Total Score</h3>
              <div className="text-4xl font-bold text-teal-600">{totalScore}</div>
            </div>
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white`}>
              <span className="text-sm font-semibold text-slate-700">Interpretation:</span>
              <span className={`text-sm font-bold ${interpretation.color}`}>{interpretation.level}</span>
            </div>
            <div className="mt-4 text-xs text-slate-600">
              <strong>Score Range:</strong> 0-4 (Minimal) | 5-9 (Mild) | 10-14 (Moderate) | 15-19 (Moderately Severe) | 20-27 (Severe)
            </div>
          </div>

          {/* Follow-up Question */}
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4">
              10. If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {difficultyOptions.map((option, index) => (
                <label
                  key={index}
                  className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.difficulty === option
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-slate-200 hover:border-teal-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="difficulty"
                    value={option}
                    checked={formData.difficulty === option}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="sr-only"
                  />
                  <span className="font-medium text-slate-900">{option}</span>
                  {formData.difficulty === option && (
                    <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-teal-600" />
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Comments
            </label>
            <textarea
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
              placeholder="Additional comments or concerns..."
            ></textarea>
          </div>

          {/* Clinician Notes */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Clinician Notes
            </label>
            <textarea
              value={formData.clinicianNotes}
              onChange={(e) => setFormData({ ...formData, clinicianNotes: e.target.value })}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
              placeholder="Clinical observations and recommendations..."
            ></textarea>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 rounded-b-2xl p-6 flex flex-col sm:flex-row gap-4 justify-end border-t border-slate-200">
          <button className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-300 hover:bg-slate-50 transition">
            Clear Form
          </button>
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition shadow-lg">
            Save & Submit
          </button>
        </div>
      </div>
    </div>
    );
};

export default ResourcesForm;
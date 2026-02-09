import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const SchoolDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    yourName: '',
    workEmail: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (!formData.schoolName || !formData.yourName || !formData.workEmail || !formData.phoneNumber) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare email content
      const emailContent = `
New School Demo Request

School Name: ${formData.schoolName}
Name: ${formData.yourName}
Email: ${formData.workEmail}
Phone: ${formData.phoneNumber}

Submitted on: ${new Date().toLocaleString()}
      `.trim();

      // Send email via Web3Forms (free email service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          to: 'founders@budlee.ai',
          from_name: formData.yourName,
          from_email: formData.workEmail,
          subject: `New School Demo Request from ${formData.schoolName}`,
          message: emailContent,
        }),
      });

      setIsSuccess(true);
      
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      schoolName: '',
      yourName: '',
      workEmail: '',
      phoneNumber: ''
    });
    setIsSuccess(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md">
        {/* Gradient Top Border */}
        <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-t-2xl" />
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Request a School Demo
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* School Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                    placeholder="Enter school name"
                  />
                </div>

                {/* Your Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                    placeholder="Enter work email"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold py-3.5 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Our team will contact you shortly.
              </p>
              <Button 
                onClick={handleClose}
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolDemoModal;

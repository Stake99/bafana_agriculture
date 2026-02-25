'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  // Step 1
  serviceType: string;
  farmSize: string;
  // Step 2
  servicesNeeded: string[];
  animalCount: string;
  timeline: string;
  location: string;
  // Step 3
  fullName: string;
  phone: string;
  email: string;
  additionalInfo: string;
  hearAbout: string;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    farmSize: '',
    servicesNeeded: [],
    animalCount: '',
    timeline: '',
    location: '',
    fullName: '',
    phone: '',
    email: '',
    additionalInfo: '',
    hearAbout: '',
  });

  const serviceTypes = [
    { id: 'consultation', label: 'Livestock Consultation', icon: '🐄' },
    { id: 'training', label: 'Training Program', icon: '📚' },
    { id: 'analytics', label: 'Data Analytics', icon: '📊' },
    { id: 'technology', label: 'Technology Solutions', icon: '💻' },
    { id: 'welfare', label: 'Animal Welfare Audit', icon: '🏥' },
    { id: 'sustainability', label: 'Sustainability Planning', icon: '🌱' },
  ];

  const farmSizes = [
    { value: 'small', label: 'Small Farm (1-50 animals)' },
    { value: 'medium', label: 'Medium Farm (51-200 animals)' },
    { value: 'large', label: 'Large Farm (201-1000 animals)' },
    { value: 'enterprise', label: 'Enterprise (1000+ animals)' },
  ];

  const services = [
    { id: 'herd-management', label: 'Herd Management', icon: '🐮' },
    { id: 'nutrition', label: 'Nutrition Planning', icon: '🌾' },
    { id: 'health-monitoring', label: 'Health Monitoring', icon: '💊' },
    { id: 'breeding', label: 'Breeding Programs', icon: '🧬' },
    { id: 'facility-design', label: 'Facility Design', icon: '🏗️' },
    { id: 'compliance', label: 'Regulatory Compliance', icon: '📋' },
    { id: 'training', label: 'Staff Training', icon: '👥' },
    { id: 'sustainability', label: 'Sustainability Assessment', icon: '♻️' },
  ];

  const handleServiceTypeSelect = (type: string) => {
    setFormData({ ...formData, serviceType: type });
  };

  const handleFarmSizeSelect = (size: string) => {
    setFormData({ ...formData, farmSize: size });
  };

  const toggleService = (serviceId: string) => {
    const current = formData.servicesNeeded;
    if (current.includes(serviceId)) {
      setFormData({ ...formData, servicesNeeded: current.filter(s => s !== serviceId) });
    } else {
      setFormData({ ...formData, servicesNeeded: [...current, serviceId] });
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setStep(1);
    setIsSuccess(false);
    setFormData({
      serviceType: '',
      farmSize: '',
      servicesNeeded: [],
      animalCount: '',
      timeline: '',
      location: '',
      fullName: '',
      phone: '',
      email: '',
      additionalInfo: '',
      hearAbout: '',
    });
    onClose();
  };

  const isStep1Valid = formData.serviceType && formData.farmSize;
  const isStep2Valid = formData.servicesNeeded.length > 0 && formData.animalCount && formData.timeline;
  const isStep3Valid = formData.fullName && formData.phone && formData.email;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors z-10"
          >
            <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSuccess ? (
            <>
              {/* Progress Steps */}
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-center justify-center gap-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                            step >= num
                              ? 'bg-brand-500 text-white'
                              : 'bg-neutral-200 text-neutral-400'
                          }`}
                        >
                          {num}
                        </div>
                        <span className={`text-sm mt-2 font-medium ${
                          step >= num ? 'text-neutral-900' : 'text-neutral-400'
                        }`}>
                          {num === 1 ? 'Service Type' : num === 2 ? 'Farm Details' : 'Contact Info'}
                        </span>
                      </div>
                      {num < 3 && (
                        <div className={`w-20 h-1 mx-2 rounded ${
                          step > num ? 'bg-brand-500' : 'bg-neutral-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="px-8 pb-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Service Type */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                          What service are you interested in?
                        </h2>
                        <p className="text-lg text-neutral-600">
                          Select your service type and farm size
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-4">
                          Service Type <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {serviceTypes.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => handleServiceTypeSelect(service.id)}
                              className={`p-6 rounded-2xl border-2 transition-all text-center hover:shadow-md ${
                                formData.serviceType === service.id
                                  ? 'border-brand-500 bg-brand-50'
                                  : 'border-neutral-200 hover:border-neutral-300'
                              }`}
                            >
                              <div className="text-4xl mb-3">{service.icon}</div>
                              <div className="font-semibold text-neutral-900 text-sm">
                                {service.label}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-4">
                          Farm Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.farmSize}
                          onChange={(e) => handleFarmSizeSelect(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                        >
                          <option value="">Select your farm size</option>
                          {farmSizes.map((size) => (
                            <option key={size.value} value={size.value}>
                              {size.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Farm Details */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                          Tell us about your farm
                        </h2>
                        <p className="text-lg text-neutral-600">
                          Help us understand your needs better
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-4">
                          Services Needed <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => toggleService(service.id)}
                              className={`p-4 rounded-xl border-2 transition-all text-left flex items-center gap-3 ${
                                formData.servicesNeeded.includes(service.id)
                                  ? 'border-brand-500 bg-brand-50'
                                  : 'border-neutral-200 hover:border-neutral-300'
                              }`}
                            >
                              <span className="text-2xl">{service.icon}</span>
                              <span className="font-medium text-neutral-900 text-sm">
                                {service.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Number of Animals <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.animalCount}
                            onChange={(e) => setFormData({ ...formData, animalCount: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          >
                            <option value="">Select animal count</option>
                            <option value="1-50">1-50 animals</option>
                            <option value="51-200">51-200 animals</option>
                            <option value="201-500">201-500 animals</option>
                            <option value="501-1000">501-1000 animals</option>
                            <option value="1000+">1000+ animals</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Project Timeline <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          >
                            <option value="">When do you need this?</option>
                            <option value="urgent">Urgent (Within 1 week)</option>
                            <option value="soon">Soon (1-4 weeks)</option>
                            <option value="planning">Planning (1-3 months)</option>
                            <option value="future">Future (3+ months)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Farm Location (if known)
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g., Green Valley, CA or specific farm name"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Info */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                          Your Contact Information
                        </h2>
                        <p className="text-lg text-neutral-600">
                          We'll use this to send you a personalized quote
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g., +1 (234) 567-890"
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Tell us about your goals
                        </label>
                        <textarea
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                          placeholder="Describe your agricultural goals, challenges, or any specific requirements..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          value={formData.hearAbout}
                          onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                        >
                          <option value="">Select an option</option>
                          <option value="search">Search Engine</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Referral</option>
                          <option value="event">Industry Event</option>
                          <option value="advertisement">Advertisement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-200">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 text-neutral-600 hover:text-neutral-900 font-semibold transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      BACK
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <motion.button
                      onClick={handleNext}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      NEXT
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleSubmit}
                      disabled={!isStep3Valid || isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          SUBMIT INQUIRY
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-8 py-16 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-brand-50 flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-4xl font-bold text-brand-500 mb-4">
                Thank You!
              </h2>

              <p className="text-xl text-neutral-600 mb-8">
                Your consultation inquiry has been successfully submitted.
              </p>

              <p className="text-lg text-neutral-600 mb-12">
                Our agricultural experts will review your request and get back to you within 24-48 hours with a personalized consultation plan and quote.
              </p>

              <div className="bg-neutral-50 rounded-2xl p-8 mb-8 space-y-4">
                <div className="flex items-center justify-center gap-3 text-neutral-700">
                  <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Need urgent assistance? Call us at <strong>+1 (234) 567-890</strong></span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-700">
                  <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Or email us at <strong>info@fealess.com</strong></span>
                </div>
              </div>

              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all"
              >
                CONTINUE BROWSING
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  selectedPlan: string;
}

export default function Contact({ selectedPlan }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preferred plan from membership cards
  useEffect(() => {
    if (selectedPlan) {
      setPlan(selectedPlan);
      // Automatically scroll to contact form if a plan was clicked
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedPlan]);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Full name is required';
    
    // Simple Indian phone number validation
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 10) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Save submission locally for demonstration
      const existing = localStorage.getItem('bnatural_enquiries') || '[]';
      const parsed = JSON.parse(existing);
      parsed.push({ name, phone, email, plan, message, date: new Date().toISOString() });
      localStorage.setItem('bnatural_enquiries', JSON.stringify(parsed));
      
      // Reset state
      setName('');
      setPhone('');
      setEmail('');
      setPlan('');
      setMessage('');
    }, 1500);
  };

  const googleMapsUrl = 'https://maps.google.com/?q=B+Natural+Gym+Orchid+Harmony+Adajan+Surat';

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            CONTACT B NATURAL
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-sans">
            Have queries about memberships, corporate rates, or trainer availability? Call us directly, send a WhatsApp ping, or drop your query below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: Details & Google Map Embed */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              {/* Gym Details */}
              <div className="flex flex-col gap-6">
                
                {/* Brand Name */}
                <div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider">
                    B NATURAL GYM
                  </h3>
                  <p className="text-brand-neon font-semibold text-xs tracking-widest uppercase -mt-1">
                    બ નેચરલ જિમ
                  </p>
                </div>

                {/* Address block */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-brand-neon rounded-xl flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Our Address</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                      4th Floor, Orchid Harmony,<br />
                      Gaurav Path Road, Adajan,<br />
                      Surat, Gujarat – 395009
                    </p>
                    <p className="text-zinc-500 text-xs font-mono mt-1.5 uppercase tracking-wider">
                      6Q48+8P Surat, Gujarat (Plus Code)
                    </p>
                  </div>
                </div>

                {/* Contact phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-brand-neon rounded-xl flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Phone Line</h4>
                    <p className="text-white font-display font-extrabold text-base mt-1">
                      +91 93162 82919
                    </p>
                    <p className="text-zinc-500 text-[10px] uppercase font-sans mt-0.5">Calls accepted 6 AM - 10 PM</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-brand-neon rounded-xl flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Working Hours</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                      <span className="text-white font-semibold">Morning Slot:</span> 6:00 AM – 12:00 PM<br />
                      <span className="text-white font-semibold">Evening Slot:</span> 4:00 PM – 10:00 PM
                    </p>
                    <p className="text-zinc-500 text-xs mt-1.5 font-sans italic">
                      Monday to Saturday (Closed Sunday)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a
                href="tel:+919316282919"
                className="bg-brand-neon hover:bg-brand-neon-light text-black font-extrabold text-xs uppercase tracking-wider py-4 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-brand-neon/10"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919316282919?text=Hello%20B%20Natural%20Gym!%20I%20am%20interested%20in%20joining%20and%20enquiring%20about%20the%20membership%20plans."
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs uppercase tracking-wider py-4 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/10"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Google Map Mockup */}
            <div className="border border-zinc-900 rounded-3xl overflow-hidden aspect-[16/9] relative bg-zinc-950 group">
              <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/20" />
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                alt="Map Background B Natural Gym"
                className="w-full h-full object-cover opacity-50 filter grayscale transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-8 h-8 text-brand-neon animate-bounce mb-3" />
                <h4 className="text-white text-sm font-display font-black uppercase tracking-wider">Orchid Harmony, 4th Floor</h4>
                <p className="text-zinc-400 text-xs mt-1.5 max-w-xs font-sans">Gaurav Path Road, Adajan, Surat</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white py-2 px-4 rounded-xl transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-neon" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-3xl p-8 sm:p-10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2">
              BOOK A SECURE APPOINTMENT
            </h3>
            <p className="text-zinc-500 text-xs mb-8 font-sans">
              Provide your active details below. Our support coordinator will get in touch with you via Call or WhatsApp to schedule your trial or clear your queries.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center flex flex-col items-center justify-center h-full max-w-md mx-auto"
              >
                <div className="w-16 h-16 bg-brand-neon/10 border border-brand-neon rounded-full flex items-center justify-center text-brand-neon mb-6">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase tracking-wider">Enquiry Received!</h4>
                <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                  Thank you! Our B Natural Gym representative will review your request and call you back at <span className="text-white font-semibold">{phone}</span> within <span className="text-brand-neon font-bold">2 hours</span>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  Submit another query
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Name */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Keyur Patel"
                    className={`w-full bg-zinc-900 border ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-brand-neon'
                    } rounded-xl py-3 px-4 text-white text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                </div>

                {/* Grid: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full bg-zinc-900 border ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-brand-neon'
                      } rounded-xl py-3 px-4 text-white text-sm focus:outline-none transition-colors`}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className={`w-full bg-zinc-900 border ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-brand-neon'
                      } rounded-xl py-3 px-4 text-white text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                {/* Plan Selector */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">
                    Preferred Membership Plan / Interest
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-neon rounded-xl py-3 px-4 text-zinc-300 text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select a Plan / Option</option>
                    <option value="Free Trial">Book Free 1-Day Trial Session</option>
                    <option value="Basic Plan">Basic Plan (Monthly)</option>
                    <option value="Standard Plan">Standard Plan (Quarterly)</option>
                    <option value="Premium Plan">Premium Plan (Annual)</option>
                    <option value="Weight Loss">Weight Loss Program</option>
                    <option value="Muscle Gain">Muscle Gain Program</option>
                    <option value="General Query">General Enquiry / Discussion</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">
                    Your Message / Goal (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your fitness goals or specify any health query..."
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-neon rounded-xl py-3 px-4 text-white text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-brand-neon hover:bg-brand-neon-light text-black font-extrabold uppercase tracking-wider text-xs py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 glow-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Query...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Secure Enquiry</span>
                    </>
                  )}
                </button>

                <div className="mt-2 text-center flex items-center justify-center gap-1.5 text-[10px] text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-neon" />
                  <span>Secure TLS connection. We never share your phone number.</span>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

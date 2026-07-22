import React, { useState } from 'react';
import { 
  Target, Sparkles, Zap, MessageSquareCode, Share2, Calendar, 
  CheckCircle2, AlertCircle, RotateCcw, Loader2, ArrowRight, 
  ExternalLink, Code, Layers, FileText, ChevronRight, X, Clock, Map
} from 'lucide-react';
import './App.css';

// Toolkit list
const TOOLKIT = [
  { name: 'Claude Pro', type: 'Coding & Architecture', status: 'active', desc: 'Primary environment for tutoring, refactoring, and logic design.' },
  { name: 'Cursor IDE', type: 'AI Code Editor', status: 'active', desc: 'Enables quick edits, HMR validation, and inline code repairs.' },
  { name: 'Gemini Advanced', type: 'Research & Code Reviews', status: 'active', desc: 'Used for clarifying specifications and reviewing edge cases.' },
  { name: 'Perplexity Pro', type: 'Web Research & Search', status: 'active', desc: 'Used for finding the latest APIs, library releases, and CSS techniques.' }
];

// Project list
const PROJECTS = [
  {
    id: 'portal',
    title: 'fly-rank-portal',
    subtitle: 'Employee Portal Status Management',
    desc: 'Interactive dashboard for managing employee records, tracking active shifts, and updating security access controls.',
    metrics: { performance: '99', loadTime: '0.4s', bundleSize: '42KB' },
    stack: ['React', 'Zustand', 'Vitest', 'CSS Variables'],
    challenges: 'Preventing unnecessary component re-renders while updating live shift logs.',
    solution: 'Designed a normalized global store using Zustand and implemented custom equality checks for state selectors.'
  },
  {
    id: 'dashboard',
    title: 'next-dashboard',
    subtitle: 'Real-Time Analytics Tracker',
    desc: 'A premium metric tracker showcasing visual data charts, HSL-based styling layouts, and dark/light dynamic toggles.',
    metrics: { performance: '98', loadTime: '0.6s', bundleSize: '55KB' },
    stack: ['React', 'Vite', 'Recharts', 'Vanilla CSS'],
    challenges: 'Designing smooth HSL transitions on chart components without layout shifts.',
    solution: 'Pre-rendered chart nodes with fallback skeleton grids and animated chart bars via CSS transitions.'
  },
  {
    id: 'scheduler',
    title: 'client-scheduler',
    subtitle: 'Interactive Scheduling Engine',
    desc: 'An elite booking system allowing clients to reserve 15-minute consultations directly on the web with live calendar slots.',
    metrics: { performance: '99', loadTime: '0.3s', bundleSize: '31KB' },
    stack: ['React', 'ES6 JavaScript', 'Custom Hooks', 'Unit Tests'],
    challenges: 'Managing time zone offsets and date validation on mock reservation clocks.',
    solution: 'Constructed custom date hooks that parse ISO string keys, caching schedules to local storage.'
  }
];

// Mock Calendar slots
const CALENDAR_SLOTS = [
  { day: 'Thursday', date: 'July 23', slots: ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'] },
  { day: 'Friday', date: 'July 24', slots: ['9:30 AM', '11:00 AM', '1:30 PM', '3:00 PM'] },
  { day: 'Monday', date: 'July 27', slots: ['10:00 AM', '12:00 PM', '2:30 PM', '5:00 PM'] }
];

function App() {
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [activeSitemapModal, setActiveSitemapModal] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  
  // Interactive Mock Booking Widget States
  const [bookingStep, setBookingStep] = useState('date'); // 'date', 'details', 'success'
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '' });
  const [bookingErrors, setBookingErrors] = useState({});
  const [isBooking, setIsBooking] = useState(false);
  
  // Contact Inquiry Form States
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', message: '' });
  const [inquiryErrors, setInquiryErrors] = useState({});
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [showInquiryToast, setShowInquiryToast] = useState(false);

  // Strategic reasoning hover details
  const getHighlightDetails = () => {
    switch (activeHighlight) {
      case 'person':
        return {
          title: 'The Target Person (Audience)',
          desc: 'A Lead Frontend Engineering Director at a design-focused software agency. They value visual detail, performance, and clean custom styling.',
          color: '#ca8aff'
        };
      case 'claim':
        return {
          title: 'The Core Claim (Unique Skill)',
          desc: 'Building pixel-perfect React frontends with vanilla HSL styling and smooth animations, combined with AI pair-programming velocity.',
          color: '#55e6ff'
        };
      case 'action':
        return {
          title: 'The One Action (Conversion)',
          desc: 'The final converter: booking a 15-minute project alignment call on the integrated Calendly scheduler.',
          color: '#64ffb4'
        };
      default:
        return {
          title: 'Explore Ghulam\'s Proof Strategy',
          desc: 'Hover over the highlighted segments in the proof statement to view the underlying design logic and conversion mechanics.',
          color: '#9ca3af'
        };
    }
  };

  const highlightDetails = getHighlightDetails();

  // Booking Form Validator
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!bookingForm.name.trim()) errs.name = 'Name is required';
    if (!bookingForm.email.trim()) {
      errs.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(bookingForm.email.trim())) {
        errs.email = 'Please enter a valid email address';
      }
    }

    if (Object.keys(errs).length > 0) {
      setBookingErrors(errs);
      return;
    }

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingStep('success');
    }, 1200);
  };

  // Inquiry Form Validator
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!inquiryForm.name.trim()) errs.name = 'Name is required';
    if (!inquiryForm.email.trim()) {
      errs.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inquiryForm.email.trim())) {
        errs.email = 'Please enter a valid email address';
      }
    }
    if (!inquiryForm.message.trim()) errs.message = 'Message is required';

    if (Object.keys(errs).length > 0) {
      setInquiryErrors(errs);
      return;
    }

    setIsSubmittingInquiry(true);
    setTimeout(() => {
      setIsSubmittingInquiry(false);
      setShowInquiryToast(true);
      setInquiryForm({ name: '', email: '', message: '' });
      setInquiryErrors({});
      setTimeout(() => setShowInquiryToast(false), 4000);
    }, 1200);
  };

  const resetBooking = () => {
    setSelectedDayIndex(null);
    setSelectedSlot(null);
    setBookingForm({ name: '', email: '' });
    setBookingErrors({});
    setBookingStep('date');
  };

  return (
    <div className="portfolio-app">
      {/* Toast Notification */}
      {showInquiryToast && (
        <div className="toast" role="alert" aria-live="assertive">
          <CheckCircle2 className="toast-icon" />
          <span>Your message was sent! Ghulam will reply shortly.</span>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <span className="logo-initials">GM</span>
          <div className="logo-text">
            <span className="logo-name">Ghulam Mustafa Khizar</span>
            <span className="logo-role">Frontend AI Engineer</span>
          </div>
        </div>

        <nav className="header-nav" aria-label="Main Navigation">
          <a href="#strategy">Strategy</a>
          <a href="#work">Case Studies</a>
          <a href="#booking">Book Call</a>
          <a href="#booking" className="btn-nav-cta">Floating CTA</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="strategy" className="hero-section">
        <div className="hero-content">
          <div className="badge-row">
            <span className="badge">FL-01 Capstone Portfolio</span>
            <span className="badge primary">AI Engineering Track</span>
          </div>

          <h2 className="hero-title">
            Hi, I'm Ghulam. I build <span className="highlight-gradient">Pixel-Perfect React</span> applications with AI velocity.
          </h2>

          {/* Interactive Proof Statement */}
          <div className="proof-card">
            <div className="proof-card-header">
              <Target size={18} />
              <span>Sitemap Proof Statement</span>
              <button 
                type="button" 
                onClick={() => setActiveSitemapModal(true)} 
                className="btn-text-icon"
                aria-label="View Portfolio Sitemap Schema"
              >
                <Map size={16} />
                <span>View Sitemap</span>
              </button>
            </div>
            
            <p className="proof-statement-text">
              For a{' '}
              <span 
                className="proof-highlight person"
                onMouseEnter={() => setActiveHighlight('person')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                lead frontend engineering director at a premium, design-focused software agency looking for elite developers who can build fast without sacrificing detail
              </span>
              : I build{' '}
              <span 
                className="proof-highlight claim"
                onMouseEnter={() => setActiveHighlight('claim')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                pixel-perfect, highly interactive React frontend web applications using advanced AI-assisted pair programming workflows that combine elite visual execution with clean custom styling
              </span>
              . I prove this by showcasing my modular component design systems and performance audits so they will{' '}
              <span 
                className="proof-highlight action"
                onMouseEnter={() => setActiveHighlight('action')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                book a 15-minute project alignment call via my integrated scheduler
              </span>
              .
            </p>

            {/* Strategic reasoning detail box */}
            <div 
              className="strategy-detail-box"
              style={{
                borderColor: activeHighlight ? highlightDetails.color + '40' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: activeHighlight ? `0 0 20px ${highlightDetails.color}08` : 'none'
              }}
            >
              <span 
                className="strategy-detail-title"
                style={{ color: activeHighlight ? highlightDetails.color : 'var(--text-secondary)' }}
              >
                {highlightDetails.title}
              </span>
              <p className="strategy-detail-desc">{highlightDetails.desc}</p>
            </div>
          </div>

          {/* Toolkit */}
          <div className="toolkit-row">
            <h3>AI Engineering Tool Suite</h3>
            <div className="toolkit-grid">
              {TOOLKIT.map((tool, idx) => (
                <div key={idx} className="tool-card">
                  <div className="tool-header">
                    <span className="tool-title">{tool.name}</span>
                    <span className="status-badge">Active</span>
                  </div>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="work-section">
        <header className="section-header">
          <h2>Case Studies & Proof</h2>
          <p>Real-world projects audited with strict metrics, showcasing clean code structure and design precision.</p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((proj) => (
            <article key={proj.id} className="project-card">
              <div className="project-card-header">
                <h3>{proj.title}</h3>
                <span className="project-sub">{proj.subtitle}</span>
              </div>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="project-metrics">
                <div className="metric-item">
                  <span className="metric-val">{proj.metrics.performance}</span>
                  <span className="metric-lbl">Lighthouse</span>
                </div>
                <div className="metric-item">
                  <span className="metric-val">{proj.metrics.loadTime}</span>
                  <span className="metric-lbl">Load Time</span>
                </div>
                <div className="metric-item">
                  <span className="metric-val">{proj.metrics.bundleSize}</span>
                  <span className="metric-lbl">Bundle Size</span>
                </div>
              </div>

              <div className="project-tags">
                {proj.stack.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <button 
                type="button" 
                className="btn-card-action"
                onClick={() => setActiveProjectModal(proj)}
                aria-label={`Read deep dive for project ${proj.title}`}
              >
                <span>Read Deep Dive</span>
                <ChevronRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Booking and Contact Section */}
      <section id="booking" className="booking-section">
        <header className="section-header">
          <h2>Book Alignment Call</h2>
          <p>Reserve a 15-minute video consultation using our interactive scheduler widget below.</p>
        </header>

        <div className="booking-grid">
          {/* Calendar scheduler widget */}
          <div className="scheduler-widget">
            <header className="scheduler-header">
              <Calendar size={18} className="purple-accent" />
              <span>15-Min Project Alignment Call</span>
            </header>

            {bookingStep === 'date' && (
              <div className="scheduler-body" data-testid="scheduler-step-date">
                <p className="scheduler-prompt">Select a preferred booking date:</p>
                <div className="days-row">
                  {CALENDAR_SLOTS.map((day, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`day-selector ${selectedDayIndex === idx ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedDayIndex(idx);
                        setSelectedSlot(null);
                      }}
                      aria-label={`Select ${day.day}, ${day.date}`}
                    >
                      <span className="day-name">{day.day}</span>
                      <span className="day-date">{day.date}</span>
                    </button>
                  ))}
                </div>

                {selectedDayIndex !== null && (
                  <div className="slots-area">
                    <p className="scheduler-prompt">Select an available time slot:</p>
                    <div className="slots-grid">
                      {CALENDAR_SLOTS[selectedDayIndex].slots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`slot-selector ${selectedSlot === slot ? 'selected' : ''}`}
                          onClick={() => setSelectedSlot(slot)}
                          aria-label={`Select time slot ${slot}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <footer className="scheduler-footer">
                  <button
                    type="button"
                    className="btn-primary"
                    disabled={selectedDayIndex === null || selectedSlot === null}
                    onClick={() => setBookingStep('details')}
                  >
                    <span>Next: Add Details</span>
                    <ArrowRight size={16} />
                  </button>
                </footer>
              </div>
            )}

            {bookingStep === 'details' && (
              <form onSubmit={handleBookingSubmit} className="scheduler-body" data-testid="scheduler-step-details">
                <p className="scheduler-prompt">
                  Booking for: <strong className="white">{CALENDAR_SLOTS[selectedDayIndex].day}, {CALENDAR_SLOTS[selectedDayIndex].date} at {selectedSlot}</strong>
                </p>

                <div className="form-group">
                  <label htmlFor="booking-name">Your Name</label>
                  <input
                    type="text"
                    id="booking-name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className={bookingErrors.name ? 'input-error' : ''}
                    placeholder="Enter your name"
                  />
                  {bookingErrors.name && <span className="field-error-msg">{bookingErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="booking-email">Your Email</label>
                  <input
                    type="email"
                    id="booking-email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className={bookingErrors.email ? 'input-error' : ''}
                    placeholder="name@agency.com"
                  />
                  {bookingErrors.email && <span className="field-error-msg">{bookingErrors.email}</span>}
                </div>

                <footer className="scheduler-footer">
                  <button type="button" className="btn-secondary" onClick={() => setBookingStep('date')} disabled={isBooking}>
                    Back
                  </button>
                  <button type="submit" className="btn-primary" disabled={isBooking}>
                    {isBooking ? (
                      <>
                        <Loader2 className="spinner" size={16} />
                        <span>Reserving...</span>
                      </>
                    ) : (
                      <span>Confirm Booking</span>
                    )}
                  </button>
                </footer>
              </form>
            )}

            {bookingStep === 'success' && (
              <div className="scheduler-body success-body" data-testid="scheduler-step-success">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={40} className="success-icon" />
                </div>
                <h3>Reservation Confirmed!</h3>
                <p className="success-text">
                  A calendar invite and Zoom link have been dispatched to <strong className="white">{bookingForm.email}</strong>.
                </p>
                <div className="success-summary">
                  <div className="summary-row">
                    <Clock size={16} className="purple-accent" />
                    <span>{CALENDAR_SLOTS[selectedDayIndex].day}, {CALENDAR_SLOTS[selectedDayIndex].date}</span>
                  </div>
                  <div className="summary-row">
                    <Zap size={16} className="purple-accent" />
                    <span>{selectedSlot} (15 mins alignment)</span>
                  </div>
                </div>
                <button type="button" className="btn-secondary" onClick={resetBooking}>
                  Book Another Call
                </button>
              </div>
            )}
          </div>

          {/* Regular Inquiry Form */}
          <div className="inquiry-card">
            <header className="inquiry-header">
              <MessageSquareCode size={18} className="purple-accent" />
              <span>Send direct inquiry</span>
            </header>

            <form onSubmit={handleInquirySubmit} className="inquiry-form" noValidate>
              <div className="form-group">
                <label htmlFor="inquiry-name">Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="inquiry-name"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                  className={inquiryErrors.name ? 'input-error' : ''}
                  placeholder="e.g. Lead Director"
                />
                {inquiryErrors.name && <span className="field-error-msg">{inquiryErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-email">Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  id="inquiry-email"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                  className={inquiryErrors.email ? 'input-error' : ''}
                  placeholder="director@premiumagency.com"
                />
                {inquiryErrors.email && <span className="field-error-msg">{inquiryErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-msg">Project Description <span className="required">*</span></label>
                <textarea
                  id="inquiry-msg"
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  className={inquiryErrors.message ? 'input-error' : ''}
                  placeholder="Describe your project, timelines, or hiring parameters..."
                />
                {inquiryErrors.message && <span className="field-error-msg">{inquiryErrors.message}</span>}
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmittingInquiry}>
                {isSubmittingInquiry ? (
                  <>
                    <Loader2 className="spinner" size={16} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <span>FlyRank Frontend AI Engineering Capstone | Ghulam Mustafa Khizar</span>
        </div>
        <div className="footer-right">
          <a href="https://github.com/KhizarDoingProgramming" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
            <Share2 size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </footer>

      {/* Persistent Floating Call Button */}
      <a href="#booking" className="floating-cta" aria-label="Book a 15-minute consultation">
        <Calendar size={18} />
        <span>Book Call</span>
      </a>

      {/* Sitemap Modal */}
      {activeSitemapModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Sitemap Schema Modal">
          <div className="modal-content sitemap-modal-content">
            <header className="modal-header">
              <h2>Portfolio Sitemap Path</h2>
              <button type="button" onClick={() => setActiveSitemapModal(false)} className="btn-close" aria-label="Close sitemap modal">
                <X size={20} />
              </button>
            </header>
            
            <div className="modal-body sitemap-modal-body">
              {/* Responsive SVG Sitemap */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 550" className="modal-sitemap-svg">
                <rect width="100%" height="100%" fill="#0a0c14" rx="12"/>
                
                <defs>
                  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#a78bfa" />
                    <stop offset="100%" stop-color="#6d28d9" />
                  </linearGradient>
                  <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#60a5fa" />
                    <stop offset="100%" stop-color="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#34d399" />
                    <stop offset="100%" stop-color="#047857" />
                  </linearGradient>
                  <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1f2937" />
                    <stop offset="100%" stop-color="#111827" />
                  </linearGradient>
                  <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#4b5563" />
                  </marker>
                  <marker id="arrowGlow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#a78bfa" />
                  </marker>
                </defs>

                <g transform="translate(560, 30)">
                  <circle cx="10" cy="15" r="5" fill="#a78bfa" filter="url(#glow)"/>
                  <text x="22" y="19" font-family="Outfit, sans-serif" font-size="11" font-weight="600" fill="#e2e8f0">One Action Path</text>
                </g>

                <path d="M 390 190 L 190 280" fill="none" stroke="#1f2937" stroke-dasharray="3 3" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 390 190 L 610 280" fill="none" stroke="#1f2937" stroke-dasharray="3 3" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 190 380 L 370 410" fill="none" stroke="#1f2937" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 610 380 L 430 410" fill="none" stroke="#1f2937" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 400 240 L 400 375" fill="none" stroke="#a78bfa" stroke-width="2.5" marker-end="url(#arrowGlow)" filter="url(#glow)"/>

                <g transform="translate(250, 110)">
                  <rect width="300" height="130" rx="10" fill="url(#primaryGrad)" />
                  <text x="20" y="30" font-family="Outfit, sans-serif" font-size="11" font-weight="700" fill="#f5f3ff" letter-spacing="0.05em">HOME / LANDING PAGE</text>
                  <text x="20" y="55" font-family="Outfit, sans-serif" font-size="15" font-weight="800" fill="#ffffff">The Portfolio Hub</text>
                  <rect x="20" y="70" width="260" height="42" rx="6" fill="#4c1d95" opacity="0.3"/>
                  <text x="30" y="85" font-family="Outfit, sans-serif" font-size="10" font-weight="500" fill="#ddd6fe">CLAIM: High-Fidelity AI Frontend Dev</text>
                  <text x="30" y="99" font-family="Outfit, sans-serif" font-size="10" font-weight="700" fill="#fb7185">CTA: View Case Studies</text>
                </g>

                <g transform="translate(250, 390)">
                  <rect width="300" height="120" rx="10" fill="url(#secondaryGrad)" />
                  <text x="20" y="28" font-family="Outfit, sans-serif" font-size="11" font-weight="700" fill="#dbeafe" letter-spacing="0.05em">WORK / CASE STUDIES</text>
                  <text x="20" y="48" font-family="Outfit, sans-serif" font-size="15" font-weight="800" fill="#ffffff">The Proof Statement</text>
                  <rect x="20" y="64" width="260" height="38" rx="6" fill="#1d4ed8" opacity="0.3"/>
                  <text x="30" y="78" font-family="Outfit, sans-serif" font-size="10" font-weight="500" fill="#dbeafe">SHOWCASE: 3 AI-assisted Web Apps</text>
                  <text x="30" y="90" font-family="Outfit, sans-serif" font-size="10" font-weight="700" fill="#34d399">GOAL: Convert user to Book a Call</text>
                </g>

                <g transform="translate(40, 280)">
                  <rect width="250" height="100" rx="10" fill="url(#grayGrad)" />
                  <text x="18" y="26" font-family="Outfit, sans-serif" font-size="11" font-weight="700" fill="#9ca3af" letter-spacing="0.05em">ABOUT ME</text>
                  <text x="18" y="46" font-family="Outfit, sans-serif" font-size="14" font-weight="800" fill="#ffffff">The AI Developer</text>
                  <text x="18" y="66" font-family="Outfit, sans-serif" font-size="10" font-weight="500" fill="#9ca3af">Bio, tech stack (React/CSS/Vite),</text>
                  <text x="18" y="78" font-family="Outfit, sans-serif" font-size="10" font-weight="500" fill="#9ca3af">and General AI Fluency credentials.</text>
                </g>

                <g transform="translate(560, 280)">
                  <rect width="250" height="100" rx="10" fill="url(#accentGrad)" />
                  <text x="18" y="26" font-family="Outfit, sans-serif" font-size="11" font-weight="700" fill="#a7f3d0" letter-spacing="0.05em">CONTACT / SCHEDULER</text>
                  <text x="18" y="46" font-family="Outfit, sans-serif" font-size="14" font-weight="800" fill="#ffffff">The Target Action</text>
                  <text x="18" y="66" font-family="Outfit, sans-serif" font-size="10" font-weight="600" fill="#a7f3d0">Calendly scheduler embed.</text>
                  <text x="18" y="78" font-family="Outfit, sans-serif" font-size="10" font-weight="700" fill="#ffffff">GOAL: Secure a call reservation.</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Project Deep Dive Modal */}
      {activeProjectModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={`Detail Modal for ${activeProjectModal.title}`}>
          <div className="modal-content project-modal-content">
            <header className="modal-header">
              <div>
                <h2>{activeProjectModal.title}</h2>
                <span className="project-sub">{activeProjectModal.subtitle}</span>
              </div>
              <button type="button" onClick={() => setActiveProjectModal(null)} className="btn-close" aria-label="Close project modal">
                <X size={20} />
              </button>
            </header>

            <div className="modal-body">
              <div className="modal-metrics-summary">
                <div className="m-block">
                  <span className="m-val">{activeProjectModal.metrics.performance}</span>
                  <span className="m-lbl">Lighthouse Performance</span>
                </div>
                <div className="m-block">
                  <span className="m-val">{activeProjectModal.metrics.loadTime}</span>
                  <span className="m-lbl">DOM Content Loaded</span>
                </div>
                <div className="m-block">
                  <span className="m-val">{activeProjectModal.metrics.bundleSize}</span>
                  <span className="m-lbl">Initial Bundle Size</span>
                </div>
              </div>

              <div className="deep-dive-section">
                <h4>
                  <Code size={16} />
                  <span>The Architectural Challenge</span>
                </h4>
                <p>{activeProjectModal.challenges}</p>
              </div>

              <div className="deep-dive-section">
                <h4>
                  <Layers size={16} />
                  <span>Implemented Solution</span>
                </h4>
                <p>{activeProjectModal.solution}</p>
              </div>

              <div className="deep-dive-section">
                <h4>
                  <FileText size={16} />
                  <span>Technology Stack</span>
                </h4>
                <div className="project-tags">
                  {activeProjectModal.stack.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

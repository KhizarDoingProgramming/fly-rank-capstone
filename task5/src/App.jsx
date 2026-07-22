import React, { useState } from 'react';
import { User, Share2, Calendar, CheckCircle2, AlertCircle, RotateCcw, Loader2 } from 'lucide-react';
import './App.css';

// Initial default settings
const INITIAL_SETTINGS = {
  name: 'Ghulam Mustafa Khizar',
  title: 'Frontend AI Engineer',
  bio: 'Building pixel-perfect, highly interactive React frontends using advanced AI-assisted workflows.',
  github: 'https://github.com/KhizarDoingProgramming',
  linkedin: 'https://linkedin.com/in/ghulam-mustafa-khizar',
  calendly: 'https://calendly.com/khizar-alignment'
};

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({ ...INITIAL_SETTINGS });
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Validation rules
  const validateField = (name, value) => {
    let error = '';
    
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
    }
    
    if (name === 'title') {
      if (!value.trim()) error = 'Title is required';
      else if (value.trim().length < 2) error = 'Title must be at least 2 characters';
    }

    if (name === 'bio') {
      if (value.length > 300) error = 'Bio cannot exceed 300 characters';
    }

    if (name === 'github' && value.trim()) {
      const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
      if (!githubRegex.test(value.trim())) {
        error = 'Must be a valid GitHub profile URL (e.g., https://github.com/username)';
      }
    }

    if (name === 'linkedin' && value.trim()) {
      const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
      if (!linkedinRegex.test(value.trim())) {
        error = 'Must be a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)';
      }
    }

    if (name === 'calendly') {
      if (!value.trim()) {
        error = 'Calendly scheduler URL is required for alignment booking';
      } else {
        const calendlyRegex = /^https?:\/\/(www\.)?calendly\.com\/[a-zA-Z0-9_-]+\/?$/;
        if (!calendlyRegex.test(value.trim())) {
          error = 'Must be a valid Calendly scheduler URL (e.g., https://calendly.com/username)';
        }
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleReset = () => {
    setFormData({ ...INITIAL_SETTINGS });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Switch tab to the first error if it's on a different tab
      if (newErrors.name || newErrors.title || newErrors.bio) {
        setActiveTab('profile');
      } else if (newErrors.github || newErrors.linkedin) {
        setActiveTab('social');
      } else if (newErrors.calendly) {
        setActiveTab('calendly');
      }
      return;
    }

    // Mock saving process
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 1200);
  };

  return (
    <div className="settings-app">
      {showToast && (
        <div className="toast" role="alert" aria-live="assertive">
          <CheckCircle2 className="toast-icon" />
          <span>Portfolio settings updated successfully!</span>
        </div>
      )}

      <div className="settings-card">
        <header className="settings-header">
          <h1>Configure Portfolio</h1>
          <p>Customize your profile card, social connections, and Calendly alignment links.</p>
        </header>

        <div className="settings-body">
          <nav className="settings-tabs" aria-label="Settings Categories">
            <button
              type="button"
              className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
              aria-selected={activeTab === 'profile'}
              role="tab"
            >
              <User size={18} />
              <span>Profile Info</span>
              {(errors.name || errors.title || errors.bio) && (
                <span className="error-dot" aria-label="Errors in this section" />
              )}
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
              aria-selected={activeTab === 'social'}
              role="tab"
            >
              <Share2 size={18} />
              <span>Social Links</span>
              {(errors.github || errors.linkedin) && (
                <span className="error-dot" aria-label="Errors in this section" />
              )}
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === 'calendly' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendly')}
              aria-selected={activeTab === 'calendly'}
              role="tab"
            >
              <Calendar size={18} />
              <span>Calendly Sync</span>
              {errors.calendly && (
                <span className="error-dot" aria-label="Errors in this section" />
              )}
            </button>
          </nav>

          <form onSubmit={handleSubmit} className="settings-form" noValidate>
            {activeTab === 'profile' && (
              <div className="tab-pane" role="tabpanel" aria-label="Profile Info">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.name ? 'input-error' : ''}
                      placeholder="e.g. Ghulam Mustafa Khizar"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <AlertCircle className="field-error-icon" size={16} />}
                  </div>
                  {errors.name && (
                    <span className="field-error-msg" id="name-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="title">Professional Title <span className="required">*</span></label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.title ? 'input-error' : ''}
                      placeholder="e.g. Frontend AI Engineer"
                      aria-invalid={!!errors.title}
                      aria-describedby={errors.title ? "title-error" : undefined}
                    />
                    {errors.title && <AlertCircle className="field-error-icon" size={16} />}
                  </div>
                  {errors.title && (
                    <span className="field-error-msg" id="title-error" role="alert">
                      {errors.title}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <div className="label-with-counter">
                    <label htmlFor="bio">Bio</label>
                    <span className={`char-counter ${formData.bio.length > 300 ? 'counter-error' : ''}`}>
                      {formData.bio.length} / 300
                    </span>
                  </div>
                  <div className="input-wrapper">
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.bio ? 'input-error' : ''}
                      placeholder="Tell us about yourself..."
                      aria-invalid={!!errors.bio}
                      aria-describedby={errors.bio ? "bio-error" : undefined}
                    />
                  </div>
                  {errors.bio && (
                    <span className="field-error-msg" id="bio-error" role="alert">
                      {errors.bio}
                    </span>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="tab-pane" role="tabpanel" aria-label="Social Links">
                <div className="form-group">
                  <label htmlFor="github">GitHub Profile URL</label>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.github ? 'input-error' : ''}
                      placeholder="https://github.com/username"
                      aria-invalid={!!errors.github}
                      aria-describedby={errors.github ? "github-error" : undefined}
                    />
                    {errors.github && <AlertCircle className="field-error-icon" size={16} />}
                  </div>
                  {errors.github && (
                    <span className="field-error-msg" id="github-error" role="alert">
                      {errors.github}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn Profile URL</label>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.linkedin ? 'input-error' : ''}
                      placeholder="https://linkedin.com/in/username"
                      aria-invalid={!!errors.linkedin}
                      aria-describedby={errors.linkedin ? "linkedin-error" : undefined}
                    />
                    {errors.linkedin && <AlertCircle className="field-error-icon" size={16} />}
                  </div>
                  {errors.linkedin && (
                    <span className="field-error-msg" id="linkedin-error" role="alert">
                      {errors.linkedin}
                    </span>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'calendly' && (
              <div className="tab-pane" role="tabpanel" aria-label="Calendly Sync">
                <div className="form-group">
                  <label htmlFor="calendly">Calendly Link <span className="required">*</span></label>
                  <p className="field-helper">Required so frontend directors can book a 15-minute project alignment call directly from your portfolio.</p>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      id="calendly"
                      name="calendly"
                      value={formData.calendly}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.calendly ? 'input-error' : ''}
                      placeholder="https://calendly.com/username"
                      aria-invalid={!!errors.calendly}
                      aria-describedby={errors.calendly ? "calendly-error" : undefined}
                    />
                    {errors.calendly && <AlertCircle className="field-error-icon" size={16} />}
                  </div>
                  {errors.calendly && (
                    <span className="field-error-msg" id="calendly-error" role="alert">
                      {errors.calendly}
                    </span>
                  )}
                </div>
              </div>
            )}

            <footer className="form-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleReset}
                disabled={isSaving}
                aria-label="Reset fields to original values"
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>

              <button
                type="submit"
                className="btn-primary"
                disabled={isSaving}
                aria-label="Save all changes"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="spinner" size={16} />
                    <span>Saving...</span>
                  </>
                ) : (
                  <span>Save Settings</span>
                )}
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { 
  Compass, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  MessageSquareCode, 
  Zap, 
  AlertTriangle,
  FileText
} from 'lucide-react';

const toolkit = [
  { name: 'Claude Pro', type: 'Coding & Architecture', status: 'active', desc: 'Primary environment for tutoring, refactoring, and logic design.' },
  { name: 'ChatGPT Plus', type: 'General Debugging', status: 'active', desc: 'Secondary assistant used for general queries and code boilerplates.' },
  { name: 'Gemini Advanced', type: 'Research & Explanations', status: 'active', desc: 'Used for clarifying specifications and understanding docs.' },
  { name: 'Perplexity Pro', type: 'Web Research & Search', status: 'active', desc: 'Used for finding the latest APIs, library releases, and styling docs.' }
];

const customInstructions = `// CLAUDE PROJECT PROFILE SETTINGS (TUTOR ALIGNMENT)
{
  "project_name": "Portfolio Build",
  "role_alignment": {
    "instruct": "Act as an expert Frontend AI Engineering tutor. Guide me through building my portfolio. Do NOT write all code from scratch immediately. Instead, explain choices, ask clarifying design questions, suggest structural improvements, and review code quality to push me to learn."
  },
  "portfolio_proof_statement": {
    "claim": "I build high-fidelity, premium AI-assisted frontend web applications that deliver elite user experiences."
  },
  "development_stack": {
    "core": ["React", "Vite", "ES6+ JavaScript"],
    "styling": ["Vanilla CSS", "HSL Color Systems", "Custom Properties"]
  }
}`;

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-title-area">
          <h1>Portfolio Sitemap & Toolkit Setup</h1>
          <div className="header-meta">
            <span className="meta-badge primary">FL-01 Assignment</span>
            <span className="meta-badge">Track: General AI Fluency</span>
            <span className="meta-badge">Week 1</span>
          </div>
        </div>
        
        <div className="header-user">
          <div className="avatar">GM</div>
          <div className="user-info">
            <span className="user-name">Ghulam Mustafa Khizar</span>
            <span className="user-role">Frontend AI Engineering Intern</span>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid-main">
        
        {/* Left Column: Sitemap and Toolkit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Sitemap Card */}
          <section className="card">
            <div className="card-title">
              <Compass size={20} />
              <span>Portfolio Sitemap Sketch</span>
            </div>
            <p className="card-description">
              Visual sitemap representing the page architecture, showing how visitors are guided along the **One Action Path** to book a call.
            </p>

            <div className="sitemap-visual-container">
              {/* Inline SVG Sitemap */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 550" className="sitemap-svg-element">
                {/* Background */}
                <rect width="100%" height="100%" fill="#0c101d" rx="12"/>
                
                <defs>
                  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#8b5cf6" />
                    <stop offset="100%" stop-color="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#10b981" />
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
                  <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                    <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.6"/>
                  </filter>

                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#374151" />
                  </marker>
                  <marker id="arrowGlow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
                  </marker>
                </defs>

                {/* Legend */}
                <g transform="translate(560, 30)">
                  <circle cx="10" cy="15" r="5" fill="#a78bfa" filter="url(#glow)"/>
                  <text x="22" y="19" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#e2e8f0">One Action Path</text>
                  
                  <circle cx="170" cy="15" r="5" fill="#4b5563"/>
                  <text x="182" y="19" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#94a3b8">Standard Link</text>
                </g>

                {/* Connections (Standard) */}
                <path d="M 390 190 L 190 280" fill="none" stroke="#2a3347" stroke-dasharray="3 3" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 390 190 L 610 280" fill="none" stroke="#2a3347" stroke-dasharray="3 3" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 190 380 L 370 410" fill="none" stroke="#2a3347" stroke-width="1.5" marker-end="url(#arrow)" />
                <path d="M 610 380 L 430 410" fill="none" stroke="#2a3347" stroke-width="1.5" marker-end="url(#arrow)" />

                {/* Connections (One Action Path - Purple Glow) */}
                <path d="M 400 240 L 400 375" fill="none" stroke="#a78bfa" stroke-width="2.5" marker-end="url(#arrowGlow)" filter="url(#glow)"/>

                {/* HOME CARD */}
                <g transform="translate(250, 110)" filter="url(#shadow)">
                  <rect width="300" height="130" rx="10" fill="url(#primaryGrad)" />
                  <rect width="300" height="130" rx="10" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.4"/>
                  
                  <text x="20" y="30" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#e9d5ff" letter-spacing="0.05em">HOME / LANDING PAGE</text>
                  <text x="20" y="52" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#ffffff">The Portfolio Hub</text>
                  
                  <rect x="20" y="68" width="260" height="42" rx="6" fill="#4c1d95" opacity="0.4"/>
                  <text x="30" y="83" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#ddd6fe">CLAIM: High-Fidelity AI Frontend Dev</text>
                  <text x="30" y="97" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#f472b6">CTA: View Case Studies</text>
                </g>

                {/* CASE STUDIES CARD */}
                <g transform="translate(250, 390)" filter="url(#shadow)">
                  <rect width="300" height="120" rx="10" fill="url(#secondaryGrad)" />
                  <rect width="300" height="120" rx="10" fill="none" stroke="#60a5fa" stroke-width="1" opacity="0.4"/>
                  
                  <text x="20" y="28" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#bfdbfe" letter-spacing="0.05em">WORK / CASE STUDIES</text>
                  <text x="20" y="48" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#ffffff">The Proof Statement</text>
                  
                  <rect x="20" y="64" width="260" height="38" rx="6" fill="#1d4ed8" opacity="0.4"/>
                  <text x="30" y="78" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#dbeafe">SHOWCASE: 3 AI-assisted Web Apps</text>
                  <text x="30" y="90" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#34d399">GOAL: Convert user to Book a Call</text>
                </g>

                {/* ABOUT ME CARD */}
                <g transform="translate(40, 280)" filter="url(#shadow)">
                  <rect width="250" height="100" rx="10" fill="url(#grayGrad)" />
                  <rect width="250" height="100" rx="10" fill="none" stroke="#374151" stroke-width="1" opacity="0.5"/>
                  
                  <text x="18" y="26" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#9ca3af" letter-spacing="0.05em">ABOUT ME</text>
                  <text x="18" y="46" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#ffffff">The AI Developer</text>
                  
                  <text x="18" y="66" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#6b7280">Bio, tech stack (React/CSS/Vite),</text>
                  <text x="18" y="78" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#6b7280">and General AI Fluency credentials.</text>
                </g>

                {/* CONTACT CARD */}
                <g transform="translate(560, 280)" filter="url(#shadow)">
                  <rect width="250" height="100" rx="10" fill="url(#accentGrad)" />
                  <rect width="250" height="100" rx="10" fill="none" stroke="#34d399" stroke-width="1" opacity="0.2"/>
                  
                  <text x="18" y="26" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#a7f3d0" letter-spacing="0.05em">CONTACT / SCHEDULER</text>
                  <text x="18" y="46" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#ffffff">The Target Action</text>
                  
                  <text x="18" y="66" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#a7f3d0">Calendly scheduler embed.</text>
                  <text x="18" y="78" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#ffffff">GOAL: Secure a call reservation.</text>
                </g>
              </svg>
            </div>
          </section>

          {/* Toolkit Setup Status */}
          <section className="card">
            <div className="card-title">
              <Cpu size={20} />
              <span>AI Fluency Tool Suite Setup</span>
            </div>
            
            <div className="tools-grid">
              {toolkit.map((tool, idx) => (
                <div key={idx} className="tool-card">
                  <div className="tool-header">
                    <div className="tool-name-container">
                      <Sparkles size={14} className="tool-icon-wrapper" />
                      <span className="tool-title">{tool.name}</span>
                    </div>
                    <span className="tool-badge verified">Verified</span>
                  </div>
                  <p className="tool-text">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Claude Project Custom Instructions and Critique Chat */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Claude Project Profile */}
          <section className="card">
            <div className="card-title">
              <Settings size={20} />
              <span>Claude Tutor Project Settings</span>
            </div>
            <p className="card-description">
              Instructions that guide Claude's persona as an AI-engineering partner for the portfolio build.
            </p>

            <div className="instructions-container">
              <div className="instructions-block">
                <span className="instructions-title">Custom Project Settings</span>
                <pre className="instructions-body">{customInstructions}</pre>
              </div>
            </div>
          </section>

          {/* Pressure Test Critique chat */}
          <section className="card">
            <div className="card-title">
              <MessageSquareCode size={20} />
              <span>Sitemap Pressure Test Critique</span>
            </div>
            <p className="card-description">
              Pressure-testing prompt and feedback response from Claude acting as an elite recruiter.
            </p>

            <div className="chat-container">
              {/* User Bubble */}
              <div className="chat-bubble user">
                <span className="bubble-sender">Ghulam Mustafa Khizar</span>
                <span>
                  Act as a critical tech recruiter. Pressure-test my sitemap. 
                  My core claim is: <strong>"I build high-fidelity, premium AI-assisted frontend web applications that deliver elite user experiences."</strong>
                  The one action I want you to take is to click "View My Case Studies" and book a call via Calendly. 
                  My sitemap has: 1. Home, 2. Case Studies, 3. About, 4. Contact. 
                  Evaluate conversion speed.
                </span>
              </div>

              {/* Assistant Bubble */}
              <div className="chat-bubble assistant">
                <span className="bubble-sender">Claude (Recruiter Reviewer)</span>
                <span>
                  <strong>Verdict: Multi-page layouts kill conversion speed.</strong> 
                  Recruiters spend under 30 seconds on initial reviews. Forcing clicks to find proof (Case Studies) and then another to contact you (Contact Page) will lose leads.
                  <br/><br/>
                  <strong>Refinement Plan:</strong>
                  <ol style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                    <li><strong>Merge About Me:</strong> Move tech stack and AI credentials right onto the homepage.</li>
                    <li><strong>Case Studies Grid:</strong> Display case study cards on Home to show proof immediately.</li>
                    <li><strong>Sticky Call-to-Action:</strong> Keep a "Book Call" float button visible at all times.</li>
                  </ol>
                </span>
              </div>
            </div>

            {/* Critique takeaway Alert */}
            <div className="critique-takeaways">
              <div className="takeaway-title">
                <Zap size={16} /> Key Optimization Implemented
              </div>
              <ul className="takeaway-list">
                <li>Merged the About Me section into the Home Page to construct a focused, 3-page user journey.</li>
                <li>Created a direct user path: Home (Intro & trust indicators) ➔ Case Studies deep-dive ➔ Contact reservation.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>FlyRank Frontend AI Engineering Capstone | Ghulam Mustafa Khizar</span>
        <span>Draw the Path (Portfolio Sitemap + Toolkit Setup)</span>
      </footer>
    </div>
  );
}

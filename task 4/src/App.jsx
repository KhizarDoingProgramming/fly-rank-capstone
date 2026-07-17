import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  Zap, 
  HelpCircle, 
  UserCheck, 
  MousePointerClick, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [activeHighlight, setActiveHighlight] = useState(null);

  const getHighlightDetails = () => {
    switch (activeHighlight) {
      case 'person':
        return {
          title: 'The Target Person (Audience)',
          desc: 'A specific, qualified buyer (Lead Frontend Engineering Director at a premium agency) who values visual precision, layout hygiene, and development speed, rather than generic recruiters.',
          color: '#ca8aff'
        };
      case 'claim':
        return {
          title: 'The Core Claim (Unique Skill)',
          desc: 'A narrow, honest, and verifiable claim: creating pixel-perfect, highly interactive React apps using advanced AI-assisted pair-programming workflows that combine visual polish with clean custom styling.',
          color: '#55e6ff'
        };
      case 'action':
        return {
          title: 'The One Action (Conversion Event)',
          desc: 'The single most important conversion goal of the entire portfolio: securing a 15-minute project alignment call on an integrated scheduling tool.',
          color: '#64ffb4'
        };
      default:
        return {
          title: 'Explore the Proof Statement',
          desc: 'Hover over the highlighted segments in the proof statement to view the underlying design logic and conversion mechanics.',
          color: 'hsl(var(--text-muted))'
        };
    }
  };

  const details = getHighlightDetails();

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-title-area">
          <h1>Portfolio Proof Strategy</h1>
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
        
        {/* Left Column: Proof Statement and Why */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Proof Statement Card */}
          <section className="card">
            <div className="card-title">
              <Target size={20} />
              <span>Interactive Proof Statement</span>
            </div>
            
            <p className="card-description">
              The core strategy paragraph that guides every page, asset, and feature in the portfolio. Hover over the sections to inspect their purpose.
            </p>

            <div className="proof-statement-paragraph">
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
            </div>

            {/* Highlights Legend */}
            <div className="highlights-legend">
              <div className="legend-item">
                <span className="legend-dot person"></span>
                <span>One Person</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot claim"></span>
                <span>One Claim</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot action"></span>
                <span>One Action</span>
              </div>
            </div>

            {/* Dynamic Details Box */}
            <div style={{
              background: 'hsl(var(--bg-secondary))',
              border: `1px solid ${activeHighlight ? details.color + '40' : 'hsl(var(--border))'}`,
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              minHeight: '120px'
            }}>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                color: activeHighlight ? details.color : 'hsl(var(--text-muted))',
                letterSpacing: '0.05em'
              }}>
                {details.title}
              </span>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'hsl(var(--text-secondary))',
                lineHeight: '1.5'
              }}>
                {details.desc}
              </p>
            </div>
          </section>

          {/* One-Line Why Card */}
          <section className="card">
            <div className="card-title">
              <Zap size={20} />
              <span>The Portfolio's "Why"</span>
            </div>
            
            <p className="card-description">
              The honest reasoning explaining why a traditional CV or LinkedIn profile is insufficient to convey frontend AI-engineering competence.
            </p>

            <div className="why-block">
              <span className="why-title">Core Purpose / Fixes</span>
              <p className="why-text">
                "A traditional CV or LinkedIn profile only lists my credentials and keywords, but it cannot prove my eye for fluid animations, structural styling hygiene, or how effectively I wield AI to accelerate my development velocity."
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: AI Interview refinement process */}
        <section className="card">
          <div className="card-title">
            <MessageSquare size={20} />
            <span>AI Refinement Interview</span>
          </div>
          
          <p className="card-description">
            Transcript of the dialogue process with Claude acting as a critical thinking partner to refine and focus the claim.
          </p>

          <div className="chat-container">
            {/* Round 1 */}
            <div className="chat-bubble assistant">
              <span className="bubble-sender">Claude (Thinking Partner)</span>
              <span>
                Let's narrow down your target reader. Writing a portfolio for "everyone looking for web development" is too broad. Who is the exact person who could hire you?
              </span>
            </div>

            <div className="chat-bubble user">
              <span className="bubble-sender">Ghulam Mustafa Khizar</span>
              <span>
                I want to target a lead frontend engineering director or hiring manager at a premium, design-focused software agency.
              </span>
            </div>

            {/* Round 2 */}
            <div className="chat-bubble assistant">
              <span className="bubble-sender">Claude (Thinking Partner)</span>
              <span>
                Excellent. That specific person hates generic boilerplates and values clean code execution. Now, what is your core claim? What elite skill are you proving?
              </span>
            </div>

            <div className="chat-bubble user">
              <span className="bubble-sender">Ghulam Mustafa Khizar</span>
              <span>
                I build pixel-perfect, highly interactive React applications with clean custom styling and smooth animations, using advanced AI workflows to code faster.
              </span>
            </div>

            {/* Round 3 */}
            <div className="chat-bubble assistant">
              <span className="bubble-sender">Claude (Thinking Partner)</span>
              <span>
                Perfect. And what is the single, clear action you want them to take upon landing?
              </span>
            </div>

            <div className="chat-bubble user">
              <span className="bubble-sender">Ghulam Mustafa Khizar</span>
              <span>
                I want them to book a 15-minute project alignment call via an integrated Calendly scheduler.
              </span>
            </div>

            {/* Round 4 */}
            <div className="chat-bubble assistant">
              <span className="bubble-sender">Claude (Thinking Partner)</span>
              <span>
                Great. Let's combine these into our final paragraph. It targets the Engineering Director, states your visual+AI claim, and directs them to book a call. Here is the draft we refined...
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>FlyRank Frontend AI Engineering Capstone | Ghulam Mustafa Khizar</span>
        <span>What Are You Proving (Proof Statement Paragraph)</span>
      </footer>
    </div>
  );
}

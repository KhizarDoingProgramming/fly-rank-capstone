import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Cpu, 
  User, 
  Settings, 
  FileText, 
  Sparkles, 
  X, 
  TrendingUp, 
  Code2, 
  ShieldCheck, 
  BookOpen,
  LayoutGrid
} from 'lucide-react';

const tasks = [
  { id: 'FL-T01', name: 'Writing boilerplate React components', classification: 'collaborate-with-ai', rationale: 'AI generates standard skeleton code quickly; I refine the logic, styling, and specific state integrations.' },
  { id: 'FL-T02', name: 'Debugging complex React state & lifecycle bugs', classification: 'collaborate-with-ai', rationale: 'I explain the context and console errors to the AI to isolate root causes, but I manually debug the rendering cycle.' },
  { id: 'FL-T03', name: 'Designing custom SVG icons and illustrations', classification: 'just-me', rationale: 'AI graphics often look generic or slightly distorted; I prefer hand-crafting SVGs for a truly premium aesthetic.' },
  { id: 'FL-T04', name: 'Reading & summarizing new frontend docs', classification: 'delegate-to-ai-with-review', rationale: 'AI digests long APIs and outputs summaries of key methods; I verify code snippets against the live API.' },
  { id: 'FL-T05', name: 'Writing unit tests for utility functions', classification: 'fully-automate', rationale: 'Given a pure utility function, AI writes standard mock inputs, edge-case assertions, and runs tests flawlessly.' },
  { id: 'FL-T06', name: 'Planning application state & DB architecture', classification: 'just-me', rationale: 'State management strategy requires deep human judgment about product roadmap and specific team constraints.' },
  { id: 'FL-T07', name: 'Refactoring legacy CSS into CSS variables', classification: 'collaborate-with-ai', rationale: 'AI performs search-and-replace for hex codes; I structure the global CSS variables and verify consistency.' },
  { id: 'FL-T08', name: 'Setting up CI/CD pipeline configs (GitHub Actions)', classification: 'delegate-to-ai-with-review', rationale: 'AI generates initial YAML templates for standard workflows; I review and debug environment secret injections.' },
  { id: 'FL-T09', name: 'Writing API endpoint integration code', classification: 'collaborate-with-ai', rationale: 'AI builds Fetch/Axios request wrappers; I write error handling, caching policies, and TypeScript interfaces.' },
  { id: 'FL-T10', name: 'Conducting user testing sessions & interviews', classification: 'just-me', rationale: 'Human empathy, observation of frustration points, and real-time conversation cannot be replicated by AI.' },
  { id: 'FL-T11', name: 'Generating placeholder content for UI mockups', classification: 'fully-automate', rationale: 'AI writes realistic mock databases and JSON schemas instantly, avoiding generic lorem-ipsum text.' },
  { id: 'FL-T12', name: 'Optimizing image assets and web performance', classification: 'collaborate-with-ai', rationale: 'AI suggests WebP compression targets and cache headers; I perform the conversion and run PageSpeed metrics.' },
  { id: 'FL-T13', name: 'Writing code documentation / JSDoc comments', classification: 'delegate-to-ai-with-review', rationale: 'AI analyzes function signatures to write JSDocs instantly; I review details to ensure clear explanations.' }
];

const toolkit = [
  { name: 'Claude Pro Account', type: 'AI Assistant', status: 'verified', desc: 'Primary environment for advanced coding and design pairing.' },
  { name: 'ChatGPT Plus Account', type: 'AI Assistant', status: 'verified', desc: 'Secondary assistant for general research and debugging assistance.' },
  { name: 'Anthropic Academy', type: 'Training Platform', status: 'verified', desc: 'Enrolled in AI Fluency: Framework & Foundations. Completed Module 1.' }
];

const targetTasks = [
  {
    num: 'Target Task 1',
    name: 'Boilerplate React Component Generation',
    desc: 'Generating clean, typed React functional components with CSS Modules.',
    metric: 'Time: < 3m | Build Success: 100%',
    progress: 90
  },
  {
    num: 'Target Task 2',
    name: 'Unit Test Writing for Utility Functions',
    desc: 'Writing comprehensive Vitest unit tests for pure helper functions.',
    metric: 'Time: < 2m | Statement Coverage: 100%',
    progress: 95
  },
  {
    num: 'Target Task 3',
    name: 'JSDoc & Documentation Generation',
    desc: 'Documenting code directories including interfaces, types, and functions.',
    metric: 'Time: < 3m | Lint Warnings: 0',
    progress: 100
  }
];

const customInstructions = `// CLAUDE PROJECT CUSTOM INSTRUCTIONS
{
  "who_i_am": {
    "name": "Ghulam Mustafa Khizar",
    "role": "Frontend AI Engineering Intern @ FlyRank",
    "specialty": "Pixel-perfect, high-fidelity premium web UI architectures"
  },
  "tone_preferences": {
    "style": "Professional, tech-focused, highly concise, direct",
    "avoid": ["conversational fillers", "unnecessary greetings", "empty pleasantries"]
  },
  "current_goals": [
    "Complete General AI Fluency modules (FL-01 through FL-04)",
    "Establish structured workflow audits mapping AI vs Human leverage",
    "Design state-of-the-art frontend applications with rich aesthetics"
  ]
}`;

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);

  // Stats calculation
  const totalTasks = tasks.length;
  const justMeCount = tasks.filter(t => t.classification === 'just-me').length;
  const collaborateCount = tasks.filter(t => t.classification === 'collaborate-with-ai').length;
  const delegateCount = tasks.filter(t => t.classification === 'delegate-to-ai-with-review').length;
  const automateCount = tasks.filter(t => t.classification === 'fully-automate').length;
  
  const aiAssistedCount = collaborateCount + delegateCount + automateCount;
  const aiUtilizationRate = Math.round((aiAssistedCount / totalTasks) * 100);

  // Handle classification display names and styling
  const getClassificationLabel = (classification) => {
    switch (classification) {
      case 'just-me': return 'Just Me';
      case 'collaborate-with-ai': return 'Collaborate with AI';
      case 'delegate-to-ai-with-review': return 'Delegate (Review)';
      case 'fully-automate': return 'Fully Automate';
      default: return classification;
    }
  };

  // Filter tasks based on search and classification filter
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          task.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.rationale.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || task.classification === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app-container">
      {/* Header UI */}
      <header className="header">
        <div className="header-title-area">
          <h1>AI Workflow Audit & Tool Setup</h1>
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

      {/* Stats Cards Row */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-title">
            Total Logged Tasks <TrendingUp size={16} />
          </div>
          <div className="stat-card-val">{totalTasks}</div>
          <div className="stat-card-desc">Across study, work, and projects</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-title">
            AI Utilization Rate <Cpu size={16} />
          </div>
          <div className="stat-card-val">{aiUtilizationRate}%</div>
          <div className="stat-card-desc">{aiAssistedCount} of {totalTasks} tasks leverage AI</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">
            Human-Only Focus <User size={16} />
          </div>
          <div className="stat-card-val">{justMeCount}</div>
          <div className="stat-card-desc">Preserved for high empathy & strategy</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">
            Fully Automated <Sparkles size={16} />
          </div>
          <div className="stat-card-val">{automateCount}</div>
          <div className="stat-card-desc">100% offloaded to AI pipelines</div>
        </div>
      </section>

      {/* Main Section: Table and Sidebar */}
      <div className="section-grid">
        
        {/* Left Column: Interactive Table */}
        <section className="card">
          <div className="card-title">
            <LayoutGrid size={20} />
            <span>Workflow Audit Matrix</span>
          </div>
          <p className="card-description">
            Task classification mapping. Click on any row to view details.
          </p>

          {/* Search & Filters */}
          <div className="filter-bar">
            <div className="search-input-container">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search tasks, IDs, or rationale..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-buttons">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'collaborate-with-ai' ? 'active collaborate' : ''}`}
                onClick={() => setActiveFilter('collaborate-with-ai')}
              >
                Collaborate
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'delegate-to-ai-with-review' ? 'active delegate' : ''}`}
                onClick={() => setActiveFilter('delegate-to-ai-with-review')}
              >
                Delegate
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'fully-automate' ? 'active automate' : ''}`}
                onClick={() => setActiveFilter('fully-automate')}
              >
                Automate
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'just-me' ? 'active justme' : ''}`}
                onClick={() => setActiveFilter('just-me')}
              >
                Just Me
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="audit-table">
              <thead>
                <tr>
                  <th>Task ID</th>
                  <th>Task Description</th>
                  <th>Classification</th>
                  <th>Rationale</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.length > 0 ? (
                  filteredTasks.map(task => (
                    <tr key={task.id} onClick={() => setSelectedTask(task)}>
                      <td>
                        <span className="task-id">{task.id}</span>
                      </td>
                      <td>
                        <span className="task-name">{task.name}</span>
                      </td>
                      <td>
                        <span className={`badge ${task.classification}`}>
                          {getClassificationLabel(task.classification)}
                        </span>
                      </td>
                      <td>
                        <span className="rationale-text">{task.rationale.substring(0, 75)}...</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))' }}>
                      No tasks found matching search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Right Column: Sidebar (Toolkit, Claude Project Instructions) */}
        <aside className="sidebar">
          
          {/* Tool Setup Card */}
          <section className="card">
            <div className="card-title">
              <ShieldCheck size={20} />
              <span>Toolkit Enrollment Status</span>
            </div>
            
            <div className="toolkit-list">
              {toolkit.map((tool, idx) => (
                <div key={idx} className="tool-item">
                  <div className="tool-left">
                    <div className="tool-icon">
                      {tool.type === 'AI Assistant' ? <Sparkles size={16} /> : <BookOpen size={16} />}
                    </div>
                    <div className="tool-meta">
                      <span className="tool-name">{tool.name}</span>
                      <span className="tool-desc">{tool.desc}</span>
                    </div>
                  </div>
                  <span className="status-badge complete">
                    <CheckCircle2 size={12} /> verified
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Claude Project Setup Simulator */}
          <section className="card">
            <div className="card-title">
              <Settings size={20} />
              <span>Claude Project Profile Settings</span>
            </div>
            <p className="card-description">
              Live Custom Instructions configured in Claude Projects settings to align capabilities:
            </p>

            <div className="claude-proj-container">
              <div className="claude-proj-header">
                <div className="claude-avatar">CL</div>
                <div className="claude-proj-title">FlyRank - Frontend AI Engineering</div>
              </div>
              <div className="claude-proj-tabs">
                <span className="tab">Chat</span>
                <span className="tab">Files</span>
                <span className="tab active">Custom Instructions</span>
              </div>
              
              <div className="claude-section">
                <span className="claude-section-title">Instructions</span>
                <pre className="claude-instruction-box">
                  {customInstructions}
                </pre>
              </div>
            </div>
          </section>
        </aside>
      </div>

      {/* Target Tasks and Success Metrics */}
      <section className="target-tasks-title-bar">
        <h2>
          <Code2 size={24} />
          <span>FL-02 Target Tasks & Success Definitions</span>
        </h2>
      </section>

      <section className="target-grid">
        {targetTasks.map((target, idx) => (
          <div key={idx} className="target-card">
            <span className="target-num">{target.num}</span>
            <h3 className="target-name">{target.name}</h3>
            <p className="target-desc">{target.desc}</p>
            
            <div className="target-metric-box">
              <div className="target-metric-title">Success Metric Definition</div>
              <div className="target-metric-value">{target.metric}</div>
              
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${target.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedTask(null)}>
              <X size={18} />
            </button>
            
            <div className="modal-header">
              <span className="task-id">{selectedTask.id}</span>
              <h3 className="modal-title">{selectedTask.name}</h3>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <span className="modal-section-title">Classification</span>
                <div className="modal-section-body">
                  <span className={`badge ${selectedTask.classification}`}>
                    {getClassificationLabel(selectedTask.classification)}
                  </span>
                </div>
              </div>
              
              <div className="modal-section">
                <span className="modal-section-title">Implementation Rationale</span>
                <div className="modal-section-body">
                  {selectedTask.rationale}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <span>FlyRank Frontend AI Engineering Capstone | Ghulam Mustafa Khizar</span>
        <span>Made with Antigravity AI Engine & React</span>
      </footer>
    </div>
  );
}

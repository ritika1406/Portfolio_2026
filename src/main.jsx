import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, X, Menu, Copy, Check, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './styles.css';

// Add verified links to the relevant project when available. No invented metrics or outcomes.
const projects = [
  {
    id: 'andp', number: '01', title: 'ANDP Learning Platform', kind: 'Platform engineering', type: 'AI & Backend',
    description: 'A multi-stage developer programme platform connecting project submissions, GitHub deliverables and AI-assisted evaluation.',
    role: 'Submission flows, repository integration and evaluation workflows',
    stack: ['React', 'Node.js', 'Claude API', 'GitHub API', 'SQL'],
    overview: 'The platform brings together staged project submissions and a review process that uses repository-based deliverables.',
    work: ['Developed flows for staged project submissions and review.', 'Connected GitHub repositories to the evaluation workflow.', 'Worked on attempt history and polling behaviour.'],
    challenge: 'Coordinating a multi-step submission and review process while keeping the interface clear about each stage.',
    links: {}
  },
  {
    id: 'rag', number: '02', title: 'Document RAG Assistant', kind: 'Generative AI', type: 'AI & Backend',
    description: 'A question-answering experience that retrieves document context before generating a response.',
    role: 'Document-grounded response workflow',
    stack: ['Python', 'LLMs', 'Embeddings', 'RAG', 'REST APIs'],
    overview: 'Designed around retrieval-first answering, so a response can draw on relevant source material rather than an unconstrained prompt.',
    work: ['Organised the experience around document retrieval and answer generation.', 'Used embeddings and retrieval concepts to supply relevant context.'],
    challenge: 'Selecting useful context for a question before asking a model to respond.',
    links: {}
  },
  {
    id: 'payments', number: '03', title: 'Payment Integration Workflows', kind: 'Payments & APIs', type: 'Backend Systems',
    description: 'Backend payment flows connecting third-party gateways with application rules, transaction handling and failure paths.',
    role: 'Payment flow integration and exception handling',
    stack: ['Node.js', 'Express', 'MySQL', 'Razorpay', 'Cashfree'],
    overview: 'Payment integrations require the application to handle more than a successful checkout. This work focused on connecting gateway interactions to application-side payment flows.',
    work: ['Integrated payment gateway interactions with backend application logic.', 'Worked with transaction handling and failure paths.'],
    challenge: 'Keeping application payment states understandable when a gateway interaction does not complete as expected.',
    links: {}
  },
  {
    id: 'expense', number: '04', title: 'Expense Tracker', kind: 'Full-stack product', type: 'Full Stack',
    description: 'A personal finance app concept for recording expenses, exploring spending patterns and exporting data.',
    role: 'Expense tracking interface and data presentation',
    stack: ['React', 'Material UI', 'PostgreSQL', 'Recharts'],
    overview: 'A personal finance application concept built around making everyday expense records easier to inspect.',
    work: ['Designed expense entry and overview flows.', 'Explored charts and data export as part of the product experience.'],
    challenge: 'Presenting transaction data in a way that is useful without making the dashboard unnecessarily complex.',
    links: {}
  },
  {
    id: 'resume', number: '05', title: 'AI Resume Roaster', kind: 'AI product', type: 'AI & Backend',
    description: 'A tool that reviews resume content and returns structured feedback for job seekers.',
    role: 'AI feedback experience',
    stack: ['React', 'REST APIs', 'Prompt Design', 'LLM API'],
    overview: 'A resume review concept focused on turning a free-form document into feedback that a job seeker can act on.',
    work: ['Designed a structured feedback experience around resume input.', 'Explored prompt design and model output handling.'],
    challenge: 'Making generated feedback specific and readable rather than a wall of generic suggestions.',
    links: {}
  },
 
{
  id: 'souma',
  number: '06',
  title: 'SOUMA',
  kind: 'E-commerce',
  type: 'Full Stack',

  description: 'A fragrance and gifting e-commerce platform built around a clean shopping experience, product management, and a distinct brand identity.',

  role: 'Full-stack development, storefront design, and backend integration',

  stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Cloudinary'],

  overview: 'SOUMA is a fragrance and gifting brand offering products such as dhoop sticks, cones, Sambhrani cups, and curated gifting sets. I worked on its digital storefront, connecting the customer-facing shopping experience with a backend for managing products and inventory.',

  work: [
    'Developed a responsive storefront with product browsing and individual product pages.',
    'Built backend APIs using Node.js and Express with PostgreSQL for product data.',
    'Implemented an admin interface for adding, editing, and managing products and inventory.',
    'Integrated product image uploads with cloud storage.',
    'Configured frontend and backend deployments using Vercel and Render.'
  ],

  challenge: 'Keeping the storefront visually consistent with the brand while ensuring product information, images, and inventory remain manageable through the backend.',

  links: {
    live: 'https://thesouma.com'
  }
}

];

const skillGroups = [
  { title: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
  { title: 'Data & infrastructure', items: ['PostgreSQL', 'MySQL', 'Redis fundamentals', 'SQL optimisation', 'Cloud storage', 'Background workflows'] },
  { title: 'AI integrations', items: ['Anthropic Claude API', 'OpenAI API', 'Prompt engineering', 'RAG fundamentals', 'Structured outputs', 'Failure handling'] },
  { title: 'Frontend & delivery', items: ['React', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'API integration', 'Debugging & testing'] }
];

// Replace placeholders before publishing. Never put private contact details in source accidentally.
const contact = {
  email: 'ritika140601@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ritika-tiwari-3646611ab/',
  github: 'https://github.com/ritika1406'
};

function ProjectVisual({ id }) {
  if (id === 'andp') return <div className="visual visual-andp"><div className="interface"><div className="interface-bar"><span>ANDP / WORKSPACE</span><span>● ● ●</span></div><div className="interface-layout"><div className="interface-nav"><i/><i/><i/><i/></div><div className="interface-main"><div className="interface-title">Project submissions</div><div className="interface-sub">Stage overview</div><div className="interface-cards"><span>01<br/><b>Submit</b></span><span>02<br/><b>Review</b></span><span>03<br/><b>Feedback</b></span></div><div className="interface-rows"><i/><i/><i/></div></div></div></div><span className="visual-caption">01 / WORKFLOW STUDY</span></div>;
  if (id === 'rag') return <div className="visual visual-rag"><div className="rag-step"><small>01 / INPUT</small><b>Documents</b><span>Source context</span></div><div className="rag-line"/><div className="rag-step highlighted"><small>02 / RETRIEVE</small><b>Relevant chunks</b><span>Embedding search</span></div><div className="rag-line"/><div className="rag-step"><small>03 / RESPOND</small><b>Answer</b><span>Context-aware</span></div></div>;
  if (id === 'payments') return <div className="visual visual-payments"><div className="payment-header">PAYMENT LIFECYCLE <span>↗</span></div><div className="payment-steps"><div><small>01</small><b>Request</b></div><div><small>02</small><b>Gateway</b></div><div><small>03</small><b>Verify</b></div><div><small>04</small><b>Update</b></div></div><p>Designing for the path that succeeds<br/>and the one that doesn’t.</p></div>;
  if (id === 'expense') return <div className="visual visual-expense"><div className="expense-head">SPENDING OVERVIEW <span>ILLUSTRATIVE UI</span></div><div className="expense-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="expense-bottom"><span>Track</span><span>Review</span><span>Export</span></div></div>;
  if (id === 'resume') return <div className="visual visual-resume"><div className="resume-sheet"><span>RESUME REVIEW</span><i/><i/><i/><div className="resume-feedback">FEEDBACK<br/><b>Clarity · Structure · Detail</b></div></div></div>;

return (
  <div className="visual visual-souma">
    <div className="souma-circle circle-one" />
    <div className="souma-circle circle-two" />
    <div className="souma-circle circle-three" />

    <span>SOUMA</span>
    <small>FRAGRANCE & GIFTING</small>
  </div>
);
}

function App() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);
  const categories = ['All', 'AI & Backend', 'Backend Systems', 'Full Stack'];
  const emailReady = contact.email !== 'YOUR_EMAIL@example.com';

  useEffect(() => {
    if (!activeProject) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') setActiveProject(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); };
  }, [activeProject]);

  async function copyEmail() {
    if (!emailReady) return;
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${contact.email}`; }
  }

  return <div className="site-shell" id="home">
    <header className="topbar wrap"><a href="#home" className="brand" aria-label="Ritika Tiwari home">Ritika Tiwari<span className="brand-period">.</span></a><button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button><nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation" onClick={() => setMenuOpen(false)}><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Expertise</a><a href="#contact" className="nav-contact">Contact <ArrowUpRight size={15}/></a></nav></header>
    <main>
      <section className="hero wrap" aria-labelledby="hero-heading"><div className="hero-kicker"><span className="availability-dot"/> SOFTWARE ENGINEER <span className="kicker-separator">/</span> MUMBAI, INDIA</div><div className="hero-content"><div><h1 id="hero-heading">Making software<br/><em>make sense.</em></h1><p className="hero-lead">I’m Ritika, a software engineer working on backend systems, full-stack products and practical AI integrations.</p><div className="hero-cta"><a className="primary-link" href="#work">See selected work <ArrowUpRight size={18}/></a><a className="underlined-link" href="#about">A little about me <ArrowRight size={16}/></a></div></div><div className="hero-aside"><span className="aside-index">A NOTE ON MY WORK / 2026</span><p>From payment flows to document-grounded AI, I like working through the details that make a product usable.</p><div className="aside-rule"/><span>BACKEND · PRODUCTS · AI</span></div></div><div className="hero-bottom"><span>SELECTED WORK BELOW</span><span>SCROLL TO EXPLORE ↓</span></div></section>
      <section className="work-section" id="work"><div className="wrap"><div className="section-head"><div><span className="section-label">01 / SELECTED WORK</span><h2>Things I’ve <em>worked on.</em></h2></div><p>Platforms, experiments and product ideas. A closer look at the problems, decisions and tools behind each one.</p></div><div className="filters" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} className={filter === c ? 'filter active' : 'filter'} onClick={() => setFilter(c)} aria-pressed={filter === c}>{c}<sup>{c === 'All' ? projects.length : projects.filter(p => p.type === c).length}</sup></button>)}</div><div className="project-grid">{filtered.map((project, i) => <article key={project.id} className={`project-card ${project.id === 'andp' && filter === 'All' ? 'project-featured' : ''}`}><button className="visual-button" onClick={() => setActiveProject(project)} aria-label={`Read ${project.title} case study`}><ProjectVisual id={project.id}/></button><div className="project-line"><span>{project.number} / {project.kind}</span><button onClick={() => setActiveProject(project)} aria-label={`Open ${project.title}`}><ArrowUpRight size={19}/></button></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div><button className="project-read" onClick={() => setActiveProject(project)}>Read project notes <ArrowRight size={16}/></button></article>)}</div></div></section>
      <section className="about-section" id="about"><div className="wrap about-layout"><div><span className="section-label">02 / ABOUT</span><div className="about-monogram" aria-hidden="true">RT<span>.</span></div></div><div className="about-content"><h2>I like getting into<br/>the <em>details.</em></h2><p>My work sits between backend engineering and product development. I’ve worked with APIs, databases, payment integrations and AI-driven experiences, and I enjoy figuring out how those pieces fit together.</p><p>What interests me most is the work behind the interface: how information moves through a system, what happens when something fails, and how to make a complicated flow feel simple to the person using it.</p><div className="about-points"><div><span>01</span><p>Understand the requirement before choosing the implementation.</p></div><div><span>02</span><p>Make edge cases part of the design, not an afterthought.</p></div><div><span>03</span><p>Keep improving through feedback, testing and iteration.</p></div></div></div></div></section>
      <section className="skills-section wrap" id="skills"><div className="section-head"><div><span className="section-label">03 / EXPERTISE</span><h2>The tools behind<br/><em>the work.</em></h2></div><p>Technologies I use and areas I’m continuing to develop.</p></div><div className="skills-list">{skillGroups.map((g,i) => <div className="skill-row" key={g.title}><span className="skill-number">0{i+1}</span><h3>{g.title}</h3><div>{g.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="contact-section" id="contact"><div className="wrap contact-layout"><div><span className="section-label">04 / CONTACT</span><h2>Let’s build<br/><em>something useful.</em></h2><p>I’m interested in software engineering work involving backend systems, thoughtful product development and applied AI.</p></div><div className="contact-links">{emailReady ? <button onClick={copyEmail}><span>{copied ? 'Email copied' : 'Copy email address'}</span>{copied ? <Check size={20}/> : <Copy size={20}/>}</button> : <div className="contact-placeholder">Add your email in <code>src/main.jsx</code> to enable email contact.</div>}{contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRight size={20}/></a>}{contact.github && <a href={contact.github} target="_blank" rel="noreferrer"><span>GitHub</span><ArrowUpRight size={20}/></a>}</div></div></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} Ritika Tiwari</span><span>Designed around the work.</span><a href="#home">Back to top ↑</a></footer>
    {activeProject && <div className="modal-backdrop" onMouseDown={e => { if(e.target === e.currentTarget) setActiveProject(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><div className="modal-top"><span>PROJECT NOTES / {activeProject.number}</span><button aria-label="Close project notes" onClick={() => setActiveProject(null)}><X size={22}/></button></div><h2 id="project-modal-title">{activeProject.title}</h2><p className="modal-intro">{activeProject.description}</p><div className="modal-visual"><ProjectVisual id={activeProject.id}/></div><div className="modal-info"><div><span>FOCUS</span><p>{activeProject.role}</p></div><div><span>TOOLS</span><p>{activeProject.stack.join(' · ')}</p></div></div><div className="modal-section"><h3>Overview</h3><p>{activeProject.overview}</p></div><div className="modal-section"><h3>What I worked on</h3><ul>{activeProject.work.map(w => <li key={w}>{w}</li>)}</ul></div><div className="modal-section"><h3>Technical consideration</h3><p>{activeProject.challenge}</p></div>{(activeProject.links.demo || activeProject.links.github) && <div className="modal-links">{activeProject.links.demo && <a href={activeProject.links.demo} target="_blank" rel="noreferrer">Live project <ExternalLink size={16}/></a>}{activeProject.links.github && <a href={activeProject.links.github} target="_blank" rel="noreferrer">Repository <Github size={16}/></a>}</div>}<button className="modal-back" onClick={() => setActiveProject(null)}>← Back to projects</button></section></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComplexSystemsHome.css';

/* ── Timeline data ── */
const timelineItems = [
    { yr: '1865', label: 'Bernard milieu intérieur', color: '#3ECFB2', glow: false },
    { yr: '1932', label: 'Cannon homeostasis', color: '#3ECFB2', glow: false },
    { yr: '1943', label: 'Rosenblueth Wiener teleology', color: '#9B7FE8', glow: false },
    { yr: '1948', label: 'Wiener Cybernetics', color: '#9B7FE8', glow: true },
    { yr: '1948', label: 'Shannon entropy', color: '#9B7FE8', glow: false },
    { yr: '1956', label: 'Ashby requisite variety', color: '#C9A84C', glow: false },
    { yr: '1963', label: 'Lorenz chaos', color: '#9B7FE8', glow: false },
    { yr: '1972', label: 'Anderson More is Different', color: '#E87060', glow: true },
    { yr: '1977', label: 'Prigogine Nobel dissipative', color: '#C9A84C', glow: true },
    { yr: '1987', label: 'Bak SOC — edge of chaos', color: '#E87060', glow: false },
    { yr: '1992', label: 'Holland CAS Santa Fe', color: '#E87060', glow: false },
    { yr: '1998', label: 'Watts-Strogatz small world', color: '#378ADD', glow: true },
    { yr: '2004', label: 'Tononi IIT consciousness', color: '#378ADD', glow: false },
    { yr: '2010', label: 'Friston free energy brain', color: '#378ADD', glow: false },
    { yr: 'Now', label: 'Synthesis & open problems', color: '#5DCAA5', glow: true },
];

/* ── Parts data ── */
const parts = [
    {
        id: 'p1',
        roman: 'I',
        badge: 'In Progress',
        badgeClass: 'csh-badge-current',
        label: 'Part I',
        title: 'Biological & Mechanical Foundations',
        sub: 'Bernard · Cannon · Wiener · Ashby · von Foerster',
        desc: 'The biological origin of self-regulation and the first formal science of control. From the living cell maintaining its milieu intérieur to Ashby\'s mathematical law governing every controller in any system — this part establishes the vocabulary all subsequent parts build on.',
        chapters: [
            { num: 'Ch 01', name: 'Homeostasis & the Internal Milieu', rest: '— Bernard, Cannon' },
            { num: 'Ch 02', name: 'First-Order Cybernetics', rest: '— Wiener, Rosenblueth, Macy Conferences' },
            { num: 'Ch 03', name: 'Feedback Dynamics', rest: '— positive, negative, oscillation, delay' },
            { num: 'Ch 04', name: "Ashby's Law of Requisite Variety", rest: '— the control constraint' },
            { num: 'Ch 05', name: 'Second-Order Cybernetics', rest: '— von Foerster, Maturana, autopoiesis' },
        ],
        count: '5',
        countLabel: 'chapters · 11 psych applications',
        cta: 'Open Part I →',
        route: '/complex-systems',
        color: 'var(--p1)',
    },
    {
        id: 'p2',
        roman: 'II',
        badge: 'In Progress',
        badgeClass: 'csh-badge-current',
        label: 'Part II',
        title: 'Mathematical Logic & Modeling',
        sub: 'Poincaré · Shannon · Lorenz · Prigogine · Feigenbaum',
        desc: 'The formal mathematical language of complex behaviour. Phase space, entropy, chaos, dissipative structures, bifurcation — each chapter gives you a precise tool for describing systems that cannot be understood through linear cause and effect alone.',
        chapters: [
            { num: 'Ch 06', name: 'Dynamical Systems & Phase Space', rest: '— Poincaré, Strogatz' },
            { num: 'Ch 07', name: 'Information Theory & Entropy', rest: '— Shannon, Kolmogorov' },
            { num: 'Ch 08', name: 'Chaos Theory & Strange Attractors', rest: '— Lorenz, Mandelbrot' },
            { num: 'Ch 09', name: 'Dissipative Structures', rest: '— Prigogine Nobel 1977' },
            { num: 'Ch 10', name: 'Bifurcation & Emergence', rest: '— Feigenbaum, Bak SOC' },
            { num: 'Ch 11', name: 'Stochastic Processes & Noise', rest: '— Langevin, random walks' },
            { num: 'Ch 12', name: 'Game Theory', rest: '— Nash, evolutionary stable strategies' },
        ],
        count: '7',
        countLabel: 'chapters · 16 psych applications · 7 laws',
        cta: 'Open Part II →',
        route: null,
        color: 'var(--p2)',
    },
    {
        id: 'p3',
        roman: 'III',
        badge: 'Coming Soon',
        badgeClass: 'csh-badge-build',
        label: 'Part III',
        title: 'Complexity & Emergence',
        sub: 'Anderson · Holland · Kauffman · Axelrod · Watts · Barabási',
        desc: 'The pivot of the curriculum. Where Parts I–II gave you the tools, Part III reveals what those tools uncover: that irreducibility is a fundamental property of nature, that complex adaptive systems are a distinct class of thing in the universe, and that evolution, ecology, social contagion, and network dynamics all follow the same deep principles.',
        chapters: [
            { num: 'Ch 13', name: 'Emergence & Irreducibility', rest: '— Anderson 1972, Holland, More is Different' },
            { num: 'Ch 14', name: 'Complex Adaptive Systems', rest: '— Santa Fe school, Gell-Mann, Holland' },
            { num: 'Ch 15', name: 'Network Science', rest: '— Watts-Strogatz, Barabási, social contagion' },
            { num: 'Ch 16', name: 'Agent-Based Models', rest: '— Schelling, Axelrod, Turing morphogenesis' },
            { num: 'Ch 17', name: 'Evolution as Complexity', rest: '— fitness landscapes, Kauffman, evolutionary psychology' },
        ],
        count: '5',
        countLabel: 'chapters planned',
        cta: 'Preview Part III →',
        route: null,
        color: 'var(--p3)',
    },
    {
        id: 'p4',
        roman: 'IV',
        badge: 'Coming Soon',
        badgeClass: 'csh-badge-build',
        label: 'Part IV',
        title: 'Advanced Adaptive Intelligence',
        sub: 'Friston · Tononi · Schiepek · Beer · Dunbar · Wichers',
        desc: 'The deep application layer. Every concept from Parts I–III is brought to bear on the most complex system known: the human mind, embedded in social systems, organisations, and civilisations. Depression becomes an attractor, therapy becomes a bifurcation, organisations become viable systems, and the collapse of empires becomes a phase transition in a scale-free network.',
        chapters: [
            { num: 'Ch 18', name: 'Social Complexity', rest: '— Dunbar, culture as CAS, institutions, norms' },
            { num: 'Ch 19', name: 'The Brain as Complex System', rest: '— Friston free energy, IIT, global workspace' },
            { num: 'Ch 20', name: 'Psychopathology as System Dynamics', rest: '— Wichers, depression attractors, trauma' },
            { num: 'Ch 21', name: 'Therapy as System Intervention', rest: '— Schiepek, ACT, phase transitions in change' },
            { num: 'Ch 22', name: 'Organisations, Markets & Empires', rest: '— Beer VSM, Senge, collapse as variety exhaustion' },
        ],
        count: '5',
        countLabel: 'chapters planned',
        cta: 'Preview Part IV →',
        route: null,
        color: 'var(--p4)',
    },
];

const part5 = {
    roman: 'V',
    badge: 'Coming Soon',
    badgeClass: 'csh-badge-build',
    label: 'Part V',
    title: 'Synthesis & Professional Roadmap',
    sub: 'Cross-domain · Research methods · Open problems · Your path forward',
    desc: 'The capstone. The same equations describe heartbeat dynamics, mood cycling, market volatility, population ecology, and neural oscillation — Part V demonstrates this formally and shows you what to do with it. Covers research methods for measuring complexity, applied complexity across professions, the genuinely open problems in the field, and a personalised reading roadmap.',
    chapters: [
        { num: 'Ch 23', name: 'Cross-Domain Isomorphisms', rest: '— unifying equations, same structure at every scale' },
        { num: 'Ch 24', name: 'Research Methods', rest: '— Lyapunov exponents, network metrics, recurrence analysis' },
        { num: 'Ch 25', name: 'Applied Complexity', rest: '— clinical, organisational, policy, design, AI alignment' },
        { num: 'Ch 26', name: 'Open Problems & Your Roadmap', rest: '— what we don\'t know · doctoral entry points' },
    ],
    count: '4',
    countLabel: 'chapters planned · capstone synthesis',
    cta: 'Preview Part V →',
    color: 'var(--p5)',
};

const philosophyPrinciples = [
    { num: '01', strong: 'The whole is irreducible.', rest: ' Properties emerge at the system level that cannot be predicted from components alone.' },
    { num: '02', strong: 'Causality is circular.', rest: ' In any feedback system, cause and effect are inseparable — the output shapes the input that shaped the output.' },
    { num: '03', strong: 'The same equations recur.', rest: ' Heartbeat, mood, market, and empire dynamics are governed by structurally identical mathematical forms.' },
    { num: '04', strong: 'Complexity demands variety.', rest: " Simple regulators fail against complex environments. Ashby's Law is not a guideline — it is a theorem." },
    { num: '05', strong: 'The observer is part of the system.', rest: ' Second-order cybernetics: the act of observation changes what is observed. This is not a problem — it is a feature to be understood and used.' },
];

const quotes = [
    {
        text: '"The ability to reduce everything to simple fundamental laws does not imply the ability to start from those laws and reconstruct the universe."',
        attr: 'Philip W. Anderson — More is Different, Science, 1972',
        borderColor: 'var(--gold)',
    },
    {
        text: '"Only variety can destroy variety. The regulator must match the complexity of the disturbances it faces — this is the iron law of control."',
        attr: 'W. Ross Ashby — An Introduction to Cybernetics, 1956',
        borderColor: 'var(--p2)',
    },
    {
        text: '"We are not studying systems. We are becoming system thinkers — and that changes how we see everything."',
        attr: 'Curriculum design principle · Part V synthesis',
        borderColor: 'var(--p3)',
    },
];

const pathNodes = [
    { label: 'Part I', name: 'Biological Foundations', desc: 'Learn the vocabulary: homeostasis, feedback, variety, circular causality. The biological intuitions that ground all of complexity science.', color: 'var(--p1)' },
    { label: 'Part II', name: 'Mathematical Tools', desc: 'Formalise the intuitions into equations: phase space, entropy, Lyapunov exponents, bifurcation diagrams, power laws.', color: 'var(--p2)' },
    { label: 'Part III', name: 'Emergence & Adaptation', desc: 'Apply the tools to genuinely complex systems: CAS, networks, evolution, emergence. The pivot from studying complexity to thinking in it.', color: 'var(--p3)' },
    { label: 'Part IV', name: 'Mind, Society & Systems', desc: 'The deep application layer: brain, psychopathology, therapy, organisations, empires. Everything from Parts I–III lands here.', color: 'var(--p4)' },
    { label: 'Part V', name: 'Synthesis & Roadmap', desc: 'Unify. The same equations across all domains. Research methods. Open problems. Your personalised path forward.', color: 'var(--p5)' },
];

/* ── Component ── */
const ComplexSystemsHome = () => {
    const navigate = useNavigate();

    const handlePartClick = (route) => {
        if (route) navigate(route);
    };

    return (
        <div className="csh-root">
            {/* Glow orbs */}
            <div className="csh-glo csh-g1" />
            <div className="csh-glo csh-g2" />
            <div className="csh-glo csh-g3" />

            {/* ── HEADER ── */}
            <header className="csh-header">
                <div className="csh-wrap">
                    <div className="csh-hi">
                        <div className="csh-logo">Complex Systems</div>
                        <nav className="csh-nav-parts">
                            <button className="csh-nav-pill p1" onClick={() => navigate('/complex-systems')}>I · Bio &amp; Mechanical</button>
                            <button className="csh-nav-pill p2">II · Math &amp; Modeling</button>
                            <span className="csh-nav-pill faint">III · Complexity</span>
                            <span className="csh-nav-pill faint">IV · Intelligence</span>
                            <span className="csh-nav-pill faint">V · Synthesis</span>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="csh-wrap">

                {/* ── HERO ── */}
                <section className="csh-hero">
                    <div className="csh-eyebrow">A Complete Curriculum</div>
                    <h1 className="csh-hero-title">
                        The Science of<br />
                        <span className="line2">Complex Systems</span>
                    </h1>
                    <p className="csh-hero-desc">
                        From homeostasis to emergence, from feedback loops to the collapse of empires — a rigorous five-part journey through the mathematical principles that govern everything from cells to civilisations, and their deep application to the human mind.
                    </p>
                    <div className="csh-stats">
                        <div className="csh-stat"><div className="csh-stat-num">5</div><div className="csh-stat-label">Parts</div></div>
                        <div className="csh-stat"><div className="csh-stat-num">26</div><div className="csh-stat-label">Chapters</div></div>
                        <div className="csh-stat"><div className="csh-stat-num">80+</div><div className="csh-stat-label">Primary Sources</div></div>
                        <div className="csh-stat"><div className="csh-stat-num">1865</div><div className="csh-stat-label">Bernard → Present</div></div>
                    </div>

                    {/* Timeline */}
                    <div className="csh-gtl-wrap">
                        <div className="csh-gtl">
                            {timelineItems.map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="csh-gtl-node">
                                        <div className="csh-gtl-yr">{item.yr}</div>
                                        <div
                                            className="csh-gtl-dot"
                                            style={{
                                                background: item.color,
                                                ...(item.glow ? { boxShadow: `0 0 6px ${item.color}80` } : {}),
                                            }}
                                        />
                                        <div className="csh-gtl-lbl" style={{ color: item.glow ? item.color : undefined }}>
                                            {item.label}
                                        </div>
                                    </div>
                                    {i < timelineItems.length - 1 && <div className="csh-gtl-line" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PARTS GRID ── */}
                <section className="csh-parts-section">
                    <div className="csh-parts-label">Five parts — 26 chapters</div>
                    <div className="csh-parts-grid">
                        {parts.map((part) => (
                            <div
                                key={part.id}
                                className="csh-part-card"
                                style={{ '--pc': part.color }}
                                onClick={() => handlePartClick(part.route)}
                                role={part.route ? 'link' : 'article'}
                                tabIndex={part.route ? 0 : undefined}
                                onKeyDown={part.route ? (e) => e.key === 'Enter' && handlePartClick(part.route) : undefined}
                            >
                                <div className="csh-pc-top">
                                    <div className="csh-pc-roman">{part.roman}</div>
                                    <span className={`csh-pc-badge ${part.badgeClass}`}>{part.badge}</span>
                                </div>
                                <div className="csh-pc-label">{part.label}</div>
                                <div className="csh-pc-title">{part.title}</div>
                                <div className="csh-pc-sub">{part.sub}</div>
                                <div className="csh-pc-desc">{part.desc}</div>
                                <div className="csh-ch-list">
                                    {part.chapters.map((ch) => (
                                        <div key={ch.num} className="csh-ch-item">
                                            <span className="csh-ch-num">{ch.num}</span>
                                            <span className="csh-ch-name"><strong>{ch.name}</strong>{ch.rest}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="csh-pc-footer">
                                    <div className="csh-pc-count"><span>{part.count}</span> {part.countLabel}</div>
                                    <div className="csh-pc-cta">{part.cta}</div>
                                </div>
                            </div>
                        ))}

                        {/* Part V — full width */}
                        <div
                            className="csh-part-card full"
                            style={{ '--pc': part5.color }}
                            role="article"
                        >
                            <div className="csh-part5-inner">
                                <div>
                                    <div className="csh-pc-top">
                                        <div className="csh-pc-roman">{part5.roman}</div>
                                        <span className={`csh-pc-badge ${part5.badgeClass}`}>{part5.badge}</span>
                                    </div>
                                    <div className="csh-pc-label">{part5.label}</div>
                                    <div className="csh-pc-title">{part5.title}</div>
                                    <div className="csh-pc-sub">{part5.sub}</div>
                                    <div className="csh-pc-desc">{part5.desc}</div>
                                </div>
                                <div>
                                    <div className="csh-ch-list" style={{ marginTop: '3.8rem' }}>
                                        {part5.chapters.map((ch) => (
                                            <div key={ch.num} className="csh-ch-item">
                                                <span className="csh-ch-num">{ch.num}</span>
                                                <span className="csh-ch-name"><strong>{ch.name}</strong>{ch.rest}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="csh-pc-footer">
                                        <div className="csh-pc-count"><span>{part5.count}</span> {part5.countLabel}</div>
                                        <div className="csh-pc-cta">{part5.cta}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PHILOSOPHY ── */}
                <section className="csh-phil-section">
                    <div className="csh-phil-grid">
                        <div>
                            <div className="csh-phil-title">Why complex systems?</div>
                            <div className="csh-phil-body">
                                <p>Every serious field of inquiry eventually hits the same wall: the phenomena it studies cannot be understood by breaking them into parts and analysing each part separately. The whole is not the sum of its parts — it is a different kind of thing, with properties that only exist at the level of the whole.</p>
                                <p>This is not a limitation of our current science. It is a structural feature of reality. Philip Anderson called it "More is Different" in 1972 — the paper that founded complexity science as a discipline. The same mathematical structures that describe a hurricane also describe a brain, a market, a family system, and the fall of Rome.</p>
                                <p>The goal of this curriculum is not just to understand these principles academically. It is to develop a new kind of thinking — one that sees feedback loops instead of linear causes, attractors instead of fixed traits, bifurcations instead of gradual change, and requisite variety instead of simple solutions to complex problems.</p>
                            </div>
                            <div className="csh-principles">
                                {philosophyPrinciples.map((p) => (
                                    <div key={p.num} className="csh-principle">
                                        <div className="csh-pr-num">{p.num}</div>
                                        <div className="csh-pr-text"><strong>{p.strong}</strong>{p.rest}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {quotes.map((q, i) => (
                                <div key={i} className="csh-phil-pull" style={{ borderLeftColor: q.borderColor }}>
                                    <div className="csh-phil-quote">{q.text}</div>
                                    <div className="csh-phil-attr">{q.attr}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── LEARNING PATH ── */}
                <section className="csh-path-section">
                    <div className="csh-path-title">The learning arc</div>
                    <div className="csh-path-sub">Each part builds on the last. The concepts from Part I appear in Part V — transformed.</div>
                    <div className="csh-path-flow">
                        {pathNodes.map((node, i) => (
                            <React.Fragment key={i}>
                                <div className="csh-path-node" style={{ '--pnc': node.color }}>
                                    <div className="csh-path-num">{node.label}</div>
                                    <div className="csh-path-name">{node.name}</div>
                                    <div className="csh-path-desc">{node.desc}</div>
                                </div>
                                {i < pathNodes.length - 1 && <div className="csh-path-arrow">→</div>}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

            </div>{/* /wrap */}

            {/* ── FOOTER ── */}
            <footer className="csh-footer">
                <div className="csh-wrap">
                    <div className="csh-footer-inner">
                        <div className="csh-footer-logo">Complex Systems — A Complete Curriculum</div>
                        <div className="csh-footer-note">26 chapters · 5 parts · 1865 → present</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ComplexSystemsHome;

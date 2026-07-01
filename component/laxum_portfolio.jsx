import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = ["Home"];

const SERVICES = [
  {
   
    title: "Frontend Development",
    desc: "Create responsive, interactive interfaces using modern frameworks and best practices.",
  },
  {
  
    title: "Backend Development",
    desc: "Build secure, scalable APIs and server-side applications that power reliable digital experiences.",
  },
];

const PROJECTS = [
  { num: "01", title: "e-commerce website", desc: "https://github.com/melaku-gebreil/e-commerce-website.git", image: "Screenshot (28).png" },
  { num: "01", title: "qr-attendance-system", desc: "https://github.com/melaku-gebreil/qr-attendance-system.git", image: "Screenshot (29).png" },
  { num: "01", title: "portfolio website", desc: "https://github.com/melaku-gebreil/portfolio-website.git", image: "Screenshot (31).png" },
];

const TOOLS = [
  { label: "Ai", bg: "text-orange-500" },
  { label: "Ae", bg: "text-purple-700" },
  { label: "Ps", bg: "text-blue-700" },
];

const BRAND_LOGOS = [
  // Google G
  <svg key="g" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 11v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C15.47 5.69 13.89 5 12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H12z" /></svg>,
  // WordPress W
  <svg key="wp" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM3.87 12c0-1.1.21-2.15.59-3.11L7.8 19.4C5.49 18.13 3.87 15.25 3.87 12zm8.13 8.13c-.74 0-1.46-.1-2.15-.29l2.28-6.63 2.34 6.41c.02.04.04.08.06.12-.82.26-1.68.39-2.53.39zm1.05-11.13L15 14.94l-2.77-8.23C12.77 6.65 13.37 6.6 14 6.6c.02 0 .05 0 .07 0-.16.44-.02.9.33 1.18.34.27.81.28 1.17.04.36-.24.52-.68.39-1.08-.13-.4-.51-.67-.93-.67zm3.42 10.82l2.27-6.57c.42-1.05.56-1.88.56-2.63 0-.27-.02-.52-.05-.75.73 1.33 1.14 2.86 1.14 4.49 0 2.72-1.38 5.11-3.46 6.52-.15-.35-.29-.7-.46-1.06z" /></svg>,
  // Slack
  <svg key="slack" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>,
  // Windows/Microsoft
  <svg key="ms" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" /></svg>,
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  const img = ["photo2.jpg", "photo3.jpg"]
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PortFolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>


      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-2xl font-extrabold tracking-tight">Laxum<sup className="text-xs font-normal">™</sup></span>

          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            {NAV_LINKS.map(l => (
              <li key={l}><a href="#" className="nav-link hover:text-gray-900 transition-colors">{l}</a></li>
            ))}
          </ul>

          <a href="#" className="hidden md:flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
            Contact Me <ArrowIcon />
          </a>

          {/* Mobile burger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            {NAV_LINKS.map(l => <a key={l} href="#" className="block text-sm font-medium text-gray-700">{l}</a>)}
            <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2">Contact Me <ArrowIcon /></a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-medium text-gray-500 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot inline-block" />
            AVAILABLE FOR FREELANCE
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
          Build Websites That
            <span className="accent italic"> Make an Impact</span>{" "}
           
          </h1>

          <p className="text-gray-500 text-base mb-8 max-w-sm leading-relaxed">
           I design and develop fast, responsive, and user-focused websites that help businesses establish a strong online presence.  I create digital experiences that are functional, scalable, and built to perform.
          </p>

          <a href="#" className="inline-flex items-center gap-3 bg-gray-900 text-white font-semibold px-7 py-4 rounded-full hover:bg-gray-700 transition-colors group">
            View My Work
            <span className="group-hover:rotate-45 transition-transform duration-200"><ArrowIcon size={18} /></span>
          </a>
</div>

        {/* Hero image side */}
        <div className="relative border-none   flex justify-center md:justify-end">
          {/* Background blob */}
          {/* <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-gray-100 -z-10"/> */}

          {/* Photo placeholder */}
          {/* <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-end justify-center shadow-xl"> */}
          {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400"> */}
          <img src="../public/photo_2026-07-02_00-27-33.png" alt="" className="object-covers w-110 h-140  rounded-t-4xl rounded-br-[200px]" />
          {/* </div> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/> */}
          {/* </div> */}

          {/* Float badge */}

        </div>
     
      </section>

      {/* ── ABOUT + SERVICES ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          {/* About text */}
          <FadeIn className="md:col-span-1">
            <p className="accent text-xs font-bold tracking-widest uppercase mb-4">About Me</p>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
             I'm a passionate web developer dedicated to building modern, high-quality websites and web applications. I enjoy transforming ideas into intuitive digital products that combine clean design with reliable functionality.
            </p>
            <div className="relative w-20 h-20  bg-gray-300 blur-[3px] rounded-full ml-60 border  ">


            </div>
            <div className="relative bottom-[60px] w-10 h-10 ml-65  rounded-full bg-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform mb-6">
              <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-white " />

            </div>

            
          </FadeIn>

          {/* Service cards */}
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={0.15 * (i + 1)}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow h-full">
                <div className="text-gray-700 mb-4">{s.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-bold accent uppercase tracking-widest text-gray-400 mb-2">
              Feature Work
            </p>
            <h2 className="font-display text-4xl font-extrabold mb-10">Selected projects</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="project-card rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="bg-gray-900 h-48 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white opacity-20 text-8xl font-display font-extrabold select-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-white text-7xl font-black  tracking-tighter"><img src={p.image} alt="" /></span>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-5 flex items-start justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{p.num}</p>
                      <p className="font-display font-bold text-base">{p.title}</p>
                      <a href={p.desc} className="text-xs text-gray-400 mt-1 max-w-xs leading-relaxed">github:{p.desc}</a>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 project-arrow group-hover:border-purple-500 group-hover:text-purple-600 transition-colors ml-4 mt-1">
                      <ArrowIcon size={13} />
                    </div>
                  </div>
                </div>
              </FadeIn>

            ))}
          </div>
        </div>
      </section>

  
      
      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Let's create something amazing together and build digital experiences that make impact.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="font-bold text-sm mb-4">Pages</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Home"].map(p => (
                <li key={p}><a href="#" className="hover:text-gray-900 transition-colors">{p}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-sm mb-4">Services</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Frontend</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors"></a>Backend</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-sm mb-4">Contact</p>
            <p className="text-sm text-gray-500 mb-1">melakugebriel3@gmail.com</p>
            <p className="text-sm text-gray-500 mb-1">+251946737150</p>
            <p className="text-sm text-gray-500 mb-4">Ethiopia, Addis Ababa</p>
        
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          © {new Date().getFullYear()}  All rights reserved.
        </div>
      </footer>
    </div>
  );
}

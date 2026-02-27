import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import MatrixRain from "@/components/MatrixRain";
import GlitchText from "@/components/GlitchText";
import DiagonalDivider from "@/components/DiagonalDivider";
import GlowStreak from "@/components/GlowStreak";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import GlowCard from "@/components/GlowCard";
import LoadingScreen from "@/components/LoadingScreen";
import receptLogo from "@/assets/recept-logo.png";
import { Phone, Globe, Star, Settings, ArrowRight, Check, Zap } from "lucide-react";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div className={`relative min-h-screen bg-background overflow-hidden ${!loaded ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <MatrixRain />

        {/* Glow Streaks */}
        <GlowStreak delay={0} top="15%" />
        <GlowStreak delay={2} top="35%" />
        <GlowStreak delay={1.5} top="55%" />
        <GlowStreak delay={3} top="75%" />
        <GlowStreak delay={0.8} top="90%" />

        {/* ═══════════ HERO ═══════════ */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 min-h-screen flex items-center"
        >
          <div className="container mx-auto px-6 py-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <img src={receptLogo} alt="RECEPT" className="w-16 h-16 object-contain" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-8 tracking-tight"
                >
                  <GlitchText className="glow-red-text">
                    Build Once.
                  </GlitchText>
                  <br />
                  <span className="text-gradient-red">
                    Convert Daily.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-muted-foreground text-xl md:text-2xl max-w-xl mb-4 leading-relaxed font-medium"
                >
                  Websites. Receptionists. Automated Reputation and Customer Relation Systems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-foreground text-lg md:text-xl max-w-xl mb-10 font-semibold"
                >
                  <span className="text-primary font-extrabold">RECEPT</span> builds infrastructure that turns attention into revenue — <span className="text-primary font-extrabold">instantaneously.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <CTAButton size="lg">
                    Book a Strategy Call <ArrowRight className="inline ml-2 w-5 h-5" />
                  </CTAButton>
                </motion.div>
              </div>

              {/* Stats block */}
              <div className="lg:col-span-5 lg:pl-12">
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6"
                >
                  {[
                    { num: "24/7", label: "Call Handling" },
                    { num: "5x", label: "Review Growth" },
                    { num: "<3s", label: "Load Time" },
                    { num: "$400", label: "Website Build" },
                  ].map((stat, i) => (
                    <GlowCard key={i} className="flex items-center gap-6">
                      <span className="text-4xl md:text-5xl font-extrabold text-primary font-mono">{stat.num}</span>
                      <span className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-semibold">{stat.label}</span>
                    </GlowCard>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <DiagonalDivider direction="left" />

        {/* ═══════════ STRUCTURE ═══════════ */}
        <section className="relative z-10 py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <AnimatedSection className="lg:col-span-5" direction="left">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-8 tracking-tight">
                  Attention Is
                  <br />
                  <span className="text-primary font-extrabold">Expensive.</span>
                  <br />
                  <span className="text-muted-foreground text-3xl md:text-5xl font-bold">Losing It Is Inexcusable.</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-7" direction="right" delay={0.2}>
                <p className="text-muted-foreground text-xl mb-8 leading-relaxed font-medium">
                  Missed calls. Outdated websites. Unstructured follow-ups. Unmanaged reputation.
                </p>
                <p className="text-foreground text-xl mb-4 font-semibold">
                  These are operational failures — we bring structure.
                </p>
                <p className="text-foreground text-xl mb-10 font-bold">
                  RECEPT installs structured systems that eliminate friction and convert demand into revenue with precision.
                </p>
                <p className="text-muted-foreground text-base font-mono uppercase tracking-[0.15em] mb-8 font-semibold">
                  We do not build "websites." We engineer performance assets.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Traffic without structure is wasted money.",
                    "Missed calls is lost revenue.",
                    "Unsought reviews is missed growth.",
                  ].map((text, i) => (
                    <GlowCard key={i}>
                      <p className="text-base text-foreground font-semibold">{text}</p>
                    </GlowCard>
                  ))}
                </div>

                <AnimatedSection delay={0.4} className="mt-10">
                  <p className="text-muted-foreground text-lg font-semibold mb-2">We don't sell a brochure.</p>
                  <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    We build <span className="text-primary font-extrabold glow-red-text">engines.</span>
                  </p>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <DiagonalDivider direction="right" color="hsl(0, 0%, 4%)" />

        {/* ═══════════ SERVICES ═══════════ */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4 font-semibold">What We Build</p>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.9] mb-16 tracking-tight">
                Our <span className="text-primary">Services</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Globe, title: "Website Development", price: "$400", desc: "High-converting, mobile-first websites built for speed, clarity, and revenue." },
                { icon: Phone, title: "AI Receptionist", price: "Custom", desc: "24/7 call answering, appointment booking, and lead qualification — on autopilot." },
                { icon: Star, title: "Review Automation", price: "Included", desc: "Automated SMS & email follow-ups that drive Google reviews without lifting a finger." },
                { icon: Settings, title: "Ongoing Support", price: "Retainer", desc: "Website updates, automation upgrades, AI optimization, and technical support." },
              ].map((service, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <GlowCard className="h-full flex flex-col">
                    <service.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-extrabold mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-primary font-mono font-bold text-sm mb-3">{service.price}</p>
                    <p className="text-muted-foreground text-sm font-medium flex-1">{service.desc}</p>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <DiagonalDivider direction="left" />

        {/* ═══════════ WEBSITE DEV ═══════════ */}
        <section className="relative z-10 py-32 bg-card">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="left">
              <div className="flex items-end gap-4 mb-4">
                <Globe className="w-8 h-8 text-primary" />
                <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase font-semibold">Website Development</p>
              </div>
              <div className="flex items-baseline gap-6 mb-6">
                <h2 className="text-6xl md:text-8xl font-extrabold text-primary font-mono tracking-tight">$400</h2>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-12 gap-16 mt-12">
              <AnimatedSection className="lg:col-span-6" direction="left" delay={0.2}>
                <p className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
                  We don't charge thousands.
                  <br />
                  <span className="text-muted-foreground font-bold">We just build like we do.</span>
                </p>
                <p className="text-muted-foreground text-xl mb-4 font-semibold">
                  Small investment. Serious infrastructure.
                </p>
                <p className="text-foreground text-xl mb-8 font-bold">
                  Built to convert. For speed. For clarity.
                </p>

                <CTAButton>Start My Website <ArrowRight className="inline ml-2 w-4 h-4" /></CTAButton>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-6" direction="right" delay={0.3}>
                <p className="text-sm font-mono text-primary tracking-[0.15em] uppercase mb-6 font-bold">Every RECEPT website includes:</p>
                <div className="space-y-4">
                  {[
                    "Modern, premium design",
                    "Conversion-focused layout",
                    "Mobile-first performance",
                    "SEO-ready structure",
                    "Clear call-to-action architecture",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-lg font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground text-base mt-8 font-medium">
                  No clutter. No bloated themes. No amateurism.
                </p>
                <p className="text-foreground text-lg mt-2 font-bold">
                  Just a <span className="text-primary font-extrabold">clean</span>, strategic, digital storefront that <span className="text-primary font-extrabold">works</span>.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <DiagonalDivider direction="right" color="hsl(0, 0%, 4%)" />

        {/* ═══════════ AI RECEPTIONIST ═══════════ */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <AnimatedSection className="lg:col-span-7 lg:order-2" direction="right">
                <div className="flex items-end gap-4 mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase font-semibold">AI Receptionist</p>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.85] mb-6 tracking-tight">
                  Never Miss
                  <br />
                  Another Call.
                  <br />
                  <span className="text-primary font-extrabold glow-red-text">Ever.</span>
                </h2>

                <p className="text-muted-foreground text-xl mb-4 font-semibold">
                  Customers call when they're ready to buy.
                </p>
                <p className="text-foreground text-xl mb-6 font-bold">
                  Miss it? — they call a competitor.
                </p>

                <p className="text-sm text-muted-foreground font-medium mb-6">
                  Custom pricing based on call volume and business needs.
                </p>

                <CTAButton>Book to Get a Quote <ArrowRight className="inline ml-2 w-4 h-4" /></CTAButton>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-5 lg:order-1" direction="left" delay={0.2}>
                <p className="font-mono text-primary text-xs tracking-[0.15em] uppercase mb-6 font-bold">Our Receptionist:</p>
                <div className="space-y-4">
                  {[
                    "Answers instantly, 24/7",
                    "Books appointments directly into your calendar",
                    "Handles common questions",
                    "Qualifies serious, high-intent leads",
                    "Speaks naturally and professionally",
                  ].map((item, i) => (
                    <GlowCard key={i}>
                      <p className="text-base text-foreground font-semibold">{item}</p>
                    </GlowCard>
                  ))}
                </div>

                <div className="mt-8 p-6 border border-primary/30">
                  <p className="text-foreground font-bold text-xl mb-2">
                    It doesn't replace you.
                  </p>
                  <p className="text-3xl font-extrabold text-primary glow-red-text">
                    It multiplies you.
                  </p>
                  <p className="text-muted-foreground text-xs mt-3 font-mono uppercase tracking-[0.15em] font-bold">
                    This is NOT another chatbot. This is automated revenue flow.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <DiagonalDivider direction="left" />

        {/* ═══════════ REVIEW AUTOMATION ═══════════ */}
        <section className="relative z-10 py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <AnimatedSection className="lg:col-span-5" direction="left">
                <div className="flex items-end gap-4 mb-4">
                  <Star className="w-8 h-8 text-primary" />
                  <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase font-semibold">Google Review Automation</p>
                </div>

                <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.85] mb-6 tracking-tight">
                  More Reviews.
                  <br />
                  <span className="text-primary font-extrabold">Less Effort.</span>
                </h2>

                <p className="text-muted-foreground text-xl mb-4 font-semibold">
                  Most businesses forget to ask.
                </p>
                <p className="text-foreground text-xl mb-8 font-bold">
                  We automate the inquiry.
                </p>

                <CTAButton>Automate My Reviews <ArrowRight className="inline ml-2 w-4 h-4" /></CTAButton>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-7" direction="right" delay={0.2}>
                <p className="font-mono text-primary text-xs tracking-[0.15em] uppercase mb-6 font-bold">After you complete a job, our system sends:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: "SMS", desc: "Automated SMS follow-up" },
                    { title: "Email", desc: "Automated email reminder" },
                    { title: "Link", desc: "Directly links to your Google review page" },
                  ].map((item, i) => (
                    <GlowCard key={i} className="text-center">
                      <p className="text-3xl font-extrabold text-primary mb-2 font-mono">{item.title}</p>
                      <p className="text-muted-foreground text-sm font-medium">{item.desc}</p>
                    </GlowCard>
                  ))}
                </div>
                <p className="text-2xl font-extrabold text-foreground mt-8 tracking-tight">
                  Reputation growth on <span className="text-primary font-extrabold">autopilot</span>.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <DiagonalDivider direction="right" color="hsl(0, 0%, 4%)" />

        {/* ═══════════ ONGOING SUPPORT ═══════════ */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <AnimatedSection className="lg:col-span-6" direction="left">
                <div className="flex items-end gap-4 mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                  <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase font-semibold">Ongoing Support</p>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.85] mb-6 tracking-tight">
                  Growth Requires
                  <br />
                  <span className="text-primary font-extrabold">Maintenance.</span>
                </h2>
                <p className="text-muted-foreground text-xl font-semibold">
                  Launching is not the finish line.
                </p>
                <p className="text-foreground text-xl font-bold mt-2">
                  It's the starting point.
                </p>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-6" direction="right" delay={0.2}>
                <div className="space-y-3 mb-8">
                  {[
                    "When your offers evolve,",
                    "When your traffic increases,",
                    "When you need edits,",
                    "When your systems need refinement —",
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-muted-foreground text-xl font-medium"
                    >
                      {text}
                    </motion.p>
                  ))}
                  <p className="text-foreground text-2xl font-extrabold text-primary glow-red-text mt-4">We're already there.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Website updates", "Automation upgrades", "AI optimization", "Technical support"].map((item, i) => (
                    <GlowCard key={i}>
                      <p className="text-base text-foreground font-bold">{item}</p>
                    </GlowCard>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-muted-foreground text-base mb-2 font-medium">You focus on expansion.</p>
                  <p className="text-foreground text-xl font-extrabold mb-6">We protect the infrastructure.</p>
                  <CTAButton>Get Support <ArrowRight className="inline ml-2 w-4 h-4" /></CTAButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <DiagonalDivider direction="left" />

        {/* ═══════════ WHY RECEPT ═══════════ */}
        <section className="relative z-10 py-32 bg-card">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <AnimatedSection>
              <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-6 font-semibold">Why RECEPT</p>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.85] mb-12 tracking-tight">
                Built for Business Owners
                <br />
                Who Think <span className="text-primary font-extrabold glow-red-text">Long-Term.</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  before: 'You don\'t want a "nice looking site."',
                  after: "You want more booked appointments.",
                },
                {
                  before: "You don't want another tool.",
                  after: "You want fewer missed opportunities.",
                },
                {
                  before: "You don't want complexity.",
                  after: "You want leverage.",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <GlowCard>
                    <p className="text-muted-foreground text-base mb-4 font-medium">{item.before}</p>
                    <p className="text-xl font-extrabold">
                      <span className="text-primary">{item.after}</span>
                    </p>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5} className="mt-12">
              <p className="text-2xl text-muted-foreground font-semibold">
                RECEPT is suited for operators looking to <span className="text-primary font-extrabold glow-red-text">scale</span>.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <DiagonalDivider direction="right" color="hsl(0, 0%, 4%)" />

        {/* ═══════════ BOOKING ═══════════ */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <AnimatedSection className="lg:col-span-5" direction="left">
                <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.85] mb-6 tracking-tight">
                  Let's Build Your
                  <br />
                  <span className="text-primary font-extrabold glow-red-text">Revenue System.</span>
                </h2>
                <p className="text-muted-foreground text-xl mb-6 font-semibold">
                  Schedule a strategy call and tell us what you're trying to accomplish.
                </p>
                <p className="text-foreground text-lg mb-8 font-bold">
                  The more we understand your business, the more precise the build.
                </p>
                <p className="text-muted-foreground text-base font-medium">
                  This isn't just your business, it's your <span className="text-foreground font-extrabold">vision</span>.
                </p>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-7" direction="right" delay={0.2}>
                <div className="border border-border p-8 bg-card/50 backdrop-blur-sm">
                  <p className="font-mono text-primary text-xs tracking-[0.15em] uppercase mb-6 font-bold">
                    Fill out the details below
                  </p>
                  <p className="text-muted-foreground text-sm mb-8 font-medium">
                    Answer a few quick questions so we can prepare properly.
                  </p>

                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em] block mb-2 font-bold">Name</label>
                        <input className="w-full bg-secondary border border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors font-medium" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em] block mb-2 font-bold">Email</label>
                        <input className="w-full bg-secondary border border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors font-medium" placeholder="you@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em] block mb-2 font-bold">Business Name</label>
                      <input className="w-full bg-secondary border border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors font-medium" placeholder="Your business" />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em] block mb-2 font-bold">What's currently slowing you down?</label>
                      <textarea rows={4} className="w-full bg-secondary border border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none font-medium" placeholder="Tell us about your challenges..." />
                    </div>
                  </div>

                  <div className="mt-6 p-4 border border-border bg-background">
                    <p className="font-mono text-primary text-xs tracking-[0.15em] uppercase mb-3 font-bold">Help us understand:</p>
                    <ul className="space-y-2 text-muted-foreground text-sm font-semibold">
                      <li>→ Where your business is now</li>
                      <li>→ Where you want it to go</li>
                      <li>→ What's currently slowing you down</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <CTAButton size="lg" className="w-full">
                      Schedule My Strategy Call <ArrowRight className="inline ml-2 w-5 h-5" />
                    </CTAButton>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <DiagonalDivider direction="left" />

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="relative z-10 py-20 bg-card">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
              <img src={receptLogo} alt="RECEPT" className="w-16 h-16 object-contain mx-auto mb-4" />
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-primary">RECEPT</span>
              </h3>
              <p className="text-muted-foreground text-sm font-mono tracking-[0.15em] uppercase mb-6 font-bold">
                Automating Infrastructure for Modern Businesses.
              </p>
              <div className="flex justify-center gap-6 text-muted-foreground text-xs font-mono tracking-[0.2em] uppercase font-bold">
                <span>Websites</span>
                <span className="text-primary">·</span>
                <span>Automation</span>
                <span className="text-primary">·</span>
                <span>Focus</span>
              </div>
              <p className="text-muted-foreground text-xs mt-8 font-mono font-semibold">Made for conversion.</p>
            </AnimatedSection>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;

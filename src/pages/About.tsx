import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Eye, Target, Heart, ShieldCheck, Handshake, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "Open communication and honest reporting at every stage." },
  { icon: Handshake, title: "Long-term Partnerships", desc: "We build relationships, not just campaigns." },
  { icon: Target, title: "Execution Excellence", desc: "Flawless on-ground delivery across every city." },
  { icon: Award, title: "Result-Driven", desc: "Every campaign designed for measurable impact." },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
            Your Trusted <span className="gradient-text">360° Agency</span>
          </h1>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl leading-relaxed">
            With over 20 years of industry expertise, Ishan Publicity has been at the forefront of advertising and promotions, successfully executing 500+ campaigns across 60+ cities in India.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-xl border border-border bg-card">
            <Eye className="text-primary mb-4" size={32} />
            <h3 className="text-2xl font-display font-bold text-card-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be India's most trusted and innovative advertising agency, empowering brands to connect with audiences through creative, impactful, and result-driven campaigns at scale.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-xl border border-border bg-card">
            <Target className="text-primary mb-4" size={32} />
            <h3 className="text-2xl font-display font-bold text-card-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver comprehensive, high-quality advertising solutions that maximize brand visibility, drive consumer engagement, and generate measurable ROI for our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <SectionHeading title="Our Core Values" subtitle="The principles that guide every campaign and client relationship." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={24} />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl text-center">
        <Heart className="text-primary mx-auto mb-6" size={36} />
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Why Choose Ishan Publicity?</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          We don't just execute campaigns — we craft experiences. Our deep understanding of the Indian market, combined with a network spanning 60+ cities and 3000+ activation points, ensures your brand reaches the right audience at the right time.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From national brands like HUL and Nestlé to emerging startups, we bring the same level of dedication, creativity, and professionalism to every project. Our team's on-ground expertise and transparent processes have earned us long-standing partnerships with India's top companies.
        </p>
      </div>
    </section>
  </div>
);

export default About;

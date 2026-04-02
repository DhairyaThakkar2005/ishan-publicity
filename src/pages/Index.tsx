import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MapPin,
  Target,
  Megaphone,
  Palette,
  Gift,
  Monitor,
  Truck,
  ShoppingBag,
  Building2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const stats = [
  { value: "20+", label: "Years Experience", icon: TrendingUp },
  { value: "500+", label: "Campaigns Executed", icon: Target },
  { value: "60+", label: "Cities Covered", icon: MapPin },
  { value: "3000+", label: "Locations Activated", icon: Users },
];

const services = [
  {
    icon: Megaphone,
    title: "Hoarding Advertising",
    desc: "High-impact billboard and hoarding placements at prime locations across 60+ cities for maximum brand visibility.",
  },
  {
    icon: Building2,
    title: "Society Campaigns",
    desc: "Targeted door-to-door and residential society activations that connect your brand directly with consumers.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Branding",
    desc: "Eye-catching in-store signage, mall branding, and point-of-sale displays that drive purchases.",
  },
  {
    icon: Gift,
    title: "Event Promotions",
    desc: "End-to-end event planning and on-ground promotional campaigns that create buzz and engagement.",
  },
  {
    icon: Truck,
    title: "Mobile Van Advertising",
    desc: "Branded mobile vans and canter campaigns that take your message across target cities and neighborhoods.",
  },
];

const clientLogos = [
  "HUL",
  "Nestlé",
  "Airtel",
  "Paytm",
  "Xiaomi",
  "Colgate",
  "Samsung",
  "Vodafone",
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Mumbai cityscape with advertising"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero/70" />
      </div>
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-6"
          >
            Mumbai's Trusted Advertising Partner Since 2010
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-hero-foreground mb-8 text-balance leading-[1.1]"
          >
            Bringing Brands to Life{" "}
            <span className="gradient-text">Across India</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl md:text-2xl text-hero-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            360° Advertising & Promotion Agency specializing in Hoardings,
            On-Ground Activations, Retail Branding & Campaign Execution
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button
              asChild
              variant="hero"
              size="lg"
              className="text-base px-10 py-7 text-lg"
            >
              <Link to="/inquiry">Get a Quote</Link>
            </Button>
            <Button
              asChild
              variant="hero-outline"
              size="lg"
              className="text-base px-10 py-7 text-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-12 sm:py-16">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-white text-2xl sm:text-3xl font-bold mb-10 tracking-wide">
          Our Impact in Numbers
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-primary-foreground"
            >
              <s.icon className="mx-auto mb-3 opacity-80" size={28} />
              <div className="text-3xl sm:text-4xl font-display font-bold">
                {s.value}
              </div>
              <div className="text-sm opacity-80 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services overview */}
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive advertising and marketing solutions tailored to amplify your brand's reach and impact."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl border border-border bg-card hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-card-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Clients */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <SectionHeading
          title="Trusted by Leading Brands"
          subtitle="We've partnered with some of India's most recognized brands to deliver exceptional campaigns."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {clientLogos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-20 rounded-lg border border-border bg-card flex items-center justify-center hover-lift"
            >
              <span className="font-display font-bold text-muted-foreground/50 text-lg">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-secondary section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
          Ready to <span className="gradient-text">Amplify</span> Your Brand?
        </h2>
        <p className="text-secondary-foreground/60 max-w-xl mx-auto mb-8 text-lg">
          Let's create impactful campaigns that deliver real results. Get in
          touch today.
        </p>
        <Button
          asChild
          variant="hero"
          size="lg"
          className="text-base px-10 py-6"
        >
          <Link to="/inquiry">Start Your Campaign</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Index;

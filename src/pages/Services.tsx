import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Megaphone, Gift, Palette, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Megaphone,
    title: "ATL Advertising",
    subtitle: "Above the Line",
    items: ["Hoardings & Billboards", "Outdoor Media Planning", "Highway & Flyover Advertising", "Transit Media", "Large-Format Printing"],
    desc: "Maximize brand visibility with strategically placed hoardings and outdoor advertising across India's most high-traffic locations. We handle end-to-end media planning, booking, and execution.",
  },
  {
    icon: Gift,
    title: "BTL Marketing",
    subtitle: "Below the Line",
    items: ["Corporate Events", "Retail Activations", "Society Campaigns", "Sampling & Demonstrations", "Mall Activities"],
    desc: "Drive direct consumer engagement through targeted BTL activities. From society activations to retail promotions, we create memorable brand experiences that convert.",
  },
  {
    icon: Palette,
    title: "Branding & Fabrication",
    subtitle: "Design & Build",
    items: ["Signage & Glow Signs", "Mall Branding", "In-Shop Branding", "Kiosk Design", "Exhibition Stands"],
    desc: "Transform spaces into brand showcases. Our fabrication team delivers premium quality signage, in-shop branding, and custom installations that elevate brand perception.",
  },
  {
    icon: Truck,
    title: "Mobile Advertising",
    subtitle: "On the Move",
    items: ["Canter Van Activities", "Mobile Display Vans", "Roadshow Campaigns", "Audio-Visual Vans", "Route Planning"],
    desc: "Take your brand on the road. Our mobile advertising solutions ensure maximum reach across target geographies with professionally equipped canter and display vehicles.",
  },
];

const Services = () => (
  <div className="pt-20">
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">What We Do</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
            Comprehensive <span className="gradient-text">Marketing Solutions</span>
          </h1>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl leading-relaxed">
            From outdoor hoardings to on-ground activations, we offer end-to-end advertising solutions that deliver measurable results.
          </p>
        </motion.div>
      </div>
    </section>

    {sections.map((s, i) => (
      <section key={s.title} className={i % 2 === 0 ? "section-padding bg-background" : "section-padding bg-section-alt"}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={i % 2 !== 0 ? "lg:order-2" : ""}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">{s.subtitle}</p>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold">{s.title}</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <ArrowRight className="text-primary shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-xl bg-secondary/50 border border-border aspect-video flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <s.icon className="text-primary/20" size={80} />
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="bg-secondary section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-foreground mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-secondary-foreground/60 max-w-xl mx-auto mb-8">
          Every brand is unique. Let us design a tailored advertising strategy for your goals.
        </p>
        <Button asChild variant="hero" size="lg" className="text-base px-10 py-6">
          <Link to="/contact">Discuss Your Project</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Services;

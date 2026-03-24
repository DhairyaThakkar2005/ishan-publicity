import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const clients = [
  "Hindustan Unilever", "Nestlé", "Airtel", "Paytm", "Xiaomi",
  "Colgate-Palmolive", "Samsung", "Vodafone Idea", "ITC", "Godrej",
  "Marico", "Dabur", "Asian Paints", "Britannia", "Havells", "Bajaj",
];

const Clients = () => (
  <div className="pt-20">
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Clients</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
            Brands That <span className="gradient-text">Trust Us</span>
          </h1>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl">
            From FMCG giants to tech leaders, we've delivered results for India's most recognized brands.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading title="Our Valued Partners" subtitle="Over 14 years, we've built lasting relationships with industry-leading brands through consistent delivery and exceptional service." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-24 rounded-xl border border-border bg-card flex items-center justify-center hover-lift"
            >
              <span className="font-display font-bold text-muted-foreground/40 text-base text-center px-3">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust section */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Built on Trust & Delivery</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Our client relationships are rooted in transparency, reliability, and a relentless focus on results. Many of our clients have been with us for over a decade — a testament to the quality and consistency of our work.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { val: "95%", label: "Client Retention" },
            { val: "10+", label: "Avg. Years Partnership" },
            { val: "4.9/5", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary">{s.val}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Clients;

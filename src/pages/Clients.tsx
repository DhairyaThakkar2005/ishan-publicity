import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

import hul from "@/assets/hul.png";
import nestle from "@/assets/nestle.png";
import airtel from "@/assets/airtel.png";
import paytm from "@/assets/paytm.png";
import xiaomi from "@/assets/xiaomi.png";
import colgate from "@/assets/colgate.png";
import samsung from "@/assets/samsung.png";
import vodafone from "@/assets/vodafone.png";
import itc from "@/assets/itc.png";
import godrej from "@/assets/godrej.png";
import marico from "@/assets/marico.png";
import dabur from "@/assets/dabur.png";
import asianpaints from "@/assets/asianpaints.png";
import britannia from "@/assets/britannia.png";
import havells from "@/assets/havells.png";
import bajaj from "@/assets/bajaj.png";

const clients = [
  { name: "HUL", logo: hul, className: "scale-110" },
  { name: "Nestlé", logo: nestle },
  { name: "Airtel", logo: airtel },
  { name: "Paytm", logo: paytm },
  { name: "Xiaomi", logo: xiaomi },
  { name: "Colgate", logo: colgate },
  { name: "Samsung", logo: samsung },
  { name: "Vodafone", logo: vodafone, className: "scale-110" },
  { name: "ITC", logo: itc },
  { name: "Godrej", logo: godrej, className: "scale-125" },
  { name: "Marico", logo: marico },
  { name: "Dabur", logo: dabur },
  { name: "Asian Paints", logo: asianpaints },
  { name: "Britannia", logo: britannia, className: "scale-150" },
  { name: "Havells", logo: havells },
  { name: "Bajaj", logo: bajaj, className: "scale-110" },
];

const Clients = () => (
  <div className="pt-20">
    
    {/* Hero Section */}
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Our Clients
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
            Brands That <span className="gradient-text">Trust Us</span>
          </h1>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl">
            From FMCG giants to tech leaders, we've delivered results for India's most recognized brands.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Clients Grid */}
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          title="Our Valued Partners"
          subtitle="Over 14 years, we've built lasting relationships with industry-leading brands through consistent delivery and exceptional service."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-24 rounded-xl border border-border bg-card flex items-center justify-center p-4 hover-lift"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300 ${client.className || ""}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
          Built on Trust & Delivery
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Our client relationships are rooted in transparency, reliability, and a relentless focus on results.
          Many of our clients have been with us for over a decade — a testament to the quality and consistency of our work.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { val: "95%", label: "Client Retention" },
            { val: "10+", label: "Avg. Years Proprietor" },
            { val: "4.9/5", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary">
                {s.val}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default Clients;
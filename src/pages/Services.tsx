import { motion } from "framer-motion";
import {
  Megaphone,
  Gift,
  ShoppingBag,
  Truck,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// ✅ ADD THESE LINES HERE 👇
import hoardingImg from "@/assets/hoarding.jpg";
import societyImg from "@/assets/society.jpg";
import retailImg from "@/assets/retail.jpg";
import eventImg from "@/assets/event.jpg";
import vanImg from "@/assets/van.jpg";

const sections = [
  {
    icon: Megaphone,
    image: hoardingImg,
    title: "Hoarding Advertising",
    subtitle: "Outdoor Media",
    items: [
      "Highway & Flyover Hoardings",
      "Billboard Placements",
      "Large-Format Printing",
      "Transit Media",
      "Outdoor Media Planning",
    ],
    desc: "Boost your brand visibility with premium hoarding placements across high-traffic highways, junctions, and commercial hotspots. Available across Mumbai & surrounding regions. Reach lakhs of potential customers daily and build strong brand recall.",
    highlight: "High visibility. High recall. Real results.",
  },
  {
    icon: Building2,
    image: societyImg,
    title: "Society Campaigns",
    subtitle: "Direct Consumer Reach",
    items: [
      "Residential Society Activations",
      "Door-to-Door Campaigns",
      "Sampling & Demonstrations",
      "Community Events",
      "Consumer Feedback Drives",
    ],
    desc: "Connect directly with your target audience where they live. Our society campaigns build trust through personal engagement, sampling, and interactive brand experiences.",
    highlight: "Direct reach. Personal connection. Better conversions.",
  },
  {
    icon: ShoppingBag,
    image: retailImg,
    title: "Retail Branding",
    subtitle: "In-Store & Mall Presence",
    items: [
      "Signage & Glow Signs",
      "Mall Branding",
      "In-Shop Displays",
      "Kiosk Design & Setup",
      "Point-of-Sale Materials",
    ],
    desc: "Turn retail spaces into powerful brand experiences. We help your products stand out and influence buying decisions at the point of purchase.",
    highlight: "Stand out on shelves. Win at the point of sale.",
  },
  {
    icon: Gift,
    image: eventImg,
    title: "Event Promotions",
    subtitle: "On-Ground Engagement",
    items: [
      "Corporate Events",
      "Product Launches",
      "Mall Activities",
      "Roadshow Campaigns",
      "Brand Activations",
    ],
    desc: "Create unforgettable brand experiences that drive engagement and conversions. From product launches to activations, we generate buzz that delivers results.",
    highlight: "Create buzz. Drive engagement. Build loyalty.",
  },
  {
    icon: Truck,
    image: vanImg,
    title: "Mobile Van Advertising",
    subtitle: "Advertising on the Move",
    items: [
      "Branded Canter Vans",
      "LED Display Vans",
      "Audio-Visual Campaigns",
      "Route Planning & Execution",
      "Multi-City Roadshows",
    ],
    desc: "Take your brand directly to your audience with targeted mobile campaigns. Ensure maximum visibility across cities with professionally branded vehicles.",
    highlight: "Reach everywhere. Be seen everywhere.",
  },
];

const Services = () => (
  <div className="pt-20">
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
            Comprehensive{" "}
            <span className="gradient-text">Marketing Solutions</span>
          </h1>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl leading-relaxed">
            From outdoor hoardings to on-ground activations, we offer end-to-end
            advertising solutions that deliver measurable results.
          </p>
        </motion.div>
      </div>
    </section>

    {sections.map((s, i) => (
      <div key={s.title}>
        {" "}
        {/* ✅ WRAPPER ADDED */}
        <section
          className={
            i % 2 === 0
              ? "section-padding bg-background"
              : "section-padding bg-section-alt"
          }
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* TEXT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shadow-sm">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                      {s.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold">
                      {s.title}
                    </h2>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                  {s.desc}
                </p>

                <p className="text-primary font-semibold mb-6 text-lg">
                  {s.highlight}
                </p>

                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm group"
                    >
                      <ArrowRight
                        className="text-primary shrink-0 transition group-hover:translate-x-1"
                        size={16}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="text-primary font-semibold mt-6 inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Get a Quote →
                </Link>
              </motion.div>

              {/* IMAGE SIDE */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden aspect-video transition-transform duration-300 hover:scale-[1.03] cursor-pointer ${
                  i % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition duration-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* ✅ DIVIDER (NOT LAST ITEM) */}
        {i !== sections.length - 1 && (
          <div className="border-t border-border/50 my-16"></div>
        )}
      </div>
    ))}

    {/* CTA */}
    <section className="bg-secondary section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-foreground mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-secondary-foreground/60 max-w-xl mx-auto mb-8">
          Every brand is unique. Let us design a tailored advertising strategy
          for your goals.
        </p>
        <Button
          asChild
          variant="hero"
          size="lg"
          className="text-base px-10 py-6"
        >
          <Link to="/inquiry">Discuss Your Project</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Services;
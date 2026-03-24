import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Hoardings", "Society Promotions", "Canter Activities", "Signage Branding"];

const portfolioItems = [
  { title: "Highway Billboard Campaign", category: "Hoardings", color: "from-primary/30 to-primary/10" },
  { title: "Mumbai Flyover Branding", category: "Hoardings", color: "from-orange-400/30 to-orange-200/10" },
  { title: "Pune Outdoor Campaign", category: "Hoardings", color: "from-amber-400/30 to-amber-200/10" },
  { title: "Residential Society Launch", category: "Society Promotions", color: "from-blue-400/30 to-blue-200/10" },
  { title: "Product Sampling Drive", category: "Society Promotions", color: "from-teal-400/30 to-teal-200/10" },
  { title: "Society Festive Campaign", category: "Society Promotions", color: "from-rose-400/30 to-rose-200/10" },
  { title: "Mobile Van - Delhi NCR", category: "Canter Activities", color: "from-violet-400/30 to-violet-200/10" },
  { title: "Roadshow Campaign - Gujarat", category: "Canter Activities", color: "from-cyan-400/30 to-cyan-200/10" },
  { title: "Retail Store Signage", category: "Signage Branding", color: "from-emerald-400/30 to-emerald-200/10" },
  { title: "Mall Branding - Phoenix", category: "Signage Branding", color: "from-pink-400/30 to-pink-200/10" },
  { title: "In-Shop Branding Setup", category: "Signage Branding", color: "from-indigo-400/30 to-indigo-200/10" },
  { title: "Audio-Visual Canter", category: "Canter Activities", color: "from-yellow-400/30 to-yellow-200/10" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
              Campaign <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-secondary-foreground/60 text-lg max-w-2xl">
              A glimpse of our 500+ successful campaigns executed across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(item.title)}
                  className="group cursor-pointer rounded-xl border border-border overflow-hidden hover-lift"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                    <span className="font-display font-bold text-foreground/20 text-xl">{item.category}</span>
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-300 flex items-center justify-center">
                      <span className="text-secondary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-card-foreground">{item.title}</h3>
                    <p className="text-xs text-primary mt-1">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-card rounded-xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground font-display">Campaign Preview</span>
              </div>
              <h3 className="text-xl font-display font-bold">{lightbox}</h3>
              <p className="text-sm text-muted-foreground mt-2">Successfully executed campaign with measurable impact and brand visibility across target markets.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;

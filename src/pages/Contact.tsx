import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-20">
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6 max-w-3xl">
              Let's Start Your <span className="gradient-text">Campaign</span>
            </h1>
            <p className="text-secondary-foreground/60 text-lg max-w-2xl">
              Have a project in mind? Reach out and let's discuss how we can
              bring your brand to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Visit Our Office
              </h2>

              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=OM+Divya+Kandivali+West+Mumbai&output=embed"
                  width="100%"
                  height="500"
                  loading="lazy"
                  className="w-full h-[500px]"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                Contact Info
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">
                      +91 9833232377
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      ishanpublicity@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A Wing, 202, OM DIVYA,
                      <br />
                      Near Sona Cinema (Cinemax),
                      <br />
                      Trikamdass Road, Kandivali West,
                      <br />
                      Mumbai - 400067, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-section-alt border border-border p-6">
                <h4 className="font-display font-semibold mb-2">
                  Business Hours
                </h4>
                <p className="text-sm text-muted-foreground">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </p>
                <p className="text-sm text-muted-foreground">Sun: Closed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

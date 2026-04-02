import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Inquiry = () => {
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

      {/* Heading */}
      <section className="bg-secondary section-padding">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-secondary-foreground mb-4">
              Send Us a Message
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your requirement and we’ll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <Input placeholder="Your full name" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <Input type="tel" placeholder="+91 98200 00000" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full sm:w-auto px-10"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Inquiry;
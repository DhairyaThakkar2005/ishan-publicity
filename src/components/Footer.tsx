import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-display font-bold mb-4">
            Ishan<span className="text-primary">Publicity</span>
          </h3>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            A 360° advertising and promotions agency with 20+ years of experience bringing brands to life across India.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["/about", "/services", "/portfolio", "/clients", "/contact"].map((p) => (
              <Link key={p} to={p} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                {p.slice(1).charAt(0).toUpperCase() + p.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/60">
            <span>ATL Advertising</span>
            <span>BTL Marketing</span>
            <span>Branding & Fabrication</span>
            <span>Mobile Advertising</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/60">
            <div className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 9833232377</div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /> ishanpublicity@gmail.com</div>
            <div className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> A Wing, 202, OM DIVYA,<br />
                Near Sona Cinema (Cinemax),<br />
                Trikamdas Road, Kandivali West,<br />
                Mumbai - 400067, Maharashtra, India</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/10 mt-12 pt-8 text-center text-xs text-secondary-foreground/40">
        © {new Date().getFullYear()} Ishan Publicity. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

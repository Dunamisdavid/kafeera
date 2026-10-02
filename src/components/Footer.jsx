import { Link } from "react-router-dom";
import Crest from "./Crest";
import { careLinks } from "../data/departments";
import { site, whatsappLink } from "../data/site";

const linkClass = "text-ivory/75 no-underline hover:text-gold";
const headClass = "mb-3.5 font-serif text-xl font-semibold text-gold";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-olive-deep pt-24 pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-[0.95rem] text-ivory">
      <div className="wrap">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-x-8 gap-y-10">
          <div>
            <Crest className="w-21" alt="KAFÉERA crest" />
            <p className="mt-4 text-ivory/70">A house of distinction.</p>
          </div>
          <div>
            <h4 className={headClass}>The House</h4>
            <ul className="grid gap-2">
              <li><Link to="/house" className={linkClass}>Our story</Link></li>
              <li><Link to="/departments" className={linkClass}>Departments</Link></li>
              <li><Link to="/collections" className={linkClass}>Collections</Link></li>
              <li><Link to="/bespoke" className={linkClass}>Bespoke</Link></li>
              <li><Link to="/partnerships" className={linkClass}>Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={headClass}>Client care</h4>
            <ul className="grid gap-2">
              <li><Link to="/appointments" className={linkClass}>Private appointments</Link></li>
              {careLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={headClass}>Contact</h4>
            <ul className="grid gap-2">
              <li><a href={site.phoneHref} className={linkClass}>{site.phone}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener" className={linkClass}>WhatsApp</a></li>
              <li><a href={`mailto:${site.email}`} className={linkClass}>{site.email}</a></li>
              <li className="text-ivory/75">{site.city}</li>
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="mt-20 whitespace-nowrap text-center font-display text-[clamp(3.5rem,14.5vw,13.4rem)] font-medium leading-[0.85] tracking-[0.02em] text-gold">
          KAFÉERA
        </p>

        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-gold/20 pt-6 text-sm text-ivory/62">
          <p>&copy; {new Date().getFullYear()} KAFÉERA. My Corporate House.</p>
          <p className="flex gap-6">
            <Link to="/care/privacy" className="hover:text-gold">Privacy</Link>
            <Link to="/care/terms" className="hover:text-gold">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
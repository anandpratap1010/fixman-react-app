import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/fixtman-logo.png";
import Container from "./Container";

const popularServices = [
  "Appliances Installation",
  "Exercise Equipment Assembly",
  "Gazebo Assembly",
  "Landscape Installation Services",
  "Indoor Furniture Assembly",
  "Lighting Installation Services",
  "Outdoor Furniture Assembly",
  "Swing Set Assembly",
  "TV Wall Mounting Service",
  "Wall Hanging Service",
];

const popularPages = [
  "Home",
  "Location",
  "Gallery",
  "Contact Us",
  "Blog",
  "Rate Review",
];

const importantLinks = [
  "Amazon Prime Day",
  "Happiness Guarantee",
  "Affiliate Partner",
];

const socialLinks = [
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaXTwitter, label: "X" },
  { icon: FaLinkedin, label: "LinkedIn" },
  { icon: FaPinterest, label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-10 text-slate-600">
      <Container>
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <img src={logo} alt="Fixman logo" className="h-[78px] w-auto" />

          <div className="flex flex-wrap items-center gap-4 text-[1.65rem] text-slate-500">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition hover:text-slate-800"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 py-8 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr_1.15fr]">
          <div>
            <h4 className="mb-5 text-[1.35rem] font-bold text-teal-900">
              Popular Services
            </h4>
            <ul className="space-y-3 text-[1.05rem] leading-7 text-slate-500">
              {popularServices.map((service) => (
                <li key={service}>
                  <a href="#" className="transition hover:text-teal-900">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[1.35rem] font-bold text-teal-900">
              Popular Pages
            </h4>
            <ul className="space-y-3 text-[1.05rem] leading-7 text-slate-500">
              {popularPages.map((page) => (
                <li key={page}>
                  <a href="#" className="transition hover:text-teal-900">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[1.35rem] font-bold text-teal-900">
              Contact Info
            </h4>
            <div className="space-y-5 text-[1.05rem] leading-7 text-slate-500">
              <div>
                <p>Phone</p>
                <a href="tel:8884930064" className="transition hover:text-teal-900">
                  (888) 493-0064
                </a>
              </div>
              <div>
                <p>Email</p>
                <a
                  href="mailto:info@fixtman.com"
                  className="break-words transition hover:text-teal-900"
                >
                  info@fixtman.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[1.35rem] font-bold text-teal-900">
              Important Links
            </h4>
            <ul className="space-y-4 text-[1.05rem] leading-7">
              {importantLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-700"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[1.35rem] font-bold text-teal-900">
              Available Now On
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex min-w-[176px] items-center gap-3 rounded-md bg-black px-4 py-2.5 text-white shadow-sm transition hover:bg-zinc-900"
              >
                <FaGooglePlay className="text-2xl" />
                <span className="leading-tight">
                  <span className="block text-[0.6rem] uppercase tracking-[0.16em] text-zinc-300">
                    Get it on
                  </span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </a>

              <a
                href="#"
                className="inline-flex min-w-[176px] items-center gap-3 rounded-md bg-black px-4 py-2.5 text-white shadow-sm transition hover:bg-zinc-900"
              >
                <FaApple className="text-[1.85rem]" />
                <span className="leading-tight">
                  <span className="block text-[0.6rem] uppercase tracking-[0.16em] text-zinc-300">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-4 text-sm text-slate-500">
          Copyright &copy; 2023 All rights reserved. Powered by FixTman
        </div>
      </Container>
    </footer>
  );
}

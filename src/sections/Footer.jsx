import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { siteConfig, socialLinks } from '../data/teamData';

const socials = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start mb-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-purple flex items-center justify-center font-display font-bold text-xs text-white">
                {siteConfig.teamInitials}
              </div>
              <span className="font-display font-semibold text-white/90 text-sm">{siteConfig.teamName}</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              Built with creativity, technology & teamwork.
            </p>
          </div>

          {/* Hackathon */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-white/20 mb-1">Hackathon</p>
            <p className="text-sm text-white/50 font-medium">{siteConfig.hackathonName}</p>
          </div>

          {/* Social */}
          <div className="sm:text-right">
            <div className="flex items-center gap-3 sm:justify-end">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/20">
          <p>© 2026 {siteConfig.teamName}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-purple-light" /> by {siteConfig.teamName}
          </p>
        </div>
      </div>
    </footer>
  );
}

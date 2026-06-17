'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const languages = [
    {
      flag: '🇬🇧',
      name: 'English',
      url: 'https://dsaint.eu',
    },
    {
      flag: '🇩🇪',
      name: 'Deutsch',
      url: 'https://translate.google.com/translate?sl=en&tl=de&u=https://dsaint.eu',
    },
    {
      flag: '🇫🇷',
      name: 'Français',
      url: 'https://translate.google.com/translate?sl=en&tl=fr&u=https://dsaint.eu',
    },
    {
      flag: '🇪🇸',
      name: 'Español',
      url: 'https://translate.google.com/translate?sl=en&tl=es&u=https://dsaint.eu',
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          rounded-lg
          border border-cyan-400/30
          bg-slate-900/50
          px-3 py-2
          text-white
          hover:border-cyan-400
          transition
        "
      >
        🇬🇧 English
        <ChevronDown size={16} />
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-56
            rounded-xl
            border border-cyan-400/20
            bg-slate-900
            shadow-2xl
            overflow-hidden
            z-50
          "
        >
          {languages.map((lang) => (
            <a
              key={lang.name}
              href={lang.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-4 py-3
                text-white
                hover:bg-cyan-500/10
              "
            >
              <span>{lang.flag}</span>
              {lang.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

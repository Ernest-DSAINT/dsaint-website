'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const languages = [
    {
      flag: '🇺🇸',
      code: 'US',
      url: 'https://dsaint.eu',
    },
    {
      flag: '🇩🇪',
      code: 'DE',
      url: 'https://translate.google.com/translate?sl=en&tl=de&u=https://dsaint.eu',
    },
    {
      flag: '🇫🇷',
      code: 'FR',
      url: 'https://translate.google.com/translate?sl=en&tl=fr&u=https://dsaint.eu',
    },
    {
      flag: '🇪🇸',
      code: 'ES',
      url: 'https://translate.google.com/translate?sl=en&tl=es&u=https://dsaint.eu',
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-3 py-2
          rounded-lg
          border border-slate-300
          bg-white
          text-slate-700
          hover:border-sky-500
          hover:text-sky-700
          transition
        "
      >
        <span className="text-lg">🇺🇸</span>
        <span className="font-semibold">US</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-40
            bg-white
            border
            border-slate-200
            rounded-xl
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={lang.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                text-slate-700
                hover:bg-sky-50
                hover:text-sky-700
                transition
              "
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-semibold">{lang.code}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

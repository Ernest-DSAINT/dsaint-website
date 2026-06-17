'use client';

import { useState } from 'react';

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
          rounded-lg
          border border-slate-300
          bg-white
          px-3 py-2
          text-slate-700
          hover:border-sky-500
          transition
        "
      >
        <span className="text-xl">🇺🇸</span>
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2
            w-32
            rounded-xl
            border border-slate-200
            bg-white
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
                flex items-center justify-between
                px-4 py-3
                hover:bg-sky-50
                transition
              "
            >
              <span className="text-xl">
                {lang.flag}
              </span>

              <span className="font-medium text-slate-700">
                {lang.code}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

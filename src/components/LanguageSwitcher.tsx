'use client';

import { useState } from 'react';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const languages = [
    {
      code: 'EN',
      url: 'https://dsaint.eu',
    },
    {
      code: 'DE',
      url: 'https://translate.google.com/translate?sl=en&tl=de&u=https://dsaint.eu',
    },
    {
      code: 'FR',
      url: 'https://translate.google.com/translate?sl=en&tl=fr&u=https://dsaint.eu',
    },
    {
      code: 'ES',
      url: 'https://translate.google.com/translate?sl=en&tl=es&u=https://dsaint.eu',
    },
    {
      code: 'UA',
      url: 'https://translate.google.com/translate?sl=en&tl=uk&u=https://dsaint.eu',
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
        <span className="font-semibold">EN</span>
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-20
            rounded-xl
            border
            border-slate-200
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
              onClick={(e) => {
                e.preventDefault();
                window.location.href = lang.url;
              }}
              className="
                block
                px-4
                py-3
                text-center
                font-semibold
                text-slate-700
                hover:bg-sky-50
                transition
              "
            >
              {lang.code}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

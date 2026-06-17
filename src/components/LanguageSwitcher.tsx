'use client';

import { useState } from 'react';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-700"
      >
        🇺🇸 US ▼
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
          <a
            href="https://dsaint.eu"
            className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50"
          >
            🇺🇸 US
          </a>

          <a
            href="https://translate.google.com/translate?sl=en&tl=de&u=https://dsaint.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50"
          >
            🇩🇪 DE
          </a>

          <a
            href="https://translate.google.com/translate?sl=en&tl=fr&u=https://dsaint.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50"
          >
            🇫🇷 FR
          </a>

          <a
            href="https://translate.google.com/translate?sl=en&tl=es&u=https://dsaint.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50"
          >
            🇪🇸 ES
          </a>
        </div>
      )}
    </div>
  );
}

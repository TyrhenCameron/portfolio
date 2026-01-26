"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => switchLocale('en')}
        disabled={isPending}
      >
        EN
      </button>
      <span className="lang-divider">/</span>
      <button
        className={`lang-btn ${locale === 'ja' ? 'active' : ''}`}
        onClick={() => switchLocale('ja')}
        disabled={isPending}
      >
        JA
      </button>
    </div>
  );
}

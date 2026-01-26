"use client";

import React from "react";
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('about');

  return (
    <div className="page-content">
      <h1>
        {t('title')}<sup>({t('sectionNumber')})</sup>
      </h1>
    </div>
  );
}

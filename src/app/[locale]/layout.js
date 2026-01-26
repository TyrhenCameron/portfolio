import { Inter, Noto_Sans_JP } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp"
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return {
    title: messages.metadata?.title || "Profile Website",
    description: messages.metadata?.description || "Tyrhen Cameron - Software / Cloud Engineer",
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} ${notoSansJP.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Menu />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

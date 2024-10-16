// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter, Noto_Sans } from 'next/font/google';
import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

// **Font Configuration**
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans',
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Intercom on client-side
    Intercom({
      app_id: 'tjz0mvmr',
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Head Component for Meta Tags and Fonts */}
      <Head>
        <title>Galileo Design</title>
        <meta name="description" content="Galileo Design Analytics Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preconnect to Google Fonts for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Tailwind CSS via Script */}
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
        {/* Tailwind Config */}
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind.config = {
              darkMode: 'class',
              // ...other configurations
            };
          `}
        </Script>
      </Head>

      {/* Main Application Wrapper */}
      <div
        className={`${inter.variable} ${notoSans.variable} font-sans bg-white dark:bg-[#111518] text-black dark:text-white min-h-screen flex flex-col`}
      >
        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

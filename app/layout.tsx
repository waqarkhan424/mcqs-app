import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import BackButton from "./components/back-button";
import "./globals.css";




const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
  fallback: ["Nunito Sans", "ui-sans-serif"],
});


export const metadata: Metadata = {
  title: "OnePaper - MCQs for Government Job Tests",
  description: "Practice One Paper MCQs for PPSC, FPSC, and other government job exams – English, General Knowledge, Math, Computer, Current Affairs, and more.",
  other: {
    "google-site-verification": "sYocTKrMYA2RYVes1Peb7lhogRKIBKqAupUjtEiJa1w"
  },

  icons: {
    icon: "/onepaper.png", // Next.js will inject a <link rel="icon"> for you
  },



  // Open Graph metadata
  openGraph: {
    type: "website",
    url: "https://www.onepaper.site/",
    title: "OnePaper – MCQs for Government Job Tests",
    description: "Practice One Paper MCQs for PPSC, FPSC, and other government job exams – English, General Knowledge, Math, Computer, Current Affairs, and more.",
    siteName: "OnePaper",
    images: [
      {
        url: "https://www.onepaper.site/og-image.png",
        // width: 1200,
        // height: 630,
        width: 1024,
        height: 1024,
        alt: "OnePaper logo",
      },
    ],
  },


  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "OnePaper – MCQs for Government Job Tests",
    description: "Practice One Paper MCQs for PPSC, FPSC, and other government job exams – English, General Knowledge, Math, Computer, Current Affairs, and more.",
    images: ["https://www.onepaper.site/og-image.png"],

  },



};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.className}>


      <head>

        {/* favicon using your 28×28 PNG */}

        <link rel="icon" href="/onepaper.png" type="image/png" sizes="28x28" />






        {/* Open Graph Meta Tags (for Facebook, WhatsApp) */}
        <meta property="og:title" content="OnePaper – MCQs for Government Job Tests" />
        <meta property="og:description" content="Practice One Paper MCQs for PPSC, FPSC, and other government job exams – English, General Knowledge, Math, Computer, Current Affairs, and more." />
        <meta property="og:image" content="https://www.onepaper.site/og-image.png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:url" content="https://www.onepaper.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OnePaper" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OnePaper – MCQs for Government Job Tests" />
        <meta name="twitter:description" content="Practice One Paper MCQs for PPSC, FPSC, and other government job exams – English, General Knowledge, Math, Computer, Current Affairs, and more." />
        <meta name="twitter:image" content="https://www.onepaper.site/og-image.png" />





        {/* Google Ads script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4332720109955132"
          crossOrigin="anonymous"></script>
      </head>

      <body className="antialiased flex flex-col min-h-screen">
        <SiteHeader />

        <BackButton />

        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </body>



    </html>
  );
}

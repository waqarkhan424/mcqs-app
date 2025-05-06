import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "OnePaper - MCQs for Government Job Tests",
  description: "Practice One Paper MCQs for PPSC, FPSC, and other government job exams – English, General Knowledge, Math, Computer, Current Affairs, and more.",
  other: {
    "google-site-verification": "sYocTKrMYA2RYVes1Peb7lhogRKIBKqAupUjtEiJa1w"
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>

        {/* <link rel="icon" href="/onepaper.png" type="image/png" /> */}



        {/* Favicon and logo metadata */}
        <link rel="icon" href="/onepaper.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/onepaper.png" />
        <link rel="shortcut icon" href="/onepaper.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />





        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4332720109955132"
          crossOrigin="anonymous"></script>
      </head>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </body>



    </html>
  );
}

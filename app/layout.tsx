// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";

const GA_ID = "G-KHKHWNBF71";

export const metadata = {
  title: "Rajpal Singh Rathore",
  description: "Personal portfolio of Rajpal Singh Rathore - AI Automation Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script
              id="google-analytics"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`,
              }}
            />
          </>
        )}
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%90%9E%3C/text%3E%3C/svg%3E" />
        <meta property="og:title" content="Rajpal Singh Rathore - AI Automation Engineer" />
        <meta
          property="og:description"
          content="AI Automation Engineer specializing in Python, n8n, REST APIs, and LLMs - building scalable automation systems and AI-powered applications."
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
        style={{ cursor: 'none' }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <AnimatedNavFramer />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

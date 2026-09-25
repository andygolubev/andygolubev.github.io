import type { Metadata } from "next";
import { Geist, Funnel_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Credits from "@/components/Credits/Credits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andy Golubev | Cloud Architect & DevOps Engineer",
  description: "Personal website of AWS & GCP certified Cloud Architect & DevOps Engineer Andy Golubev. Certifications, GitHub work, and articles on Kubernetes and Terraform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night" suppressHydrationWarning className={`${geistSans.variable} ${funnelDisplay.variable}`}>

      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{document.documentElement.dataset.theme=localStorage.getItem("andy-theme")==="day"?"day":"night"}catch{}})();` }} />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Credits />
        </ThemeProvider>
      </body>
    </html>
  );
}

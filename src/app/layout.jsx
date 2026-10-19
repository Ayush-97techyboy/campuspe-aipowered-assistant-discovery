import { Inter, Plus_Jakarta_Sans, Roboto, Caveat, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0084FF",
};

export const metadata = {
  metadataBase: new URL("https://campuspe.com"),
  title: "CampusPE - AI powered Campus Assistant for Students | College Placements & Discovery",
  description:
    "CampusPE - India's first AI-powered campus assistant for students. Discover top colleges, secure placements with leading companies like TCS, Infosys, Wipro. Join thousands of Indian students building their future.",
  keywords: [
    "CampusPE",
    "campus assistant India",
    "college placements India",
    "IIT placements",
    "NIT placements",
    "engineering college placements",
    "Indian students",
    "campus recruitment",
    "TCS placements",
    "Infosys recruitment",
    "Wipro jobs",
    "college discovery India",
    "AI campus assistant",
  ],
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://campuspe.com/",
    title: "CampusPE - AI powered Campus Assistant for Students | College Placements & Discovery",
    description:
      "India's leading AI platform for college discovery and campus placements. Connect with top companies like TCS, Infosys, Google. Join thousands of successful Indian students.",
    images: [{ url: "/assets/logo.png" }],
    siteName: "CampusPE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusPE - AI Campus Assistant for Indian Students",
    description: "India's AI-powered platform for college placements with top companies. Join the future of campus recruitment.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${roboto.variable} ${caveat.variable} ${lora.variable} font-sans antialiased text-slate-800 bg-white min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

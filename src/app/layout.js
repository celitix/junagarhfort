import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Junagarh | Bikaner Kila | Bikaner Fort | Rajasthan Forts",
  description: "Junagarh fort Bikaner Rajasthan is an age old heritage site. The Fort is one of the most looked after places to visit in Bikaner.",
  alternates: {
    canonical: "https://www.junagarhfort.com",
  },
  icons: {
    icon: [
      { url: '/junagarh-32x32.png', sizes: '16x16', type: 'image/png' },
      { url: '/junagarh-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/junagarh-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

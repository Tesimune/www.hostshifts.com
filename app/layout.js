import { Inter } from "next/font/google";
import "./globals.css";

// Contexts
import { ThemeProvider } from "./Contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hosting at it best | HOSTSHIFTS",
  description: "Secure & Scalable Hosting for Your Digital Success",
  openGraph: {
    title: "Hosting at it best | HOSTSHIFTS",
    description: "Secure & Scalable Hosting for Your Digital Success",
    url: "https://www.hostshifts.com",
    siteName: "hostshifts",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.hostshifts.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://www.hostshifts.com/logo.jpg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

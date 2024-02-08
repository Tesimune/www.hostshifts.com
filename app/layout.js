import { Inter } from "next/font/google";
import "./globals.css";

// Contexts
import { ThemeProvider } from "./Contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HostShifts",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

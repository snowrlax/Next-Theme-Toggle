import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Week-14 Assignment",
  description: "Next app Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="">
              
              {children}
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

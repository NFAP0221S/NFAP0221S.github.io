import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ThemeProvider from "./provider/theme-provider";
import { Providers } from "./provider/next-ui-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFAP0221S's Blog",
  description: "NFAP0221S의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>My Blog</title>
        {/* <Script src="https://cdn.tailwindcss.com" /> */}
      </head>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Providers>
              <main className={inter.className}>
                {children}
              </main>
            </Providers>
          </ThemeProvider>
      </body>
    </html>
  );
}

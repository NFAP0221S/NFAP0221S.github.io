import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ThemeProvider from "./provider/theme-provider";
import NextUiProvider from "./provider/next-ui-provider";
import { SubCategoryProvider } from "./provider/category-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFAP0221S's Blog",
  description: "NFAP0221S의 블로그",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          <SubCategoryProvider>
            {/* <NextUiProvider> */}
            <main className={inter.className}>{children}</main>
          </SubCategoryProvider>
          {/* </NextUiProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

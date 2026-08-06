import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {

  title: "NEXO",

  description:

    "AI Business Operating System",

};

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body>

        <ThemeProvider>

          <QueryProvider>

            <TooltipProvider>

              {children}

              <Toaster richColors />

            </TooltipProvider>

          </QueryProvider>

        </ThemeProvider>

      </body>

    </html>

  );

}

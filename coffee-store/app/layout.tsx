import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({display: 'swap', subsets: ["latin"],
  weight:['500', '600', '700'],
  });



export const metadata: Metadata = {
  title: "Coffee Conosuier",
  description: "Discover the best coffee shops in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        {children}
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Reply | Automate SMS & WhatsApp for Your Business",
  description: "Brand Reply sends automated SMS and WhatsApp messages on received, missed, or disconnected calls. Boost your brand and generate leads automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Yomko Studio | Branding & Website Development, Creative Visual Identity",
  description: "Yomko Studio is a full-service communication design agency specializing in creating unique visual identities, impactful branding strategies, and seamless website development. We bring your brand to life through custom graphic images, print products, and digital solutions tailored to your business needs.",
  icons: {
    icon: "/assets/favicon/emko-favikon-32.png",
    shortcut: "/assets/favicon/emko-favikon-32.png",
    apple: "/assets/favicon/emko-favikon-120.png",
  },
  openGraph: {
    title: "Yomko Studio | Branding & Website Development",
    description: "Yomko Studio is a full-service communication design agency specializing in unique visual identities and seamless website development.",
    url: "https://yomko.studio",
    siteName: "Yomko Studio",
    images: [
      {
        url: "https://yomko.studio/assets/opengraph/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yomko Studio OpenGraph Image",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yomko Studio | Branding & Website Development",
    description: "Yomko Studio is a full-service communication design agency specializing in unique visual identities and website development.",
    images: ["https://yomko.studio/assets/opengraph/opengraph-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: "Pretendard Variable";
            src: url("${bp}/assets/font/PretendardVariable.woff2") format("woff2-variations");
            font-weight: 100 900;
            font-style: normal;
            font-display: swap;
          }
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

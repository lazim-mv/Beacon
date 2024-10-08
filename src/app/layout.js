import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Beacon - Your Global Advisory Partner For Business Success",
  description:
    "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
  keywords: [
    "business consulting",
    "management consulting",
    "consulting companies",
    "financial consulting",
    "business management consulting",
    "company formation in saudi arabia",
    "saudi company formation",
    "registering a company in saudi arabia",
    "consulting firms in saudi arabia",
    "business consultants in saudi arabia",
  ],
  openGraph: {
    title: "Beacon - Your Global Advisory Partner For Business Success",
    description:
      "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
    url: "https://bmcglobal.co",
    siteName: "Beacon",
    keywords: [
      "business consulting",
      "management consulting",
      "consulting companies",
      "financial consulting",
      "business management consulting",
      "company formation in saudi arabia",
      "saudi company formation",
      "registering a company in saudi arabia",
      "consulting firms in saudi arabia",
      "business consultants in saudi arabia",
    ],
    images: [
      {
        url: "https://bmcglobal.co/linkImageWhatsApp.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://bmcglobal.co/linkImageWhatsApp.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Sora = localFont({
  src: [
    {
      path: "./fonts/Sora-SemiBold.woff2",
      weight: "600",
      style: "normal",
      variable: "--font-Sora",
    },
    {
      path: "./fonts/Sora-Medium.woff2",
      weight: "500",
      style: "normal",
      variable: "--font-Sora",
    },
    {
      path: "./fonts/Sora-Regular.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-Sora",
    },
    {
      path: "./fonts/Sora-Light.woff2",
      weight: "300",
      style: "normal",
      variable: "--font-Sora",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/GREEN.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          content="https://bmcglobal.co/linkImageWhatsApp.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TFFRR5QM5E"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TFFRR5QM5E');
            `,
          }}
        />
      </head>
      <body className={Sora.className}>{children}</body>
    </html>
  );
}

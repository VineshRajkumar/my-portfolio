import type { Metadata } from "next";
import '@/app/styles/globals.css'
import { ThemeProvider } from "@/components/misc/theme-provider";
import { description, image, seo, title, url } from "./data";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {

  //display title and description when searched in google
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description: description,
  keywords: seo.keywords,
  authors: seo.authors,
  creator: seo.authors[0].name,

  // Canonical URL - sets main version of page -> each page will have different canonicalURL / ,/about like that
  metadataBase: new URL(url),

  alternates: {
    canonical: "/",
  },

  //for favicon
  icons: {
    icon: [
      { url: "/icons/favicon.ico" }, // default
      { url: "/icons/favicon.png", type: "image/png" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon0.svg", type: "image/svg+xml" },
      { url: "/icons/icon1.png", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-icon.png" },
      { url: "/icons/apple-touch-icon.png" },
    ],
  },

  // Open Graph -  If site is shared in facebook,linkdin then site should look like this
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: `${title} Portfolio`,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: `${title} Portfolio Banner`,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter - when someone shares site in twitter then site should look like this
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
    creator: seo.twitterHandle,
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="m430e2fTgc2fp0gSlvgXhAGSe-ZLiD5gKFmK2Q25ek4" />
        <meta name="apple-mobile-web-app-title" content="Vinesh Raj" />
      </head>
      <body
        className='w-full flex flex-col items-center justify-start no-scrollbar overflow-y-scroll my-6 p-4 antialiased max-w-xl mx-auto'
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

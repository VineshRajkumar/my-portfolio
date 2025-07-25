import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import '@/app/styles/globals.css'
import { ThemeProvider } from "@/components/misc/theme-provider";
import { description, image, title, url } from "./data";


export const metadata: Metadata = {

  //display title and description when searched in google
  title: title,
  description: description,

  // Canonical URL - sets main version of page -> each page will have different canonicalURL / ,/about like that
  metadataBase: new URL(url),

  alternates: {
    canonical: "/",
  },

  //for favicon
  icons: {
    icon: "/favicon.ico",
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
  },

  // Twitter - when someone shares site in twitter then site should look like this
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
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
        </ThemeProvider>
      </body>
    </html>
  );
}

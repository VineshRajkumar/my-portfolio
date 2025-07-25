//USE THIS CUSTOM BASEHEAD ONLY IF YOU NEED TO PUT CUSTOM ANALYTICS FOR YOUR WEBSITE 
//ALSO ANALYTICS DOESNOT HELP IN SEO IT IS ONLY FOR ANALYSING YOUR WEBSITE 
//NEXTJS ALREDY PROVIDES THIS BASEHEAD THING BUT WITHOUT THE ANALYTICS YOU CAN CHECHK IN layouts.tsx

import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function BaseHead({ title, description, image = '/images/ogimage.png' }: Props) {

  //canonicalURL sets main version of page 
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}`
  
  return (
    <Head>

      
      {/*
      If you need Analytics then :- 
      in umami free website you can add 3 websites only  
      
      //Umami Analytics 
      //track how many people visit your site — without Google Analytics.

      {process.env.NODE_ENV === 'production' && (
        <script
          async
          defer
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={process.env.NEXT_PUBLIC_UMAMI_TRACKING_URL}
        />
      )}

      //Microsoft Clarity
      //lets you see recordings or heatmaps of how users interact with your site.

      {process.env.NODE_ENV === 'production' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/" + i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_TRACKING_ID}");
            `,
          }}
        />
      )} */}

      {/* Canonical URL */}
      {/* setting canonicalURL (main version of page)  */}
      <link rel="canonical" href={canonicalURL} />

      {/* Meta Tags */}
      {/* for mobile responsiveness  */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicons (basic) */}
      {/* different favicons according to device */}
      {/* only add this if you have multiple icons also you will need to add manifest.json for those */}
      {/* and themecolor is the color of the top address bar in mobile devices  */}
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />

      {/* Primary Meta Tags */}
      {/* seo purpose to display the site 
      title and description when searched in 
      google */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      {/* If site is shared in facebook,linkdin 
      then site should look like this */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      {/* when someone shares site in twitter 
      then site should look like this */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}


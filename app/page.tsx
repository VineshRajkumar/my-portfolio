import { products, socialLinks } from '@/app/data/index';
import CurrentTime from '@/components/misc/current-time';
// import AvailabilityStatus from '@/components/misc/current-time';
import Header from '@/components/misc/headers';
import ProjectPopup from '@/components/misc/popup';
// import BaseHead from '@/components/seo/basehead';
import { Badge } from '@/components/ui/badge';
import TechStackMarquee from '@/components/ui/tech-stack-marquee';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

// import Image from 'next/image';
import Link from 'next/link';



export default function Home() {

  return (
    <>

      {/* Only use basehead if you need Analytics like umami or microsoft clarity */}
      {/* <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} image='/images/ogimage.png' /> */}

      <div className=''>
        <div id='navbar+title' className=' flex flex-col w-full gap-5.5 sm:gap-5 max-w-xl lowercase'>

          {/* NAV  */}
          <Header />

          {/* TITLE */}
          <h1 className='w-full text-start text-[min(12vw,72px)] font-medium leading-[0.9] tracking-[-2px] sm:tracking-[-4px]'>
            hey, i&#39;m vinesh<br />
            <span className='text-gray-500 dark:text-gray-400'>developer builder</span>
          </h1>

          <Badge variant="outline" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </Badge>

          {/* ABOUT */}
          <main id='about' className='flex flex-col gap-4 '>

            {/* description  */}
            <section className='font-medium text-lg text-gray-700 dark:text-gray-400'>
              I&rsquo;m a 19-year-old developer — disciplined, focused, and driven to build, innovate, and make great things happen.
            </section>

            {/* banner */}
            <section className="relative h-12 w-full overflow-hidden">
              <TechStackMarquee />
            </section>

            {/* projects */}
            <section className=' font-medium text-lg text-gray-700 dark:text-gray-300'>
              i built projects like
              <div className=' flex flex-wrap gap-2 mt-5'>
                {
                  products.map((product) => (
                    <div key={product.id} className='' >
                      <ProjectPopup name={product.name} liveurl={product.liveurl} githuburl={product.githuburl} image={product.image} popupImage={product.popupImage} description={product.description} tech={product.tech} status={product.status} />
                    </div>
                  ))
                }
              </div>
            </section>

            <section className='font-medium text-lg text-gray-700 dark:text-gray-400'>
              I am open to internships, projects, or just connecting.
            </section>

            <section className='font-medium text-lg text-gray-700 dark:text-gray-400'>
              Feel free to reach out — {" "}
              <Tooltip>
                <Link
                  href="mailto:vineshrajkumar23@gmail.com?subject=Let's%20chat&body=Hey%20Vinesh,%20I%20saw%20your%20portfolio..."
                  target='_blank'
                >
                  <TooltipTrigger className='underline underline-offset-2'>send a email</TooltipTrigger>
                  <TooltipContent> <p>vineshrajkumar23@gmail.com</p> </TooltipContent>
                </Link>
              </Tooltip>
            </section>


          </main>

          {/* social links  */}
          <footer
            id='social-links'
            className='flex max-[410px]:flex-col max-[410px]:gap-3 justify-between items-center '>
            <div className="flex flex-wrap gap-4">
              {
                socialLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className='text-lg font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline underline-offset-2'>
                    {link.label}
                  </Link>
                ))
              }
            </div>
            <CurrentTime />
          </footer>
        </div>
      </div>
    </>
  );
}

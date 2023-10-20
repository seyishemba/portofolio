import { motion } from 'framer-motion';
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';
import { setTransition } from '@lib/transition';
import { SEO } from '@components/common/seo';
import { Accent } from '@components/ui/accent';
import { Tooltip } from '@components/ui/tooltip';
import { CustomLink } from '@components/link/custom-link';
import type { IconType } from 'react-icons';

export default function About(): JSX.Element {
  return (
    <main className='layout min-h-screen'>
      <SEO 
        title='About us'
        description='Yeahstech Innovations | Get to know and work with us.' />
      <section className='grid gap-2'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition()}
        >
          About
        </motion.h2>
        <motion.h1
          className='text-2xl font-bold md:text-4xl'
          {...setTransition({ delayIn: 0.1 })}
        >
          <Accent>YeahsTech Innovations</Accent>
        </motion.h1>
      </section>
      <section className='mt-4'>
        <motion.article
          className='prose dark:prose-invert'
          {...setTransition({ delayIn: 0.2 })}
        >
             <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
          Transform your tech dreams into reality with YeahsTech.
        </motion.h2>
          <p>
            YeahsTech is your one-stop destination for all your tech needs. Whether you're a business owner or just someone who loves technology, our team of experts is here to provide you with top-notch tech consultation and more. 
            </p>
            <p>
            From website development to digital marketing, our team of experts is here to provide you with top-notch tech solutions. Let us be your personal tech consultant/friend and bring your tech dreams to life!
</p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
        - Stay ahead of the curve with innovative tech solutions.
        </motion.h2>
<p>
  In today's fast-paced digital world, staying ahead of the curve is crucial. Yeahstech is your go-to tech agency that offers cutting-edge tech consultation, website and app development, digital marketing, and all-round tech solutions. With our innovative and ever-evolving approach, you'll always be at the forefront of technology. Trust Yeahstech to be your personal tech consultant/friend who will help you with anything tech-related
  </p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
- Unlock the power of technology for everyone.
</motion.h2>
<p>
  YeahsTech believes that technology should be accessible to everyone. Whether you're a business owner or an individual, we offer comprehensive IT solutions that cater to all your needs. From website and app development to digital marketing, we're your go-to tech consultant/friend who will help you with anything tech-related. Embrace the future with YeahsTech by your side.
  </p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
-  Unlock your tech potential with expert guidance.
</motion.h2>
<p>
 Don't let technology hold you back. Whether you're a business owner or just a regular person, our tech consultation services will help unlock your full potential. Get expert guidance and stay ahead in the digital world with Yeahstech innovations.
</p>
<p>
Unlock the power of technology with YeahsTech by your side.
</p>
<p>
  Get in touch with us today.


         
          </p>
          {/* <p>
            I began my journey by completing the front-end course on{' '}
            <CustomLink href='https://freecodecamp.org'>
              FreeCodeCamp
            </CustomLink>{' '}
            and then moved on to
          </p> */}

        </motion.article>
      </section>
      {/* <section className='mt-12 grid gap-4'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
          Favorite Tech Stack
        </motion.h2>
        <motion.ul
          className='translate flex gap-4 [&>li:first-child>div]:-translate-x-4
                     [&>li:nth-child(2)>div]:-translate-x-16 [&>li:nth-child(3)>div]:-translate-x-28'
          {...setTransition({ delayIn: 0.4 })}
        >
          {favoriteTechStack.map(({ tip, name, href, Icon }) => (
            <Tooltip
              tooltipClassName='group-hover:!-translate-y-36 w-72 px-3 py-4 !-translate-y-28
                                text-center !whitespace-normal 2xl:!-translate-x-1/2
                                peer-focus-visible:!-translate-y-36'
              tag='li'
              key={name}
              tip={
                <>
                  <CustomLink href={href} tabIndex={-1}>
                    {name}
                  </CustomLink>
                  {', '}
                  {tip}
                </>
              }
            >
              <button className='smooth-tab peer'>
                <Icon className='text-4xl transition-colors hover:text-accent-main' />
              </button>
            </Tooltip>
          ))}
        </motion.ul>
      </section> */}
    </main>
  );
}

type FavoriteTechStack = {
  tip: string;
  name: string;
  href: string;
  Icon: IconType;
};

const favoriteTechStack: FavoriteTechStack[] = [
  {
    tip: 'a React framework that makes it easy to build static and server-side rendered applications.',
    name: 'Next.js',
    href: 'https://nextjs.org',
    Icon: SiNextdotjs
  },
  {
    tip: 'a strongly typed language that builds on JavaScript, giving you better tooling at any scale.',
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    Icon: SiTypescript
  },
  {
    tip: 'an app development platform that helps you build and grow apps and games users love.',
    name: 'Firebase',
    href: 'https://firebase.google.com',
    Icon: SiFirebase
  },
  {
    tip: 'a utility-first CSS framework that helps you build custom designs without ever leaving your JSX.',
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    Icon: SiTailwindcss
  }
];

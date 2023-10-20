import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi2';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { initializeAllContents } from '@lib/api';
import { getAllContents } from '@lib/mdx';
import { setTransition, fadeInWhenVisible } from '@lib/transition';
import { SEO } from '@components/common/seo';
import { BlogCard } from '@components/blog/blog-card';
import { ProjectCard } from '@components/project/project-card';
import { UnstyledLink } from '@components/link/unstyled-link';
import { Accent } from '@components/ui/accent';
import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import type { IconType } from 'react-icons';
import type { Blog, Project } from '@lib/types/contents';

export default function Home({
  featuredBlog,
  featuredProjects
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <main className='grid gap-20'>
      <SEO
        title='Yeahstech Innovations'
        description='Get to know and work with us.'
      />
      <section className='-mt-20 grid min-h-screen content-center'>
        <motion.h2
          className='text-2xl font-bold transition-colors delay-100 md:text-4xl 2xl:text-5xl'
          {...setTransition()}
        >
          
        </motion.h2>
        <motion.h1
          className='mt-1 text-3xl font-bold transition-colors delay-200 md:text-5xl 2xl:text-6xl'
          {...setTransition({ delayIn: 0.1 })}
        >
          Unlock the power of <Accent>Technology</Accent> with <Accent>YeahsTech.</Accent>
        </motion.h1>
        <motion.p
          className='mt-4 max-w-4xl leading-relaxed text-gray-700 transition-colors delay-[400ms] dark:text-gray-200 
                     md:mt-6 md:text-lg 2xl:text-xl'
          {...setTransition({ delayIn: 0.2 })}
        >
          {/* &apos; */}
          YeahsTech is your one-stop destination for all your tech needs.
          <br></br>
          
          <br>
          </br> From website and app development to digital marketing, our team of experts is here to provide you with cutting-edge solutions that will take your business to new heights. 
          <br></br>
          <br></br>
          Say goodbye to tech headaches and hello to innovation with YeahsTech by your side.
        </motion.p>
        <motion.section
          className='mt-8 flex gap-4 text-sm md:text-base'
          {...setTransition({ delayIn: 0.3 })}
        >
          <UnstyledLink className='custom-button clickable' href='/contact'>
           Click here to get started 
          </UnstyledLink>
          {/* <UnstyledLink className='custom-button clickable' href='/about'>
            Learn more about me
          </UnstyledLink> */}
        </motion.section>
        <motion.section
          className='mt-8 flex gap-4'
          {...setTransition({ delayIn: 0.4 })}
        >
          {socialLink.map(({ name, href, iconHoverColor, Icon }) => (
            <UnstyledLink
              className='smooth-tab group flex items-center gap-2 text-sm text-gray-600 transition
                         hover:text-black dark:text-gray-400 dark:hover:text-white md:text-base'
              href={href}
              key={name}
            >
              <Icon className={clsx('transition-colors', iconHoverColor)} />{' '}
              {name}
            </UnstyledLink>
          ))}
        </motion.section>
      </section>
      <motion.section className='grid gap-4' {...fadeInWhenVisible()}>
        <h2 className='text-2xl font-bold md:text-4xl'>
          <Accent>Featured Posts</Accent>
        </h2>
        <p className='-mt-2 text-gray-600 dark:text-gray-300'>
          Check out my featured blog posts.
        </p>
        <section className='card-layout'>
          {featuredBlog.map((blog, index) => (
            <BlogCard {...blog} key={index} />
          ))}
        </section>
        <UnstyledLink
          className='custom-button clickable justify-self-center font-bold text-gray-600 dark:text-gray-300'
          href='/blog'
        >
          See more posts
        </UnstyledLink>
      </motion.section>
      {/* <motion.section className='grid gap-4' {...fadeInWhenVisible()}>
        <h2 className='text-2xl font-bold md:text-4xl'>
          <Accent>Featured Project</Accent>
        </h2>
        <p className='-mt-2 text-gray-600 dark:text-gray-300'>
          Check out my featured blog posts.
        </p>
        <section className='card-layout'>
          {featuredProjects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </section>
        <UnstyledLink
          className='custom-button clickable justify-self-center font-bold text-gray-600 dark:text-gray-300'
          href='/projects'
        >
          See more projects
        </UnstyledLink>
      </motion.section> */}
    </main>
  );
}

type HomeProps = {
  featuredBlog: Blog[];
  featuredProjects: Project[];
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomeProps>
> {
  await initializeAllContents();

  const featuredBlog = await getAllContents('blog');
  const featuredProjects = await getAllContents('projects');

  return {
    props: {
      featuredBlog,
      featuredProjects
    }
  };
}

type SocialLink = {
  name: string;
  href: string;
  iconHoverColor?: string;
  Icon: IconType;
};

const socialLink: SocialLink[] = [
  {
    name: 'Email',
    href: 'mailto:yeahstechinnovations@gmail.com',
    iconHoverColor: 'group-hover:text-accent-main',
    Icon: HiDocumentText
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yeahstech',
    iconHoverColor: 'group-hover:text-[#1d9bf0]',
    Icon: SiTwitter
  }
];

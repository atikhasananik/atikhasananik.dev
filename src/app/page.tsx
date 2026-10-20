import ContactPage from '@/components/contact/ContactPage';
import EducationPage from '@/components/education/EducationPage';
import HomePage from '@/components/home/HomePage';
import ProjectPage from '@/components/projects/ProjectPage';
import TechnologyPage from '@/components/technology/TechnologyPage';
import { pageMetadata } from '@/lib/seo';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...pageMetadata('Full-Stack Web Developer', SITE_DESCRIPTION, '/'),
  title: { absolute: SITE_TITLE },
};

const page = () => {
  return (
    <div className='bg-primary'>
      <HomePage></HomePage>
      <ProjectPage></ProjectPage>
      <EducationPage></EducationPage>
      <TechnologyPage></TechnologyPage>
      <ContactPage></ContactPage>
    </div>
  );
};

export default page;
import ContactPage from '@/components/contact/ContactPage';
import EducationPage from '@/components/education/EducationPage';
import HomePage from '@/components/home/HomePage';
import ProjectPage from '@/components/projects/ProjectPage';
import TechnologyPage from '@/components/technology/TechnologyPage';
import React from 'react';

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
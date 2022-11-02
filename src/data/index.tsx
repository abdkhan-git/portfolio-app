import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import csData from './json/cs.json';
// import baData from './json/ba.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: 'Computer Science',
    url: '/cs',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(csData, 0)}%`,
    comp: () => <Diploma diplomaData={csData} />,
  },
  // {
  //   name: 'Business Administration',
  //   url: '/ba',
  //   icon: 'graduation-cap',
  //   isInternal: true,
  //   badge: `${calculateDiplomaProgress(baData, 0)}%`,
  //   comp: () => <Diploma diplomaData={baData} />,
  // },
];

export const tabs: TabLink[] = [
  {
    name: 'experience.js',
    url: '/experience',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'experience',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'skills.sass',
    url: '/skills',
    icon: ['fab', 'sass'],
    color: pink,
    mdFileName: 'skills',
  },
];

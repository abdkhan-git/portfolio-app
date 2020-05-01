import { NavLink } from '../models';
import Greeter from '../components/Greeter';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import {
  certificates,
  contact,
  education,
  greeter,
  projects,
  skills,
} from './';

export const navLinks: NavLink[] = [
  {
    icon: ['fab', 'html5'],
    color: '#e44d26',
    url: '/',
    name: 'home.html',
    component: Greeter,
    data: { greeter, contact },
  },
  {
    icon: ['fab', 'js'],
    color: '#ffca28',
    url: '/skills',
    name: 'skills.js',
    component: Skills,
    data: skills,
  },
  {
    icon: 'university',
    color: '#42a5f5',
    url: '/education',
    name: '.educationrc',
    component: Education,
    data: education,
  },
  {
    icon: 'sliders-h',
    color: '#98c379',
    url: '/projects',
    name: 'projects.config',
    component: Projects,
    data: projects,
  },
  {
    icon: ['fab', 'sass'],
    color: '#e13e76',
    url: '/certifications',
    name: 'certifications.sass',
    component: Certificates,
    data: certificates,
  },
  {
    icon: ['fab', 'markdown'],
    color: '#abb2bf',
    url: '/contact',
    name: 'contact.md',
    component: Contact,
    data: contact,
  },
];

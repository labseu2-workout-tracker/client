import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { id: 'workouts', text: 'Workouts', link: '/', auth: true },
  { id: 'exercise', text: 'Exercises', link: '/exercises', auth: true },
  { id: 'contact', text: 'Contact', link: '/contact', auth: false },
  { id: 'login', text: 'Login', link: '/login', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false }
];

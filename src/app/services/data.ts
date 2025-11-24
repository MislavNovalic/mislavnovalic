import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  
  personalInfo = {
    firstName: 'Mislav',
    lastName: 'Novalić',
    tagline: 'Computing engineer with a passion for coffee and web development.',
    profileImage: 'assets/img/profile.jpg'
  };

  socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/MislavNovali?lang=en',
      icon: 'fa-twitter'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mislav-novalić-650a8910/',
      icon: 'fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MislavNovalic',
      icon: 'fa-github'
    }
  ];

  education = [
    {
      school: 'University of Split, Croatia',
      degree: 'Undergraduate degree',
      field: 'Computer Science - Computer Engineering',
      dates: 'October 2002. - July 2007.'
    },
    {
      school: 'High School - "Ruđer Bošković", Croatia',
      degree: 'Electrical Technician',
      field: 'Electrical Engineering - Electrical Technician',
      dates: 'November 1996. - May 2000.'
    }
  ];

  work = {
    title: 'Some of my work exibited here',
    projects: [
      {
        name: 'Javascript Calculator',
        url: 'https://mislavnovalic.github.io/mislavnovalic/calculator.html'
      }
    ]
  };

  skills = {
    programmingLanguages: [
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'jQuery', icon: 'devicon-jquery-plain' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
      { name: 'WordPress', icon: 'devicon-wordpress-plain' }
    ],
    workflow: [
      'Mobile-First, Responsive Design',
      'Cross Browser Testing & Debugging'
    ]
  };

  interests = [
    'Apart from being a computing engineer and , I enjoy most of my time listening to a music and researching. I enjoy long walks.',
    'I spend a large amount of my free time exploring the latest technolgy advancements in the web development world.'
  ];

  fiverrWidgetScript = "https://widgets.fiverr.com/api/v1/seller/mislavnovalic?widget_id=0f7deb1a-d933-4c84-9fab-e0a53c794231";
  
}

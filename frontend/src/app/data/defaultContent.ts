import { siteImages } from './siteImages';
import type { SiteContent } from '../types/content';

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const defaultSiteContent: SiteContent = {
  announcements: [
    {
      id: 'announcement-1',
      title: 'Admissions Open for the New Academic Year',
      date: '2026-04-01',
      tag: 'Admissions',
      message:
        'Admissions are open for Pre-Primary to Grade 7. Parents can visit the school office for guidance on enrollment, documents, and fee support.',
    },
    {
      id: 'announcement-2',
      title: 'Monthly Parent-Teacher Meeting',
      date: '2026-03-20',
      tag: 'Community',
      message:
        'Parents are invited to join the monthly review meeting to discuss student progress, attendance, classroom activities, and upcoming school events.',
    },
    {
      id: 'announcement-3',
      title: 'Annual Day Practice Schedule',
      date: '2026-03-25',
      tag: 'Events',
      message:
        'Students selected for cultural activities should report for practice after regular class hours. Teachers will share group timings with parents.',
    },
  ],
  community: {
    groups: [
      {
        slug: 'parents',
        title: 'Parents',
        subtitle: 'Our First Learning Partners',
        description:
          "Monthly circle meets, class mentorship, and school-volunteer days keep parents actively involved in every child's growth.",
        image: siteImages.community.parents,
        badge: 'Home-School Alliance',
      },
      {
        slug: 'alumni',
        title: 'Alumni',
        subtitle: 'Roots That Keep Giving Back',
        description:
          'Former students return as mentors, speakers, and role models to guide current learners with real-life inspiration.',
        image: siteImages.community.alumni,
        badge: 'Legacy Network',
      },
      {
        slug: 'faculty',
        title: 'Faculty',
        subtitle: 'The Driving Force',
        description:
          'Dedicated teachers combine values-based learning, innovation, and personal guidance to shape confident young minds.',
        image: siteImages.community.faculty,
        badge: 'Teaching Excellence',
      },
    ],
    parents: [
      {
        id: 'parent-1',
        name: 'Parents Feedback',
        relation: 'ಶಾಲೆಯ ಬಗ್ಗೆ ಅಭಿಪ್ರಾಯ',
        image: imagePath('parent-lokeshmurty.png'),
        quote:
          'ಶಿವಲಿಂಗಸ್ವಾಮೀಜಿ ಅವರು ಗ್ರಾಮೀಣ ಭಾಗದ ಮಕ್ಕಳಿಗೆ ಜ್ಞಾನದ ಬೆಳಕನ್ನು ನೀಡಬೇಕು ಎಂಬ ಉದ್ದೇಶದಿಂದ ಆದರ್ಶ ಶಾಲೆ ತೆರೆದು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ನುರಿತ ಶಿಕ್ಷಕರಿಂದ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ನೀಡುತ್ತಿರುವುದರ ಜತೆಗೆ ಶಾಲೆಯಲ್ಲಿ ಕುಡಿಯುವ ನೀರು, ಶೌಚಾಲಯದ ವ್ಯವಸ್ಥೆ, ವಿಶಾಲವಾದ ಆಟದ ಮೈದಾನ, ಆವರಣದ ಸುತ್ತ ಕಾಂಪೌಂಡ್ ನಿರ್ಮಿಸಿ, ಸಸಿಗಳನ್ನು ನೆಟ್ಟು ಒಳ್ಳೆಯ ಪರಿಸರದಲ್ಲಿ ಶಿಕ್ಷಣ ನೀಡುತ್ತಾ ಮಕ್ಕಳ ಸರ್ವಾಂಗೀಣ ಪ್ರಗತಿಗೆ ದಾರಿ ದೀಪವಾಗಿದ್ದಾರೆ.',
      },
      {
        id: 'parent-2',
        name: 'ನಾಗರಾಜು',
        relation: 'ಬೆಳವಾಡಿ',
        image: imagePath('community_parent_nagaraj.png'),
        quote:
          '"ಆದರ್ಶ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ ಬೆಳವಾಡಿ ಗ್ರಾಮದಲ್ಲಿದೆ." ವ್ಯಾಸಂಗ ಮಾಡುತ್ತಿರುವ ಮಕ್ಕಳ ಮುಂದಿನ ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಕಾಳಜಿ ವಹಿಸಿ ತುಂಬಾ ಶ್ರದ್ಧೆ, ಭಕ್ತಿಯಿಂದ ಪಾಠ ಪ್ರವಚನವನ್ನು ಮಾಡುತ್ತಿದ್ದೀರಿ. ಹೀಗೆ, ಮಕ್ಕಳಿಗೆ ಶಿಸ್ತು, ಕ್ರೀಡೆ, ಮನರಂಜನೆ, ಕಾಯಕಗಳನ್ನು ಕೂಡ ಮಾಡಿಸುತ್ತಿದ್ದೀರಿ. ಇದು ಹೆಮ್ಮೆಪಡುವಂತಹ ವಿಚಾರ. ಇದರಿಂದ ಮಕ್ಕಳ ತಂದೆ-ತಾಯಂದಿರಿಗೆ ಮತ್ತು ಗ್ರಾಮಸ್ಥರಿಗೆ ಸಂತೋಷವನ್ನು ತರುತ್ತಿದೆ. ಇದೇ ರೀತಿ ಶಾಲೆಯ ವ್ಯವಸ್ಥಾಪಕರು, ಉಪಾಧ್ಯಾಯರು ಮತ್ತು ಉಪಾಧ್ಯಾಯನಿಯರು ಮಕ್ಕಳಿಗೆ ಇನ್ನೂ ಹೆಚ್ಚಿನ ಬೋಧನೆಯನ್ನು ನೀಡಿ ಶಾಲೆಗೆ ಕೀರ್ತಿ ಮತ್ತು ಗೌರವವನ್ನು ತರಬೇಕೆಂದು ನಿಮ್ಮಲ್ಲಿ ವಿನಂತಿಸಿ ಕೇಳುತ್ತೇನೆ.',
      },
    ],
    alumni: [
      {
        id: 'alumni-1',
        name: 'Anil P.',
        detail: 'Batch 2016 • Software Engineer',
        image: siteImages.community.alumni,
        quote:
          'This school gave me discipline and confidence. The foundation I received here still helps me in my career.',
      },
      {
        id: 'alumni-2',
        name: 'Nandini S.',
        detail: 'Batch 2018 • Nursing Professional',
        image: siteImages.community.alumni,
        quote:
          'My teachers encouraged me to dream big. I am proud to return and guide students who are now on the same path.',
      },
      {
        id: 'alumni-3',
        name: 'Karthik V.',
        detail: 'Batch 2014 • Entrepreneur',
        image: siteImages.community.alumni,
        quote:
          'The values and communication skills I learned here shaped my leadership journey and my approach to life.',
      },
    ],
    faculty: [
      {
        id: 'faculty-1',
        name: 'Nandini S Chandra',
        phone: '9632795749',
        qualification: 'PUC, B.Ed, NST Computer',
        photo: imagePath('Nandini S Chandra.jpg'),
      },
      {
        id: 'faculty-2',
        name: 'Harshitha Siddaraju',
        phone: '8123823570',
        qualification: 'B.A',
        photo: imagePath('FacultyHarshitha.jpg'),
      },
      {
        id: 'faculty-3',
        name: 'Shivakumar M Lingayya',
        phone: 'Not provided',
        qualification: 'PUC, TCH, B.Com',
        photo: imagePath('FacultyShivakumar sir.jpg'),
      },
      {
        id: 'faculty-4',
        name: 'Naveeda Parveen',
        phone: '7483511040',
        qualification: 'PUC, JOC, Hindi B.Ed',
        photo: imagePath('Naveeda Parveen.jpg'),
      },
      {
        id: 'faculty-5',
        name: 'Lokeshmurthy S/O M. Mallappa',
        phone: 'Not provided',
        qualification: 'PUC, TCH',
        photo: imagePath('Lokeshmurthy_faculty.jpg'),
      },
      {
        id: 'faculty-6',
        name: 'Jagadisha M',
        phone: '9880458967',
        qualification: 'BA, B.Ed',
        photo: imagePath('Jagadisha M.jpeg'),
      },
    ],
  },
};

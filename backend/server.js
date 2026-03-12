import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envFile = join(__dirname, '..', '.env');

dotenv.config({ path: envFile });

const app = express();
const dataDir = join(__dirname, 'data');
const contentFile = join(dataDir, 'content.json');
const adminFile = join(dataDir, 'admin.json');
const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

const defaultContent = {
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
        image: 'images/parent-lokeshmurty.png',
        badge: 'Home-School Alliance',
      },
      {
        slug: 'alumni',
        title: 'Alumni',
        subtitle: 'Roots That Keep Giving Back',
        description:
          'Former students return as mentors, speakers, and role models to guide current learners with real-life inspiration.',
        image: 'images/gallery-09-annual-function.jpg',
        badge: 'Legacy Network',
      },
      {
        slug: 'faculty',
        title: 'Faculty',
        subtitle: 'The Driving Force',
        description:
          'Dedicated teachers combine values-based learning, innovation, and personal guidance to shape confident young minds.',
        image: 'images/FacultyHarshitha.jpg',
        badge: 'Teaching Excellence',
      },
    ],
    parents: [
      {
        id: 'parent-1',
        name: 'Parents Feedback',
        relation: 'à²¶à²¾à²²à³†à²¯ à²¬à²—à³à²—à³† à²…à²­à²¿à²ªà³à²°à²¾à²¯',
        image: 'images/parent-lokeshmurty.png',
        quote:
          'à²¶à²¿à²µà²²à²¿à²‚à²—à²¸à³à²µà²¾à²®à³€à²œà²¿ à²…à²µà²°à³ à²—à³à²°à²¾à²®à³€à²£ à²­à²¾à²—à²¦ à²®à²•à³à²•à²³à²¿à²—à³† à²œà³à²žà²¾à²¨à²¦ à²¬à³†à²³à²•à²¨à³à²¨à³ à²¨à³€à²¡à²¬à³‡à²•à³ à²Žà²‚à²¬ à²‰à²¦à³à²¦à³‡à²¶à²¦à²¿à²‚à²¦ à²†à²¦à²°à³à²¶ à²¶à²¾à²²à³† à²¤à³†à²°à³†à²¦à³ à²•à²¡à²¿à²®à³† à²µà³†à²šà³à²šà²¦à²²à³à²²à²¿ à²¨à³à²°à²¿à²¤ à²¶à²¿à²•à³à²·à²•à²°à²¿à²‚à²¦ à²‰à²¤à³à²¤à²® à²—à³à²£à²®à²Ÿà³à²Ÿà²¦ à²¶à²¿à²•à³à²·à²£ à²¨à³€à²¡à³à²¤à³à²¤à²¿à²°à³à²µà³à²¦à²° à²œà²¤à³†à²—à³† à²¶à²¾à²²à³†à²¯à²²à³à²²à²¿ à²•à³à²¡à²¿à²¯à³à²µ à²¨à³€à²°à³, à²¶à³Œà²šà²¾à²²à²¯à²¦ à²µà³à²¯à²µà²¸à³à²¥à³†, à²µà²¿à²¶à²¾à²²à²µà²¾à²¦ à²†à²Ÿà²¦ à²®à³ˆà²¦à²¾à²¨, à²†à²µà²°à²£à²¦ à²¸à³à²¤à³à²¤ à²•à²¾à²‚à²ªà³Œà²‚à²¡à³ à²¨à²¿à²°à³à²®à²¿à²¸à²¿, à²¸à²¸à²¿à²—à²³à²¨à³à²¨à³ à²¨à³†à²Ÿà³à²Ÿà³ à²’à²³à³à²³à³†à²¯ à²ªà²°à²¿à²¸à²°à²¦à²²à³à²²à²¿ à²¶à²¿à²•à³à²·à²£ à²¨à³€à²¡à³à²¤à³à²¤à²¾ à²®à²•à³à²•à²³ à²¸à²°à³à²µà²¾à²‚à²—à³€à²£ à²ªà³à²°à²—à²¤à²¿à²—à³† à²¦à²¾à²°à²¿ à²¦à³€à²ªà²µà²¾à²—à²¿à²¦à³à²¦à²¾à²°à³†.',
      },
      {
        id: 'parent-2',
        name: 'à²¨à²¾à²—à²°à²¾à²œà³',
        relation: 'à²¬à³†à²³à²µà²¾à²¡à²¿',
        image: 'images/community_parent_nagaraj.png',
        quote:
          '"à²†à²¦à²°à³à²¶ à²¹à²¿à²°à²¿à²¯ à²ªà³à²°à²¾à²¥à²®à²¿à²• à²¶à²¾à²²à³† à²¬à³†à²³à²µà²¾à²¡à²¿ à²—à³à²°à²¾à²®à²¦à²²à³à²²à²¿à²¦à³†." à²µà³à²¯à²¾à²¸à²‚à²— à²®à²¾à²¡à³à²¤à³à²¤à²¿à²°à³à²µ à²®à²•à³à²•à²³ à²®à³à²‚à²¦à²¿à²¨ à²­à²µà²¿à²·à³à²¯à²¦ à²¬à²—à³à²—à³† à²•à²¾à²³à²œà²¿ à²µà²¹à²¿à²¸à²¿ à²¤à³à²‚à²¬à²¾ à²¶à³à²°à²¦à³à²§à³†, à²­à²•à³à²¤à²¿à²¯à²¿à²‚à²¦ à²ªà²¾à²  à²ªà³à²°à²µà²šà²¨à²µà²¨à³à²¨à³ à²®à²¾à²¡à³à²¤à³à²¤à²¿à²¦à³à²¦à³€à²°à²¿. à²¹à³€à²—à³†, à²®à²•à³à²•à²³à²¿à²—à³† à²¶à²¿à²¸à³à²¤à³, à²•à³à²°à³€à²¡à³†, à²®à²¨à²°à²‚à²œà²¨à³†, à²•à²¾à²¯à²•à²—à²³à²¨à³à²¨à³ à²•à³‚à²¡ à²®à²¾à²¡à²¿à²¸à³à²¤à³à²¤à²¿à²¦à³à²¦à³€à²°à²¿. à²‡à²¦à³ à²¹à³†à²®à³à²®à³†à²ªà²¡à³à²µà²‚à²¤à²¹ à²µà²¿à²šà²¾à²°. à²‡à²¦à²°à²¿à²‚à²¦ à²®à²•à³à²•à²³ à²¤à²‚à²¦à³†-à²¤à²¾à²¯à²‚à²¦à²¿à²°à²¿à²—à³† à²®à²¤à³à²¤à³ à²—à³à²°à²¾à²®à²¸à³à²¥à²°à²¿à²—à³† à²¸à²‚à²¤à³‹à²·à²µà²¨à³à²¨à³ à²¤à²°à³à²¤à³à²¤à²¿à²¦à³†. à²‡à²¦à³‡ à²°à³€à²¤à²¿ à²¶à²¾à²²à³†à²¯ à²µà³à²¯à²µà²¸à³à²¥à²¾à²ªà²•à²°à³, à²‰à²ªà²¾à²§à³à²¯à²¾à²¯à²°à³ à²®à²¤à³à²¤à³ à²‰à²ªà²¾à²§à³à²¯à²¾à²¯à²¨à²¿à²¯à²°à³ à²®à²•à³à²•à²³à²¿à²—à³† à²‡à²¨à³à²¨à³‚ à²¹à³†à²šà³à²šà²¿à²¨ à²¬à³‹à²§à²¨à³†à²¯à²¨à³à²¨à³ à²¨à³€à²¡à²¿ à²¶à²¾à²²à³†à²—à³† à²•à³€à²°à³à²¤à²¿ à²®à²¤à³à²¤à³ à²—à³Œà²°à²µà²µà²¨à³à²¨à³ à²¤à²°à²¬à³‡à²•à³†à²‚à²¦à³ à²¨à²¿à²®à³à²®à²²à³à²²à²¿ à²µà²¿à²¨à²‚à²¤à²¿à²¸à²¿ à²•à³‡à²³à³à²¤à³à²¤à³‡à²¨à³†.',
      },
    ],
    alumni: [
      {
        id: 'alumni-1',
        name: 'Anil P.',
        detail: 'Batch 2016 â€¢ Software Engineer',
        image: 'images/gallery-09-annual-function.jpg',
        quote:
          'This school gave me discipline and confidence. The foundation I received here still helps me in my career.',
      },
      {
        id: 'alumni-2',
        name: 'Nandini S.',
        detail: 'Batch 2018 â€¢ Nursing Professional',
        image: 'images/gallery-09-annual-function.jpg',
        quote:
          'My teachers encouraged me to dream big. I am proud to return and guide students who are now on the same path.',
      },
      {
        id: 'alumni-3',
        name: 'Karthik V.',
        detail: 'Batch 2014 â€¢ Entrepreneur',
        image: 'images/gallery-09-annual-function.jpg',
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
        photo: 'images/Nandini S Chandra.jpg',
      },
      {
        id: 'faculty-2',
        name: 'Harshitha Siddaraju',
        phone: '8123823570',
        qualification: 'B.A',
        photo: 'images/FacultyHarshitha.jpg',
      },
      {
        id: 'faculty-3',
        name: 'Shivakumar M Lingayya',
        phone: 'Not provided',
        qualification: 'PUC, TCH, B.Com',
        photo: 'images/FacultyShivakumar sir.jpg',
      },
      {
        id: 'faculty-4',
        name: 'Naveeda Parveen',
        phone: '7483511040',
        qualification: 'PUC, JOC, Hindi B.Ed',
        photo: 'images/Naveeda Parveen.jpg',
      },
      {
        id: 'faculty-5',
        name: 'Lokeshmurthy S/O M. Mallappa',
        phone: 'Not provided',
        qualification: 'PUC, TCH',
        photo: 'images/Lokeshmurthy_faculty.jpg',
      },
      {
        id: 'faculty-6',
        name: 'Jagadisha M',
        phone: '9880458967',
        qualification: 'BA, B.Ed',
        photo: 'images/Jagadisha M.jpeg',
      },
    ],
  },
};

function ensureDataFiles() {
  mkdirSync(dataDir, { recursive: true });

  if (!existsSync(contentFile)) {
    writeFileSync(contentFile, JSON.stringify(defaultContent, null, 2));
  }

  if (!existsSync(adminFile)) {
    writeFileSync(
      adminFile,
      JSON.stringify(
        {
          username: 'admin',
          password: '1234',
        },
        null,
        2
      )
    );
  }
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  writeFileSync(filePath, JSON.stringify(value, null, 2));
}

function getStoredAdmin() {
  return readJson(adminFile);
}

ensureDataFiles();

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);
    });
} else {
  console.warn('MONGODB_URI or MONGO_URI is not set. Starting without MongoDB connection.');
}

app.get('/', (_request, response) => {
  response.send('Adarsha Backend API Running 🚀');
});

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok', service: 'adarsha-backend' });
});

app.get('/api/content', (_request, response) => {
  response.status(200).json(readJson(contentFile));
});

app.put('/api/content', (request, response) => {
  try {
    writeJson(contentFile, request.body);
    response.status(200).json({ message: 'Content updated.' });
  } catch {
    response.status(400).json({ error: 'Invalid JSON body.' });
  }
});

app.get('/api/admin', (_request, response) => {
  const admin = getStoredAdmin();
  response.status(200).json({ username: admin.username });
});

app.post('/api/admin/login', (request, response) => {
  try {
    const admin = getStoredAdmin();
    const authenticated =
      request.body.username === admin.username && request.body.password === admin.password;

    response.status(authenticated ? 200 : 401).json({
      authenticated,
      username: authenticated ? admin.username : undefined,
    });
  } catch {
    response.status(400).json({ error: 'Invalid JSON body.' });
  }
});

app.put('/api/admin', (request, response) => {
  try {
    const body = request.body;
    const admin = getStoredAdmin();

    if (!body.oldPassword || !body.newPassword || !body.confirmPassword) {
      response
        .status(400)
        .json({ error: 'Old password, new password, and confirm password are required.' });
      return;
    }

    if (body.oldPassword !== admin.password) {
      response.status(401).json({ error: 'Old password is incorrect.' });
      return;
    }

    if (body.newPassword !== body.confirmPassword) {
      response.status(400).json({ error: 'New password and confirm password do not match.' });
      return;
    }

    writeJson(adminFile, {
      ...admin,
      password: body.newPassword,
    });

    response.status(200).json({ message: 'Admin credentials updated.' });
  } catch {
    response.status(400).json({ error: 'Invalid JSON body.' });
  }
});

app.use((_request, response) => {
  response.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

import { createServer } from 'node:http';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, 'data');
const contentFile = join(dataDir, 'content.json');
const adminFile = join(dataDir, 'admin.json');
const port = Number(process.env.PORT || 4000);
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
        relation: 'ಶಾಲೆಯ ಬಗ್ಗೆ ಅಭಿಪ್ರಾಯ',
        image: 'images/parent-lokeshmurty.png',
        quote:
          'ಶಿವಲಿಂಗಸ್ವಾಮೀಜಿ ಅವರು ಗ್ರಾಮೀಣ ಭಾಗದ ಮಕ್ಕಳಿಗೆ ಜ್ಞಾನದ ಬೆಳಕನ್ನು ನೀಡಬೇಕು ಎಂಬ ಉದ್ದೇಶದಿಂದ ಆದರ್ಶ ಶಾಲೆ ತೆರೆದು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ನುರಿತ ಶಿಕ್ಷಕರಿಂದ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ನೀಡುತ್ತಿರುವುದರ ಜತೆಗೆ ಶಾಲೆಯಲ್ಲಿ ಕುಡಿಯುವ ನೀರು, ಶೌಚಾಲಯದ ವ್ಯವಸ್ಥೆ, ವಿಶಾಲವಾದ ಆಟದ ಮೈದಾನ, ಆವರಣದ ಸುತ್ತ ಕಾಂಪೌಂಡ್ ನಿರ್ಮಿಸಿ, ಸಸಿಗಳನ್ನು ನೆಟ್ಟು ಒಳ್ಳೆಯ ಪರಿಸರದಲ್ಲಿ ಶಿಕ್ಷಣ ನೀಡುತ್ತಾ ಮಕ್ಕಳ ಸರ್ವಾಂಗೀಣ ಪ್ರಗತಿಗೆ ದಾರಿ ದೀಪವಾಗಿದ್ದಾರೆ.',
      },
      {
        id: 'parent-2',
        name: 'ನಾಗರಾಜು',
        relation: 'ಬೆಳವಾಡಿ',
        image: 'images/community_parent_nagaraj.png',
        quote:
          '"ಆದರ್ಶ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ ಬೆಳವಾಡಿ ಗ್ರಾಮದಲ್ಲಿದೆ." ವ್ಯಾಸಂಗ ಮಾಡುತ್ತಿರುವ ಮಕ್ಕಳ ಮುಂದಿನ ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಕಾಳಜಿ ವಹಿಸಿ ತುಂಬಾ ಶ್ರದ್ಧೆ, ಭಕ್ತಿಯಿಂದ ಪಾಠ ಪ್ರವಚನವನ್ನು ಮಾಡುತ್ತಿದ್ದೀರಿ. ಹೀಗೆ, ಮಕ್ಕಳಿಗೆ ಶಿಸ್ತು, ಕ್ರೀಡೆ, ಮನರಂಜನೆ, ಕಾಯಕಗಳನ್ನು ಕೂಡ ಮಾಡಿಸುತ್ತಿದ್ದೀರಿ. ಇದು ಹೆಮ್ಮೆಪಡುವಂತಹ ವಿಚಾರ. ಇದರಿಂದ ಮಕ್ಕಳ ತಂದೆ-ತಾಯಂದಿರಿಗೆ ಮತ್ತು ಗ್ರಾಮಸ್ಥರಿಗೆ ಸಂತೋಷವನ್ನು ತರುತ್ತಿದೆ. ಇದೇ ರೀತಿ ಶಾಲೆಯ ವ್ಯವಸ್ಥಾಪಕರು, ಉಪಾಧ್ಯಾಯರು ಮತ್ತು ಉಪಾಧ್ಯಾಯನಿಯರು ಮಕ್ಕಳಿಗೆ ಇನ್ನೂ ಹೆಚ್ಚಿನ ಬೋಧನೆಯನ್ನು ನೀಡಿ ಶಾಲೆಗೆ ಕೀರ್ತಿ ಮತ್ತು ಗೌರವವನ್ನು ತರಬೇಕೆಂದು ನಿಮ್ಮಲ್ಲಿ ವಿನಂತಿಸಿ ಕೇಳುತ್ತೇನೆ.',
      },
    ],
    alumni: [
      {
        id: 'alumni-1',
        name: 'Anil P.',
        detail: 'Batch 2016 • Software Engineer',
        image: 'images/gallery-09-annual-function.jpg',
        quote:
          'This school gave me discipline and confidence. The foundation I received here still helps me in my career.',
      },
      {
        id: 'alumni-2',
        name: 'Nandini S.',
        detail: 'Batch 2018 • Nursing Professional',
        image: 'images/gallery-09-annual-function.jpg',
        quote:
          'My teachers encouraged me to dream big. I am proud to return and guide students who are now on the same path.',
      },
      {
        id: 'alumni-3',
        name: 'Karthik V.',
        detail: 'Batch 2014 • Entrepreneur',
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
    writeFileSync(
      contentFile,
      JSON.stringify(defaultContent, null, 2)
    );
  }

  if (!existsSync(adminFile)) {
    writeFileSync(
      adminFile,
      JSON.stringify(
        {
          username: 'shivalingaswamigalu@2001',
          password: 'shivalingaswamigalu@2001',
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

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    request.on('error', reject);
  });
}

ensureDataFiles();

const server = createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 400, { error: 'Invalid request.' });
    return;
  }

  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {});
    return;
  }

  if (request.url === '/api/health' && request.method === 'GET') {
    sendJson(response, 200, { status: 'ok', service: 'adarsha-backend' });
    return;
  }

  if (request.url === '/api/content' && request.method === 'GET') {
    sendJson(response, 200, readJson(contentFile));
    return;
  }

  if (request.url === '/api/content' && request.method === 'PUT') {
    try {
      const body = await readBody(request);
      writeJson(contentFile, body);
      sendJson(response, 200, { message: 'Content updated.' });
    } catch {
      sendJson(response, 400, { error: 'Invalid JSON body.' });
    }
    return;
  }

  if (request.url === '/api/admin' && request.method === 'GET') {
    const admin = getStoredAdmin();
    sendJson(response, 200, { username: admin.username });
    return;
  }

  if (request.url === '/api/admin/login' && request.method === 'POST') {
    try {
      const body = await readBody(request);
      const admin = getStoredAdmin();
      const authenticated = body.username === admin.username && body.password === admin.password;
      sendJson(response, authenticated ? 200 : 401, {
        authenticated,
        username: authenticated ? admin.username : undefined,
      });
    } catch {
      sendJson(response, 400, { error: 'Invalid JSON body.' });
    }
    return;
  }

  if (request.url === '/api/admin' && request.method === 'PUT') {
    try {
      const body = await readBody(request);
      writeJson(adminFile, body);
      sendJson(response, 200, { message: 'Admin credentials updated.' });
    } catch {
      sendJson(response, 400, { error: 'Invalid JSON body.' });
    }
    return;
  }

  sendJson(response, 404, { error: 'Route not found.' });
});

server.listen(port, () => {
  console.log(`Adarsha backend running on http://localhost:${port}`);
});

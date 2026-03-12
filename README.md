
# Premium School Website Design

This project is separated into explicit frontend and backend areas:

- `frontend/` contains the Vite + React application.
- `backend/` contains a small Node server scaffold with JSON-based API storage.

The original design source is available at https://www.figma.com/design/DiW1J3qCVvdnXw2yTHxkRA/Premium-School-Website-Design.

## Project Structure

- `frontend/src` for app code
- `frontend/public` for static assets
- `backend/server.js` for the backend entry point
- `backend/data` for backend JSON data

## Running the Frontend

Run `npm install` inside `frontend/`.

Run `npm run dev` inside `frontend/` to start the frontend.

Run `npm run build` inside `frontend/` to build the frontend.

## Running the Backend

Run `npm run dev` inside `backend/` to start the backend on `http://localhost:4000`.

Available backend routes:

- `GET /api/health`
- `GET /api/content`
- `PUT /api/content`
- `GET /api/admin`
- `PUT /api/admin`
  

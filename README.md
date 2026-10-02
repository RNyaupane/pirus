# PIRUS DASH

An all-in-one ERP system for IT companies, bringing employee management, project tracking, sales, communication, and billing into a single dashboard.

## Features

- **Employee Management:** Maintain employee records and roles.
- **Project Kanban:** Track project tasks through a drag-and-drop board.
- **Sales Leads:** Manage and follow up on leads.
- **Real-Time Chat:** Instant messaging powered by WebSocket.
- **Attendance:** Track employee check-ins and attendance records.
- **Support Tickets:** Create, assign, and resolve customer or internal tickets.
- **AI-Powered Billing:** Automated invoice generation through a Python microservice.

## Tech Stack

- **Frontend:** React.js
- **Backend/CMS:** Strapi
- **Microservice:** Python (AI billing, WebSocket chat)

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd pirus-dash

# Frontend
cd frontend
npm install
npm run dev

# Backend (Strapi)
cd ../backend
npm install
npm run develop

# Python microservice
cd ../microservice
pip install -r requirements.txt
python main.py
```

## Environment Variables

Create a `.env` file in each service folder and add the required keys (database, API URLs, AI service key).

## License

MIT

# My Nuxt.js 3 Project

This is a sample README file for a Nuxt.js 3 project using Prisma and PostgreSQL as the database.

## Prerequisites

Before running the project, ensure that you have the following installed on your system:

- Node.js (v14 or later)
- Docker
- Docker Compose

## Getting Started

To set up and run the project, follow these steps:

1. Clone the repository:

```bash
git clone git@github.com:sandeshsapkota/nuxt-app.git
```

2. Navigate to the project directory:
```
cd nuxt-app
```

3. Install dependencies:
```
npm install
```
3.Start the PostgreSQL database:
```
docker-compose up -d
```
4. Run Prisma migrations:
````
npx prisma migrate dev --name init --preview-feature
````
5.Start the Nuxt.js 3 development server:
```
npm run dev
```

6.Open your browser and visit http://localhost:3000 to see your Nuxt.js application running.

### Database Credentials
The PostgreSQL database is configured with the following credentials:
```Username: postgres
Password: postgres
Host: localhost
Port: 5433
```

### Accessing the Application
#### Admin User:
```
Username: admin
Password: admin
```
#### Regular User:
```
Username: user
Password: user
```
#### Additional Notes
The PostgreSQL database runs on port 5433 instead of the default port 5432 to avoid conflicts with any existing PostgreSQL installations on your system. If port 5433 is already in use, you can modify the docker-compose.yml file to change the exposed port.
Make sure to handle sensitive information such as database credentials securely. This sample README file is for demonstration purposes only and should be updated with appropriate security practices for production usage.

You can use these credentials to log in to the application and access the respective features.


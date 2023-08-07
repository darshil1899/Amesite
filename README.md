
# eLearning Application

The eLearning application is a platform that allows learners to take assessments and pushes their grade data to Moodle. This README provides detailed instructions on how to set up and run the application.

## Prerequisites

Before running the application, make sure you have the following installed:

1. Node.js (v14.17.0 or higher)
2. npm (Node Package Manager)
3. PostgreSQL (v10 or higher)
4. Moodle with REST API enabled and a valid API token.

## Installation

1. Clone the GitHub repository:

```bash
git clone https://github.com/your-username/elearning-application.git
cd elearning-application
```

2. Install the project dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project and add the following configurations:

```plaintext
PORT=3000             # Replace with the desired port number for the backend server
DATABASE_URL=postgres://your-db-user:your-db-password@localhost:5432/elearning_db
                      # Replace with your PostgreSQL database URL and credentials
MOODLE_BASE_URL=https://your-moodle-domain.com
                      # Replace with the base URL of your Moodle installation
MOODLE_API_TOKEN=your-moodle-api-token
                      # Replace with your Moodle API token
MOODLE_COURSE_ID=1    # Replace with the Moodle course ID where you want to record grades
```

2. Modify the `MOODLE_API_TOKEN` and `MOODLE_COURSE_ID` with your actual Moodle API token and course ID.

## Database Setup

1. Create a PostgreSQL database using the `DATABASE_URL` configured in the `.env` file.

2. Run the database migrations to create the required tables:

```bash
npx sequelize-cli db:migrate
```

## Running the Application

To start the application in development mode, use the following command:

```bash
npm start
```

The backend server will be running at `http://localhost:3000` (or the port you specified in the `.env` file).

## Endpoints

The application provides the following API endpoints:

1. `POST /api/grades/store-grade`: Endpoint to store the learner's grade data. Requires `user_id`, `assessment_id`, and `grade` in the request body.

2. `GET /api/grades/get-grades/:learnerId`: Endpoint to get all grades for a specific learner. Requires `learnerId` as a URL parameter.

## Testing

To run tests, use the following command:

```bash
npm test
```

This will execute the test cases using the Mocha test framework.

## Deployment

To deploy the application, you can use any hosting service that supports Node.js applications. Some popular options include Heroku, AWS, and DigitalOcean.

Ensure to set the environment variables (specified in the `.env` file) on the hosting platform to configure the application correctly.

# Spurt User Data API

This is a Node.js API that provides insights into user data, including aggregate information and individual user details.

## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/emediongfrancis/spurt-user-data-api.git

2. Go to project directory
    ```bash
   cd spurt-user-data-api
   
3. Install dependencies
    ```bash
    npm install

4.	Run the API locally
    ```bash
    node app.js

## API Endpoints

- /api/users/insights

    Method: *GET*

    Description: Retrieves aggregate insights on user activity.

### Response Example:

```json
        {
        "activitySummary": {
            "total_users": 100,
            "total_posts": 12345,
            "avg_posts": 123.45
        },
        "genderDistribution": [
            { "gender": "Male", "count": 50 },
            { "gender": "Female", "count": 50 }
        ],
        "recentActivity": [
            { "full_name": "John Doe", "last_active": "2024-11-29" }
        ]
    }
```


- /api/users/:user_id

    Method: *GET*

    Description: Retrieves detailed insights for a specific user based on their `user_id`.

### Response Example:

```json
{
    "user": {
        "full_name": "John Doe",
        "gender": "Male",
        "age": 30,
        "email": "johndoe@example.com",
        "country": "USA",
        "job_title": "Software Engineer",
        "favourite_color": "blue",
        "last_active": "2024-11-20",
        "posts_count": 200,
        "activity_level": "High"
    },
    "message": "Insights for user_id: 1"
}
```

## Usage
- Local Development: Run the API locally by following the installation steps.
- Deployment: You can deploy this API to platforms like Heroku or DigitalOcean for live usage.

Click [here](https://app.swaggerhub.com/apis-docs/EmediongFrancis/user-data_api/1.0.0#/) for the API Documentation on Swagger.
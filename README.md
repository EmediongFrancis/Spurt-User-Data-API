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

> The API will be running on http://localhost:3000.

## API Endpoints

- /api/users/insights

    > http://localhost:3000/api/users/insights

    Method: *GET*

    Description: Retrieves aggregate insights on user activity.

### Response:

```json
        {
  "activitySummary": {
    "total_users": 500,
    "total_posts": 251416,
    "avg_posts": 502.83
  },
  "genderDistribution": [
    {
      "gender": "Agender",
      "count": 5
    },
    {
      "gender": "Bigender",
      "count": 7
    },
    {
      "gender": "Female",
      "count": 221
    },
    {
      "gender": "Genderfluid",
      "count": 9
    },
    {
      "gender": "Genderqueer",
      "count": 13
    },
    {
      "gender": "Male",
      "count": 226
    },
    {
      "gender": "Non-binary",
      "count": 9
    },
    {
      "gender": "Polygender",
      "count": 10
    }
  ],
  "recentActivity": [
    {
      "full_name": "Arlan Tancock",
      "last_active": "2021-12-30"
    },
    {
      "full_name": "Janine Minico",
      "last_active": "2021-12-29"
    },
    {
      "full_name": "Ade Rauprich",
      "last_active": "2021-12-29"
    },
    {
      "full_name": "Domini Goodspeed",
      "last_active": "2021-12-28"
    },
    {
      "full_name": "Tamas Bradford",
      "last_active": "2021-12-27"
    },
    {
      "full_name": "Edd Klageman",
      "last_active": "2021-12-27"
    },
    {
      "full_name": "Darnall Oulet",
      "last_active": "2021-12-27"
    },
    {
      "full_name": "Mile Hawkwood",
      "last_active": "2021-12-24"
    },
    {
      "full_name": "Ulrick Glasgow",
      "last_active": "2021-12-24"
    },
    {
      "full_name": "Diane-marie Akitt",
      "last_active": "2021-12-23"
    }
  ]
}
```


- /api/users/:user_id

    > http://localhost:3000/api/users/1

    Method: *GET*

    Description: Retrieves detailed insights for a specific user based on their `user_id`.

### Response:

```json
{
  "user": {
    "full_name": "Emmalyn Dyke",
    "gender": "Female",
    "age": 92,
    "email": "edyke0@etsy.com",
    "country": "Mexico",
    "job_title": "Budget/Accounting Analyst I",
    "favourite_color": "red",
    "last_active": "2021-09-19",
    "posts_count": 780,
    "activity_level": "High"
  },
  "message": "Insights for user_id: 1"
}
```

## Usage
- Local Development: Run the API locally by following the installation steps.
- Deployment: You can deploy this API to platforms like Heroku or DigitalOcean for live usage.

Click [here](https://app.swaggerhub.com/apis-docs/EmediongFrancis/user-data_api/1.0.0#/) for the API Documentation on Swagger.
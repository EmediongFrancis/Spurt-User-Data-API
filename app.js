const express = require('express');
const { queryDatabase } = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint: General Insights
app.get('/api/users/insights', async (req, res) => {
    try {
        // Aggregate Data
        const activitySummary = await queryDatabase(`
            SELECT 
                COUNT(*) AS total_users,
                SUM(posts_count) AS total_posts,
                ROUND(AVG(posts_count), 2) AS avg_posts
            FROM users
        `);

        const genderDistribution = await queryDatabase(`
            SELECT 
                gender, COUNT(*) AS count 
            FROM users 
            GROUP BY gender
        `);

        const recentActivity = await queryDatabase(`
            SELECT 
                full_name, last_active 
            FROM users 
            ORDER BY last_active DESC 
            LIMIT 10
        `);

        // Combine Results
        res.json({
            activitySummary: activitySummary[0],
            genderDistribution,
            recentActivity
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// Endpoint: Specific User Insights
app.get('/api/users/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        // Fetch User Details
        const userDetails = await queryDatabase(`
            SELECT 
                full_name, gender, age, email, country, job_title, favourite_color, last_active, posts_count, activity_level
            FROM users
            WHERE user_id = ?
        `, [user_id]);

        // If user not found
        if (userDetails.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with user details
        res.json({
            user: userDetails[0],
            message: `Insights for user_id: ${user_id}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
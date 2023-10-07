const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mailchimp.setConfig({
    apiKey: 'd21ab9af4a8da3a084ce363fddf6e91e-us21',
    server: 'us21', 
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
        const response = await mailchimp.lists.addListMember('25c9dc95ac', {
            email_address: email,
            status: 'subscribed',
        });
        res.send('Subscription successful!');
    } catch (error) {
        if (error.response && error.response.body && error.response.body.title === 'Member Exists') {
            res.status(400).send('Email already subscribed.');
        } else {
            console.error('Error processing subscription:', error);
            res.status(500).send('Error subscribing.');
        }
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});

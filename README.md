# StreamGuess

This code serves as the back-end server REST API for the StreamGuess app. This code is hosted on AWS.

# How It Works

The server code is written using Node.js, Mongoose, and Express. The REST API serves up the streamer data that can be accessed via a GET request from the StreamGuess client. Using this structure allows me to handle the data and clients separately, and could allow for future apps on different platforms to access the same data.

# Data Collection

The actual streamer data is being collected by Python scripts running as a CronTab job query the Twitch API to gather the streamer data and construct urls that lead to the .mp4 files of the clips in order to hide any information that could give away the answer. The API stores info on AWS using MongoDB.

Note: Python scripts will be hosted separately on GitHub and modified to hide API KEY info.

# Author

James Mete
www.jamesmete.com

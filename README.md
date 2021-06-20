## Movie-Sagas
## Description
This application allows a user to search through a provided database for available movies. With the click of a movie poster, the user can read the description of the movie and see what genre the movie falls into. 
## Installation
Create your database and tables using the provided database.sql file. Start the server.

npm install
npm run server
Now that the server is running, open a new terminal tab with cmd + t and start the react client app.
npm run client
## How it Works
The application will open on the home page showing 14 movies in alphabetical order. Click on the poster image of the movie in teh search results to read the details on the movie. At the end of the description, there is a list of genres and then a button which when clicked will navigate the user back to the home page. 

At the top of the home page, there is a button "add movie" which will take you to another page where you can add the name, url of the poster, description of the movie as well as a dropdown where you can select the genre that best matches this movie. The user can then click the cancel button which will bring the user back to the home page, or save the movie which will add that movie to the movies on the home page. 

## Software Used
- React
- React-router
- Redux
- Redux-saga
- PostgreSQL
- NodeJS
- Material-UI
- Axios
## Contributor 
Ben Hall
## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 
## Support
If you have suggestions or issues, please email me at benjamhall@gmail.com

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://cocktailrecipeapp.herokuapp.com/cocktails">
    <img src="./imgReadMe/Old Fashion.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Cocktail App</h3>

  <p align="center">
    <a href="[https://github.com/BenFro21/Cocktail-App](https://cocktailrecipeapp.herokuapp.com/cocktails)">View Demo</a> 
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Planning">Planning</a></li>
    <li><a href="#Next steps">Next Steps</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Browse and create cocktail recipes. Log in with google to create a profile that is able to add cocktails to the master list of cocktails. If you dont want to create an account feel free the browse the cocktails available


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Mongo Atlas](https://cloud.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs/api.html)
* [Bootstrap](https://getbootstrap.com)
* [E.J.S.](https://ejs.co/)
* [Multer](https://www.npmjs.com/package/multer)
* [Passport](https://www.passportjs.org/docs/)
* [Google Oauth](https://developers.google.com/identity/protocols/oauth2)
* [Heroku](https://dashboard.heroku.com/apps)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Usage
https://cocktailrecipeapp.herokuapp.com/cocktails


### Planning
# Your project idea
  A cocktail recipe app that users can sign in and make cocktail recipes. You will be able to see all the cocktail recipes if you are a user or not but only users will be able to create new recipes.

# MVP
-A website that will have full CRUD to make new users and new drink recipes.
-The users will be able to make new cocktails to add to the master list of cocktails
-A full list of the the cocktails will be displayed for anyone to see, user or not
-Users will have the ability to favorite drink recipes
-Drinks will have a comments/ review section on them.
-I plan on using EJS for a header and footer/ different views

# Stretch Goals
-Bring in a 3rd party drink api
-add the ability to add pictures using Multer
-Use a framework like bootstrap and have portfolio quality styling.

# Front-end
I plan on using EJS for the front end.

# List of Mongoose models and their properties
Cocktail Schema:{
title: { type: String, required true}
ingredients: [String],
How to make the drink: String,
comments: [comment Schema]
image: String?

Comment Schema:{
content: String,
rating: type: number, min, max, default
favorite: Boolian

User Schema:{
Name: String
email: string
Created cocktails: [string]
favorite cocktails: [string]

# List of Routes
Cocktails routes:
index: /cocktail (GET: display all cocktails)
new: /cocktail/new (GET: renders form to create a new cocktail)
Create: /cocktail (Post request to make a new cocktail)
Show: /cocktail/:id (GET: show details of one cocktail)
Edit: /cocktail/:id/edit (GET: Render the update page)
Update: /cocktail/:id (PATCH: Updates the current cocktail)
Destroy: /cocktail/id (DELETE: Destroy current cocktail

User Routes:
index: /user (GET: Render the sign in page)
new: /user/new (GET: render the sign up page)
Create: /user (POST: create a new user)
Show: /user/:id (GET: Show the users profile
Edit: /user/:id/edit (GET: render the page to edit user information)
Update: /user/:id (PATCH: update the users info)
Destroy: /user/:id (DELETE: destroy the user)

# User stories
As a guest of the website I want to see all the cocktail recipes.
As a guest I want to be able to create an account
As a USER I want to have full CRUD on making new cocktails
As a user I want to be able to favorite certain recipes
As a user Iwant to leave comments on drink recipes

### Next Steps
<p>
I look forward to taking my styling to the next level. 
I would like to add more Oauth's and a user sign up with a created username and password\
Entering in the instuctions for each cocktail by steps rather then a long string 

</p>



<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/BenFro21/Cocktail-App](https://cocktailrecipeapp.herokuapp.com/cocktails)

Email: broad0601@gmail.com
Linkdin: (https://www.linkedin.com/in/benbroad21/)
Phone:231-633-3272

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/BenFro21/Cocktail-App.svg?style=for-the-badge
[contributors-url]: https://github.com/BenFro21/Cocktail-App/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BenFro21/Cocktail-App.svg?style=for-the-badge
[forks-url]: https://github.com/BenFro21/Cocktail-App/network/members
[stars-shield]: https://img.shields.io/github/stars/BenFro21/Cocktail-App.svg?style=for-the-badge
[stars-url]: https://github.com/BenFro21/Cocktail-App/stargazers
[issues-shield]: https://img.shields.io/github/issues/BenFro21/Cocktail-App.svg?style=for-the-badge
[issues-url]: https://github.com/BenFro21/Cocktail-App/issues
[license-shield]: https://img.shields.io/github/license/BenFro21/Cocktail-App.svg?style=for-the-badge
[license-url]: https://github.com/BenFro21/Cocktail-App/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

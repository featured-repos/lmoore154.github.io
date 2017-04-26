Explorer Mode
- Your Chirp API should now show a timeline of all posts if a request is made to the timeline endpoint with any authentication. Don't forget to deploy this adjustment to Heroku. And to update your documentation.
- Your combination of HTML, JavaScript and CSS should use that new unauthenticated endpoint to display a list of chirps in a nicely formatted way (this is generally code for bootstrap).
- You should display the user avatar, the body of the chirp, the username of the user who posted the chirp and the time and date the chirp was posted
- Use jQuery to help make the above easier.

Adventure Mode
- Deploy your site to GitHub pages
- Format the timestamp nicely using moment.js
- Use Handlebars as a template for your chirps

Epic Mode
- Clicking on a user name or the user avatar should trigger a Bootstrap modal window with expanded information about the user - their number of chirps, followers, followings and when they joined the site (assuming your API returns that information)
- Clicking on the timestamp should pop the chirp up into a modal window as well

Legendary Mode
- Do the above with only one modal window HTML markup on the page

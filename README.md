[![Netlify Status](https://api.netlify.com/api/v1/badges/a63bc0ce-e327-4de6-87ee-604de2bd3604/deploy-status)](https://app.netlify.com/sites/frosty-bhaskara-4bfd2e/deploys)

This repo contains the code that is used to create my resume site [jonbloomer.com.au](http://jonbloomer.com.au). 

The whole application is based around this file `/src/resume.json` which is structured using the schema from [jsonresume.org](https://jsonresume.org/schema/). In `src/components/App.js` I think import this json object and assign each section to a data variable which is then passed in as a prop to the corresponding section component such as `src/components/About.js`.
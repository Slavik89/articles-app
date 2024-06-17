
## A brief description of the application

In this application, I created the ability to fetch data about scientific articles. The base data was taken from the [spaceflightnewsapi](https://spaceflightnewsapi.net/). Since it was not possible to retrieve the article descriptions from the given API, I created my own API based on Firebase. Using the newly created Firebase-API, I get the following data about the article:

- id: string
- title: string (title of the article)
- published: timestamp (time when the article was published)
- description: string (description of the article)
- image_url: string (link to the article's image)

I also deployed this site on Netlify. [Link to the site:](https://articles-site-frb.netlify.app/)

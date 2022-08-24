<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TITONGPAOLU</h3>

  <p align="center">
    An informative website that keeps people away from the architectural industry
    <br />
    <a href="https://github.com/glintonliao/titongpaolu-site">View Demo</a>
    ·
    <a href="https://github.com/glintonliao/titongpaolu-site/issues">Report Bug</a>
    ·
    <a href="https://github.com/glintonliao/titongpaolu-site/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Architectural industry has become a nightmare for its low pay and regularly overwork. However, architectural students might have no awareness about the actual working environment, still holding an idealism expectation on this major, a major that is considered to be "art".

The name of this project "TITONGPAOLU", stands for a chinese word “提桶跑路”, which means a worker, carring his/her bucket, and runs away from the construction site.

The materials for this page are from various social media platforms, dedicating to telling people, **stay away from the architectural industry**.

## Project Structure

+ Front-end: 
  + React.js
  + Tailwind CSS
+ Back-end: 
  + next.js
  + notion database and API
  
## Key Concepts

### Static Site Generation (SSG)

+ #### Data Fetching
  
   next.js supports ssg for each page, to use this feature:
   ```javascript
   // /page/xx.js
   export getStaticPorps() {
     // call api here
     return {
     }
   }
   ```
   next will call this function from the server side during the building process, and for a headless CMS such as Notion, users cannot call the api directly from the page, so ssg of next is a perfect match for such scenario.

  > **notice**: in api/xxx.js, the handler function should be "export **default** async function handler", otherwise will throw an error.
  
+ #### Data Parsing

In this project, objects returned from notion 

### Dynamic Routing

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Dark Mode

### Context Hook

### Masonary Layout

## Runs The Project on Your Local Machine

First, clone the project source code from your terminal:

```bash
git clone git@github.com:GlintonLiao/titongpaolu-site.git
cd titongpaolu-site
```

Second, install the dependencies:

```sh
npm install
# or
yarn add
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

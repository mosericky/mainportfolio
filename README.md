# Tech Canvas Portfolio

## Local development

Install [Node.js](https://nodejs.org/) and npm, then run:

```sh
npm install
npm run dev
```

The development server is available at http://localhost:3000.

## Production build

```sh
npm run build
npm run preview
```

## Vercel deployment

Import the repository into Vercel and deploy. The root `vercel.json` runs the
production build, and the Nitro Vercel preset creates the server and static
assets in Vercel's deployment output format.

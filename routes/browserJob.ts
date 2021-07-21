import express from "express";


const router: express.Router = express.Router();

router.route("/").get((req: express.Request | any, res: express.Response) => {
    res.send(
        `
        <head>
        <meta
        property="og:image:alt"
        content="${req.API_ENDPOINT}/?api_key=${req.API_KEY}&url=${req.query.url}"
      />
      <meta property="og:image" content="${req.API_ENDPOINT}/?api_key=${req.API_KEY}&url=${req.query.url}" />
      </head>
      <body>ok and</body>`
    )
})

export default router;
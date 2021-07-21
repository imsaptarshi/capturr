import express from "express";


const router: express.Router = express.Router();

router.route("/").get((req: express.Request | any, res: express.Response) => {
    res.send(
        `
        <head>
        <meta
        property="og:image:alt"
        content="${req.query.url}"
      />
            <meta property="og:image" content="${req.API_ENDPOINT}/?api_key=${req.API_KEY}&url=${req.query.url}" />
            <meta name="title" content="Capturr" />
            <meta
                property="og:url"
                content=""
              />
            <meta
                name="description"
                content="${req.query.url}"
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content="Capturr"
              />
              <meta
                property="og:description"
                content="${req.query.url}"
              />
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content=""
              />
              <meta
                property="twitter:title"
                content="Capturr"
              />
              <meta
                property="twitter:description"
                content="${req.query.url}"
              />
              <meta property="twitter:image" content="${req.API_ENDPOINT}/?api_key=${req.API_KEY}&url=${req.query.url}" />
      </head>
      <body>ok and</body>`
    )
})

export default router;
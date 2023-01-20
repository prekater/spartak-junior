//import packages
const express = require("express");
const {createClient} = require("redis");
const next = require("next");
const port = parseInt(process.env.PORT) || 3000;

//setup the express server
const app = express();

//create redis client instance
const client = createClient();

//next app setup

const nextApp = next({dev: false});

nextApp.prepare().then(async () => {

    await client.connect()
    const handler = nextApp.getRequestHandler();

    app.get("/_next/static/*", (req, res) => handler(req, res))
    app.get("*", async (req, res, next) => {
        const rawResEnd = res.end

        const key = "__CACHE__" + req.originalUrl || req.url;

        const cache = await client.get(key)

        if (cache) {
            const headers = {
                'X-Hit-From-Cache': 'true',
                'content-type': 'text/html; charset=utf-8',
                'Vary': 'Accept-Encoding',
            }
            Object.entries(headers).forEach(([key, value]) => res.setHeader(key, value))
            return res.end(cache)
        }

        res.end = new Proxy(rawResEnd, {
            apply: function (target, thisArg, args) {
                args[0] && client.set(key, args[0])
                return target.apply(thisArg, args)
            }
        })
        next()

    }, async (req, res) => {
        await handler(req, res)
    });

    app.listen(port, () => console.log('Server started'));
});

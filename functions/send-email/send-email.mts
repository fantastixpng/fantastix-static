import type { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
    const { next_run } = await req.json()

    console.log("Received event! Next invocation at:", next_run)

    // export default async (req, context) => {
    const { city, country } = context.params
    // return new Response(`You're visiting ${city} in ${country}!`)

    context.waitUntil(logRequest(req));

    return new Response("Hello, world!")

    // try {
    //   const response = await fetch(API_ENDPOINT)
    //   const data = await response.json()
    //   return Response.json({ data })
    // } catch (error) {
    //   console.log(error)
    //   return Response.json({ error: "Failed fetching data" }, { status: 500 })
    // }

    // new Response("Hello, World!", {
    //     headers: { "content-type": "text/html" },
    // })

    // const translations = {
    //     UNKNOWN: "Hello!",
    //     US: "Howdy y'all!",
    //     GB: "How do you do?",
    //     AU: "G'day, mate!",
    // }

    // const countryCode = context.geo?.country?.code || "UNKNOWN"
    // const countryName = context.geo?.country?.name || "somewhere in the world"

    // return new Response(
    //     `Your personalized greeting for ${countryName} is: ${translations[countryCode]}`,
    //     {
    //         headers: { "content-type": "text/html" },
    //     }
    // )
}

async function logRequest(req: Request) {
    await fetch("https://example.com/log", {
        method: "POST",
        body: JSON.stringify({ url: req.url, timestamp: Date.now() }),
        headers: { "Content-Type": "application/json" },
    });
}

export const config: Config = {
    schedule: "@hourly"
}

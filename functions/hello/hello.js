// import nodemailer from "nodemailer"
// import formData from "form-data"
// import Mailgun from "mailgun.js"
// import Airtable from "airtable"

// const API_ENDPOINT = "https://cat-fact.herokuapp.com/facts"

// const sendThankYouEmail = async ({ email }) => {
//   console.log("Sending the email")
//   const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env
//   const mailgun = new Mailgun(formData).client({
//     username: "api",
//     key: apiKey,
//   })

//   const mailData = {
//     from: `Stefan Judis stefan@${domain}`,
//     to: email,
//     subject: "Thank you for your interest",
//     text: "I'll come back to you asap!",
//   }

//   await mailgun.messages.create(domain, mailData)
// }

// const saveUser = async ({ name, email, message }) => {
//   const { AT_API_KEY: apiKey, AT_BASE, AT_TABLE } = process.env

//   Airtable.configure({
//     apiKey,
//   })

//   const base = Airtable.base(AT_BASE)
//   const table = base(AT_TABLE)
//   await table.create({ name, email, message })
// }

// exports.handler = async (event, context) => {
//   // export default async (request, context) => {
//   try {
//     const data = await request.json()

//     await sendThankYouEmail(data)

//     if (data.receiveUpdates) {
//       await saveUser(data)
//     }

//     const contactAddress = "hey@yourwebsite.com"

//     const mailer = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.production.GMAIL_ADDRESS,
//         pass: process.env.production.GMAIL_PASSWORD,
//       },
//     })
//     mailer.sendMail(
//       {
//         from: req.body.from,
//         to: [contactAddress],
//         subject: req.body.subject || "[No subject]",
//         html: req.body.message || "[No message]",
//       },
//       function (err, info) {
//         if (err) return res.status(500).send(err)
//         res.json({ success: true })
//       }
//     )
//     return Response.json({
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Hello World",
//         message: "Let's become serverless conductors!!!",
//       }),
//     })
//   } catch (error) {
//     console.log(error)
//     return Response.json({ error: "Failed sending email" }, { status: 500 })
//   }
// }

// async function logRequest(req) {
//   await fetch("https://example.com/log", {
//     method: "POST",
//     body: JSON.stringify({ url: req.url, timestamp: Date.now() }),
//     headers: { "Content-Type": "application/json" },
//   })
// }

// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
// export default async (req, context) => {
//   const { city, country } = context.params
//   // return new Response(`You're visiting ${city} in ${country}!`)

//   context.waitUntil(logRequest(req))

//   return new Response("Hello, world!")

//   // try {
//   //   const response = await fetch(API_ENDPOINT)
//   //   const data = await response.json()
//   //   return Response.json({ data })
//   // } catch (error) {
//   //   console.log(error)
//   //   return Response.json({ error: "Failed fetching data" }, { status: 500 })
//   // }

//   // try {
//   //   const url = new URL(request.url)
//   //   const subject = url.searchParams.get('name') || 'World'

//   //   return new Response(`Hello ${subject}`)
//   // } catch (error) {
//   //   return new Response(error.toString(), {
//   //     status: 500,
//   //   })
//   // }
// }

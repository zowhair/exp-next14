import { NextResponse } from "next/server";
import { sendMail } from "../service/mailService";
export async function POST(req, res) {

  try {
    const { method } = req;
    const body  = await req.json();

    console.log({body})
    // return 
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          body.subject,
          "zowhair@gmail.com",
          body.body
        )
        .then(res => res.json())
        .then(t => Response.json(t))
        
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};
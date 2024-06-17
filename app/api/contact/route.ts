import { type NextRequest, type NextResponse } from "next/server";
import nodemailer from "nodemailer";

type formProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, subject, phone, message } = body;
  const transporter = nodemailer.createTransport({
    service: "smtppro.zoho.in",
    host: "smtppro.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"senderNameSameLikeTheZohoOne" <ankit@appexcelmedia.com>`,
      to: "info@appexcelmedia.com",
      subject: `You have a contact form submission from AppExcelMedia by ${name}`,
      html: `<p>You have a contact form submission by ${name}</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Phone: </strong> ${phone}</p><br>
         <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    });
    return new Response("Success!", {
      status: 200,
    });
  } catch (error: any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
}

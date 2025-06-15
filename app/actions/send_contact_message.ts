"use server";

import nodemailer from "nodemailer";

export async function send_contact_message(formData: FormData) {
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!email || !subject || !message) {
        return { success: false, error: "Missing fields" };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: "waqar.mrwt424@gmail.com", // Your receiving email
            subject,
            text: `From: ${email}\n\n${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error("Email send error:", error);
        return { success: false, error: "Email sending failed" };
    }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "agabofn34@gmail.com",
            subject: "Novo Contato do Site",
            text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email enviado com sucesso!" });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao enviar email." }, { status: 500 });
    }
}

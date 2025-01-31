require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Para aceitar JSON no corpo das requisições
app.use(cors()); // Permitir requisições do frontend

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Rota para receber os dados do formulário
app.post("/send-email", async (req, res) => {
    const { username, email, mensagem } = req.body;

    if (!username || !email || !mensagem) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "agabofn34@gmail.com", // Seu e-mail para receber as mensagens
        subject: `Nova mensagem de ${username}`,
        text: `Nome: ${username}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).json({ success: false, message: "Erro ao enviar o e-mail." });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

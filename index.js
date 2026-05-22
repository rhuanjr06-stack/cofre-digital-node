import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.get("/", (request, response) => {
   return response.status(200).json({
        message: "Cofre digital Online!",
        environment: process.env.ENVIRONMENT,
        version: process.env.APP_VERSION
   }); 
});

app.get("/database", (request, response) => {
    return response.status(200).json({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
    });
});

app.listen(3000, () => {
    console.log("Servidor está rodando na porta: 3000");
});
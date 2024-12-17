import express from "express";

const app = express();
const port = 3000;

//middleware
app.use(express.json());

app.get("/", (req, res)=>{
    return res.send({
        mensagem : "Oi deu certo essa API"
    })
})

app.listen(port, ()=> console.log(`Servidor sendo executado na porta ${port}`));

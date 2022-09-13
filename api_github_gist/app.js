const express = require('express')
const app = express()
const axios = require('axios').default;
app.use(express.json());
app.set('port',3000);

axios.defaults.headers.get['Authorization'] = "token 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"


app.get("/", async (req,res)=>{
    try{
        const lista = []
        const respuesta = await axios.get("https://api.github.com/gists/298e0b8dce371795d9a4e79ee24b8b91")
        for (let i in respuesta.data.files){
            lista.push(respuesta.data.files[i])
        }
        const url_content = lista[0].raw_url
        console.log(url_content)
        const content = await axios.get(url_content)
        const id = respuesta.data.id
        res.status(200).json({
            "id":id,
            "owner":"owner",
            "content":content.data
        })
    }catch(err) {
        res.send(err)
    }
})

app.listen(app.get('port'), ()=>{
    console.log("escuchando.....")
})

const express = require('express')
const app = express()
const axios = require('axios').default;
app.use(express.json());
app.set('port',3000);

axios.defaults.headers.get['Authorization'] = "token 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"


//end point usando async awai
// app.get("/:id", async (req,res)=>{
//     try{
//         const id_gist = req.params.id
//         const lista = []
//         const respuesta = await axios.get(`https://api.github.com/gists/${id_gist}`)
//         for (let i in respuesta.data.files){
//             lista.push(respuesta.data.files[i])
//         }
//         const url_content = lista[0].raw_url
//         console.log(url_content)
//         const content = await axios.get(url_content)
//         const id = respuesta.data.id
//         const owner = respuesta.data.owner.login
//         res.status(200).json({
//             "id": id,
//             "owner": owner,
//             "content": content.data
//         })
//     }catch(err) {
//         res.send(err)
//     }
// })

// endpoint usando .then y .catch
app.get("/:id", (req,res)=>{
    const id_gist = req.params.id
    const lista = []
    axios.get(`https://api.github.com/gists/${id_gist}`)
    .then(respuesta => {
        for (let i in respuesta.data.files){
            lista.push(respuesta.data.files[i])
        }
        const url_content = lista[0].raw_url
        console.log(url_content)
        axios.get(url_content).then(content => {
            const id = respuesta.data.id
            const owner = respuesta.data.owner.login
            const img_owner = respuesta.data.owner.avatar_url
            res.status(200).json({
                "id": id,
                "owner": owner,
                "avatar": img_owner,
                "content": content.data
            })
        })
        .catch(error => res.send(error.response.status))
    })
    .catch(error => res.send(error.response.status))
})


app.listen(app.get('port'), ()=>{
    console.log("escuchando.....")
})


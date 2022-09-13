const fs = require('fs')
const { google } = require('googleapis')

const id= '1LA-W8Pk1-jEKwi5jrQ0dNFbXlxEgeU1mf8uRcZ5RYfI'

async function downloadFile(){
    const auth = new google.auth.GoogleAuth({
    keyFile: './quiet-result-361902-602d4d6f70ba.json',
    scopes: ['https://www.googleapis.com/auth/drive']
    })

    const driveService = google.drive({
        version: 'v3',
        auth
    })

    try {
        const file = await driveService.files.export({
        fileId: id,
        mimeType: 'text/csv'
        });

        const { data } = file
        fs.writeFile("./excel.csv", data, function(err) {
            if (err) throw err;
        });
        return data;
    } catch (err) {
        // TODO(developer) - Handle error
        throw err;
    }
}

downloadFile().then(data => {
    console.log(data)
    //https://drive.google.com/uc?export=view&id=
})



// var img = data.replace(/^data:image\/\w+;base64,/, "");
//         var buf = Buffer.from(img, 'base64');
//         fs.writeFile('image.png', buf, () => {
//             console.log('funciona')
//         });

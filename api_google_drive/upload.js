const fs = require('fs')
const { google } = require('googleapis')

const GOOGLE_API_FOLDER_ID = '1cAxhweW2bQdrgywvGBl4t31ukxH44opi'

async function uploadFile(){
    try{
        const auth = new google.auth.GoogleAuth({
            keyFile: './quiet-result-361902-602d4d6f70ba.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': 'image.jpg',
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'image/jpg',
            body: fs.createReadStream('./image.jpg')
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id

    }catch(err){
        console.log('Upload file error', err)
    }
}

uploadFile().then(data => {
    console.log(data)
    //https://drive.google.com/uc?export=view&id=
})
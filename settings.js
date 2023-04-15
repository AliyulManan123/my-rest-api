const fs = require('fs')

global.creator = 'Ikhsan'// yourname
global.MONGO_DB_URI = "" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "shanbot" //isi apa aja bebas
global.your_email = "shanbot20@gmail.com" //email
global.email_password = "lotlgtbgbgltpxke" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'apikeynya mana deck!',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service tidak tersedia, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Terlarang, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})

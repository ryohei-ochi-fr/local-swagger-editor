const express = require('express')
const app = express()

app.use(express.static('node_modules/swagger-editor-dist'));

app.listen(65080, () => console.log('swagger-editor-dist app listening on port 65080!'))
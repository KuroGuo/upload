const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(null, Buffer.from(file.originalname, 'latin1').toString('utf8'))
  }
})
  
// 创建 Multer 实例
const upload = multer({ storage: storage })

app.use(express.static('public'))

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded')
})

app.listen(8080, () => {
  console.log('Server started on port 8080')
})
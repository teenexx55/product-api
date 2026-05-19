const express = require('express')
const cors = require('cors')
const products = require('./product.json')

const app = express()
app.use(cors())

app.get('/allproducts', (req, res) => {
  res.json(products)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
import express from 'express'

const app = express ()

const Client_ID =  process.env.Client_ID

const client_secret = process.env.CLIENT_SECRET

app.get('/', (req, res) => {
    res.send('simple side Project')
})

app.get('/login/github',(req, res) => {
    const url = `https://github.com/login/oauth/authorize?client_id=${Client_ID}&redirect_uri=http://localhost:9000/login/github/callback`
    res.redirect(url)
})
app.get('/login/github/callback',(req, res) => {})

const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log('listening http://localhost:' + PORT))
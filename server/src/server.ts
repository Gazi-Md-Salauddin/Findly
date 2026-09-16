import app from "./app"
const uri = process.env.PORT || 5000


app.listen(uri, () => {
    console.log(`server running on port ${uri}`)
})
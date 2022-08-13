const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())
const rappers = {
  "jonny be good": {
    birthName: "Jonathan Smith",
    birthLocation: "Dalton,GA",
    age: 33,
  },
  "jen the rapper": {
    birthName: "Jennifer Garcia",
    birthLocation: "Anaheim,CA",
    age: 31,
  },
  unknown: {
    birthName: "unknown",
    birthLocation: "unknown",
    age: 0,
  },
}
//user comes to our main page and this
//is how we respond
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html")
})
app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.name.toLowerCase()
  if (rappers[rappersName]) {
    response.json(rappers[rappersName])
  } else {
    response.json(rappers["unknown"])
  }
})
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}! Better go catch it`)
})

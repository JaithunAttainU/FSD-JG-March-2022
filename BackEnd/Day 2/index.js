// Without Express also server can be created
// Express Framework - Templates
// Node - Runtime Env (Js Engine, DB, fs, http)


const express = require('express')
const app = express()

// .methodname(pathname, funcToHandleReq)
app.get('/', (req, res) => {
  console.log("Get Call executed")
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})

//port numbers to be explained on Mon

// https://university.attainu.com/session

// http / https - protocol
// university.attainu.com - domain names
//   / session - path
//   ? ie = UTF8 & node=5257472031 = query params
// https://www.amazon.in/b?ie=UTF8&node=5257472031&pf_rd_r=6RKGBV11PSCNPQA05K0K&pf_rd_p=9ff36f11-82d6-4600-a8fb-e52bb32e171c&pd_rd_r=992d4936-f19b-4189-bf41-54d4c36bdd99&pd_rd_w=hkBbf&pd_rd_wg=oFXBE&ref_=pd_gw_unk

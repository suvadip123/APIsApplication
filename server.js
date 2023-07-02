const express = require('express');
const serverConfig = require('./configs/config.server');
const app=express();

app.listen(serverConfig.PORT,()=>{
    console.log('server started on the port number');
})
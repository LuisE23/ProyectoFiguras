import express from 'express';
import {join,resolve} from 'path';

//import appRouter from "./routes/router.js";

const app=express();
const port=3000;

app.use("/",(req,resp)=>{
        resp.send('Hello World')
});
app.listen(port, ()=>{
        console.log(`Sever running at http://localhost:${port}`)
});
const express=require('express')
const app=express()
const port=3000 //서버를 돌릴 때 사용할 포트 번호

const bookmarks=require('./routes/bookmarks');

app.use('/bookmarks',bookmarks);

app.get('/',(req,res)=>{
    // GET 요청이 '/' 경로로 들어오면 실행된다.
    res.send('Hello World!!!') // 브라우저에 Hello World!!! 응답을 보낸다.
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)//콘솔에 해당 로그를 띄운다.
})
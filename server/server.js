const express=require('express')
const app=express()
const port=3000 //서버를 돌릴 때 사용할 포트 번호

const bookmarks=[
    {
        id:1,
        title:"React",
        url:"https://react.dev/"
    },
    {
        id:2,
        title:"TypeScript",
        url:"https://www.typescriptlang.org/docs/"
    },
    {
        id:3,
        title:"Express",
        url:"https://expressjs.com/en/guide"
    },

]

app.get('/',(req,res)=>{
    // GET 요청이 '/' 경로로 들어오면 실행된다.
    res.send('Hello World!!!') // 브라우저에 Hello World!!! 응답을 보낸다.
})

//get all bookmarks
app.get('/bookmarks',(req,res)=>{
    //TODO:db로부터 bookmark 목록들을 가져온다.
    //CURRENT: mockdata
    res.json(bookmarks)
    
})

//post bookmark
// app.post('/bookmarks',(req,res)=>{
//     //db에 새로운 bookmark를 추가한다.
//     //CURRENT: mockdata
// })

// //update bookmark
// app.put('/bookmarks/:id',(req,res)=>{
//     //bookmark를 수정한다.
//     //CURRENT: mockdata
// })

// //delete bookmark
// app.delete('/bookmarks/:id',(req,res)=>{
//     //bookmark를 삭제한다.
//     //CURRENT: mockdata
// })

// //get bookmark by id
// app.get('/bookmarks/:id',(req,res)=>{
//     //해당 id를 갖고 있는 bookmark 상세정보 조회
//     //CURRENT: mockdata
// })

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)//콘솔에 해당 로그를 띄운다.
})
const express=require('express')
const router=express.Router();

// const app=express()

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

//get all bookmarks
router.get('/',(req,res)=>{
    //TODO:db로부터 bookmark 목록들을 가져온다.
    //CURRENT: mockdata
    res.json(bookmarks)
    
})

//get bookmark by id
router.get('/:id',(req,res)=>{
    //해당 id를 갖고 있는 bookmark 상세정보 조회
    res.json(bookmarks[req.params.id-1])
    //CURRENT: mockdata
})

//post bookmark
router.post('/',(req,res)=>{
    //db에 새로운 bookmark를 추가한다.
    bookmarks.push(req.body)
    res.json(bookmarks)
    //CURRENT: mockdata
})

// //update bookmark
router.put('/:id',(req,res)=>{
    //bookmark를 수정한다.
    bookmarks[req.params.id-1]={
        id:req.query.id,
        title:req.query.title,
        url:req.query.url
    }
    res.json(bookmarks)
    //CURRENT: mockdata
})

// //delete bookmark
router.delete('/:id',(req,res)=>{
    //bookmark를 삭제한다.
    bookmarks.splice(req.params.id-1,1)
    res.json(bookmarks)
    //CURRENT: mockdata
})

module.exports=router;
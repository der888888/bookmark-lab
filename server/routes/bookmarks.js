const express=require('express')
const router=express.Router();
const {prisma}=require('../lib/prisma')

// const app=express()

//get all bookmarks
router.get('/',async(req,res)=>{
    //TODO:db로부터 bookmark 목록들을 가져온다.
    const allBookmarks=await prisma.bookmark.findMany()
    res.json(allBookmarks)
    
})

//get bookmark by id
router.get('/:id',async (req,res)=>{
    //해당 id를 갖고 있는 bookmark 상세정보 조회
    const bookmark=await prisma.bookmark.findUnique({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(bookmark)
})

//post bookmark
router.post('/',async(req,res)=>{
    //db에 새로운 bookmark를 추가한다.
    const bookmark=await prisma.bookmark.create
    ({
        data:{
            'title':req.query.title,
            'url':req.query.url
        }
    })
    res.status(201).json(bookmark)
})

// //update bookmark
router.put('/:id',async (req,res)=>{
    //bookmark를 수정한다.
    const bookmark=await prisma.bookmark.update({
        where:{
            id:parseInt(req.params.id)
        },
        data:{
            id:req.query.id,
            title:req.query.title,
            url:req.query.url
        }
    })
    res.status(200).json(bookmark)
})

// //delete bookmark
router.delete('/:id',async (req,res)=>{
    //bookmark를 삭제한다.
    const bookmark=await prisma.bookmark.delete({
        where:{
            id:parseInt(req.params.id)
        }
    })
    
    res.status(200).json(bookmark)
})

module.exports=router;
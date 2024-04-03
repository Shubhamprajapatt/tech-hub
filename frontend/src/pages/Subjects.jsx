import React from 'react'
import SubjectCard from '../components/cards/SubjectCard'

export default function Subjects() {
  const subjectData=[
    {
      id:1,
      subjectId:1,
      subjectName:"React Js",
      image:"https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      description:"React js Descriotion"
    },
    {
      id:2,
      subjectId:2,
      subjectName:"Node Js",
      image:"https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-1200-80.jpg",
      description:"Node js Description"
    },
    {
      id:3,
      subjectId:3,
      subjectName:"Angular Js",
      image:"https://th.bing.com/th/id/OIP.PeOMGrlVHERogA8T6mBDhgHaFj?rs=1&pid=ImgDetMain",
      description:"Angular js Descriotion"

    },  {
      id:4,
      subjectId:4,
      subjectName:"Js",
      image:"https://th.bing.com/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?rs=1&pid=ImgDetMain",
      description:"JS Descriotion"

    },
    {
      id:5,
      subjectId:5,
      subjectName:"Express Js",
      image:"https://blog.eduonix.com/wp-content/uploads/2015/11/Express-JS-101.png",
      description:"Express js Descriotion"

    }
  ]
  return (
    < div style={{marginTop:"100px"}}>
    <div className='content' style={{display:"flex", margin:"10px", padding:"10px"}}>
   {
    subjectData.map((sub,index)=>{
     return (
      <SubjectCard subject={sub}/>
     )
    })
   }
    </div></div>
  )
}

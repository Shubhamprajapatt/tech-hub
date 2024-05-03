import React, { useEffect, useState } from "react";
import SubjectCard from "../components/cards/SubjectCard";
import { Pagination } from "antd";

export default function Subjects() {
  const [inputSearch, setInputSearch] = useState("");
  let subjectData = [
    {
      id: 1,
      subjectId: 1,
      subjectName: "React Js",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      description: "React js Description",
    },
    {
      id: 2,
      subjectId: 2,
      subjectName: "Node Js",
      image:
        "https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-1200-80.jpg",
      description: "Node js Description",
    },
    {
      id: 3,
      subjectId: 3,
      subjectName: "Angular Js",
      image:
        "https://th.bing.com/th/id/OIP.PeOMGrlVHERogA8T6mBDhgHaFj?rs=1&pid=ImgDetMain",
      description: "Angular js Description",
    },
    {
      id: 4,
      subjectId: 4,
      subjectName: "Js",
      image:
        "https://th.bing.com/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?rs=1&pid=ImgDetMain",
      description: "JS Description",
    },
    {
      id: 5,
      subjectId: 5,
      subjectName: "Express Js",
      image:
        "https://blog.eduonix.com/wp-content/uploads/2015/11/Express-JS-101.png",
      description: "Express js Description",
    },
    {
      id: 6,
      subjectId: 6,
      subjectName: "Maths",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      description: "React js Description",
    },
    {
      id: 7,
      subjectId: 7,
      subjectName: "Reasoning",
      image:
        "https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-1200-80.jpg",
      description: "Node js Description",
    },
    {
      id: 8,
      subjectId: 8,
      subjectName: "GK",
      image:
        "https://th.bing.com/th/id/OIP.PeOMGrlVHERogA8T6mBDhgHaFj?rs=1&pid=ImgDetMain",
      description: "Angular js Description",
    },
    {
      id: 9,
      subjectId: 9,
      subjectName: "Art",
      image:
        "https://th.bing.com/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?rs=1&pid=ImgDetMain",
      description: "JS Description",
    },
    {
      id: 10,
      subjectId: 10,
      subjectName: "English",
      image:
        "https://blog.eduonix.com/wp-content/uploads/2015/11/Express-JS-101.png",
      description: "Express js Description",
    },
    {
      id: 11,
      subjectId: 11,
      subjectName: "React Js",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      description: "React js Description",
    },
    {
      id: 12,
      subjectId: 12,
      subjectName: "Node Js",
      image:
        "https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-1200-80.jpg",
      description: "Node js Description",
    },
    {
      id: 13,
      subjectId: 13,
      subjectName: "Angular Js",
      image:
        "https://th.bing.com/th/id/OIP.PeOMGrlVHERogA8T6mBDhgHaFj?rs=1&pid=ImgDetMain",
      description: "Angular js Description",
    },
    {
      id: 14,
      subjectId: 14,
      subjectName: "Js",
      image:
        "https://th.bing.com/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?rs=1&pid=ImgDetMain",
      description: "JS Description",
    },
    {
      id: 15,
      subjectId: 15,
      subjectName: "Express Js",
      image:
        "https://blog.eduonix.com/wp-content/uploads/2015/11/Express-JS-101.png",
      description: "Express js Description",
    },
  ];
  const [subjects, setSubjects] = useState(subjectData);

  const handleSearch = () => {
    console.log("Searching", inputSearch);
    const searchData = subjectData.filter((item) => {
      return item.subjectName.toLowerCase()== inputSearch.toLowerCase();
    });
    console.log("final search data", searchData);
    setSubjects(searchData);
  };
  const handleChange = (e) => {
    console.log("e.target.value=", e.target.value);
    if (e.target.value.trim().length > 0) {
      setInputSearch(e.target.value.trim());
    } else {
      setSubjects(subjectData);
    }
  };
  const handlePagination=(currentPage,item)=>{
       console.log("currentPage,item",currentPage,item);
       const data=subjectData.slice((currentPage-1)*item, (currentPage*item))
       setSubjects(data);
  } 
  console.log("search value is", inputSearch);
  useEffect(()=>{
    const paginationData=subjectData.slice(0,8);
    setSubjects(paginationData);
  },[]);
  return (
    <div
     style={{ marginTop: "20px" }}>
      {/* <div className="search" style={{ marginleft: "4px" }}> */}
      <div className="mt-10 align-content:center"><input
        className="srch ml-8" 
        type="search" 
        name={inputSearch}
        placeholder="Type a text"
        onChange={(e) => handleChange(e)}
      />
      <a href="#">
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </a>
      </div>
     {/* </div> */}
      <div
        className="content grid grid-cols-4 gap-4"
        style={{ margin: "10px" }}
      >
        {subjects?.length > 0
          ? subjects.map((sub, index) => {
              return <SubjectCard subject={sub} />;
            })
          : "No item found"}
      </div>
      <div className="justif">
      <Pagination defaultCurrent={1} pageSize={8} total={subjectData?.length} responsive={true} onChange={(page,pageSize)=>handlePagination(page,pageSize)} />
      </div>
    </div>
  );
}

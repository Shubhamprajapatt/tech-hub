import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

export default function SpecificSubject() {
  const { id } = useParams();
  console.log("id: " + id);
  const subjectData = [
    {
      id: 1,
      subjectId: 1,
      subjectName: "React Js",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      description: "React js Descriotion",
      syllabus: [
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
      ],
    },
    {
      id: 2,
      subjectId: 2,
      subjectName: "Node Js",
      image:
        "https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-1200-80.jpg",
      description: "Node js Description",
      syllabus: [
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
      ],
    },
    {
      id: 3,
      subjectId: 3,
      subjectName: "Angular Js",
      image:
        "https://th.bing.com/th/id/OIP.PeOMGrlVHERogA8T6mBDhgHaFj?rs=1&pid=ImgDetMain",
      description: "Angular js Descriotion",
      syllabus: [
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
      ],
    },
    {
      id: 4,
      subjectId: 4,
      subjectName: "Js",
      image:
        "https://th.bing.com/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?rs=1&pid=ImgDetMain",
      description: "JS Descriotion",
      syllabus: [
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
      ],
    },
    {
      id: 5,
      subjectId: 5,
      subjectName: "Express Js",
      image:
        "https://blog.eduonix.com/wp-content/uploads/2015/11/Express-JS-101.png",
      description: "Express js Descriotion",
      syllabus: [
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "Introduction of React Js",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
        "set up of React Js Application",
        "Run first Application in React js",
        "Introduction of Functional Components",
        "Condition Rendering in React js",
        "key and list rendering using map",
      ],
    },
  ];
  const filterData = subjectData.filter((subject) => {
    return subject.subjectId == id;
  });
  console.log("Filter data", filterData);
  const navigate=useNavigate();
  const handlePreview=()=>{
    alert("Preview function calling")
    navigate("/login");
  }
  const handleDownload=()=>{
    alert("Download function calling")
  }
  return (
    <div style={{ margin: "100px" }}>
      <div className="content">
        <h1>{filterData[0].subjectName} Topics</h1>
        <hr />

        <div className="grid grid-cols-2">
          <div className="overflow-y-scroll" style={{ height: "270px" }}>
            {filterData[0].syllabus?.map((topics, index) => {
              return (
                <div key={index}>
                  <h3>{topics}</h3>
                  {/* <hr /> */}
                </div>
              );
            })}
          </div>
          <div style={{ float: "right", height: "300px", width: "100px" }}>
            <img
              src={`${filterData[0].image}`}
              width={200}
              height={200}
              className="mt-2"
            ></img>
          </div>
          <div>
            
            <Button name="Preview" backgroundColor="Blue" onclick={()=>handlePreview()}/>
            <Button name="Download" backgroundColor="Blue" onclick={()=>handleDownload()}/>

          </div>
        </div>
      </div>
    </div>
  );
}

// useParams()

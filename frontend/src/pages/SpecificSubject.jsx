import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { subjectData } from "../Data/SubjectsData";
import axios from "axios";
export default function SpecificSubject() {
  const { id } = useParams();
  const email = localStorage.getItem("email");
  console.log("id: " + id);
  const filterData = subjectData.filter((subject) => {
    return subject.subjectId == id;
  });
  console.log("Filter data", filterData);
  const navigate = useNavigate();
  const handlePreview = () => {
    if (email) {
      alert("success");
    } else {
      navigate("/login");
    }
  };
  const handleDownload = async () => {
    // alert("Download function calling");
    // const data = await axios.post(
    //   `http://localhost:8080/api/createFile/${id}/${filterData[0].subjectName}/upload`,
    //   { data: filterData[0].syllabus }
    // );
    // console.log("data on download", data);
    // const blob = data.blob();
    const jsonData=JSON.stringify(filterData[0].syllabus);
    console.log("jsonParseData",jsonData.replace("[","").replace("]",""));
    const fileData=jsonData.replace("[","").replace("]","");
    const url = window.URL.createObjectURL(new Blob([fileData]));
    const link = document.createElement("a");    
    link.href = url;
    link.download = Date.now()+"_"+filterData[0].subjectName+".doc";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
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
            <Button
              name="Preview"
              backgroundColor="Blue"
              onclick={() => handlePreview()}
            />
            <Button
              name="Download"
              backgroundColor="Blue"
              onclick={() => handleDownload()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// useParams()

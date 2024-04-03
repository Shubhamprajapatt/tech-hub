import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

export default function SubjectCard(props) {
  console.log("props", props);
  return (
    <>
      <div className="hover:bg-white cursor-pointer hover:shadow rounded ">
        <Link to={`/subject/${props.subject.subjectId}`}>
          <Card
            title={`${props.subject.subjectName}`}
            style={{
              width: 300,
              margin: "10px",
            }}
          >
            <img
              src={`${props.subject.image}`}
              alt="subject_image"
              width="100%"
              height={100}
            ></img>
            <div>
              <p>{props.subject.description}</p>
            </div>
            <p>
              <button className="rounded full bg-white text-black p-2 mt-4 cursor-pointer">
                View
              </button>
            </p>
          </Card>
        </Link>
      </div>
    </>
  );
}

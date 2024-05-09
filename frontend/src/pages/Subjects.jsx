import React, { useEffect, useState } from "react";
import SubjectCard from "../components/cards/SubjectCard";
import { Pagination } from "antd";
import { subjectData } from "../Data/SubjectsData";

export default function Subjects() {
  const [inputSearch, setInputSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [subjects, setSubjects] = useState(subjectData);
  const handleSearch = () => {
    console.log("Searching", inputSearch);
    const searchData = subjectData.filter((item) => {
      return item.subjectName.toLowerCase() == inputSearch.toLowerCase();
    });
    console.log("final search data", searchData);
    setSubjects(searchData);
  };
  const handleChange = (e) => {
    console.log("e.target.value=", e.target.value);
    if (e.target.value.trim().length > 0) {
      const searchData = subjectData.filter((item) => {
        return item.subjectName
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
      console.log("final search data", searchData);
      setSubjects(searchData);
      setIsSearch(true);

      setInputSearch(e.target.value.trim());
    } else {
      // setSubjects(subjectData);
      setIsSearch(false);
      handlePagination(1, 8);
    }
  };
  const handlePagination = (currentPage, item) => {
    console.log("currentPage,item", currentPage, item);
    const data = subjectData.slice(
      (currentPage - 1) * item,
      currentPage * item
    );
    setSubjects(data);
  };
  console.log("search value is", inputSearch);
  useEffect(() => {
    const paginationData = subjectData.slice(0, 8);
    setSubjects(paginationData);
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      {/* <div className="search" style={{ marginleft: "4px" }}> */}
      <div className="mt-10 align-content:center">
        <input
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
        {subjects?.length > 0 && (
          <Pagination
            defaultCurrent={1}
            pageSize={8}
            total={isSearch ? subjects?.length : subjectData?.length}
            responsive={true}
            onChange={(page, pageSize) => handlePagination(page, pageSize)}
          />
        )}
      </div>
    </div>
  );
}

import "/global.css";
import ReactCourses from './ReactCourses.jsx'
import Filter from './Filter.jsx'
import React, { createContext, useState } from "react";

export default function CoursesWrapper(props) {
    const filterState = useState(["past", "future"]);
    return (
        <div className="text-white">
            <Filter filterState={filterState}/>
            {/* <ReactCourses courses={props.courses} filterState={filterState}/>     */}
        </div>
    )
}
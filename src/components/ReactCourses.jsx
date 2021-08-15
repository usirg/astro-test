import "/global.css";
import ReactCourse from "./ReactCourse";
import { renderDuration } from "../js/utilities.js";
import { useState } from "react";

export default function ReactCourses(props) {
  const courses = props.courses;
  const today = new Date();
  const [searchPeriods, setSearchParam] = useState([
    "past",
    "present",
    "future",
  ]);
  const pastCourses = courses.filter(
    (course) => new Date(course.lastSession) < today
  );
  const presentCourses = courses.filter(
    (course) =>
      new Date(course.firstSession) <= today &&
      new Date(course.lastSession) >= today
  );
  const futureCourses = courses.filter(
    (course) => new Date(course.firstSession) > today
  );

  const filteredCourses = courses.filter((course) =>
    searchPeriods.some((period) => {
      switch (period) {
        case "past":
          return today > new Date(course.lastSession);
        case "present":
          return (
            new Date(course.firstSession) <= today &&
            new Date(course.lastSession) >= today
          );
        case "future":
          return new Date(course.firstSession) > today;
        default:
          return false;
      }
    })
  );

  return (
    <div>

      <div class="bg-black flex flex-row flex-wrap justify-between">
        {/* {courses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )}
        {pastCourses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )}
        {presentCourses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )}
        {futureCourses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )} */}

        {filteredCourses.map((course) => (
          <ReactCourse
            key={course.id}
            id={course.id}
            title={course.title}
            duration={renderDuration(course.firstSession, course.lastSession)}
            img={course.img}
          >hi</ReactCourse>
        ))}
      </div>
    </div>
  );
}

import "/global.css";
import ReactCourse from "./ReactCourse";
import SectionHeading from "./SectionHeading";
import { renderDuration } from "../js/utilities.js";

export default function CoursesByTime(props) {
  const courses = props.courses;
  const today = new Date();
  
  const courseRelativeToDate = (course, date) => {
    if (date > new Date(course.lastSession)) {
      return 0; // past
    } else if (date < new Date(course.firstSession)) {
      return 2; // future
    } else {
      return 1 // present
    }
  }

  const [pastCourses, presentCourses, futureCourses] = courses.reduce((acc,course) => {
    acc[(courseRelativeToDate(course, new Date()))].push(course);
    return acc;
  }, [[],[],[]])

  return (
    <div>
      <SectionHeading title="Abgeschlossene Kurse"/>
      <div class="bg-black flex flex-row flex-wrap justify-between">
        {pastCourses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )}
      </div>
      
      <SectionHeading title="Laufende Kurse" rule={true}/>
      <div class="bg-black flex flex-row flex-wrap justify-between">
        {presentCourses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )}
      </div>

      <SectionHeading title="Zukünftige Kurse" rule={true}/>
      <div class="bg-black flex flex-row flex-wrap justify-between">
        {futureCourses.map(course => 
        <ReactCourse key={course.id} id={course.id} title={course.title} duration={renderDuration(course.firstSession, course.lastSession)} img={course.img}></ReactCourse>
        )}
      </div>
    </div>
  );
}

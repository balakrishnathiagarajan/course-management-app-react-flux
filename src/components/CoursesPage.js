import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

//
// Class usage
//
// class CoursesPage extends React.Component {
//   state = {
//     courses: [],
//   };

//   componentDidMount() {
//     getCourses().then((courses) => this.setState({ courses: courses }));
//   }

//   render() {
//     return (
//       <>
//         <h2>Courses</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map((course) => {
//               return (
//                 <tr key={course.id}>
//                   <td>{course.title}</td>
//                   <td>{course.authorId}</td>
//                   <td>{course.category}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

export default CoursesPage;

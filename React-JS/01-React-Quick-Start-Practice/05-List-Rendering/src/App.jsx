import "./App.css"

// function CourseList(){
//   const courses = ["HTML", "CSS", "JavaScript", "React"]
//   return(
//     <>
//     <h1>Course List</h1>
//     {courses.map((course)=>{
//       return <h3 key={course}>{course}</h3>
//     })}
//     </>
//   )
// }

function StudentList() {
  const students = [
    { id: 101, name: "Sabeer", course: "HTML" },
    { id: 102, name: "Ahmed", course: "CSS" },
    { id: 103, name: "Bazil", course: "JavaScript" },
    { id: 104, name: "Omer", course: "React" },
  ];

  return (
    <div className="student-container">
      <h1 className="student-heading">Student List</h1>
      <div className="student-list">
        {students.map((student) => {
          return (
            <div className="student-card" key={student.id}>
              <h3 className="student-name">{student.name}</h3>
              <p className="student-course">{student.course}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    // <CourseList />
    <StudentList />
  );
}

export default App;

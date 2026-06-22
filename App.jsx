import React from 'react';
import './App.css';
import Student from './Student';

import rahulImg from './images.jpeg';
import priyaImg from './image1.jpeg';

function App() {
  const students = [
    {
      id: 1,
      image: rahulImg,
      name: "Rahul Sharma",
      course: "B.Tech CSE",
      year: "3rd Year",
      cgpa: "8.5"
    },
    {
      id: 2,
      image: priyaImg,
      name: "Priya Singh",
      course: "BCA",
      year: "2nd Year",
      cgpa: "9.1"
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Student Profile Dashboard</h2>

      {students.map((student) => (
        <Student
          key={student.id}
          image={student.image}
          name={student.name}
          course={student.course}
          year={student.year}
          cgpa={student.cgpa}
        />
      ))}
    </div>
  );
}

export default App;
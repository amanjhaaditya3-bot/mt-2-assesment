import React from 'react';

function Student({ image, name, course, year, cgpa }) {
  return (
    <div className="Student-info">
      <img src={image} alt={name} width="150" height="150" />
      <h2>Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Year: {year}</p>
      <p>CGPA: {cgpa}</p>
    </div>
  );
}

export default Student;
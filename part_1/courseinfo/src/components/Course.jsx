const Course = ({course}) => {
    const course_parts = course.parts.map(note => <li key={note.id}> {note.name}: {note.exercises} </li>)
    return (
      <div>
        <h1>{course.name}</h1>
        <ul>
          {course_parts}
        </ul>
        <p>Total Exercises: {course.parts.reduce((a, b) => a+b.exercises, 0)}</p>
      </div>
    )
  }

export default Course
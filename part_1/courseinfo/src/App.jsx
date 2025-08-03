const Header = (props) => {
  return (
    <h1>{props.d.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.element}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.d.parts[0].name} element={props.d.parts[0].exercises}/>
      <Part part={props.d.parts[1].name} element={props.d.parts[1].exercises}/>
      <Part part={props.d.parts[2].name} element={props.d.parts[2].exercises}/>
    </div>

  )
}

const Footer = (props) => {
  return (
    <div>
      <p>Number of exercises {props.d.parts[0].exercises + props.d.parts[1].exercises + props.d.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header  d = {course}/>
      <Content d = {course}/>
      <Footer  d = {course}/>
    </div>
  )
}

export default App
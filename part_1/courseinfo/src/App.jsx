const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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
      <Part part={props.p1} element={props.e1}/>
      <Part part={props.p2} element={props.e2}/>
      <Part part={props.p3} element={props.e3}/>
    </div>

  )
}

const Footer = (props) => {
  return (
    <div>
      <p>Number of exercises {props.count}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content p1={part1} e1={exercises2}
               p2={part2} e2={exercises2}
               p3={part3} e3={exercises3}/>
      <Footer count={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
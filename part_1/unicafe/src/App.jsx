import { useState } from 'react'

const Button = ({onClick, text}) =>  <button onClick={onClick}>{text}</button>

const StatisticRow = ({name, value}) => <tr><td>{name}</td><td>{value}</td></tr>

const Statistics = (props) => {
  const {good, neutral, bad} = props
  if(good + neutral + bad === 0){
    return (
      <div>
        <h1>statistics</h1>
        <p>no statistics collected yet.</p>
      </div>
    )
  }
  let total = good+neutral+bad
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticRow name='good' value={good} />
          <StatisticRow name='neutral' value={neutral} />
          <StatisticRow name='bad' value={bad} />
          <StatisticRow name='all' value={total} />
          <StatisticRow name='average' value={(good - bad)/total} />
          <StatisticRow name='positive' value={100*good/total} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text='good' />
      <Button onClick={()=>setNeutral(neutral+1)} text='neutral' />
      <Button onClick={()=>setBad(bad+1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
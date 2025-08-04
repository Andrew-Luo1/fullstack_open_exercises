import { useState } from 'react'

const SelectQuote = (setSelected, maxInd) => {
  const ind = Math.floor(maxInd * Math.random())
  setSelected(ind)
}

const UpdateVotes = (selected, setVotes, votes)=> {
  const UpdateElement = (element, index, array) => {

    if(index === selected){
      return element + 1
    }
    return element
  }
  const ret = votes.map((element, index, array) => UpdateElement(element, index, array))
  setVotes(ret)
}

const ArgMax = (myList) => {
  let max = 0
  for (let ind = 0; ind < myList.length; ind++){
    if(myList[ind] > myList[max]){
      max = ind
    }
  }
  return max
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map((element, index, array) => 0))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={()=>SelectQuote(setSelected, anecdotes.length)}>next anecdote</button>
      <button onClick={()=>UpdateVotes(selected, setVotes, votes)}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[ArgMax(votes)]}</p>
    </div>
  )
}

export default App
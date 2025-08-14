import { useState, useEffect } from 'react'
import personService from './services/persons'
import './index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='addPerson'>
      {message}
    </div>
  )
}

const Persons = ({persons, setPersons, filter}) => {
  const delete_person = (id)=>{
    const decision = confirm("Are you sure???")
    if(decision){
      personService.deleteId(id).then(
        responseData => setPersons(
          persons.filter(person=>person.id != responseData.id)
        )
      )
    }
  }
  const fpersons = persons.filter(person => person.name.toLowerCase().includes(filter))
  return (
    <ul>
    {fpersons.map(
        person => (
        <li 
        key={person.name}> {person.name}: {person.number} 
                <button onClick={() => delete_person(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

const Filter = ({filterBy, setFilterBy}) => {
  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value)
  }
  return (
    <div>
      Filter by... <input value={filterBy} onChange={handleFilterByChange}></input>
    </div>
  )
}

const PersonForm = ({newName, setNewName, 
  newNumber, setNewNumber, 
  persons, setPersons, setAddMessage}) => {
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map((person)=>person.name)
    if(names.includes(newName)){
      alert(`${newName} already set...`)
    }
    else{
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService.create(personObject).then(returnedPObj => {
        setPersons(persons.concat(returnedPObj))
        setNewName('')  
        setNewNumber('')
      }).then(
        () => {
          setAddMessage(
            `Person ${newName} added!`
          )
          setTimeout(
            ()=>{
              setAddMessage(null)
            }, 5000
          )
        }
      )
    }
  }

  return (
    <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [addMessage, setAddMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(personsData => {
        setPersons(personsData)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addMessage}/>
      <Filter filterBy={filterBy} setFilterBy={setFilterBy}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} 
                  setNewName={setNewName} 
                  newNumber={newNumber} 
                  setNewNumber={setNewNumber} 
                  persons={persons} 
                  setPersons={setPersons}
                  setAddMessage={setAddMessage}/>

      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filterBy}/>
    </div>
  )
}

export default App
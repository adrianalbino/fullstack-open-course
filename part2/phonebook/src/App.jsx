import { useState } from "react"
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setFilter] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const array = persons.map((person) => person.name)
    if (!array.includes(newName)) {
      const newPersonObject = {
        name: newName,
        number: newNumber,
      }
      const newList = persons.concat(newPersonObject)
      setPersons(newList)
      setNewName("")
      setNewNumber("")
      console.log(newList)
    } else {
      alert(`${newName} is already in the phonebook!`)
    }
  }

  const handleChange = (e) => {
    const newChange = e.target.value
    setNewName(newChange)
  }

  const handleNumberChange = (e) => {
    const newNumberChange = e.target.value
    setNewNumber(newNumberChange)
  }

  const handleFilterChange = (e) => {
    const newFilterchange = e.target.value
    setFilter(newFilterchange)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
        <input value={newFilter} onChange={handleFilterChange} />
      </div>
      <Form handleSubmit={handleSubmit} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Filter persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App

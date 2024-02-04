import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999-999-999" },
    { name: "Adrian Joseph", number: "888-888-888" },
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
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {newFilter.trim() === ""
        ? persons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))
        : persons.filter((person) =>
            person.name
              .toLowerCase()
              .includes(newFilter.toLowerCase())
              )
              .map((person) => (
                <p key={person.name}>
                  {person.name} {person.number}
                </p>
              ))
          }
    </div>
  )
}

export default App

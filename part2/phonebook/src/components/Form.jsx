const Form = ({ handleSubmit, newName, handleChange, newNumber, handleNumberChange }) => {
    return (
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
    )
}

export default Form
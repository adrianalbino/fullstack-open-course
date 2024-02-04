import RenderAll from './RenderAll'

const Filter = ({ persons, newFilter }) => {
    return (
    <div>
        {newFilter.trim() === ""
        ? <RenderAll persons={persons} />
        : persons
            .filter((person) =>
            person.name.toLowerCase().includes(newFilter.toLowerCase())
            )
            .map((person) => (
            <p key={person.name}>
                {person.name} {person.number}
            </p>
            ))}
    </div>
)}

export default Filter
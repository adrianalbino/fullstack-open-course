
const Total = ({ content }) => {
    const total = content.parts.reduce(
        (prev, currentValue) => prev + currentValue.exercises,
        0,
    )
    return (
        <p>Total of {total} exercies.</p>
    )
}
export default Total
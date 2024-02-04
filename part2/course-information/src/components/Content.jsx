import Part from "./Part"
import Total from './Total'
const Content = ({ parts }) => { 
  return (
    <>
      {parts.parts.map(part => (
        <Part key={part.id} part={part} />
      ))
      }
      <Total content={parts} />
    </>
  )
}

export default Content

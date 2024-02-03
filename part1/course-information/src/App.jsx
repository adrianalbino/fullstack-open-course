
const Header = (header) => {
  return (
    <div>
      <h1>{header.course.name}</h1>
    </div>
  )
}

const Part = (part) => {
  return (
    <div>
      <p>{part.title}  {part.exercises}</p>
    </div>
  )
}
const Content = (content) => {
  console.log(content.content.parts[0].name)
  return (
    <div>
      <Part title={content.content.parts[0].name} exercises={content.content.parts[0].exercises} />
      <Part title={content.content.parts[1].name} exercises={content.content.parts[1].exercises} />
      <Part title={content.content.parts[2].name} exercises={content.content.parts[2].exercises} />
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises {total.parts.parts[0].exercises + total.parts.parts[1].exercises + total.parts.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content content={course} />
      <Total parts={course} />
    </div>
  )
}

export default App

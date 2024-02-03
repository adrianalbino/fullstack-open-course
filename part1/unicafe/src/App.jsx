import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Headers text='Give Feedback:' />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <br />
      <Headers text='Statistics:' />
      <Statistics value1={good} value2={neutral} value3={bad} />
    </>
  )
}
const Headers = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const all = props.value1 + props.value2 + props.value3
  let average = (props.value1 - props.value3) / all
  average = !average ? 0 : average 
  let positive = (props.value1 / all) * 100
  positive = !positive ? 0 : positive
  positive += ' %'

  if (props.value1 == 0 && props.value2 == 0 && props.value3 == 0) {
    return (
      <p>No feedback given.</p>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text='Good' value={props.value1}/>
          <StatisticsLine text='Neutral' value={props.value2}/>
          <StatisticsLine text='Bad' value={props.value3}/>
          <StatisticsLine text='All' value={all} />
          <StatisticsLine text='Average' value={average} />
          <StatisticsLine text='Positive' value={positive} />
        </tbody> 
      </table>
    </>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

export default App
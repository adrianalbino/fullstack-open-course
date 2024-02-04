import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of πall evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const array = Array(8).fill(0);
  const [votes, setVotes] = useState(array);
  const [biggestVotes, setBiggestVotes] = useState(0);

  const handleClick = () => {
    const randomize = Math.floor(Math.random() * 8);
    setSelected(randomize);
  };

  const handleVote = (index) => {
    const copy = [...votes];
    copy[index.selected] += 1;
    setVotes(copy);
    console.log("I am here " + copy);
    mostVotes(copy);
  };

  const mostVotes = (copy) => {
    let most = 0;
    for (let x = 0; x < 8; x++) {
      if (copy[x] > copy[most]) {
        most = x;
      }
    }
    console.log("Most: " + most);
    setBiggestVotes(most);
  };
  
  return (
    <div>
      <Header text="Anectdote of the Day" />
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes.</p>
      <br />
      <Button text="Vote" handleClick={() => handleVote({ selected })} />
      <Button text="Next Anecodote" handleClick={handleClick} />
      <Header text="Anectdote with Most Votes" />
      <p>{anecdotes[biggestVotes]}</p>
      <p>Has {votes[biggestVotes]} votes.</p>
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.text}</h1>;
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

export default App;

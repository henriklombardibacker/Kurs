import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Person from './Person'
import Counter from './Counter'

export default function App() {
  const [count, setCount] = useState(0)

  let people = ['Jacky', 'Magnus', 'Amir', 'Henrik'];
  let numbers = [15090289766, 22020209615, 30109957354, 24010395763];

  return (
    <div className="App">
      <Header />
      <Person number = {numbers[0]} person = {people[0]}/>
      <Person number = {numbers[1]} person = {people[1]}/>
      <Person number = {numbers[2]} person = {people[2]}/>
      <Person number = {numbers[3]} person = {people[3]}/>
      <Counter />
    </div>
  )
}



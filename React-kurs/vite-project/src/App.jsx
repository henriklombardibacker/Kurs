import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Person from './Person'
import Counter from './Counter'

export default function App() {
  const [globalCount, setGlobalCount] = useState(0)
  const handleGlobal = () => setGlobalCount(globalCount => globalCount+1) 

  const people = ['Jacky', 'Magnus', 'Amir', 'Henrik'];
  const numbers = [15090289766, 22020209615, 30109957354, 24010395763];

  return (
    <div className="App">
      <Header />
      <Person number = {numbers[0]} person = {people[0]}/>
      <Person number = {numbers[1]} person = {people[1]}/>
      <Person number = {numbers[2]} person = {people[2]}/>
      <Person number = {numbers[3]} person = {people[3]}/>
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
    </div>
  )
}



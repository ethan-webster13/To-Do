import { useState } from 'react'
import './todoService.js'
import './App.css'
import  ToDoCard from './ToDoCard.jsx'
import Strategy from './Strategies.jsx'

function App() {

  return (
    <>
      <h1>To-Do List</h1>
      
        <ToDoCard />
        <div>
          <h3>Key Strategies for ADHD Focus</h3>
            <Strategy />

        
        </div>

      

    </>
  )
}

export default App

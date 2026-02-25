import { useEffect, useState } from 'react'
//import initialData from './adhd.json'
const Strategy =  () => {
    const [strats, setStrats] = useState([]);
    const [habits, setHabits] = useState([])
 //start mock live json server:npx json-server adhd.json -p 5000
    const fetchStrat = async () => {
        try {
        const response = await fetch('http://localhost:5000/focus_strategies')
        const data = await response.json();
        setStrats(data);
        return strats
        } catch (error) {console.error('LOcal host did not work'), error};
    }

    const fetchHabits = async () => {
        try {
            const response = await fetch('http://localhost:5000/habits_to_support_focus');
            const data = await response.json();
            setHabits(data);
            return habits
        } catch (error) {
            console.error('Failed to fetch from Locally hosted server', error)
        }
    }

    useEffect(()=> {
        fetchStrat();
        fetchHabits()

    },[])
    
    return (
        <>
        
        <ul className='list-header' >Focus Strategies
            {strats.map((item, index) => (
                <li className='list-item-cat' key={index}>
                    <span className='list-key'>{item.category}: </span>{item.description}
                </li>
            ))}
        </ul>
        <ul className='list-header'>Habit
            {habits.map((item, index) => (
                <li className='list-item-cat' key={index}>
                    <span className='list-key'>{item.category}: </span>{item.description}
                </li>
            ))}
            

        </ul>
        
        </>
    )
}

/*const habits = async () => {
    try {
            const response = await fetch('http://localhost:5000/habits_to_support_focus');
            const data = await response.json();
            setHabits(data);
            console.log(habits  )
            return habits
        } catch (error) {
            console.error('Failed to fetch from Locally hosted server', error)
    }

    useEffect(()=> {

    },[]) 

}*/

export default Strategy
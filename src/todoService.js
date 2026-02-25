

export const getTodos = async () => {
    try {
        const response = await fetch('https://dummyjson.com/todos?limit=10')
        const data = await response.json();
        return data.todos;
    } catch (error) {console.error('Error fetching To-Dos', error)}
}
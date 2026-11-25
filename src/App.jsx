import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <h1 style={{
        color: 'red',
        fontSize: '50px'
      }}>
        Welcome to React
      </h1>

      <p className="text-gray-500 text-lg text-center">
        Learn React step by step.
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-1 cursor-pointer">
        Submit
      </button>
    </>
  )
}

export default App

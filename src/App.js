import React from 'react'

const App = () => {
  // čistý javascript začiatok
  const data = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
  ]

    const vymazaneId = 3


    const vyslednePole = data.filter ( (oneTask) => {
      return oneTask.id != vymazaneId
    })

    console.log(vyslednePole)

  // čistý javascript koniec









  return (
    <div>App</div>
  )
}

export default App
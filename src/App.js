import React from 'react'

const App = () => {
    // čistý javascript začiatok
  // const vychodziePole = [5, 6, 7, 8, 9]

  // const vyslednePole = vychodziePole.map( (jednoCislo) => {
  //   return jednoCislo + 10
  // })


  // console.log(vyslednePole)


     // čistý javascript koniec

     const data = [
      { id: 1, name: 'Vynést koš' },
      { id: 2, name: 'Uklidit kuchyň' },
      { id: 3, name: 'Zajít do fitka' },
      { id: 4, name: 'Nakoupit' },
      { id: 5, name: 'Nakrmit kočku' },
  ]

  const poleNazvov = data.map( (oneTask) => {
      return oneTask.name
  } )


  console.log(poleNazvov)


  return (
    <div>App</div>
  )
}

export default App
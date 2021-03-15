import React from 'react'

import { PAICarousel } from 'polyai-react-components'
// import  from 'polyai-react-components'
import 'polyai-react-components/dist/index.css'

const dataForCarousel: any[] = [];

const App = () => {
  dataForCarousel.push({test: "first"});
  dataForCarousel.push({test: "second"});
  dataForCarousel.push({test: "third"});
  dataForCarousel.push({test: "fourth"});
  dataForCarousel.push({test: "fifth"});
  dataForCarousel.push({test: "six"});
  dataForCarousel.push({test: "seventh"});
  dataForCarousel.push({test: "eigth"});
  // dataForCarousel.push(<ExampleComponent text="2" />);

  const generator = (data: any, key: number) => (<div key={key} style={{
    width: "150px",
    height: "300px"
  }}>{data.test}</div>)

  let props = {
    data: dataForCarousel,
    generator: generator
  }
  return (
    <div style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkolivegreen"
      }}>
      <PAICarousel {...props} />
    </div>
  )
}

export default App

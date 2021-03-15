import React from 'react'

import { PAICarousel, PAIFaq } from 'polyai-react-components'
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

  let cProps = {
    data: dataForCarousel,
    generator: generator
  }

  let faqProps = [
    { 
      question: "question1",
      answer: "answer1"
    },{
      question: "question1",
      answer: "answer1"
    },{
      question: "question1",
      answer: "answer1"
    },
  ]

  return (
    <React.Fragment>
      <div style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "darkolivegreen"
        }}>
        <PAICarousel {...cProps} />
      </div>
      <div>
        <PAIFaq faqEntry={faqProps} />
      </div>
    </React.Fragment>


  )
}

export default App

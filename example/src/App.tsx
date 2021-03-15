import React from 'react'

import { ExampleComponent } from 'polyai-react-components'
import { PAICarousel } from 'polyai-react-components'
import 'polyai-react-components/dist/index.css'

const dataForCarousel: React.ReactElement[] = [];
dataForCarousel.push(<ExampleComponent text="Create React Example 😄" />);

const App = () => {
  return (
    <React.Fragment>
      <PAICarousel data={dataForCarousel} />
    </React.Fragment>
  )
}

export default App

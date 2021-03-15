import * as React from 'react'
import styles from './styles.module.css'
import PAICarousel from './components/carousel/carousel'
import PAIFaq from './components/faq/faq'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { ExampleComponent, PAICarousel, PAIFaq }

import React from 'react'
import { Row } from 'reactstrap'
import styles from './section-heading.module.scss'

interface HeadingProps {
  title: string
}

const PAISectionHeading: React.FunctionComponent<HeadingProps> = ({
  title
}) => {
  return (
    <Row className={styles['pai-section-heading']}>
      <h2> {title} </h2>
    </Row>
  )
}

export default PAISectionHeading

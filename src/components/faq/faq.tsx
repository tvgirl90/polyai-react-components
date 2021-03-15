import React from 'react'
import { Col, Row } from 'reactstrap'
import Accordion from './accordion/accordion'
import styles from './faq.module.scss'

export interface FaqEntry {
  question: string
  answer: string
}

export interface PAIFaqProps {
  faqEntry: FaqEntry[]
}

const PAIFaq: React.FunctionComponent<PAIFaqProps> = ({ faqEntry }) => {
  return (
    <div className={styles['pai-faq']}>
      <Row xs='1' md='2'>
        {faqEntry.map((_, i) => (
          <Col key={i} className={styles['pai-faq-col-padding']}>
            <Accordion
              key={i}
              title={faqEntry[i].question}
              content={faqEntry[i].answer}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PAIFaq

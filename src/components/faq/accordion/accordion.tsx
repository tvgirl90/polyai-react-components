import React, { useRef, useState } from 'react'
import Chevron from '../chevron/chevron'
import './accordion.scss'

interface AccordionProps {
  title: string
  content: any
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  title,
  content
}) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  // Justification of use of any type
  // The contentRef.current's type is the same as the argument
  // given to the useRef function. Given that null is a type, no
  // attribute on the content.current could be accessed later in the code
  // (it would create a type error)
  const contentRef = useRef(null as any)

  const toggleAccordion = (): void => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' && contentRef
        ? '0px'
        : `${contentRef.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <div className='accordion__section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className='accordion__title'>{title}</p>
        <Chevron className={`${setRotate}`} width={10} fill='#777' />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${setHeight}` }}
        className='accordion__content'
      >
        <div
          className='accordion__text'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default Accordion

/*
full accordion code taken from: https://medium.com/skillthrive/build-a-react-accordion-component-from-scratch-using-react-hooks-a71d3d91324b
*/

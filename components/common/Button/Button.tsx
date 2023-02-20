import React from 'react'
import { BUttonContent } from './button.styles'

interface propsType {
  title: string;
  onClick?: () => void;
}

export const Button = (props: propsType) => {
  return (
    <BUttonContent onClick={props.onClick}>
      {props.title}
    </BUttonContent>
  )
}

import React from 'react'

type Props = {
  title: string,
  styles:string,
  onClickEvent?: () => void
}

function Button({title, styles, onClickEvent}: Props) {
  return (
    <button onClick={onClickEvent} className={styles}>{title}</button>
  )
}

export default Button
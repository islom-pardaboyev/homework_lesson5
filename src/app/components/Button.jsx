import React from 'react'

function Button({title, styles, onClickEvent}) {
  return (
    <button onClick={onClickEvent} className={styles}>{title}</button>
  )
}

export default Button
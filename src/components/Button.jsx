import React from 'react'

function Button({title, styles}) {
  return (
    <button className={styles}>{title}</button>
  )
}

export default Button
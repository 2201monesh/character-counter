import React from 'react'

function countCards({count, text, bgColor}) {
  return (
    <div className='count-card-container' style={{ backgroundColor: bgColor }}>
      <p className='text-4xl font-bold'>{count}</p>
      <p>{text}</p>
    </div>
  )
}

export default countCards


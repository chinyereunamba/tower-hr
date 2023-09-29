import React from 'react'
import style from './Style.module.css'

function Performance({ percentage }) {
  return (
      <>
          <div className={`${style.performance} h-5 w-16 rounded-md bg-white grid place-items-center`}>
              <small>{ percentage }%</small>
          </div>
      
      </>
  )
}

export default Performance
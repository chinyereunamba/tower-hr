import React from 'react'
import style from './Style.module.css'

function Performance({ percentage }) {
  return (
      <>
          <div className={`${style.performance} border border-black h-4 w-12 rounded-md bg-white grid place-items-center`}>
              <small>{ percentage }%</small>
          </div>
      
      </>
  )
}

export default Performance
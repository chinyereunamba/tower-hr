import React from 'react'
import style from './Style.module.css'

function Feed({img, description, time}) {
  return (
      <div className={`${style.feed} flex justify-between items-center mt-5`}>
          <div className='flex gap-4 items-center'>
              <img src={img} alt="" />
              <div>
                  <p className='font-medium text-lg'>{ description }</p>
                  <small>{ time }</small>
              </div>
          </div>
          <button className='px-6 py-4 rounded-md'>View</button>
      </div>
  )
}

export default Feed
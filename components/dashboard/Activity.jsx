import React from 'react'
import style from './Style.module.css'
import Feed from './Feed'
import Title from './Title'

function Activity() {
  return (
      <div className={`${style.activity} p-5 rounded-md `}>
          <Title content={'Activity Feed'} />
          <Feed
              img={"img-1.jpg"}
              description={"Chioma Alabi requested for pull request on github"}
              time={"13mins ago"}
          />
          <Feed
              img={"img-2.jpg"}
              description={"Rosemary Tony created post on upcoming tech event "}
              time={"13mins ago"}
          />
          <Feed
              img={"img-3.jpg"}
              description={
                  "Saheed Musa requested file access for figma design "
              }
              time={"13mins ago"}
          />
          <Feed
              img={"img-4.jpg"}
              description={"Joy Aluko’s payday is coming"}
              time={"13mins ago"}
          />
          <Feed
              img={"img-5.jpg"}
              description={
                  "Esther Thopmson: Flier designs are ready for review"
              }
              time={"13mins ago"}
          />
      </div>
  )
}

export default Activity
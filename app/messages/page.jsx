import Message from '@/components/messages/Message'
import React from 'react'

function page() {
  return (
    <>
    <Message/>
      <div className='grid grid-cols-2'>
        <div>
          <h2>Recent Messages</h2>
        </div>
        <div>
          <h2>Chats</h2>
        </div>
    </div>
    </>
  )
}

export default page
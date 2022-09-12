import React, { useEffect, useState } from 'react'
import { useDocumentTitle } from '../customHooks'

function Message() {

  const [msgCounter, setMsgCounter] = useState(0)
  useDocumentTitle(`${msgCounter} msgs Received`)

  return (
    <div>
      <button onClick={() => setMsgCounter(msgCounter + 1)}>Receive New Msg</button>
    </div>
  )
}

export default Message
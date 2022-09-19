import React, { useState, useEffect } from 'react'

function withReactions(IncomingComponent) { //Laugh

  return function () {
    const [reactionCount, setReactionCount] = useState(0)

    useEffect(() => {
      //callApi 
    }, [reactionCount])

    const increment = () => {
      setReactionCount(reactionCount + 1)
    }

    return (
      <div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Exercitationem quam itaque veritatis asperiores amet, maxime rem, praesentium, molestias enim distinctio fugiat necessitatibus non. Aperiam dolore exercitationem saepe iure!
        </p>
        <IncomingComponent count={reactionCount} increment={increment} />
      </div>
    )
  }
}

export default withReactions

  // 1. HOCs has to be pure functions
  // 2. Should accept a Component
  // 3. Return one Component which in turn returns JSX


  < App >
  <Dummy />
  </.App >
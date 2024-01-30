import React from 'react'

const CompA = (a) => {
    console.log(a);
  return (
    <div>
        CompA
         {
            a.user
         }
    </div>
  )
}

export default CompA
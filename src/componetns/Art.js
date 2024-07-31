import React from 'react'

const Art = ({props}) => {
    // console.log(props);
  return (
    <div>
        <h4>{props.pr_wt_kr}</h4>
        <p>{props.pr_desc}</p>
    </div>
  )
}

export default Art
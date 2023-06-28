import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
     {props.alert && <div className={`alert alert-${props.alert.clr} d-flex align-items-center`} role="alert">
      <strong>{capitalize(props.alert.msg)}</strong>
     </div>}
     </div>
  )
}

export default Alert

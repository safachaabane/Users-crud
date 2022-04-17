import React from 'react'


function Alert({message,show}) {
  return (
    <div className="alert alert-success align-items-center" style={{display : show ? "block" :"none"}}>
  <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
  <div>
    {message}
  </div>
  </div>
  )
}

export default Alert
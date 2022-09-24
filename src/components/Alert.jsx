import React from 'react'

function Alert(props) {
  // console.log(props.alert.type)
  return (
    props.alert && <div className={`text-green-300 animate-fade-out bg-neutral-900 w-full md:w-2/3 md:mx-auto md:rounded-lg h-12 text-center text-lg py-3`}>{props.alert.msg}</div>
  )
}
// 
export default Alert
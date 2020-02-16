import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['green', 'yellow', 'blue', 'darkgreen']
    const chosen = colors[Math.floor( Math.random () * 4)]
    const className = chosen + '-text'

    return props => (
        <div className={className}>
             <WrappedComponent {...props} /> 
        </div>
    )
}
export default Rainbow
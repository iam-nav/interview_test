import React from 'react'

const Button = ({ onClick, text,disable }) =>
    <div className="welcome-btn" style={{pointerEvents:disable?"none":''}}>
        <div className="btn-mpl-primary"onClick={(onClick)?onClick:""}>
            {text}
        </div>
    </div>

export default Button;
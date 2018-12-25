import React from "react"

const Card = ({ title, description, link}) => (
    <div style={{"width": '350px', "margin": "20px", "backgroundColor": "orange","height": "250px"}}>
        <h6 style={{"paddingTop": "10px"}}>{title}</h6>
        <p style={{"padding": "5px"}}><span>{description}</span></p>
        <p><a style={{"textDecoration": "none"}} href={link}> More information</a></p>
    </div>
)

export default Card
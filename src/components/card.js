import React from "react"

const Card = ({ title, description, link}) => (
    <div style={{"width": '350px', "margin": "20px", "background-color": "orange","height": "250px"}}>
        <h6 style={{"padding-top": "10px"}}>{title}</h6>
        <p style={{"padding": "5px"}}><span>{description}</span></p>
        <p><a style={{"text-decoration": "none"}} href={link}> More information</a></p>
    </div>
)

export default Card
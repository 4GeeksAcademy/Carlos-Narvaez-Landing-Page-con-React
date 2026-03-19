import React from "react";

export const Card = (props) => {
    const { image, title, description } = props.cards;
    return (                
            <div className="card text-center h-100" >
                <img src={image} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>  
    )
}




      
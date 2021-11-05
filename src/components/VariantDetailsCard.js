import React from 'react'

export default function VariantDetailsCard(props) {
    const {name, description, price} = props
    console.log(name, description, price)
    return (
        <div className="variant-card">
            <div className="inner-container">
                <div className="variant-card__header">{name}</div>
                <div className="variant-content">{description}</div>
                <div className="variant-card__footer">{price}</div>
            </div>
        </div>
    )
}

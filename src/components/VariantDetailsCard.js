export default function VariantDetailsCard(props) {
    const {name, description, price} = props

    return (
        <div className="variant-card">
            <div className="inner-container">
                <div className="variant-card__header">{name}</div>
                <div className="variant-content">{description}</div>
                <div className="variant-card__footer">${(price  / 100).toFixed(2)}</div>
            </div>
        </div>
    )
}

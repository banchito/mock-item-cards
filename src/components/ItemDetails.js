import VariantDetailsCard from './VariantDetailsCard';

export default function ItemDetails({itemDetail}) {
    const {name, description, imageUrls, variants} = itemDetail

    return (
        <div className="item-detail__container">
            <div className="item-image" alt={name}>{imageUrls.length > 0 && <img src={imageUrls[0].url}></img>}</div>
            <div className="variants-container">
                <div className="variants-container__header">
                    <h3 className="variants-title">{name}</h3>
                    <span className="variants-description">{description}</span>
                </div>
                <div className="variants-card__grid">
                    {
                        variants.map((variant)=>{
                            return <VariantDetailsCard key={variant.id} {...variant}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

import React from 'react';

export default function ItemCard(props) {
  const { description, id, imageUrls, name, variants } = props;

  let extraItems = 0;
  const addExtra = () => extraItems += 1
  return (
    <div className="outer__card__container">
      <div className="card">
        <div className="card__container">
          <div className="card__header">
            <h3 className="card__title">{name}</h3>
          </div>
          <div className="card__content">
            {variants.map((variant, index) => {
              if (index > 3) {
                addExtra();
                return null;
              }
              return <p key={variant.id}>{variant.name}</p>;
            })}

            {extraItems ? <p>{`...plus ${extraItems} more`}</p> : null}
          </div>
        </div>
        <div className="items-list__select-btn-container">
          <button className="btn btn--succes">select</button>
        </div>
      </div>
      <h3 className="card__legend">{name}</h3>
    </div>
  );
}

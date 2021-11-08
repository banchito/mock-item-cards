import { useContext } from 'react';
import { ItemsContext } from './App';
import { NavLink } from 'react-router-dom';

export default function ItemCard(props) {
  const { id, name, variants, imageUrls } = props;
  const { handleItemSelect } = useContext(ItemsContext);

  let extraItems = 0;
  const addExtra = () => (extraItems += 1);

  return (
    <div className="outer__card__container">
      <div className="card">
        {imageUrls.length > 0 && (
          <img className="card__image" src={imageUrls[0].url} />
        )}
        <div className="card__overlay">
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
                return (
                  <p key={variant.id}>
                    <span className="item">Item</span> {index + 1}{' '}
                    {variant.name}
                  </p>
                );
              })}
              {extraItems ? <p>{`...plus ${extraItems} more`}</p> : null}
            </div>
          </div>
          <div className="items-list__select-btn-container">
            <NavLink
              to={`/${id}`}
              className="btn btn--succes"
              onClick={() => handleItemSelect(id)}
            >
              select
            </NavLink>
          </div>
        </div>
      </div>

      <h3 className="card__legend">{name}</h3>
    </div>
  );
}

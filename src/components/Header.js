import { useContext } from 'react';
import { ItemsContext } from './App';
import { NavLink } from 'react-router-dom';

export default function Header({ selectedItemId }) {
  
  const { handleItemSelect } = useContext(ItemsContext);

  return (
    <div className="header">
      {selectedItemId !== undefined && (
        <NavLink
          className="back-to"
          to="/items"
          onClick={() => handleItemSelect(undefined)}
        >
          <i className="chevron"></i>
          <span className="chevron-text">Back to Marketplace</span>
        </NavLink>
      )}
    </div>
  );
}

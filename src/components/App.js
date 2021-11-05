import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { fetchItems } from '../api';
import Header from './Header';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import '../css/app.css';

export const ItemsContext = React.createContext();

export default function App() {
  const [selectedItemId, setSelectedItemId] = useState();
  const [items, setItems] = useState([]);

  const selectedItem = items.find((item) => item.id === selectedItemId);

  useEffect(() => {
    Promise.all([fetchItems()])
      .then(([items]) => {
        setItems(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleItemSelect = (id) => {
    setSelectedItemId(id);
  };

  const itemsContextValue = { handleItemSelect };

  return (
    <ItemsContext.Provider value={itemsContextValue}>
      <Router>
      <Header selectedItemId={selectedItemId}/>
        <div className="app__body">
        
          <Switch>
            <Route path="/items">
              <ItemList items={items} />
            </Route>
            {selectedItem && (
              <Route path={`/${selectedItemId}`}>
                <ItemDetails itemDetail={selectedItem} />
              </Route>
            )}
            <Redirect to="/items" />
          </Switch>
        </div>
      </Router>
    </ItemsContext.Provider>
  );
}

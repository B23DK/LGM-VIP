import "./App.css";
import { useState } from "react";
import List from "./List"
function App() {
  const [currentItem, setCurrentItem] =useState(null);
  const [itemList, updateItemList] = useState([]);  
  const onChangerHandler = e => {
    setCurrentItem(e.target.value);
  };
  const addItemsToList = () =>   {
    updateItemList([...itemList, { item:currentItem, key: Date.now() }]);
    setCurrentItem("");
  };
  return (
    <div className="App">
    < header className = "App-header" >
      <div className="Wrapper">
        <div className="Input-wrapper">
      <input placeholder="Add Item" value={currentItem} onChange={onChangerHandler}/>
          <button onClick={addItemsToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={ updateItemList}/>
        </div>
        </header>
      </div >
        );
  }
export default App;

    
   
    
  

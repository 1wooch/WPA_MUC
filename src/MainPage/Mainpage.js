import { useState } from "react";
import AddModal from "./AddModal";

function Main() {
    
    const [count, setCount] = useState([]);


    const addNewCOUNT=(countName)=>{
      const today = getDate();
      setCount((prevCounts) => [
        ...prevCounts,
        { name: countName, checkCount: [{"date":today,"count":1}] },  //checkcount => {date,count}
      ]);
    }

    const getDate=()=>{
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    const AdjustCount = (adjustvalue, index) => {
      setCount((prevCounts) => {
        return prevCounts.map((countItem, i) => {
          if (i === index) {
            const today = getDate();
    
            // Check if the date exists, and update the count if it does
            const updatedCheckCount = countItem.checkCount.map((entry) => {
              if (entry.date === today) {
                //make not below 0
                if(entry.count + adjustvalue < 0){
                  return { ...entry, count: 0 };
                }
                else{
                  return { ...entry, count: entry.count + adjustvalue };
                }
              }
              return entry;
            });
    
            // If the date doesn't exist, add a new entry
            if (!updatedCheckCount.some((entry) => entry.date === today)) {
              updatedCheckCount.push({ date: today, count: 1 });
            }
    
            return { ...countItem, checkCount: updatedCheckCount };
          }
          return countItem;
        });
      });
    };






    ///MODAL///
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    //MODAL END///
    return (
      <div>
            <h1> Multiuse  Counter</h1>
            
            <div>
              <ul>
                  {count.map((countItem, index) => (
                    <li key={index}>
                      <button onClick={() => AdjustCount(-1, index)}>-</button>
                      {countItem.name}:
                      {countItem.checkCount.map((entry, entryIndex) => (
                        <span key={entryIndex}>
                          Date: {entry.date}, Count: {entry.count}
                        </span>
                      ))}
                       <span>Total Count: {countItem.checkCount.reduce((sum, entry) => sum + entry.count, 0)}</span>
                      <button onClick={() => AdjustCount(1, index)}>+</button>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
            <button
                onClick={handleShow}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                  +
                </button>
                {showModal && <AddModal addNewCOUNT={addNewCOUNT} handleClose={handleClose}/>}
            </div>
      </div>
    );
  }
  
  export default Main;
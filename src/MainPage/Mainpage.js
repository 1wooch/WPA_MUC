import { useState } from "react";
import AddModal from "./AddModal";

function Main() {
    const [checkDate,setCheckDate] = useState({storedDate:"",count:0});
    const [dateList, setDateList] = useState([]);

    const [count, setCount] = useState([]);


    const addNewCOUNT=(countName)=>{
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      setCount((prevCounts) => [
        ...prevCounts,
        { name: countName, count: 0, checkDate: dateList },
      ]);
    }

    const AdjustCount=(adjustvalue,index)=>{  
      for (let i = 0; i < count.length; i++) {
        if (i === index) {
          count[i].count += adjustvalue;
          count[i].checkDate.push(checkDate);
          setCount([...count]);
        }
      }
    }
    //it will work only when the there is no name duplicated




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
                {count.map((count, index) => (
                  <li key={index}>
                    {count.name}: {count.count}
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
                {showModal && <AddModal />}
            </div>
      </div>
    );
  }
  
  export default Main;
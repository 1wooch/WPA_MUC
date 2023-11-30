import { useState } from "react";


function AddModal() {
   
    const [Name,setName]=useState("");


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-container">
          <div className="modal-content">
            <h1 className="text-2xl font-bold mb-4">Add NEW</h1>
            <div>
              <input className="w-1/3 shadow appearance-none border rounded"
                      type="text"
                      placeholder="Name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)} // Add onChange handler
              />
            </div>
            
          </div>
          <div className="modal-actions">
            <button
              //onClick={handleClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Close
              
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddModal;
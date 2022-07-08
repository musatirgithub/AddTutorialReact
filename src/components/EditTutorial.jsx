import { useState, useEffect } from "react";

const EditTutorial = ({currentTutorial, updateTutorial}) => {
  const {id, title, description} = currentTutorial;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);


  useEffect(() => {
    setNewTitle(title);
    setNewDescription(description);
  }, [title, description])
  

  const handleSave = (id, newTitle, newDescription)=>{
    updateTutorial(id, newTitle, newDescription);
    setNewTitle('');
    setNewDescription('');
  }

  return (

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Tutorial</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="mb-3 container text-center">
          <label htmlFor="newTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="newTitle"
            value={newTitle}
             onChange={(e)=>setNewTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 container text-center">
          <label htmlFor="newDescription" className="form-label ">
            Description
          </label>
          <input type="text" className="form-control" id="newDescription" 
            onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
          />
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleSave(id, newTitle, newDescription)}>Save changes</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default EditTutorial;

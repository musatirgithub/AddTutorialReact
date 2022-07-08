import { useState } from "react";

const AddTutorial = ({addTutorial}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e, title, description)=>{
    e.preventDefault();
    addTutorial(title, description);
    setTitle('');
    setDescription('');
  }

  return (
    <section className="col-sm-12 col-md-6 text-center my-3 mx-auto">
      <form onSubmit={(e)=>handleSubmit(e, title, description)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title || ''}
            aria-describedby="emailHelp"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" 
            onChange={(e)=>setDescription(e.target.value)}
            value={description || ''}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddTutorial;

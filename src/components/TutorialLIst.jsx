import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialLIst = ({tutorials, deleteTutorial, updateTutorial}) => {

  const [currentTutorial, setCurrentTutorial] = useState([]);

  const getCurrentTutorial = (id)=>{
    tutorials?.map((tutorial)=>{
      if (tutorial.id === id) {
        setCurrentTutorial({
          id: tutorial.id,
          title: tutorial.title,
          description: tutorial.description
        })
      }
    })
  }
console.log(currentTutorial);
  return (
    <section>
    <h2 className="text-center my-3 display-5 text-primary">Current Tutorials</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((tutorial)=>{
            const {id, title, description} = tutorial;
            return(
          <tr key={id}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{description}</td>
            <td><FaRegEdit className="text-primary" type="button" size={23} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>getCurrentTutorial(id)} /> 
            <FaRegTrashAlt className="text-danger customBtn" size={23} onClick={()=>deleteTutorial(id)}/></td>
          </tr>
            )
          })}

        </tbody>
      </table>
      <EditTutorial currentTutorial={currentTutorial} updateTutorial={updateTutorial}/>
    </section>
  ); 
};

export default TutorialLIst;

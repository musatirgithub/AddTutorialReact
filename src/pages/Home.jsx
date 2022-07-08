import AddTutorial from "../components/AddTutorial";
import TutorialLIst from "../components/TutorialLIst";
import axios from "axios";
import { useState, useEffect } from "react";

const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

const Home = () => {

  const [tutorials, setTutorials] = useState([]);
  

  const getTutorials = async ()=>{
    try {
      const {data} = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTutorials();
  }, [])
  
  const addTutorial = async (title, description)=>{
    try {
      await axios.post(url, {title:title, description:description})
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  const deleteTutorial = async (id)=>{
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  const updateTutorial = async (id, newTitle, newDescription)=>{
    try {
      await axios.put(`${url}/${id}`, {title:newTitle, description:newDescription});
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  return (
    <main className="container pb-4">
    <h1 className="display-5 my-3 text-center text-primary">Add Tutorial</h1>
      <AddTutorial addTutorial={addTutorial}/>
      <TutorialLIst tutorials={tutorials} deleteTutorial={deleteTutorial} 
        updateTutorial={updateTutorial}
      />
    </main>
  )
}

export default Home;
import { useState } from "react";
import "./App.css"


 const App=()=>{
  //  une list js contenant tache
  const [listTaches, setListTaches] = useState([])
  // une variable qui va manipuler l'input
  const [input, setInput] = useState('')

  const addInTodo=(e)=>{
    e.preventDefault();
    //const t=listTaches.push(input)
    setListTaches([{id:Date.now(),tache:input,isCompleted:false},...listTaches])
    setInput('')
  }

  const validateTache=(i)=>{
    const updatedTache=listTaches.find(t=>t.id==i)
    updatedTache.isCompleted=!updatedTache.isCompleted
    setListTaches([...listTaches])
  }

  const deleteTache=(i)=>{
   const t= listTaches.filter(t=>t.id!=i);
   console.log(t.tache);
   setListTaches(t)
  }

  return <div>
    <h1>Mon Gestion De taches</h1>
    <input 
    value={input}
    onChange={e=>setInput(e.target.value)}
    type="text" placeholder="Entrer votre tache" />
    <button onClick={addInTodo}>Ajouter</button>
    <div>
      {/* liste de tache */}
      {listTaches.map((l,index)=>(
      <div key={l.id}>

        <h3><span>{index}--</span>{l.tache}
        <span onClick={e=>validateTache(l.id)} 
        className={l.isCompleted?`isCompleted`:'isNotCompleted'}>{l.isCompleted}</span> 
        <button onClick={e=>deleteTache(l.id)}>Effacer</button> </h3>
        
      </div>))}
    </div>
  </div>
 }

 
export default App;


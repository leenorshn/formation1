import { useState } from "react";



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

  return <div className="max-w-4xl mx-auto shadow bg-white">
    <div className="h-16 rounded-t-md mt-4 flex items-center justify-center bg-blue-600">
    <h1 className="text-3xl font-semibold text-white">Mon gestion de taches</h1>
    </div>
    <div className="mt-5 flex items-center space-x-4 px-4">
    <input 
    className="px-4 py-3 flex-1 rounded-md shadow border-gray-400 outline-none "
    value={input}
    onChange={e=>setInput(e.target.value)}
    type="text" placeholder="Entrer votre tache" />
    <button className="text-white bg-blue-600 rounded px-6 py-3" onClick={addInTodo}>Ajouter</button>
    </div>
    
    <div className="px-4 py-2 mt-4 space-y-2">
      {/* liste de tache */}
      {listTaches.map((l,index)=>(
      <div key={l.id} className="flex  items-center justify-between border-2 px-8 py-4 border-gray-500 rounded-md">
         <span className="p-2 rounded-full bg-blue-600 w-10 text-center text-white text-sm">{index}</span>
        <h3>{l.tache}
        <span onClick={e=>validateTache(l.id)} 
        className={l.isCompleted?`isCompleted`:'isNotCompleted'}>{l.isCompleted}</span> 
         </h3>
         <button className="" onClick={e=>deleteTache(l.id)}>Effacer</button>
      </div>))}
    </div>
  </div>
 }

 
export default App;


import { useState } from "react";

const products = [
  { id: 1, name: "tomata" },
  { id: 2, name: "orange" },
  { id: 3, name: "avocat" },
];
//const listItems = products.map((p) => <li key={p.id}>{p.name}</li>);

function App() {
  const [input, setInput] = useState("");
  const [basket, setBasket] = useState([...products]);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <input
        className="border border-gray-400 px-4 py-3 rounded shadow-md"
        placeholder="Entrer le product"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1 className="text-5xl">Liste de product</h1>

      <ul>
        {basket.map((b) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>

      <button
        className="px-6 py-2 rounded bg-blue-500 text-white"
        onClick={(e) => {
          setBasket([...basket, { id: Date.now(), name: input }]);
          setInput("");
        }}
      >
        Ajouter
      </button>
    </div>
  );
}

export default App;

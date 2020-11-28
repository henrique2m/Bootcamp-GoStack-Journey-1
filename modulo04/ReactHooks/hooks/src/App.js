import React, { useState, useEffect, useMemo, useCallback }from 'react';

function App(){
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech]= useState('');

  /*function handleAdd(){
    setTech([...tech, newTech]);
    setNewTech('');
  }*/

  const handleAdd = useCallback(() =>{
    setTech([...tech, newTech]);
    setNewTech('')
  }, [newTech, tech]);


  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if(storageTech){
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() =>{
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech])

  return(
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
        <strong>Você tem {techSize} tecnologias</strong>
        <hr />
        <input value={newTech} onChange={e => setNewTech(e.target.value)} />
        <button type="button" onClick={handleAdd}>
          Adicionar
        </button>
      </ul>
    </>
  );
}

export default App;


import './App.css';
import React,{useEffect, useState} from 'react'
function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
   /* fetch('https://615485ee2473940017efaed3.mockapi.io/assessment').then(
      response=>response.json()
      ).then(json=>console.log(json))*/
      fetch('https://615485ee2473940017efaed3.mockapi.io/assessment').then(
        response=>response.json()
        ).then(json=>setData(json))
  },[])
  return (
    <div className="App">
      <h1>List of Users Data </h1>
      <div className="Lists">
        <ul>
        {data.map(item=><li key={item.id}> {item.name},{item.avatar},{item.createdAt},{item.id}</li>)}
        </ul>
      </div>
    </div>
  );
}
//https://615485ee2473940017efaed3.mockapi.io/assessment
export default App;

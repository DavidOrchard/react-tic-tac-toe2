import React from 'react'
import './App.css'
import {Panel} from "./components/Panel";

const tabs = [
  {title:"Simple", content:"foo"},
  {title:"<span style='font-weight:bold;'>Fancy</span> title", content:"bar"},
  {title:"Disabled", content:"baz", isDisabled:true}
];

function App() {
  return (
    <div className="app">
      <Panel tabs={tabs}/>

    </div>
  )
}

export default App

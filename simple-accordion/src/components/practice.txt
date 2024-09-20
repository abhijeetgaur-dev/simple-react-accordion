import { useState } from "react"
import data from "./data"

const Accordion = () =>{
  let [selected, setSelected] = useState(0)
  const getCurrentId = (id) =>{
    console.log(id)
    selected === id ? setSelected(null) : setSelected(id)
  }
  return (
    <div>
      {data.map((dataItem) => (
        <div key= {dataItem.id}>
          <div className= "post-question" onClick= {() => getCurrentId(dataItem.id)}>{dataItem.question}</div>
          {selected === dataItem.id && 
          <div className = "post-answer">{dataItem.answer}</div>
          }
          
        </div>
      ))}

    </div>

  )
}


export default Accordion
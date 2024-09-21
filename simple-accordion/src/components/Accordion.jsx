import { useState } from "react"
import data from "./data"

const Accordion = () =>{
  let [selected, setSelected] = useState(0)
  let [multiSelected, setMultiSelected] = useState([])
  
  let [enableMultiSelect, setEnableMultiSelect] = useState(0)

  const multipleSelect = () =>{
    console.log(enableMultiSelect)
    enableMultiSelect ? setEnableMultiSelect(0) : setEnableMultiSelect(1)
  }
  
  const multipleGetCurrentId = (id) =>{
    let cpyMultiple = [...multiSelected]
    let indexOfCurrentId = cpyMultiple.indexOf(id)

    cpyMultiple.indexOf(id) == -1 ? cpyMultiple.push(id) : cpyMultiple.splice(indexOfCurrentId , 1)

    setMultiSelected(cpyMultiple)
    console.log(cpyMultiple)
  }
  
  const singleGetCurrentId = (id) =>{
    console.log(id)
    selected ===id ? setSelected(0) : setSelected(id) 

  }

  return (
    <div className="wrapper">
      <button onClick = {multipleSelect}>Enable Multi Select</button>
      {data.map((dataItem) => (
        <div key={dataItem.id} className="post"> 
          <div 
          className="post-question"
          onClick={() => enableMultiSelect ?  multipleGetCurrentId(dataItem.id) :singleGetCurrentId(dataItem.id)}>
          <h3>{dataItem.question}</h3></div>
          {enableMultiSelect
              ? multiSelected.indexOf(dataItem.id) !== -1 &&   <div className="post-answer">{dataItem.answer}</div> 
              : selected === dataItem.id &&  <div className="post-answer">{dataItem.answer}</div> 
          }
        </div>
      ))}
    </div>

  )
}


export default Accordion

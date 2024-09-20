import data from "./data"

const Accordion = () =>{
  const getCurrentId = (id) =>{
    console.log(id)
  }

  return (
    <div className="wrapper">
      {data.map((dataItem) => (
        <div key={dataItem.id} className="post"> 
          <div className="post-question" onClick={() => getCurrentId(dataItem.id)}><h1>{dataItem.question}</h1></div>
          <div className="post-answer">{dataItem.answer}</div>
        </div>
      ))}
    </div>

  )
}


export default Accordion

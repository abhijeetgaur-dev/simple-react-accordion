import { useState } from "react"
import data from "./data";


const Accordian = () =>{
    const [selected, setSelected] = useState(null);
    
    function selectedTitle (id){
      setSelected(id)
    }
    return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? 
          data.map( (dataItem) => 
          (<div className="item" key= {dataItem.id}>
            <div className="title" onClick ={() => selectedTitle(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              
                {selected === dataItem.id ?  
                <div className="content">
                  {dataItem.answer}
                </div>: <span>+</span>

              }

            </div>
          </div>))
        :
          <div>
            No data found
          </div>
        }
      </div>
          
    </div>)

} 

export default Accordian
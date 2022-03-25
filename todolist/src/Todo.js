import './App.css';
import React,{useState} from 'react'
function Todo()
{
    const[data,setdata]=useState('')
    const[items,setitems]=useState([])
    const[edit,setedit]=useState(null)
    const [show,setshow]=useState(false)
    function getdata(e)
    {
        e.preventDefault()
        if(data=='')
        {
        
        }
         else if(items && show)
         {
           setitems(items.map((ele)=>{
                if(ele.id===edit)
                {
                    return {...ele,text:data}
                }
                return ele;
             }
           
             ))
             setdata('')
        setedit(null)
        setshow(false)
         }
        else{ 
            const newItem={id:new Date().getTime().toString(),text:data}
            setitems(items.concat(newItem))
            setdata('')}
      
    }
    function deletitem(id)
    {
    setdata('')
    return setitems(items.filter((item,i)=>item.id!=id))
    }
    function edititem(id)
    {
     const d=  items.find((elem)=>{
            return elem.id===id
        })
        setdata(d.text)
        setedit(d.id)
        setshow(true)
    }
    return(
        <div className='todo' >
          <form onSubmit={(e)=>getdata(e)} >
        <input required placeholder='Enter task...' value={data} type="text"  onChange={(e)=>setdata(e.target.value)}  ></input>
       {
         show?<button onChange={(e)=>e.preventDefault} >save</button>:<button onChange={(e)=>e.preventDefault}>Add</button>
       }
       </form>
      

        {
            items.map((item)=>{
                return (
                    <div  >
                        <ol><li><input className='input' value={item.text} ></input>
                    <button onClick={()=>deletitem(item.id)} >delet</button>
                    <button onClick={()=>edititem(item.id)} >Edit</button>
                    </li></ol>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Todo
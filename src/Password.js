



const Password = () => {

    let Pss = {
        height:'8vh',
        width:'90%',  
        maxHeight:'50px',
        border:'1px solid #dddfe2',
        borderRadius: '7px',
        caretColor:'#1b74e4', 
        margin:' auto',
        
        
    
    }

  return (
    <input style={Pss} className="out" placeholder="Password"></input>
  )
}

export default Password;
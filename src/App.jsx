import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';  
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import MatchTable from './assets/components/Table';
import Schedule from './assets/components/Schedule';
// import './App.css'

function App() {
  const [teams,setTeams]=useState(["CSK","RCB","RR","KXIP","SRH","MI","DC"])
  const [inputValue,setInputValue]=useState("")
  const[errormsg,setErrormsg]=useState("")
  const keyclicked=()=>{
    if (event.code==="Enter"){  
      setTeams([...teams,inputValue])
      setInputValue("")
    }
  }
  const removeTeam=(team)=>{
    setTeams(teams.filter(temp=>{
      return team!==temp
    }))
    
  }
  // console.log(teams);
  const prepareschedule=()=>{
    if (teams.length<4){
      setErrormsg('Minimum 4 teams are required')

    } else if (teams.length%2==0){
      setErrormsg("")

    } else{
      setErrormsg("team size should be even")
    }
  }
  useEffect(()=>{
    prepareschedule()
  },[teams])

  return (
      <>
      <div className='inputbar'>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Add</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Ex: CSK'
          value={inputValue}
          onChange={()=>setInputValue(event.target.value)}
          onKeyDown={keyclicked}
        />
          <Button variant="info" onClick={prepareschedule}>Submit</Button>{' '}
      </InputGroup>
        {teams.map(team => (
          <>
            <span className='capsule'>{team}
              <CloseButton className='remove' onClick={()=>removeTeam(team)}/>
            </span>

          </>
        ))}
         <h2 className='error'>{errormsg}</h2>
         {/* <MatchTable/> */}
          {!errormsg && <Schedule teams={teams}/>}
        {!errormsg && <Button style={{ textAlign:"center",color:"black" }} variant="info" onClick={()=>window.print()}>Print</Button>}
      </div>
     
      </>
  )
  } 

export default App
// Shortcuts
//   press r to restart the server
//   press u to show server url
//   press o to open in browser
//   press c to clear console
//   press q to quit

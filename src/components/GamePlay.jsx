import React, { useEffect, useState } from 'react'
import TotalScore from './TotalScore'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rule'

const GamePlay = () => {
    const [selectedNumber,setSelectedNumber]=useState()
    const [currentDice,setCurrentDice]=useState(1)
    const [score,setScore]=useState(0)
    const[error,setError]=useState("")
    const[showRules,setShowrules]=useState(false)

    const generateRandomNumber=(min,max)=>{
        return Math.ceil(Math.random()*(max-min)+min)
    }
    const roleDice=()=>{
        if(!selectedNumber){
            setError("You have not selected any number")
            return;
        }
        setError()
        const randomNumber=generateRandomNumber(1,6)
        setCurrentDice(randomNumber)
        if(randomNumber===selectedNumber){
            setScore((prev)=>prev+selectedNumber)

        }else{
            setScore((prev)=>prev-2)

        }
        setSelectedNumber()
    }
      
    const toggle=()=>{
    if(showRules===false){
        setShowrules(true)
    }else{
        setShowrules(false)
    }
    }

  return (
<MainContainer>
    <div className='top_section'>
    <TotalScore score={score}/>
    <NumberSelector selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber} error={error}/>
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/> 
    <div className='btn'>
        <OutlineButton onClick={()=>setScore(0)}>Reset</OutlineButton>
        <Button onClick={toggle}>   {showRules ? "Hide" : "Show"} Rules</Button>
    </div>
    {showRules&&<Rules/>}

</MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.div`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }
`
const Button=styled.button`
     color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
  
`
//allproperties of button here come
const OutlineButton=styled(Button)`
margin-top: 40px;
background-color: white;
border: 1px solid black;
color: black;
&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`
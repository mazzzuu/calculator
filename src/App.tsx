import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT :'add-digit',
  CHOOSE_OPERATIONS:'choose-operations',
  EVALUATE:'evaluate',
  CLEAR :'clear',
  DELETE : 'delete-digit'
}

function reducer(state: any,{type,payload}: any){
  switch(type){
    case ACTIONS.ADD_DIGIT :
      if(payload.digit === "0" && state.currentOperand === "0") return state;
      if(payload.digit === "." && state.currentOperand.includes(".")) return state;
      return {
        ...state,
        currentOperand: `${ state.currentOperand || ""}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATIONS :
      if(state.currentOperand==null && state.previousOperand ==null){
        return state;
      }
      if(state.currentOperand == null){
        return{
          ...state,
          currentOperand: payload.operation
        }
      }
      if(state.currentOperand!=null){
        return{
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand : null
        }
      }
      return{
        ...state,
        operation:payload.operation,
        previousOperand: evaluate(state),
        currentOperand : null
      }
    case ACTIONS.CLEAR :
      return {}
    case ACTIONS.DELETE:
      return{}
    case ACTIONS.EVALUATE :
  }
}

export default function main() {
  const[ {currentOperand,previousOperand,operation} ,dispatch] = useReducer(reducer, {})


  return (
    <>
    {/* metto lo sfondo e dispondo la poszione  */}
      <div className="flex justify-center min-h-screen bg-gradient-to-r bg-blue-400 to-green-400">
      {/* creo la classe calcolatrice metto il margine la griglia, la grandezza della griglia, metto l'oggeto al centro, bordino e la altezza e la grandezza */}
        <div className="calcolatrice m-16 grid grid-cols-4 grid-rows-6 object-center border-2 h-[600px] w-[500px] break-words ">
          {/* classe output con sfondo blac opacizzato al 75% li metto in colonna e li metto alla fine con uno spazio tra i due e metto che è grande 4 colonne */}
          <div className="output bg-black/75 flex flex-col items-end justify-around col-span-4 p-3">
            <div className="previous-operand white text-white opacity-75 text-2xl ">{previousOperand} {operation}</div>
            <div className="current-operand text-white text-4xl ">{currentOperand}</div>
          </div>
          <button onClick={()=> dispatch({type: ACTIONS.CLEAR})} 
          className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none col-span-2">AC</button>
          <button onClick={()=> dispatch({type: ACTIONS.DELETE})} className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >DEL</button>
          <OperationButton dispatch={dispatch} operation="/"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" ></OperationButton>
          <DigitButton dispatch={dispatch} digit="1"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >1</DigitButton>
          <DigitButton dispatch={dispatch} digit="2"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >2</DigitButton>
          <DigitButton dispatch={dispatch} digit="3"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >3</DigitButton>
          <OperationButton dispatch={dispatch} operation="*"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >*</OperationButton>
          <DigitButton dispatch={dispatch} digit="4"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >4</DigitButton>
          <DigitButton dispatch={dispatch} digit="5"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >5</DigitButton>
          <DigitButton dispatch={dispatch} digit="6"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >6</DigitButton>
          <OperationButton dispatch={dispatch} operation="-"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >-</OperationButton>
          <DigitButton dispatch={dispatch} digit="7"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >7</DigitButton>
          <DigitButton dispatch={dispatch} digit="8"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >8</DigitButton>
          <DigitButton dispatch={dispatch} digit="9"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >9</DigitButton>
          <OperationButton dispatch={dispatch} operation="+"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >+</OperationButton>
          <DigitButton dispatch={dispatch} digit="."  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >.</DigitButton>
          <DigitButton dispatch={dispatch} digit="0"  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" >0</DigitButton>
          <OperationButton dispatch={dispatch} operation="="  style="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none col-span-2" >=</OperationButton>
        </div>
      </div>
    </>
  );
}



function evaluate({currentOperand,previousOperand,operand}:any) {
  const curr = parseFloat(currentOperand)
  const prev = parseFloat(previousOperand)
  if(isNaN(curr) || isNaN(prev))
    return "errorone"
  let computaion 
    switch(operand){
      case "+":
        computaion = prev+curr;
        break;
      case "-":
        computaion = prev-curr;
        break;
      case "/":
        computaion = prev/curr;
        break;
      case "*":
        computaion = prev*curr;
        break;
    }
  return computaion?.toString();
}

export default function main() {
  return (
    <>
    {/* metto lo sfondo e dispondo la poszione  */}
      <div className="flex justify-center min-h-screen bg-gradient-to-r bg-blue-400 to-green-400">
      {/* creo la classe calcolatrice metto il margine la griglia, la grandezza della griglia, metto l'oggeto al centro, bordino e la altezza e la grandezza */}
        <div className="calcolatrice m-16 grid grid-cols-4 grid-rows-6 object-center border-2 h-[600px] w-[500px] break-words ">
          {/* classe output con sfondo blac opacizzato al 75% li metto in colonna e li metto alla fine con uno spazio tra i due e metto che è grande 4 colonne */}
          <div className="output bg-black/75 flex flex-col items-end justify-around col-span-4 p-3">
            <div className="primo-operando white text-white opacity-75 text-2xl "></div>
            <div className="secondo-operando text-white text-4xl "></div>
          </div>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none col-span-2" onClick={()=>stampa("AC")}>AC</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("DEL")}>DEL</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("/")}>/</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("1")}>1</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("2")}>2</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("3")}>3</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("*")}>*</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("4")}>4</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("5")}>5</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("6")}>6</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("-")}>-</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("7")}>7</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("8")}>8</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("9")}>9</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("+")}>+</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa(".")}>.</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none" onClick={()=>stampa("0")}>0</button>
          <button className="cursor-pointer bg-white/75 text-[2rem] border-white border-[1px] hover:bg-white/45 focus:bg-white/45 outline-none col-span-2" onClick={()=>stampa("=")}>=</button>
        </div>
      </div>
    </>
  );
}

function stampa(carattere : string) {
  console.log(carattere)
  return null;
}
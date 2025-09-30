export default function main() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-amber-300">
        <div className="calcolatrice m-16 grid grid-cols-4 object-center bg-blue-600 border-2 border-amber-500 h-96 w-80">
          <div className="output bg-black flex flex-row-reverse col-span-4 ">
            <div className="primo white text-white">1</div>
            <div className="secondo text-white">2</div>
          </div>
          <button className="bg-emerald-200 font-bold font-mono font-xl col-span-2 border-white border">AC</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border ">DEL</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">/</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">1</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">2</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">3</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">*</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">4</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">5</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">6</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">-</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">7</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">8</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">9</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">+</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">.</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl border-white border">0</button>
          <button className="bg-emerald-200 font-bold font-mono font-xl col-span-2 border-white border">=</button>
        </div>
      </div>
    </>
  );
}

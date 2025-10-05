import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit, style }: any) {
  return (
    <button
      className={style}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

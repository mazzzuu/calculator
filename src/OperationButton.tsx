import { ACTIONS } from "./App";

export default function OperationButton({ dispatch, operation, style }: any) {
  return (
    <button
      className={style}
      onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATIONS,payload: { operation } })}
    >
      {operation}
    </button>
  );
}

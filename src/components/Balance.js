import {useRecoilValue} from "recoil";
import {balanceState} from "../recoil/selectors";

export const Balance = () => {
  const balance = useRecoilValue(balanceState)

  return(
    <>
      <h4>Your balance</h4>
      <h1>{balance}</h1>
    </>
  )
}
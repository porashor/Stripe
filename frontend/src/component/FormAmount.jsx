import { paymenthandle } from "../store/paymentZust"
import { VscLoading } from "react-icons/vsc";
const FormAmount = () => {
  const {amount, currency, loading, setAmount, setCurrency, getClient} = paymenthandle()
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      {/* card  */}
      <form onSubmit={(e)=>getClient(e, amount, currency)} className='w-[300px] min-h-[100px] flex flex-col gap-5 bg-blue-300 border border-slate-300 shadow-md rounded-md p-5'>
        <h1 className="text-white text-xl font-bold text-center pb-1">Deposit Money</h1>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='py-2 rounded outline-none focus:ring text-black px-2' />
        <select onChange={(e)=>setCurrency(e.target.value)} className='py-2 rounded outline-none focus:ring text-black px-2'>
            <option value="bdt">BDT</option>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
        </select>
        <button type="submit" className='bg-white text-black py-2 rounded hover:bg-blue-600 hover:text-white transition-all linear duration-300'>{loading ? <VscLoading className="text-xl font-bold animate-spin w-full"/> : "Deposit" }</button>
      </form>
    </div>
  )
}

export default FormAmount

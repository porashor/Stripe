import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import {paymenthandle} from '../store/paymentZust.jsx'



const DepositeForm = () => {
    const {confirmOrder} = paymenthandle()
    const striper = useStripe()
    const elementer = useElements()
const handle = async (e) => {
    e.preventDefault()
    const cardElement = elementer.getElement(CardNumberElement);
    confirmOrder(striper, cardElement)
}

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        {/* card  */}
      <form className='w-[300px] min-h-[100px] flex flex-col gap-5 bg-blue-300 border border-slate-300 shadow-md rounded-md p-5'>
        <h1 className="text-white text-xl font-bold text-center pb-1">Via card</h1>
        <CardNumberElement className='py-2 rounded outline-none focus:ring text-black px-2 bg-white ' />
        <CardExpiryElement className='py-2 rounded outline-none focus:ring text-black px-2 bg-white ' />
        <CardCvcElement className='py-2 rounded outline-none focus:ring text-black px-2 bg-white ' />
        <button onClick={(e)=>handle(e)} className='bg-white text-black py-2 rounded hover:bg-blue-600 hover:text-white transition-all linear duration-300'>Send</button>
      </form>
    </div>
  )
}

export default DepositeForm

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const DepositeForm = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Elements stripe={stripePromise}>
        {/* card  */}
      <form className='w-[300px] min-h-[100px] flex flex-col gap-5 bg-blue-300 border border-slate-300 shadow-md rounded-md p-5'>
        <h1 className="text-white text-xl font-bold text-center pb-1">Via card</h1>
        <CardNumberElement className='py-2 rounded outline-none focus:ring text-black px-2 bg-white ' />
        <CardExpiryElement className='py-2 rounded outline-none focus:ring text-black px-2 bg-white ' />
        <CardCvcElement className='py-2 rounded outline-none focus:ring text-black px-2 bg-white ' />
        <button className='bg-white text-black py-2 rounded hover:bg-blue-600 hover:text-white transition-all linear duration-300'>Send</button>
      </form>
      </Elements>
    </div>
  )
}

export default DepositeForm

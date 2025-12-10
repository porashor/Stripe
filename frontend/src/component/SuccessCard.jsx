import { FaCheck } from "react-icons/fa";
const SuccessCard = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[300px] aspect-square flex flex-col gap-5 bg-blue-300 border border-slate-300 shadow-md rounded-md p-5 flex items-center justify-center'>
            <div className='bg-green-400 w-[100px] aspect-square rounded-full shadow-xl flex items-center justify-center animate-bounce duration-1000'>
                <FaCheck className='text-3xl text-white'/>
            </div>
            <h1 className='text-white text-xl font-bold'>Payment success</h1>
        </div>
    </div>
  )
}

export default SuccessCard

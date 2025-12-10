import { create } from 'zustand'


export const paymenthandle = create((set) => ({
    amount: 0,
    currency: "usd",
    setCurrency: (currency) => set({ currency }),
    setAmount: (amount) => set({ amount }),
    loading: false,
    getClient: async(e, amount, currency) => {
        e.preventDefault()
        console.log(amount, currency)
        set({loading: true})
        try {
            const res = await fetch( import.meta.env.VITE_PORT_LINK + "/session",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount, currency
                })
            })
            const data = await res.json()
            if(data.clientSecret){
                localStorage.setItem("clientSecret", data.clientSecret)
                window.location.href = "/deposit"
            }
        } catch (error) {
            console.log(error)
        }finally{
            set({loading: false})
        }
    },
    confirmOrder: async (striper, cardElement)=>{
        set({loading: true})
        try{
            const clinetsec = localStorage.getItem("clientSecret")
            if(clinetsec){
                const {error, paymentIntent} = await striper.confirmCardPayment(clinetsec, {
                    payment_method: {
                        card: cardElement
                    }
                })
                    if (error) {
                        window.location.href = "/cancel"
                    } else if (paymentIntent.status === "succeeded") {
                        console.log("✅ Payment confirmed:", paymentIntent.id);
                        window.location.href = "/success"
                        localStorage.removeItem("clientSecret")
                    }
            }else{
                alert("something went wrong")
                window.location.href = "/"
            }
            
        }catch(error){
            console.log(error)
        }finally{
            set({loading: false})
        }
    }
}))
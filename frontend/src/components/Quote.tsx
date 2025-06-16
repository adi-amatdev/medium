import { toast } from "react-toastify"


const Quote = () => {
  toast.info( <>
      For testing please use:
      <br />
      Email: user@gmail.com
      <br />
      Password: password
    </>,{
    delay: 100,
    autoClose: 10000,
    position:'top-right',
    toastId:'test-credentials'
  })
  return (
    <div className="hidden bg-slate-200 lg:h-screen lg:flex lg:justify-center lg:flex-col">
        <div className="mx-10 flex justify-center">
           <div className="max-w-lg text-left align-center ">
                 <p className="text-2xl font-medium">
                "The customer service I recieved was exceptional. The support team went above and beyond to address my concerns."
                </p>
                <div className="font-semibold mt-3">
                    James Doe
                </div>
                <div className="text-slate-400">
                    CEO, Nowhere Inc
                </div>
           </div>
        </div>
    </div>
  )
}

export default Quote

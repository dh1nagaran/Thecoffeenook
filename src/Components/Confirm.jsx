import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Confirm = () => {

    const [otpcheck, setOtpcheck] = useState("")
    const [generate, setGenerate] = useState(" ");
    const [status, setStatus] = useState("")


    function getotp() {
        const otp = Math.floor(1000 + Math.random() * 9000)
        setGenerate(otp);
        window.alert(otp);
    }
    let handle = (event) => {
        setOtpcheck(event.target.value)
    }

    let handlesubmit = () => {
        if (generate == otpcheck) {
            setStatus("success")
        }
        else {
            setStatus("fail")
        }

    }




    return (
        <div className='otp-container'>
            <div>

            </div>
            <div className='otp-contain'>
                <h1>ENTER OTP TO CONFIRM YOUR ORDER</h1>
                <input type='text' maxLength='4' value={otpcheck} onChange={handle} />
                <button onClick={getotp} >Get otp</button>
                <button onClick={handlesubmit}>Submit</button>
            </div>
            <div>
                {


                    useEffect(() => {
                        status === "success" &&
                            Swal.fire({
                                title: 'Success',
                                text: 'Order confirmed',
                                icon: 'success',
                                confirmButtonText: 'OK'

                            })

                    }, [status])
                }
            </div>
            <div>
                {
                    useEffect(() => {

                        status === "fail" &&
                            Swal.fire({
                                title: "Error",
                                text: "Wrong OTP ",
                                icon: "error",
                                confirmButtonText: "Retry",

                            })
                    }, [status])
                }


            </div>
        </div>

    )
}

export default Confirm
/* eslint-disable react/jsx-key */
import { FormEvent, useState } from 'react'
import { useMultistepForm } from './useMultistepForm'
import Name from './Name'
import Details from './Details'
import Complaints from './Complaints'
import Prev_exp from './Prev_exp'

import { useRouter } from 'next/router'

type FormData ={
    name: string
    phoneno: string
    age: string
    city: string
    company: string
    complaints: string
    prev_exp: string
}

const INITIAL_DATA: FormData = {
    name: "",
    phoneno: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    prev_exp: "",
}


const Form_v2 = () => {

    const router = useRouter()

    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>){
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next,  } = useMultistepForm([
    <Name {...data} updateFields={updateFields}/>,
    <Details {...data} updateFields={updateFields} />,
    <Complaints {...data} updateFields={updateFields}/>,
    <Prev_exp {...data} updateFields={updateFields}/>
])
    function onSubmit(e: FormEvent){
        e.preventDefault()
        // console.log(currentStepIndex)
        // console.log(data.age)
        if(!isLastStep) return next(currentStepIndex, data.age)
        router.push(`/doctors/${data.city}`)
        // alert("Booking Successful")
    }

  return (
    <div className="">
        <div className="relative bg-formBg rounded-md p-6 m-[1rem] border-[1px] border-white ">
        <form onSubmit={onSubmit}>
                {/* <div className="absolute top-[.5rem] right-[.5rem]">
                    Step {currentStepIndex + 1}
                </div> */}
                {step}
                <div className="mt-[1rem] flex gap-[.5rem] justify-end">
                    {!isFirstStep && (
                        <button type="button" onClick={back} className="h-11 px-6 bg-cyan-400 text-black rounded-md">
                            Back
                        </button>
                    )}
                    <button type="submit" className="h-11 px-6 bg-cyan-400 text-black rounded-md">
                        {isLastStep ? "Finish" : "Next" }
                    </button>
                </div>
        </form>
        </div>
    </div>
  )
}

export default Form_v2

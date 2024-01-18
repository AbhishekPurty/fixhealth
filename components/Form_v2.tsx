/* eslint-disable react/jsx-key */
import { FormEvent, useState } from 'react'
import { useMultistepForm } from './useMultistepForm'
import Name from './Name'
import Details from './Details'
import Complaints from './Complaints'
import Prev_exp from './Prev_exp'

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
        if(!isLastStep) return next()
        alert("Booking Successful")
    }

  return (
    <div className="relative bg-gray-700 rounded-md p-6 m-[4rem] border-[1px] border-white">
      <form onSubmit={onSubmit}>
            <div className="absolute top-[.5rem] right-[.5rem]">
                {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div className="mt-[1rem] flex gap-[.5rem] justify-end">
                {!isFirstStep && (
                    <button type="button" onClick={back} className="h-11 px-6 bg-black rounded-md">
                        Back
                    </button>
                )}
                <button type="submit" className="h-11 px-6 bg-black rounded-md">
                    {isLastStep ? "Finish" : "Next" }
                </button>
            </div>
      </form>
    </div>
  )
}

export default Form_v2

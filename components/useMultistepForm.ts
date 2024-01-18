import { ReactElement, useState } from "react"

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [end, setEnd ] = useState(1)
  
  function next(currentStep:number, age:string) {
    let temp:number
    temp = age as unknown as number
    setCurrentStepIndex(i => {
        if (temp<40 && currentStep===steps.length-3){
            setEnd(2)
        }
        else if(temp>=40 && currentStep===steps.length-3){
            setEnd(1)
        }
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - end,
    goTo,
    next,
    back,
  }
}
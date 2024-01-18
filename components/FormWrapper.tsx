import { ReactNode } from 'react'
type Props ={
    title: string
    children: ReactNode
}

const FormWrapper = ({ title, children }: Props) => {
  return (
    <div className="flex-col items-center justify-center">
      <h2 className="flex items-center justify-center text-5xl text-cyan-400 font-semibold">{title}</h2>
      <div className="flex justify-start flex-col gap-2">{children}</div>
    </div>
  )
}

export default FormWrapper

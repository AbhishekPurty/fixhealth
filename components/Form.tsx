import Name from "./Name"

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
        <div className="flex flex-col p-6 bg-gray-700 rounded-md">
        <h1 className="flex items-center justify-center text-5xl text-cyan-400 font-semibold">Book an appointment.</h1>
        <Name />
      </div>
    </div>
  )
}

export default Form

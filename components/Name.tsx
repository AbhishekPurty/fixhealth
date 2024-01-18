import FormWrapper from "./FormWrapper"

type UserData = {
  name: string
  phoneno: string
}

type Props = UserData &{
    updateFields: (fields: Partial<UserData>)  => void
}

const Name = ({name, phoneno, updateFields }: Props) => {

  return (
    <div>
      <FormWrapper title="Book an appointment">
      <label htmlFor="name">Name</label>
            <input
                autoFocus
                required
                id="name"
                type="text"
                placeholder="Name"
                className="h-11 px-4 border rounded-md bg-cyan-800"
                value={name}
                onChange = {e => updateFields({name: e.target.value})}
            />
        <label htmlFor="phoneno">Phone No.</label>
            <input
                required
                id="phoneno"
                type="number"
                placeholder="Phone No."
                className="h-11 px-4 border rounded-md bg-cyan-800"
                value={phoneno}
                onChange = {e => updateFields({phoneno: e.target.value})}
            />
          </FormWrapper>
    </div>
  )
}

export default Name

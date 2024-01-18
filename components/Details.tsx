import FormWrapper from './FormWrapper'

type AddressData = {
    age: string
    city: string
    company: string
  }
  
  type Props = AddressData &{
      updateFields: (fields: Partial<AddressData>)  => void
  }

const Details = ({age, city, company, updateFields}: Props) => {
  return (
    <div>
        <FormWrapper title="Book an appointment">
        <label htmlFor="age">Age</label>
            <input
                autoFocus
                required
                min={1}
                id="age"
                type="number"
                placeholder="Age"
                className="h-11 px-4 border rounded-md bg-cyan-800"
                value={age}
                onChange = {e => updateFields({age: e.target.value})}
            />
        <label htmlFor="city">City</label>
            <input
                required
                id="city"
                type="text"
                placeholder="City"
                className="h-11 px-4 border rounded-md bg-cyan-800"
                value={city}
                onChange = {e => updateFields({city: e.target.value})}
            />
        <label htmlFor="company">Company</label>
            <input
                required
                id="company"
                type="text"
                placeholder="Company"
                className="h-11 px-4 border rounded-md bg-cyan-800"
                value={company}
                onChange = {e => updateFields({company: e.target.value})}
            />
        </FormWrapper>
    </div>
  )
}

export default Details

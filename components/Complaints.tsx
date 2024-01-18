import FormWrapper from './FormWrapper'

type ComplaintData = {
  complaints: string
}

type Props = ComplaintData &{
    updateFields: (fields: Partial<ComplaintData>)  => void
}

const Complaints = ({complaints, updateFields}: Props) => {
  return (
    <div>
      <FormWrapper title="Book an appointment">
      <label htmlFor="complaints">Complaint</label>
            <input
                autoFocus
                required
                id="complaints"
                type="text"
                placeholder="Complaint"
                className="h-11 px-4 border rounded-md bg-formInput"
                value={complaints}
                onChange = {e => updateFields({complaints: e.target.value})}
            />
        </FormWrapper>
    </div>
  )
}

export default Complaints

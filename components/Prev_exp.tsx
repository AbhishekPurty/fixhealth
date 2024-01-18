import React from 'react'
import FormWrapper from './FormWrapper'

type PrevData = {
  prev_exp: string
}

type Props = PrevData &{
    updateFields: (fields: Partial<PrevData>)  => void
}

const Prev_exp = ({ prev_exp, updateFields}: Props) => {
  return (
    <div>
      <FormWrapper title="Book an appointment">
      <label htmlFor="prev_exp">Previous Experience with Physiotherapy</label>
            <input
                autoFocus
                required
                id="prev_exp"
                type="text"
                placeholder="Previous Experience with Physiotherapy"
                className="h-11 px-4 border rounded-md bg-cyan-800"
                value={prev_exp}
                onChange = {e => updateFields({prev_exp: e.target.value})}
            />
        </FormWrapper>
    </div>
  )
}

export default Prev_exp

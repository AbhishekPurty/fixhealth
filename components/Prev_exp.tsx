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
      <div className="flex flex-row gap-4">
      <label htmlFor="prev_exp">YES</label>
            <input
                autoFocus
                required
                id="prev_exp1"
                name="prev_exp"
                type="radio"
                placeholder=""
                className=""
                value={prev_exp}
                onChange = {e => updateFields({prev_exp: e.target.value})}
            />
            <label htmlFor="prev_exp">NO</label>
            <input
                required
                id="prev_exp0"
                name="prev_exp"
                type="radio"
                placeholder=""
                className=""
                value={prev_exp}
                onChange = {e => updateFields({prev_exp: e.target.value})}
            />
            </div>
        </FormWrapper>
    </div>
  )
}

export default Prev_exp

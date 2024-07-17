import React from 'react'

export default function TextForm() {
  return (
      <div className="my-3">
          <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Text Area</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
          <button type="button" className="btn btn-primary mx-1">Click for Upper</button>
          <button type="button" className="btn btn-primary mx-1">Click for Lower</button>
      </div>
  )
}

import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={x.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
        <form onSubmit={props.newBudget}>
          <label>Would you like to add more funds?</label>
          <input name="moreFunds" type='number' min='0' value={props.moreFunds} placeholder="How much?" onChange={props.addMoreFunds}></input>
          <input type='submit'></input>
        </form>
      </h1>
  

      <div className="table">
        <div className="stack">
          {
            renderPlates(props.emptyPlates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
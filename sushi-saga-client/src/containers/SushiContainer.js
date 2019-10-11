import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushis = () => {
    return props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} changeEaten={props.changeEaten}/>)
  };

  return (
    <Fragment>
      <div className="belt">
        { renderSushis() }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  );

}

export default SushiContainer
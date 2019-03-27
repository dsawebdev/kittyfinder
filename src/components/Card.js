import React from 'react';

const Card = ({ fullName, email, id, catchPhrase }) => {
  return(
    <div className='bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="Kittys" />
      <div>
      <h2>{ fullName }</h2>
      <p>{ email }</p>
      </div>
    </div>
  )
}

export default Card;
import React, { useEffect, useState } from 'react';


function Solde() {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/solde')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <span className='solde'>
            {data.length > 0 && data.map((d) => (
                d.solde
            ))}
        </span>
    </div>
  )
}

export default Solde
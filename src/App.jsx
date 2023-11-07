import React, { useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.username}</td>
                        <td>{d.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default App
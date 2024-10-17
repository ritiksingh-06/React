import React from 'react'

const Content = ({data1, quarry}) => {
  return (
    <div className='content'>
        <table>
          <tbody>
            {data1.map((element) => (
                // <li key={element.id}>{JSON.stringify(element)}</li>

              quarry === "users" ?
                <tr key={element.id}>
                  <td>{JSON.stringify(element.id)}</td>
                  <td>{JSON.stringify(element.name)}</td>
                  <td>{JSON.stringify(element.username)}</td>
                  <td>{JSON.stringify(element.email)}</td>
                  <td>{JSON.stringify(element.address)}</td>
                  <td>{JSON.stringify(element.phone)}</td>
                  <td>{JSON.stringify(element.website)}</td>
                  <td>{JSON.stringify(element.company)}</td>
                </tr>
              : quarry === "posts" ?
                <tr key={element.id}>
                  <td>{JSON.stringify(element.userId)}</td>
                  <td>{JSON.stringify(element.id)}</td>
                  <td>{JSON.stringify(element.title)}</td>
                  <td>{JSON.stringify(element.body)}</td>
                </tr>
              : <tr key={element.id}>
                  <td>{JSON.stringify(element.postId)}</td>
                  <td>{JSON.stringify(element.id)}</td>
                  <td>{JSON.stringify(element.name)}</td>
                  <td>{JSON.stringify(element.email)}</td>
                  <td>{JSON.stringify(element.body)}</td>
                </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Content
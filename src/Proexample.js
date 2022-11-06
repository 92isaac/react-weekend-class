import React, { Component } from 'react'
import Third from './components/Third'


const micheal={
    display: 'flex',
    // justifyContent: 'space-between',
  }
export class Proexample extends Component {
  render() {
    return (
      <div className='micheal' style={micheal}>
         <Third 
      name="Esther Michael" 
      title="Frontend Developer" 
      bio='Lorem ipsum dolor sit,  '
      desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima quas, laborum quos iste iusto deserunt reiciendis labore minus quam soluta modi sint nisi earum rerum repudiandae impedit culpa? Eligendi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima quas, laborum quos iste iusto deserunt reiciendis labore minus quam soluta modi sint nisi earum rerum repudiandae impedit culpa? Eligendi.'
      />

      <Third 
      name="Olusegun Okoh"
      title="Full-Stack Developer"
      bio='amet consectetur adipisicing elit.'
      desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima quas, laborum quos iste iusto deserunt reiciendis labore minus quam soluta modi sint nisi earum rerum repudiandae impedit culpa? Eligendi.Lorem ipsum dolor sit, amet'

      />
      </div>
    )
  }
}

export default Proexample
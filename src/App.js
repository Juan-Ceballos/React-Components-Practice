/*
// React Class Component

import { Component } from 'react/cjs/react.production.min';

class Hello extends Component {
  constructor() {
    super()

    this.name = "Jimmy"
  }

  render() {
    return <h1>Hello {this.name}</h1>
  }
}
*/

// -----------------------------------------------------

/*
// Functional Component, same as above refactored

function Hello() {
  const name = "Jimmy"
  return <h1>Hello {name}</h1>
}

export default Hello
*/

// -----------------------------------------------------

/*
// Q1) Exercise one React Class Component to Functional Component

import { Component } from 'react'

class BookList extends Component {
  constructor() {
    super()

    this.titles = ["moby dick", "the great gatsby", "of mice and men"]
  }
  render() {
    return (
      <ul className="book-titles">
        {this.titles.map(title => <li>{title}</li>)}
      </ul>
    )
  }
}

export default BookList
*/

/*
// A1)
function BookList() {
  let titles = ["moby dick", "the great gatsby", "of mice and men"]

  return <ul className="book-titles">
          {titles.map(title => <li>{title}</li>)}
  </ul>
}

export default BookList
*/

//----------------------------------------------------------------

/*
// Q2) Refactor
function Card() {
  const cardTitle = "Song Info"
  const author = "Andrew Bird"
  const songTitle = "Danse Caribe"
  const description = "A wonderful song off of the album 'Break it yourself'"

  return (
    <div className="card">
      <h1 className="card-title">{cardTitle}</h1>
      <h2 className="author-title">{author} - {songTitle}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
*/

// A3)
import { Component } from 'react'
class Card extends Component {
  constructor() {
    super()

    this.cardTitle = "Song Info"
    this.author = "Andrew Bird"
    this.songTitle = "Danse Caribe"
    this.description = "A wonderful song off of the album 'Break it yourself'"
  }

  render() {
    return <div className="card">
      <h1 className='card-title'>{this.cardTitle}</h1>
      <h2 className='author-title'>{this.author} - {this.songTitle}</h2>
      <p>{this.description}</p>
    </div>
  }
}

export default Card


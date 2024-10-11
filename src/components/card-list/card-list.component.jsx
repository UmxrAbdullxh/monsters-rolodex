import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'

class CardList extends Component {
  render() {
    return (
      <div className='card-list'>
        {
          this.props.monsters.map((monster, i) => {
            return (
              <Card monster={monster} />
            )
          })
        }
      </div>
    )
  }
}

export default CardList;

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardList from './card-list.component';
import Card from '../card/card.component';

jest.mock('../card/card.component.jsx', () => ({ monster }) => <div>{monster.name}</div>);

describe('test card-list', () => {

  const mockData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }]


  test('test card list component', () => {
    render(<CardList monsters={mockData} />)

    const renderedCards = screen.getAllByText(/Ervin|Leanne/i);

    expect(renderedCards).toHaveLength(mockData.length)

  })

  test('test correct name rendered', () => {

    render(<CardList monsters={mockData} />)

    mockData.forEach(monster => {
      expect(screen.getByText(monster.name)).toBeInTheDocument()
    })
  })
})


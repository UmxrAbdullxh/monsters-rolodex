import { fireEvent, render, screen } from '@testing-library/react';
import SearchBox from './search-box.component';

test('test search-box placeholder', () => {
  const placeHolder = 'search monsters'
  const onSearchHandler = () => { }
  render(<SearchBox placeholder={placeHolder} onSearchHandler={onSearchHandler} />);

  const inputElement = screen.getByPlaceholderText(placeHolder)
  expect(inputElement).toBeInTheDocument()
});

test('calls onSearchHandler when input changes', () => {
  const onSearchHandler = jest.fn()
  render(<SearchBox placeholder="Search" onChangeHandler={onSearchHandler} />);

  const inputElement = screen.getByPlaceholderText("Search")
  fireEvent.change(inputElement, { target: { value: 'test' } })


  expect(onSearchHandler).toHaveBeenCalledTimes(1)

})

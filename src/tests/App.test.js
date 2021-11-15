import { render, screen } from './test-utils'
import App from '../pages/App'
import userEvent from '@testing-library/user-event'

test('rendering history page on link click', () => {
  render(<App />)
  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/history/i), leftClick)
  expect(screen.getAllByTestId('history-page')).toHaveLength(1)
})

test('rendering Home page on logo click', () => {
  render(<App />)
  const leftClick = { button: 0 }
  userEvent.click(screen.getByAltText(/company logo/i), leftClick)
  expect(screen.getAllByTestId('home-page')).toHaveLength(1)
})

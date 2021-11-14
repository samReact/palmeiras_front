import { render, screen } from './test-utils'
import App from '../pages/App'

test('renders two navigation link', () => {
  render(<App />)
  const linkElement = screen.getAllByRole('link')
  expect(linkElement).toHaveLength(2)
})

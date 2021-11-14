import { render, screen } from './test-utils'
import NavBar from '../parts/NavBar'

test('renders two navigation link', () => {
  render(<NavBar />)
  const linkElement = screen.getAllByRole('link')
  expect(linkElement).toHaveLength(2)
})

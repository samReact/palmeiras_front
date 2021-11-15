import { render, screen } from './test-utils'
import { ProductionButtons } from '../parts/ProductionButtons'

test('renders six buttons', () => {
  render(<ProductionButtons />)
  const element = screen.getAllByRole('button')
  expect(element).toHaveLength(6)
})

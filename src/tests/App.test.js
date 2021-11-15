import { render, screen } from './test-utils'
import App from '../pages/App'
import userEvent from '@testing-library/user-event'

describe('<App />', () => {
  const leftClick = { button: 0 }

  beforeEach(() => {
    render(<App />)
  })

  describe('when page is initialized', () => {
    it('then shows the home page by default', () => {
      expect(screen.getByTestId('home-page')).toBeTruthy()
    })
  })

  describe('when the history link is clicked', () => {
    beforeEach(() => {
      userEvent.click(screen.getByText(/history/i), leftClick)
    })

    it('then render history page', () => {
      expect(screen.getByTestId('history-page')).toBeTruthy()
    })
  })
})

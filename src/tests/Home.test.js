import { render, screen } from './test-utils'
import { fireEvent } from '@testing-library/react'
import Home from '../pages/Home'

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />)
  })

  describe('when changing to 10 empoyees input value', () => {
    beforeEach(() => {
      const inputElement = screen.getByTestId('employee-input')
      fireEvent.change(inputElement, { target: { value: 10 } })
    })

    it('then modify tires capacity production value to 50', async () => {
      const inputElement = await screen.findByTestId('tires')
      expect(inputElement.value).toEqual('50')
    })

    it('then modify doors capacity production value to 10', async () => {
      const inputElement = await screen.findByTestId('doors')
      expect(inputElement.value).toEqual('10')
    })

    it('then modify chassis capacity production value to 5', async () => {
      const inputElement = await screen.findByTestId('chassis')
      expect(inputElement.value).toEqual('5')
    })

    it('then modify engines capacity production value to 3.3', async () => {
      const inputElement = await screen.findByTestId('engines')
      expect(inputElement.value).toEqual('3.3')
    })
  })
})

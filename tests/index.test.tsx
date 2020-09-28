import { render, waitFor } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Index from '../pages/index'

describe('Index', () => {
  it('renders without crashing', async () => {
    render(<Index />)

    // Stubs
    window.HTMLMediaElement.prototype.play = () => { return Promise.resolve(undefined) };
    window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

    await waitFor(() => {
      expect(screen.getAllByText('Julius Villamayor'))
    })
  })
})

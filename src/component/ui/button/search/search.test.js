import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';

test('calls change handler on input',()=>{
    const mockChange = jest.fn()
    render(<Search inputValue='' changeValue={mockChange} ref={null} />)
    const input = screen.getByPlaceholderText(/search/i)
    fireEvent.change(input, {target:{ value:'test'}})
    expect(mockChange).toHaveBeenCalledTimes(1)
})
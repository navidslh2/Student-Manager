import '@testing-library/jest-dom'
import React from 'react'
import Backdrop from './Backdrop'
import {render, screen} from '@testing-library/react'

describe('<Backdrop>', ()=>{
    it ('renders nothing when show is false',()=>{
        const {container} = render(<Backdrop show={false}/>)
        expect (container.firstChild).toBeNull()
    })
    it('renders backdrop when show is true', ()=>{
        const mockBackdropClick = jest.fn()
        render(<Backdrop show={true} backdropClick={mockBackdropClick}/>)
        const backdropElement = screen.getByTestId('backdrop')
        expect (backdropElement).toBeInTheDocument()
    })
})

import '@testing-library/jest-dom'
import React from 'react'
import Backdrop from './Backdrop'
import {render, screen} from '@testing-library/react'

describe('<Backdrop>', ()=>{
    it ('renders nothing when show is false',()=>{
        const {container} = render(<Backdrop />)
        expect (container.firstchild).toBenull()
    })
    it('renders backdrop when show is true', ()=>{
        const backdropElement = screen.getByTestId('backdrop')
        expect (backdropElement).toBeInTheDocument()
    })
})

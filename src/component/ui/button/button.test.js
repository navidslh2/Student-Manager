import Button from "./button";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

test('<Button /> calls clicked prop on click',()=>{
    const handlerClick = jest.fn()
    render (<Button clicked={handlerClick}>click</Button>)
    const buttonElement = screen.getByRole('button', {name:/click/i})
    fireEvent.click(buttonElement)
    
    expect(handlerClick).toHaveBeenCalledTimes(1)
})

import '@testing-library/jest-dom'
import Modal from './Modal'
import { render, screen, fireEvent, queryByText } from '@testing-library/react';

describe('modal',()=>{
    test('should not render when show is false',()=>{
        const mockClick = jest.fn()
        render(<Modal show={false} backdropClick={mockClick}>modal children</Modal>)
        const modal = screen.queryByText('modal children')
        expect(modal).not.toBeInTheDocument()
    })
})

// describe('modal',()=>{
//     test('should not render when show is false',()=>{
//         const mockClick = jest.fn();
//         render(<Modal  show={false} backdropClick={mockClick}>children</Modal>)
//         const modal = screen.queryByText('children')
//         expect(modal).not.toBeInTheDocument()
//     })
// })

// describe('Modal Component', () => {
//   const mockClick = jest.fn();

//   test('should not render when show is false', () => {
//     render(
//       <Modal show={false} backdropClick={mockClick}>
//         <div>Test Modal</div>
//       </Modal>
//     );

//     // Modal should not be in the document
//     const modal = screen.queryByText('Test Modal');
//     expect(modal).not.toBeInTheDocument();
//   });

//   test('should render when show is true', () => {
//     render(
//       <Modal show={true} backdropClick={mockClick}>
//         <div>Test Modal</div>
//       </Modal>
//     );

//     // Modal should be visible
//     const modal = screen.getByText('Test Modal');
//     expect(modal).toBeInTheDocument();
//   });

//   test('should call backdropClick when backdrop is clicked', () => {
//     render(
//       <Modal show={true} backdropClick={mockClick}>
//         <div>Test Modal</div>
//       </Modal>
//     );

//     // Click the backdrop
//     const backdrop = screen.getByTestId('backdrop');
//     fireEvent.click(backdrop);
//     expect(mockClick).toHaveBeenCalledTimes(1);
//   });
// });

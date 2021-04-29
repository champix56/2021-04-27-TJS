import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from './Button';

describe('<Button />', () => {
    test('is button mount', () => {
       render(<Button title="But" lorsqueJeClickSurLeBoutton={() => { }} />);
        const screenButton = screen.getByTestId('Button');
        expect(screenButton).toBeInTheDocument()
    })
    test('is button not empty', () => {
        render(<Button  lorsqueJeClickSurLeBoutton={() => { }} />);
        const screenButton = screen.getByTestId('Button');
        expect(screenButton).not.toBeEmptyDOMElement()
    })
})

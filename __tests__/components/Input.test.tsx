// __tests__/components/Input.test.tsx

import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';
import React from "react";

describe('Input', () => {
    test('should render input with label', () => {
        const { getByLabelText } = render(<Input label="Test Label" />);
        expect(getByLabelText('Test Label')).toBeInTheDocument();
    });

    test('should call onChange function when input value changes', () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<Input label="Test Label" onChange={onChange} />);

        fireEvent.change(getByLabelText('Test Label'), { target: { value: 'Test Value' } });

        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    });
});

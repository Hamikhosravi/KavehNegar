// __tests__/components/Textarea.test.tsx

import { render, fireEvent } from '@testing-library/react';
import Textarea from '../../components/TextArea';
import React from "react";

describe('Textarea', () => {
    test('should render textarea with label', () => {
        const { getByLabelText } = render(<Textarea label="Test Label" />);
        expect(getByLabelText('Test Label')).toBeInTheDocument();
    });

    test('should call onChange function when textarea value changes', () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<Textarea label="Test Label" onChange={onChange} />);

        fireEvent.change(getByLabelText('Test Label'), { target: { value: 'Test Value' } });

        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    });
});

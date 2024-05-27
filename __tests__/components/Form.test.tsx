import { render, fireEvent } from '@testing-library/react';
import Form from '../../components/Form';
import React from "react";

describe('Form', () => {
    test('should call onSave function with form data on submit', () => {
        const onSave = jest.fn();
        const { getByText, getByRole } = render(
            <Form onSave={onSave}>
                <input id="title" name="title" />
                <button type="submit">Submit</button>
            </Form>
        );

        fireEvent.change(getByRole('textbox', { name: '' }), { target: { value: 'Test Title' } });
        fireEvent.click(getByText('Submit'));

        expect(onSave).toHaveBeenCalledWith(expect.any(Object), { title: 'Test Title' });
    });
});

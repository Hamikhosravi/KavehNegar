// __tests__/components/MessagePortal.test.tsx

import { render, fireEvent } from '@testing-library/react';
import MessagePortal from '../../components/Modal';
import React from "react";

describe('MessagePortal', () => {
    test('should render message and OK button', () => {
        const message = { text: 'Test Message', status: 'successful' };
        const onClose = jest.fn();
        const { getByText } = render(<MessagePortal message={message} onClose={onClose} />);
        expect(getByText('Test Message')).toBeInTheDocument();
        fireEvent.click(getByText('OK'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});

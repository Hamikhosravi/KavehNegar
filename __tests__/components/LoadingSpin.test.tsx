// __tests__/components/LoadingSpin.test.tsx

import { render } from '@testing-library/react';
import LoadingSpin from '../../components/LoadingSpin';
import React from "react";

describe('LoadingSpin', () => {
    test('should render Loading... text', () => {
        const { getByText } = render(<LoadingSpin />);
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});

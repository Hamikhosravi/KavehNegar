// __tests__/components/Header.test.tsx

import { render } from '@testing-library/react';
import Header from '../../components/Header';
import React from "react";

describe('Header', () => {
    test('should render Home and Create Post links', () => {
        const { getByText } = render(<Header />);
        expect(getByText('Home')).toBeInTheDocument();
        expect(getByText('Create Post')).toBeInTheDocument();
    });
});

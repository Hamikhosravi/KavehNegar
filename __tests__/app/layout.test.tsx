import { render, screen } from '@testing-library/react';
import RootLayout from '../../app/layout';
import React from "react";

describe('RootLayout', () => {
    test('renders children wrapped in QueryClientProvider', () => {
        // Render the RootLayout component
        render(
            <RootLayout>
                <div>Child Component</div>
            </RootLayout>
        );

        // Assert that the child component is rendered
        const childComponent = screen.getByText('Child Component');
        expect(childComponent).toBeInTheDocument();

        // Assert that the QueryClientProvider is rendered
        const queryClientProvider = screen.getByTestId('query-client-provider');
        expect(queryClientProvider).toBeInTheDocument();
    });
});

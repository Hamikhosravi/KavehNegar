// __tests__/components/PostCard.test.tsx

import { render } from '@testing-library/react';
import PostCard from '../../components/PostCard';
import React from "react";

describe('PostCard', () => {
    test('should render post title as link', () => {
        const post = { id: 1, title: 'Test Post' };
        const { getByText } = render(<PostCard id={post.id} title={post.title} />);
        expect(getByText('Test Post')).toBeInTheDocument();
    });
});

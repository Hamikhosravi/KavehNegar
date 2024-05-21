import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import NewPostPage from '../app/new/page';
import { useCreatePost } from '../hooks/useCreatePost';
import React from "react";

jest.mock('../hooks/useCreatePost');

describe('NewPostPage', () => {
    it('should render the form and focus the title input on mount', () => {
        render(<NewPostPage />);

        const titleInput = screen.getByRole('textbox', { name: 'title' });
        expect(titleInput).toBeInTheDocument();
        expect(titleInput).toHaveFocus();
    });

    it('should disable submit button when mutation is pending', () => {
        const mockMutate = jest.fn().mockResolvedValue(undefined);
        (useCreatePost as jest.Mock).mockReturnValue({ mutate: mockMutate, isPending: true });

        render(<NewPostPage />);

        const submitButton = screen.getByRole('button', { name: /Submit/i });
        expect(submitButton).toBeDisabled();
    });

    it('should enable submit button and call mutate with form data on submit', async () => {
        const mockMutate = jest.fn().mockResolvedValue(undefined);
        (useCreatePost as jest.Mock).mockReturnValue({ mutate: mockMutate, isPending: false });

        render(<NewPostPage />);

        const titleInput = screen.getByRole('textbox', { name: 'title' });
        const bodyInput = screen.getByRole('textbox', { name: 'body' });
        const submitButton = screen.getByRole('button', { name: /Submit/i });

        fireEvent.change(titleInput, { target: { value: 'My Title' } });
        fireEvent.change(bodyInput, { target: { value: 'This is the body content.' } });

        await fireEvent.submit(submitButton);

        expect(mockMutate).toHaveBeenCalledWith({ title: 'My Title', body: 'This is the body content.', userId: 11 });
    });

    it('should show success message portal on successful mutation', async () => {
        const mockMutate = jest.fn().mockResolvedValue(undefined);
        (useCreatePost as jest.Mock).mockReturnValue({ mutate: mockMutate, isPending: false });

        render(<NewPostPage />);

        await fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));

        expect(screen.getByText('Post created successfully!')).toBeInTheDocument();
    });

    it('should show error message portal on failed mutation', async () => {
        const mockMutate = jest.fn().mockRejectedValue(new Error('Failed to create post'));
        (useCreatePost as jest.Mock).mockReturnValue({ mutate: mockMutate, isPending: false });

        render(<NewPostPage />);

        await fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));

        expect(screen.getByText('Failed to create post.')).toBeInTheDocument();
    });

    it('should close message portal on close button click', () => {
        const handleClosePortal = jest.fn();
        render(<NewPostPage />);

        fireEvent.click(screen.getByRole('button', { name: /Close/i }));

        expect(screen.queryByText('Test Message')).not.toBeInTheDocument();
        expect(handleClosePortal).toHaveBeenCalled();
    });
});

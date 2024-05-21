import React, { forwardRef, FormEvent, ComponentPropsWithoutRef, ReactNode, useCallback, memo } from 'react';

type FormProps = {
    onSave: (event: FormEvent<HTMLFormElement>, data: unknown) => void;
    children: ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<'form'>;

const Form = memo(forwardRef<HTMLFormElement, FormProps>(function Form({ onSave, className, children, ...otherProps }, ref) {
    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(event, data);
    }, [onSave]);

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={ref} className={className}>
            {children}
        </form>
    );
}));

export default Form;

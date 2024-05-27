import { forwardRef, FormEvent, ComponentPropsWithoutRef, ReactNode, useCallback, memo } from 'react';
import * as React from "react";

type FormProps = {
    onSave: (event: FormEvent<HTMLFormElement>, data: unknown) => void;
    children: ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<'form'>;

const Form = memo(forwardRef<HTMLFormElement, FormProps>(function Form({ onSave, className, children, ...otherProps }, ref) {
    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formEntries: [string, FormDataEntryValue][] = [];
        formData.forEach((value, key) => {
            formEntries.push([key, value]);
        });
        const data = Object.fromEntries(formEntries);
        onSave(event, data);
    }, [onSave]);

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={ref} className={className}>
            {children}
        </form>
    );
}));

export default Form;

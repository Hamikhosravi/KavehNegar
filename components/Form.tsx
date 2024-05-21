import React, {forwardRef, FormEvent, ComponentPropsWithoutRef, ReactNode} from 'react';

type FormProps = { onSave:(event:FormEvent<HTMLFormElement>, data: unknown) => void; children: ReactNode; className?:string} & ComponentPropsWithoutRef<'form'>;

const Form = forwardRef<HTMLFormElement,FormProps>(function Form({onSave, className, children, ...otherProps},ref)
{
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(event,data);
    }
    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={ref} className={className}>
            {children}
        </form>
    )
});

export default Form;


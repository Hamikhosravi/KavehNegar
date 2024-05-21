import React, {forwardRef, ComponentPropsWithoutRef} from 'react';

type InputProps = { label:string; className?:string} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement,InputProps>(function Input({label,className, ...props},ref)
{
    return (
            <label className="block">{label}
                <input
                    {...props} ref={ref} className={`border p-2 w-full text-black ${className}`}
                />
            </label>
    )
});

export default Input;

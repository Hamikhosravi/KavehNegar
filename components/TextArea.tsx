import React, { forwardRef, ComponentPropsWithoutRef, memo } from 'react';

type TextareaProps = { label: string; className?: string } & ComponentPropsWithoutRef<'textarea'>;

const Textarea = memo(forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ label, className, ...props }, ref) {
    return (
        <label className="block">
            {label}
            <textarea {...props} ref={ref} className={`border p-2 w-full text-black ${className}`} />
        </label>
    );
}));

export default Textarea;

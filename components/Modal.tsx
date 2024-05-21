import React, { useEffect, useRef, memo } from 'react';

type MessagePortalProps = {
    message: {text:string; status:string};
    onClose: () => void;
};

const MessagePortal = memo(({ message, onClose }: MessagePortalProps) => {
    const portalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (portalRef.current && !portalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div ref={portalRef} className="bg-white p-4 rounded shadow-md">
                <p className={message.status=== "successful" ? "text-green-500" : "text-red-500"}>{message.text}</p>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded block mx-auto">
                    OK
                </button>
            </div>
        </div>
    );
});

MessagePortal.displayName = 'Modal';

export default MessagePortal;

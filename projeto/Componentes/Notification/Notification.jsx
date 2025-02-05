// Sistema de notificações temporárias com animações de entrada e saída
import { useEffect } from 'react';
import './Notification.css';

function Notification({ message, isVisible, setIsVisible }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, setIsVisible]);

    if (!isVisible) return null;

    return (
        <div className="notification">
            {message}
        </div>
    );
}

export default Notification; 
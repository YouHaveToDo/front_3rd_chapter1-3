import React, {PropsWithChildren, useState} from "react";
import {useCallback, useMemo} from "../@lib";
import NotificationContext from "../context/NotificationContext";

interface Notification {
    id: number;
    message: string;
    type: "info" | "success" | "warning" | "error";
}

export const NotificationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((message: string, type: Notification["type"]) => {
        const newNotification: Notification = {
            id: Date.now(),
            message,
            type,
        };
        setNotifications((prev) => [...prev, newNotification]);
    }, []);

    const removeNotification = useCallback((id: number) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, []);

    const value = useMemo(() => ({
            notifications,
            addNotification,
            removeNotification,
        }), [notifications, addNotification, removeNotification]
    );

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

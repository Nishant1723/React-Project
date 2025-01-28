import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus , setOnilineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnilineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnilineStatus(true);
        });
    }, []);

    return OnlineStatus;
}

export default useOnlineStatus;
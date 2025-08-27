import { useLocation } from "react-router-dom"
import { useEffect } from "react";

export default function ScrollToHash() {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const item = document.querySelector(hash)
            if (item) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }

    }, [hash])
    return null
}
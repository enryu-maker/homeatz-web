import React from 'react'
import { useLocation } from 'react-router-dom';

export default function ChefInfoRedirect() {
    const state = useLocation()
    React.useEffect(() => {
        const chefId = state.pathname.split("/")[2]; // Assuming /chefinfo/9 format
        console.log(chefId)
        const deepLinkUrl = `homeatz://chefinfo/${chefId}`;
        window.open(deepLinkUrl, "_self"); // Use _self to open in the same window/tab
    }, []);
    return (
        <div></div>
    )
}

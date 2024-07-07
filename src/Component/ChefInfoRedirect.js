import React from 'react'

export default function ChefInfoRedirect() {

    React.useEffect(() => {
        const chefId = window.location.pathname.split("/")[2]; // Assuming /chefinfo/9 format
        const deepLinkUrl = `homeatz://chefinfo/${chefId}`;
        window.open(deepLinkUrl, "_self"); // Use _self to open in the same window/tab
    }, []);
    return (
        <div></div>
    )
}

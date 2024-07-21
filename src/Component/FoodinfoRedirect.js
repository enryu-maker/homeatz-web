import React from "react";
import { useLocation } from "react-router-dom";

export default function ChefinfoRedirect() {
  const state = useLocation();
  React.useEffect(() => {
    const id = state.pathname.split("/")[2]; // Assuming /chefinfo/9 format
    console.log(id);
    const deepLinkUrl = `homeatz://foodinfo/${id}`;
    window.open(deepLinkUrl, "_self"); // Use _self to open in the same window/tab
  }, []);
  return <div></div>;
}

import React from "react";

const DeepLinkHandler = () => {
  const deepLinkUrl = "hometaz://chefinfo/9";
  const fallbackUrl = "/";

  const handleDeepLink = async () => {
    try {
      window.location.replace(deepLinkUrl);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (document.visibilityState !== "hidden") {
        window.location.replace(fallbackUrl);
      }
    } catch (error) {
      console.error("Failed to open:", error);
      window.location.replace(fallbackUrl);
    }
  };

  handleDeepLink();

  return null;
};

export default DeepLinkHandler;

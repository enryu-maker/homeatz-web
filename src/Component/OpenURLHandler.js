import React, { useEffect } from "react";

const DeepLinkHandler = () => {
  const fallbackUrl = "https://www.homeatz.in";

  useEffect(() => {
    const handleDeepLink = async () => {
      try {
        // Extract chef ID dynamically from the URL
        const chefId = window.location.pathname.split("/")[2]; // Assuming /chefinfo/9 format

        if (!chefId) {
          throw new Error("Chef ID not found in URL");
        }

        const deepLinkUrl = `hometaz://chefinfo/${chefId}`;

        // Attempt to open the deep link
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => reject(new Error("Timeout")), 5000);
          window.open(deepLinkUrl, "_self"); // Use _self to open in the same window/tab
          window.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
              clearTimeout(timeout);
              resolve();
            }
          });
        });

        // If document is still hidden after trying to open deep link
        if (document.visibilityState === "hidden") {
          window.open(fallbackUrl, "_self"); // Open fallback URL in the same window/tab
        }
      } catch (error) {
        console.error("Failed to open deep link:", error);
        // If there's an error, fallback to the specified URL
        window.location.replace(fallbackUrl);
      }
    };

    handleDeepLink();
  }, []);

  // Render null because this component doesn't render anything visible
  return null;
};

export default DeepLinkHandler;

// ----------------------------------------------------------------------------------------------------------------------
// BY USING ARGUMENT
// ----------------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from "react";

// const DeepLinkHandler = ({ chefId }) => {
//   const fallbackUrl = "https://www.homeatz.in";
//   const deepLinkUrl = `hometaz://chefinfo/${chefId}`;

//   useEffect(() => {
//     const handleDeepLink = async () => {
//       try {
//         // Attempt to open the deep link
//         await new Promise((resolve, reject) => {
//           const timeout = setTimeout(() => reject(new Error("Timeout")), 5000);
//           window.open(deepLinkUrl, "_self"); // Use _self to open in the same window/tab
//           window.addEventListener("visibilitychange", () => {
//             if (document.visibilityState === "visible") {
//               clearTimeout(timeout);
//               resolve();
//             }
//           });
//         });

//         // If document is still hidden after trying to open deep link
//         if (document.visibilityState === "hidden") {
//           window.open(fallbackUrl, "_self"); // Open fallback URL in the same window/tab
//         }
//       } catch (error) {
//         console.error("Failed to open deep link:", error);
//         // If there's an error, fallback to the specified URL
//         window.location.replace(fallbackUrl);
//       }
//     };

//     handleDeepLink();
//   }, [chefId]);

//   // Render null because this component doesn't render anything visible
//   return null;
// };

// export default DeepLinkHandler;

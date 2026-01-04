import React from "react";

/*
  React.memo prevents unnecessary re-renders.
  If parent re-renders, this component will NOT
  unless its props change.
*/
const FloatingWhatsApp = React.memo(() => {
  return (
    <a
      href="https://wa.me/+1234567890?text=Hello%20there!"
      className="fixed bottom-4 right-4 z-50"
    >
      <img
        src="https://res.cloudinary.com/desslvu1w/image/upload/f_webp,q_auto/v1767276102/Pngtree_whatsapp_icon_vector_8704827_h9fj7d.png

        "
        alt="WhatsApp"
        /*
          Explicit width/height:
          - Prevents layout shift (CLS)
          - Browser knows space before image loads
        */
        width={55}
        height={55}
        /*
          eager → load immediately (important CTA)
          async → decode without blocking main thread
        */
        loading="eager"
        decoding="async"
      />
    </a>
  );
});

export default FloatingWhatsApp;

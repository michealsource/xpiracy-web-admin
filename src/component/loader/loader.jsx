import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#E93C24");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div
      style={{
        zIndex: 999,
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <PropagateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading"
        data-testid="loader"
      />
    </div>
  );
}

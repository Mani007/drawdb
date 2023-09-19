import React, { useEffect, useRef } from "react";
import { dia, shapes } from "jointjs";

function Diagram() {
  const canvas = useRef(null);

  useEffect(() => {
    const graph = new dia.Graph();

    new dia.Paper({
      el: document.getElementById("canvas"),
      background: {
        color: "#aec3b0",
      },
      model: graph,
      height: "100%",
      width: "100%",
      gridSize: 1,
      interactive: true,
    });

    const rect = new shapes.standard.Rectangle();
    rect.position(100, 100);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: "#7039FF",
      },
      label: {
        text: "hi",
        fill: "white",
      },
    });
    rect.addTo(graph);
  }, []);

  return <div id="canvas" ref={canvas} />;
}

export default Diagram;

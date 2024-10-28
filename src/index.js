import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import MindElixir from "mind-elixir";
import NodeMenu from "@mind-elixir/node-menu";
import "@mind-elixir/node-menu/dist/style.css";

const data = {
  nodeData: {
    id: "d451a556d866ba7b",
    topic: "new bruh",
    root: true,
    children: [
      {
        topic: "new node",
        id: "d451a6f027c33b1f",
        direction: 0,
        children: [
          {
            topic: "new node",
            id: "d451a724b7c10970",
          },
          {
            topic: "new node",
            id: "d451a77ca7348eae",
          },
          {
            topic: "new node",
            id: "d451a78e1ec7181c",
          },
        ],
      },
    ],
  },
  arrows: [
    {
      id: "d451a9149a1e3a15",
      label: "Custom Link",
      from: "d451a77ca7348eae",
      to: "d451a78e1ec7181c",
      delta1: {
        x: -230,
        y: -9,
      },
      delta2: {
        x: -236,
        y: 14,
      },
    },
  ],
  summaries: [
    {
      id: "d451a84c2e77cc2f",
      parent: "d451a6f027c33b1f",
      start: 0,
      end: 0,
      text: "summary",
    },
  ],
  direction: 2,
  theme: {
    name: "Latte",
    palette: [
      "#4968a3",
      "#3b88c4",
      "#4fa3d4",
      "#2b5b84",
      "#367fa2",
      "#5e93b7",
      "#4a719c",
      "#28567d",
      "#214e6d",
      "#336699",
    ],
    cssVar: {
      "--main-color": "#444446",
      "--main-bgcolor": "#ffffff",
      "--color": "#777777",
      "--bgcolor": "#f6f6f6",
      "--panel-color": "#444446",
      "--panel-bgcolor": "#ffffff",
      "--panel-border-color": "#eaeaea",
    },
  },
};

const App = () => {
  const me = useRef();
  useEffect(() => {
    const instance = new MindElixir({
      el: "#map",
      direction: MindElixir.RIGHT,
      draggable: true, // default true
      contextMenu: true, // default true
      toolBar: true, // default true
      nodeMenu: true, // default true
      keypress: true, // default true
    });
    instance.install(NodeMenu);
    instance.init(data);
    me.current = instance;
  });
  return <div id="map" style={{ height: "500px", width: "100%" }} />;
};

const container = document.getElementById("container");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

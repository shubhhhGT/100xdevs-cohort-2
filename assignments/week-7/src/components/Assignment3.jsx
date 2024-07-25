import React, { useEffect, useState } from "react";

const Assignment3 = () => {
  const [a, setA] = useState("");
  const reactElement = {
    type: "a",
    props: {
      href: "https://github.com/shubhhhGT",
      target: "_blank",
    },
    children: ["Click me to visit GitHub"],
  };

  function generateHtml(element) {
    const { type, props } = element;
    const children = element.children || [];
    const attributes = Object.keys(props)
      .map((key) => `${key}="${props[key]}"`)
      .join(" ");
    // console.log(attributes);

    const childHTML = children
      .map((child) => (typeof child === "object" ? generateHtml(child) : child))
      .join("");

    setA(`<${type} ${attributes}>${childHTML}</${type}>`);
  }

  function customRender(element, container) {
    const html = generateHtml(element);
    container.innerHTML = html;
  }

  useEffect(() => {
    customRender(reactElement, document.getElementsByClassName("render"));
  }, []);
  return (
    <div
      className="flex justify-center items-center w-full render my-[10%]"
      dangerouslySetInnerHTML={{ __html: a }}
    ></div>
  );
};

export default Assignment3;

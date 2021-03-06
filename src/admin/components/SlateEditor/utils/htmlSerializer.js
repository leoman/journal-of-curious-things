import React from "react";
import { Text } from "slate";
import escapeHtml from "escape-html";

const textAlign = (alignment) => {
  return `text-align: ${alignment}; `;
};

const styleMethodMap = {
  textAlign: textAlign,
};

const inlineStyles = (inlineStyles) =>
  Object.entries(inlineStyles).reduce(
    (agg, [key, value]) => (agg = `${agg} ${styleMethodMap[key](value)}`),
    ""
  );

const styles = (node) => {
  if (node.inlineStyles) {
    return inlineStyles(node.inlineStyles);
  }
};

export const serialize = (node) => {
  if (node.bold) {
    return `<strong>${node.text}</strong>`;
  }

  if (node.italic) {
    return `<em>${node.text}</em>`;
  }

  if (node.code) {
    return `<code>${node.text}</code>`;
  }

  if (node.underline) {
    return `<u>${node.text}</u>`;
  }

  if (Text.isText(node)) {
    return escapeHtml(node.text);
  }

  const children = node.children.map((n) => serialize(n)).join("");

  switch (node.type) {
    case "image":
      return `<img src=${node.url} alt=${node.url} />`;
    case "block-quote":
      return `<blockquote><p>${children}</p></blockquote>`;
    case "paragraph":
      return `<p>${children}</p>`;
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    case "heading-one":
      return `<h1 style="${styles(node)}">${children}</h1>`;
    case "heading-two":
      return `<h2>${children}</h2>`;
    case "heading-three":
      return `<h3>${children}</h3>`;
    case "heading-four":
      return `<h4>${children}</h4>`;
    case "heading-five":
      return `<h5>${children}</h5>`;
    case "heading-six":
      return `<h6>${children}</h6>`;
    case "code":
      return (
        <pre>
          <code>{children}</code>
        </pre>
      );
    case "bold":
      return <strong>{children}</strong>;
    case "italic":
      return <em>{children}</em>;
    case "underline":
      return <u>{children}</u>;
    case "numbered-list":
      return <ol style={styles(node)}>{children}</ol>;
    case "bulleted-list":
      return <ul style={styles(node)}>{children}</ul>;
    case "list-item":
      return <li style={styles(node)}>{children}</li>;
    default:
      return children;
  }
};

export const serializeValueToHtml = (value) =>
  value.map((node) => serialize(node)).join("");

export default serializeValueToHtml;

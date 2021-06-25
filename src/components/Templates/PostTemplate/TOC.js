import React from "react";

export default function TOC({ items }) {
  return (
    <ul>
      {items.map(({ items, url, title }) => (
        <li>
          <a href={url}>{title}</a>
          {items && <TOC items={items} />}
        </li>
      ))}
    </>
  );
}

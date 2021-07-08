import { graphql, Link } from "gatsby";
import React from "react";

export default function test({ data }) {
  return (
    <div>
      {data.allSitePage.nodes.map(({ path }) => (
        <Link to={path}>Link </Link>
      ))}
    </div>
  );
}

export const query = graphql`
  {
    allSitePage {
      nodes {
        path
      }
    }
  }
`;

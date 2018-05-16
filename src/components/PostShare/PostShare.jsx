import React from "react";
import "./PostShare.css";

const formatSiteUrl = (siteUrl, pathPrefix, path) =>
  siteUrl + (pathPrefix === "/" ? "" : pathPrefix) + path;

// const getCover = post => {
//   const { cover } = post;
//   if (cover && cover.childImageSharp && cover.childImageSharp.original) {
//     return cover.childImageSharp.original.src;
//   }
//   return "";
// };

class PostShare extends React.Component {
  render() {
    const { postNode, postPath, config } = this.props;
    const post = postNode.frontmatter;
    const url = formatSiteUrl(config.siteUrl, config.pathPrefix, postPath);

    return (
      <section className="share">
        <h4>Share this post</h4>
      </section>
    );
  }
}

export default PostShare;

import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;

    // const FacebookIcon = generateShareIcon("facebook");
    // const TwitterIcon = generateShareIcon("twitter");
    const TelegramIcon = generateShareIcon("telegram");
    // const GooglePlusIcon = generateShareIcon("google");
    const LinkedinIcon = generateShareIcon("linkedin");
    const RedditIcon = generateShareIcon("reddit");
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className="social-links">
      </div>
    );
  }
}

export default SocialLinks;

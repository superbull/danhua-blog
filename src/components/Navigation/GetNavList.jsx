// import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "首页",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "区块链",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/categories/区块链"
    },
    {
      primaryText: "证券投资",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "人生",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  // if (config.userLinks) {
  //   config.userLinks.forEach(link => {
  //     NavList.push({
  //       primaryText: link.label,
  //       // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
  //       component: "a",
  //       href: link.url
  //     });
  //   });
  // }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "关于我",
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  return NavList;
}
export default GetNavList;

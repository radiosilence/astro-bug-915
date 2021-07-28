import React, { ImgHTMLAttributes } from "react";
import Twitter1x from "./images/twitter/twitter.png";

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  source: string;
}

interface IconLink {
  className?: string;
}

export interface IconLinkUsernameProp extends IconLink {
  username: string;
}

export interface IconLinkChannelNameProp extends IconLink {
  channelName: string;
}

export function TwitterIconLink({
  username,
  className,
}: IconLinkUsernameProp): JSX.Element {
  return (
    <a
      href={`https://twitter.com/${username}`}
      target="_blank"
      className={className}
    >
      <img src={Twitter1x} style={{ width: "28px" }} />
    </a>
  );
}

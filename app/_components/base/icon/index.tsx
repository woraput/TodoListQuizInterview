"use client";

import { css, cx } from "@emotion/css";
import { AppIconEnum, appIconMapping } from "./view-model";
import { useMediaSize } from "@/_hooks/media-size";
import Image from "next/image";

type IconProps = {
  icon: AppIconEnum;
  iconSize?: number;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ className, icon, iconSize, onClick }: IconProps) => {
  const { isTablet } = useMediaSize();
  const defaultIconSize = isTablet ? "20" : "16";

  return (
    <Image
      className={cx(className, onClick && "cursor-pointer")}
      priority
      src={appIconMapping[icon]}
      height={iconSize || defaultIconSize}
      width={iconSize || defaultIconSize}
      alt={`image-${icon}`}
    />
  );
};

export default Icon;

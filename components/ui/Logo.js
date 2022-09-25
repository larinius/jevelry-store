import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <a href="/">
          <Image
            src="/static/img/logo/logo.png"
            alt="Site logo"
            width={120}
            height={35}
          />
        </a>
      </div>
    </>
  );
};

export default Logo;

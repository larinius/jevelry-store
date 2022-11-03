import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <a href="/">
          <Image
            src="/static/img/logo/logo.svg"
            alt="Site logo"
            width={205}
            height={78}
          />
        </a>
      </div>
    </>
  );
};

export default Logo;

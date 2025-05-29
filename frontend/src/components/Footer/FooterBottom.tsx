import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-background">
      <div className="container mx-auto max-w-6xl flex items-center justify-between py-1 text-[13px] text-gray-600 dark:text-gray-400 px-2 xl:px-0 font-inter">
        <h2 className="">&copy;Copyright 2025 SnapKart</h2>
        <h2 className="">
          Designed by&nbsp;
          <a
            href="https://www.nareshrajbanshi.com.np"
            className="hover:underline underline-offset-2 hover:text-blue-600 hover:decoration-blue-600"
          >
            Naresh Rajbanshi
          </a>
        </h2>
      </div>
    </div>
  );
};

export default FooterBottom;

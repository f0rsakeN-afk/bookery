import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl flex items-center justify-between py-1 text-sm text-gray-600 dark:text-gray-400">
        <h2 className="">&copy;Copyright 2025 Bookery</h2>
        <h2 className="">
          Designed by&nbsp;
          <a href="https://github.com/f0rsakeN-afk" className="hover:underline underline-offset-2 hover:text-blue-600 hover:decoration-blue-600">
            Naresh Rajbanshi
          </a>
        </h2>
      </div>
    </div>
  );
};

export default FooterBottom;

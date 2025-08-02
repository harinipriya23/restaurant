import React from "react";
import AppStore from "../document/img/appstore.png";
import PlayStore from "../document/img/googleplay.png";

const DownloadApp = () => {
  return (
      <div id="download" className="text-white text-center my-10 ">
        <h2 className="text-4xl font-bold ">for better experience download</h2>
        <p className="mt-4  text-slate-400 text-4xl font-bold">
          Perfect<span className="text-red-400">Taste</span>
        </p>
        <div className="flex justify-center cursor-pointer gap-5 mt-3">
          <img src={AppStore} className="w-[250px] h-[100px] duration-300 hover:scale-105" />
          <img
            src={PlayStore}
            className="w-[250px] hover:scale-105 duration-300 h-[100px]"
          />
        </div>
      </div>

  );
};

export default DownloadApp
import React, { useState, useEffect } from "react";

function CloudAnimation() {
  return (
    <div className="main h-screen w-screen fixed grid place-items-center bg-indigo-700 z-50">
      <div className="w-16 h-8 bg-white rounded-full cloud animate-cloud"></div>
      <p className="absolute text-center translate-y-10 text-neutral-400">
        Please wait...
      </p>
    </div>
  );
}

export default CloudAnimation;

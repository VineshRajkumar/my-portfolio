"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="text-[13px] max-[410px]:text-[15px] text-gray-700 dark:text-gray-400 normal-case">
      Pune, {time}
    </div>
  );
}



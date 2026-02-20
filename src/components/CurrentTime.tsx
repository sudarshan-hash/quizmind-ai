import dayjs from "dayjs";
import  { useEffect, useState } from "react";

function CurrentTime() {

  const [currentTime, setCurrentTime] = useState(
    dayjs().format("YYYY-MM-DD hh:mm:ss"),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("YYYY-MM-DD hh:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <span className="  text-foreground font-sans font-bold ">
        {" "}
        {currentTime}{" "}
      </span>
    </div>
  );
}

export default CurrentTime;

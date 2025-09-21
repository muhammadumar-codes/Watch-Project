import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  // Har second time update hoga
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup jab component destroy hoga
  }, []);

  // Format numbers with leading zero
  const format = (num) => (num < 10 ? "0" + num : num);

  // Extract values
  const hours = time.getHours();
  const minutes = format(time.getMinutes());
  const seconds = format(time.getSeconds());
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = format(hours % 12 || 12); // 12-hour format

  // Date & Day
  const day = time.toLocaleDateString("en-US", { weekday: "long" });
  const date = time.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "black",
        color: "lime",
        fontFamily: "monospace",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: "0" }}>
        {displayHours}:{minutes}:{seconds} {ampm}
      </h1>
      <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>{day}</h2>
      <p style={{ fontSize: "1.5rem" }}>{date}</p>
    </div>
  );
}

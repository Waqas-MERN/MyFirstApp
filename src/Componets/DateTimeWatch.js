import React, { useState, useEffect } from 'react';

function DateTimeWatch() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="datetime-watch">
      {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
    </div>
  );
}

export default DateTimeWatch;

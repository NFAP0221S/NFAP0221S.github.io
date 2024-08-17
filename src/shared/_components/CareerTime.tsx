import React, { useEffect, useState } from 'react'

export default function CareerTime() {
  const [timeSince, setTimeSince] = useState<Record<'textTop' | 'textBtm', string>>({
    textTop: '',
    textBtm: '',
  });

  useEffect(() => {
    const startDate = new Date('2022-09-18T00:00:00');
    const calculateTimeSince = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const textTop = `${years}년 ${months}개월 ${days}일 하고도...`;
      const textBtm = `${hours}시간 ${minutes}분 ${seconds}초`;

      setTimeSince({ textTop, textBtm });
    };

    calculateTimeSince();
    const interval = setInterval(calculateTimeSince, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h4 className="mb-4 text-sm font-medium leading-none">
          Frontend 개발자가 된지<br />
          {timeSince.textTop}<br />
          {timeSince.textBtm}
        </h4>
    </div>
  )
}

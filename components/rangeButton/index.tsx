"use client";
import React from "react";
import useDateRange from "../../context/useDateRange";

interface DataRangeButtonProps {}

const DataRangeButton: React.FC<DataRangeButtonProps> = () => {
  const { setDateRange, setSessionData } = useDateRange();

  const handleButtonClick = async (range: string) => {
    setDateRange(range);

    try {
      const response = await fetch(
        "https://p85vbvjhtk.execute-api.eu-central-1.amazonaws.com/Stage/get-session-data-by-time-range",
        {
          method: "POST",
          body: JSON.stringify({ range }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());
      console.log(response);
      if (response) setSessionData(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        className="px-5 hover:bg-slate-500 hover:text-slate-200 transition-all text-slate-800 rounded-md py-1 bg-slate-200"
        onClick={() => handleButtonClick("1d")}
      >
        1d
      </button>
      <button
        className="px-5 hover:bg-slate-500 hover:text-slate-200 transition-all text-slate-800 rounded-md py-1 bg-slate-200"
        onClick={() => handleButtonClick("1w")}
      >
        1w
      </button>
      <button
        className="px-5 hover:bg-slate-500 hover:text-slate-200 transition-all text-slate-800 rounded-md py-1 bg-slate-200"
        onClick={() => handleButtonClick("1m")}
      >
        1m
      </button>
      <button
        className="px-5 hover:bg-slate-500 hover:text-slate-200 transition-all text-slate-800 rounded-md py-1 bg-slate-200"
        onClick={() => handleButtonClick("6m")}
      >
        6m
      </button>
      <button
        className="px-5 hover:bg-slate-500 hover:text-slate-200 transition-all text-slate-800 rounded-md py-1 bg-slate-200"
        onClick={() => handleButtonClick("12m")}
      >
        12m
      </button>
    </div>
  );
};

export default DataRangeButton;

"use client";

import React from "react";
import useDateRange from "../../../context/useDateRange";
import { generateRandomColor } from "../../utils/generateRandomColor";

interface ChainUsageSummaryProps {
  propertyName:
    | "chain"
    | "isTemplate"
    | "template"
    | "isEVM"
    | "isTypescript"
    | "testnet"
    | "useBackend"
    | "backendProvider"
    | "hasSmartContract"
    | "modules";
}

const ChainUsageSummary: React.FC<ChainUsageSummaryProps> = ({
  propertyName,
}) => {
  const { sessionData } = useDateRange();

  // Count the number of occurrences for the specified property
  const propertyCountMap = sessionData?.reduce((result, session) => {
    const propertyValue = session.dappInfo[propertyName];

    if (propertyValue) {
      result[propertyValue.toString()] =
        (result[propertyValue.toString()] || 0) + 1;
    }

    return result;
  }, {} as { [key: string]: number });

  // Prepare data for the summary list
  const summaryData = Object.entries(propertyCountMap || [])
    .map(([propertyValue, count]) => ({ propertyValue, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="flex items-center w-2/3">
      <ul className="list-none">
        {summaryData.map(({ propertyValue, count }) => (
          <li key={propertyValue} className="flex items-center mb-2">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: generateRandomColor() }}
            ></div>
            <span>
              {propertyValue}: {count} usage
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChainUsageSummary;

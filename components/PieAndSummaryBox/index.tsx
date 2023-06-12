"use client";

import React from "react";
import { ChainUsagePieChart, PropertyName } from "./chainUsagePieChart";
import ChainUsageSummary from "./chainUsageSummary";

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

const PieAndSummaryBox: React.FC<ChainUsageSummaryProps> = ({
  propertyName,
}) => {
  return (
    <div className="w-2/5">
      <h2 className="text-2xl font-bold mb-4">{propertyName} usage summary</h2>
      <div className="flex ">
        <ChainUsagePieChart
          propertyName={propertyName as PropertyName}
        ></ChainUsagePieChart>
        <ChainUsageSummary
          propertyName={propertyName as PropertyName}
        ></ChainUsageSummary>
      </div>
    </div>
  );
};

export default PieAndSummaryBox;

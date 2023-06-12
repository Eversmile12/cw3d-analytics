"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import useDateRange from "../../../context/useDateRange";
import { generateRandomColor } from "../../utils/generateRandomColor";

export enum PropertyName {
  "CHAIN" = "chain",
  "ISTEMPLATE" = "isTemplate",
  "TEMPLATE" = "template",
  "ISTYPESCRIPT" = "isTypescript",
  "TESTNET" = "testnet",
  "USEBACKEND" = "useBackend",
  "BACKENDPROVIDER" = "backendProvider",
  "HASSMARTCONTRACT" = "hasSmartContract",
}
interface ChainUsagePieChartProps {
  propertyName: PropertyName;
}
export const ChainUsagePieChart: React.FC<ChainUsagePieChartProps> = ({
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

  // Prepare data for the pie chart
  const pieData = Object.entries(propertyCountMap || {}).map(
    ([propertyValue, count]) => ({
      [propertyName]: propertyValue,
      count,
    })
  );

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="count"
          nameKey={propertyName}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={generateRandomColor()} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

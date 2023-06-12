"use client";
import {
  ChainUsagePieChart,
  PropertyName,
} from "@/components/PieAndSummaryBox/chainUsagePieChart";
import ChainUsageSummary from "@/components/PieAndSummaryBox/chainUsageSummary";
import InstallGraph from "@/components/downloadsGraph";
import DataRangeButton from "@/components/rangeButton";
import Image from "next/image";
import styles from "./page.module.css";
import PieAndSummaryBox from "@/components/PieAndSummaryBox";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-2xl mb-6">Create Web3 Dapp Analytics</h1>
      <div className="w-full flex justify-end mb-3">
        <DataRangeButton />
      </div>
      <div className="w-full mb-6">
        <InstallGraph />
      </div>
      <div className="flex justify-between w-5/6 flex-wrap gap-y-20">
        <PieAndSummaryBox propertyName={PropertyName.CHAIN} />
        <PieAndSummaryBox propertyName={PropertyName.ISTYPESCRIPT} />
        <PieAndSummaryBox propertyName={PropertyName.TEMPLATE} />
        <PieAndSummaryBox propertyName={PropertyName.USEBACKEND} />
        <PieAndSummaryBox propertyName={PropertyName.USEBACKEND} />
    
      </div>
    </main>
  );
}

"use client";

import React, { createContext, useState } from "react";

interface SessionData {
  sessionId: string;
  dappInfo: {
    chain: string;
    isTemplate: boolean;
    template: string;
    isEVM: boolean;
    isTypescript: boolean;
    testnet: string;
    useBackend: boolean;
    backendProvider: string;
    hasSmartContract: boolean;
    modules: null;
  };
  geoGraphicRegion: string;
  timestamp: string;
}

export interface DateRangeContextProps {
  dateRange: string;
  setDateRange: (range: string) => void;
  sessionData: SessionData[] | null;
  setSessionData: (data: SessionData[] | null) => void;
}

export const DateRangeContext = createContext<DateRangeContextProps>({
  dateRange: "",
  setDateRange: () => {},
  sessionData: null,
  setSessionData: () => {},
});

export const DateRangeProvider = ({ children }: any) => {
  const [dateRange, setDateRange] = useState<string>("1d");
  const [sessionData, setSessionData] = useState<SessionData[] | null>(null);

  return (
    <DateRangeContext.Provider
      value={{ dateRange, setDateRange, sessionData, setSessionData }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

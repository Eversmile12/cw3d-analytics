
import { useContext } from "react";
import { DateRangeContext, DateRangeContextProps } from "./DateRangeContext";

const useDateRange = (): DateRangeContextProps => {
  const { dateRange, setDateRange, sessionData, setSessionData } =
    useContext(DateRangeContext);

  return { dateRange, setDateRange, sessionData, setSessionData };
};

export default useDateRange;

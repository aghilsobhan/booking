import styled from "styled-components";
import { useRecntBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../../features/check-in-out/TodayActivity";
const StyleDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecntBookings();
  const {
    stays,
    isLoading: isLoading2,
    confirmedStays,
    numDay,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabin();
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyleDashboardLayout>
      <Stats
        confirmedStays={confirmedStays}
        bookings={bookings}
        numDays={numDay}
        cabinCount={cabins.length}
      />
      <TodayActivity />

      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart numDays={numDay} bookings={bookings} />
    </StyleDashboardLayout>
  );
}

export default DashboardLayout;

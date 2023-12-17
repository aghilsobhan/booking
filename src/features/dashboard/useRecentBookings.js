import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookingAfterDate } from "../../services/apiBookings";
export function useRecntBookings() {
  const [searchParams] = useSearchParams();
  const numDay = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDay).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDay}`],
  });
  return { isLoading, bookings };
}

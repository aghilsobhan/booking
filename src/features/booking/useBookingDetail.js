import { useParams } from "react-router-dom";
import { getBookingDetail } from "../../services/apiBookings";
import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

export function useBookingDetail() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking = {},
    error,
  } = useQuery({
    queryKey: ["bookingDetail"],
    queryFn: () => getBookingDetail(bookingId),
    retry: false,
  });
  return { isLoading, booking, error };
}

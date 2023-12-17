import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/contant";
import { getToday } from "../utils/helper";
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id,created_at,startDate,endDate,numNights,numGuests,status,totalPrice,cabins(name),gusts(name,email)",
      { count: "exact" }
    );
  //FILTER
  if (filter) query = query[filter.method || "eq"](filter.feild, filter.value);

  //SORTBY
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  if (error) {
    console.log(error);
    throw new Error("bookings not recived data");
  }
  return { data, count };
}
export async function getBookingDetail(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*,cabins(*),gusts(*)")
    .eq("id", id)
    .single();
  if (error) {
    console.log(error);
    throw new Error("bookings not recived data");
  }
  return data;
}
export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();
  if (error) {
    console.log(error);
    throw new Error("bookings could not be update");
  }
  return data;
}
export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
export async function getBookingAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at,totalPrice,extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }
  return data;
}
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*,gusts(name)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }
  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, gusts(name, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))
  console.log(data);
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

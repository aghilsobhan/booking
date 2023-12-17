import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import { useBooking } from "./useBooking";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { isLoading, bookings, error, count } = useBooking();
  if (isLoading) return <Spinner />;
  if (error) return <Empty resourceName="bookings" />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2fr">
        <Table.Header>
          <div>CABIN</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Statuse</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow booking={booking} key={booking.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;

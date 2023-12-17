import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/booking/BookingTable";
import BookingTableOperation from "../features/booking/BookingTableOperation";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All</Heading>
        <BookingTableOperation />
      </Row>
      <BookingTable />
    </>
  );
};

export default Bookings;

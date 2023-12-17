import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function BookingTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", lable: "All" },
          { value: "checked-out", lable: "Checked out" },
          { value: "checked-in", lable: "Checked in" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-desc", lable: "Sort by date (recent first)" },
          { value: "startDate-asc", lable: "Sort by date (earlier first)" },
          { value: "regularPrice-asc", lable: "Sort by price (low first)" },
          { value: "regularPrice-desc", lable: "Sort by name (hight first)" },
          { value: "maxCapacity-asc", lable: "Sort by capacity (low first)" },
          {
            value: "totalPrice-desc",
            lable: "Sort by amount (hight first)",
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default BookingTableOperation;

import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CobinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", lable: "all" },
          { value: "no-discount", lable: "No discount" },
          { value: "with-discount", lable: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", lable: "Sort by name (A-Z)" },
          { value: "name-desc", lable: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", lable: "Sort by price (low first)" },
          { value: "regularPrice-desc", lable: "Sort by name (hight first)" },
          { value: "maxCapacity-asc", lable: "Sort by capacity (low first)" },
          {
            value: "maxCapacity-desc",
            lable: "Sort by capacity (hight first)",
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CobinTableOperation;

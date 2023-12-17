import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", lable: "last 7 day" },
        { value: "30", lable: "last 30 day" },
        { value: "90", lable: "last 90 day" },
      ]}
    ></Filter>
  );
}

export default DashboardFilter;

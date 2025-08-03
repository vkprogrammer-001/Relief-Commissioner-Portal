import { useState } from "react";
import { districtCompletionData } from "../../data";
import {
  CustomHeading2,
  CustomTable,
  DropDownMenu,
  InputBox,
} from "../../utils/CustomUi";

const DistrictMonitoringDashboard = () => {
  const [filteredData, setFilteredData] = useState(districtCompletionData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // Filter function
  const applyFilters = (search, status) => {
    let filtered = [...districtCompletionData];

    // Apply search filter (by district name)
    if (search && search.trim() !== "") {
      filtered = filtered.filter((item) => {
        // Handle both array and object data structures
        const districtName = Array.isArray(item)
          ? item[0]?.toString().toLowerCase()
          : (item.district || "").toString().toLowerCase();
        console.log(
          "Filtering by district:",
          districtName,
          "Search term:",
          search
        );

        return districtName.startsWith(search.toLowerCase());
      });
    }

    // Apply status filter
    if (status !== "All Status") {
      filtered = filtered.filter((item) => {
        // Handle both array and object data structures
        const itemStatus = Array.isArray(item)
          ? item[5]?.toString() // Assuming status is at index 5
          : (item.status || "").toString();

        return itemStatus === status;
      });
    }

    setFilteredData(filtered);
  };

  // Handle search input change
  const handleSearch = (value) => {
    console.log("Search term:", value);
    setSearchTerm(value);
    applyFilters(value, statusFilter);
  };

  // Handle status filter change
  const handleStatusFilter = (value) => {
    console.log("Search filter:", value);
    setStatusFilter(value);
    applyFilters(searchTerm, value);
  };

  return (
    <div className="tab-content box-style1">
      <CustomHeading2
        title={"District Monitoring Dashboard"}
        titleSize={"var(--text-2xl)"}
        subtitle={
          "Monitor boat and ghat registration progress across all 75 districts"
        }
      />
      <div className="filter-bar">
        <InputBox
          type={"text"}
          placeholder={"Search"}
          value={searchTerm}
          onChange={handleSearch}
        />
        <DropDownMenu
          options={["All Status", "Excellent", "Good", "Fair"]}
          selectedOption={statusFilter}
          onSelect={handleStatusFilter}
        />
      </div>
      <CustomTable
        headingList={[
          "District",
          "Boats",
          "Ghats",
          "Completion",
          "Last Updated",
          "Status",
          "Actions",
        ]}
        dataList={filteredData}
      />
    </div>
  );
};

export default DistrictMonitoringDashboard;

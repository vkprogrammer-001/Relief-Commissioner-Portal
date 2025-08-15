import {
    CustomButton,
    CustomHeading2,
    CustomTable,
    Tag,
} from "../../utils/CustomUi.js";

const InspectionRecord = () => {
  const viewDetails = (
    <CustomButton
      label={"View Details"}
      color={"#020817"}
      border={"1px solid #a8f3d0"}
      height={"40px"}
      width={"130px"}
    />
  );
  return (
    <div className="tab-content border-style-light">
      <CustomHeading2
        title={"Inspection Records"}
        titleSize={"var(--text-2xl)"}
        subtitle={"Complete history of all boat inspections"}
      />
      <CustomTable
        headingList={[
          "Boat Registration No.",
          "Inspection Date",
          "Inspector",
          "Status",
          "Valid Until",
          "District",
          "Actions",
        ]}
        dataList={[
          [
            "UP-VAR-001",
            "2024-01-15",
            "Rajesh Kumar",
            <Tag tagName={"Passed"} />,
            "2025-01-15",
            "Varanasi",
            viewDetails,
          ],
          [
            "UP-VAR-001",
            "2024-01-15",
            "Rajesh Kumar",
            <Tag tagName={"Failed"} />,
            "2025-01-15",
            "Varanasi",
            viewDetails,
          ],
        ]}
        borderColor="#e2e8f0"
        headerBg="#f7f9fb"
      />
    </div>
  );
};

export default InspectionRecord;

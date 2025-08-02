import {
  CustomHeading2,
  CustomTable,
  Tag,
  CustomButton,
} from "../../utils/CustomUi";

const RegisteredBoats = () => {
    const viewDetails = <CustomButton label={"View Details"} color={"#079669"} border={"1px solid #a8f3d0"} height={"40px"} width={"130px"}/>
  return (
    <div className="tab-content">
      <CustomHeading2
        title={"Registered Boats"}
        subtitle={
          "Complete fleet directory with real-time status and operational details"
        }
        titleColor={"#07966a"}
        titleSize={"var(--text-2xl)"}
        titleWeight={"var(--font-bold)"}
        subtitleSize={"var(--text-lg)"}
        subtitleWeight={"var(--font-medium)"}
        titleMarginBottom={"10px"}
      />

      <CustomTable
        headingList={[
          "Registration No.",
          "Pilot Name",
          "Type",
          "District",
          "Ghaat",
          "Status",
          "Actions",
        ]}
        dataList={[
          [
            "UP-VAR-001",
            "Ram Kumar",
            "Engine Driven",
            "Varanasi",
            "Dashashwamedh Ghaat",
            <Tag tagName={"Active"} />,
            viewDetails,
          ],
          [
            "UP-LKO-005",
            "Suresh Singh",
            "Manual",
            "Lucknow",
            "Gomti Ghaat",
            <Tag tagName={"Maintenance"} tagColor={"#e74f10"} />,
            viewDetails,
          ],
        ]}
        borderColor="#e2e8f0"
        headerBg="#f7f9fb"
      />
    </div>
  );
};

export default RegisteredBoats;

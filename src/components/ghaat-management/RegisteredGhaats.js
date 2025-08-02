import {
  CustomHeading2,
  Tag,
  CustomTable,
  CustomButton,
} from "../../utils/CustomUi";
const RegisteredGhaats = () => {
  const viewDetails = (
    <CustomButton
      label={"View Details"}
      color={"#2463eb"}
      border={"1px solid #a8f3d0"}
      height={"40px"}
      width={"130px"}
    />
  );
  return (
    <div className="tab-content">
      <CustomHeading2
        title={"Registered Ghaats"}
        subtitle={
          "Complete directory of all registered river ports with real-time status"
        }
        titleColor={"#2367e6"}
        titleSize={"var(--text-2xl)"}
        titleWeight={"var(--font-bold)"}
        subtitleSize={"var(--text-lg)"}
        subtitleWeight={"var(--font-medium)"}
        titleMarginBottom={"10px"}
      />
      <CustomTable
        headingList={[
          "Ghaat Name",
          "District",
          "River",
          "Boats Assigned",
          "Capacity",
          "Status",
          "Actions",
        ]}
        dataList={[
          [
            "Dashashwamedh Ghaat",
            "Varanasi",
            "Ganga",
            "5/10",
            "10",
            <Tag tagName={"Operational"} />,
            viewDetails,
          ],
          [
            "Gomti Ghaat",
            "Lucknow",
            "Gomti",
            "3/5",
            "5",
            <Tag tagName={"Operational"} />,
            viewDetails,
          ],
        ]}
        borderColor="#e2e8f0"
        headerBg="#f7f9fb"
      />
    </div>
  );
};

export default RegisteredGhaats;

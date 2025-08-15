import { CustomHeading2, Tag } from "../../utils/CustomUi";
import InspectionCalendar from "./InspectionCalendar";

const InspectionSchedule = () => {
  const upcomingInspections = [
    {
      boat_registration_no: "UP-AGR-003",
      district: "Agra",
      due_date: "2024-02-15",
      days_left: 15,
    },
    {
      boat_registration_no: "UP-ALL-007",
      district: "Allahabad",
      due_date: "2024-02-20",
      days_left: 24,
    },
    {
      boat_registration_no: "UP-KAN-002",
      district: "Kanpur",
      due_date: "2024-02-25",
      days_left: 25,
    },
    {
      boat_registration_no: "UP-GOR-004",
      district: "Gorakhpur",
      due_date: "2024-03-01",
      days_left: 30,
    },
  ];
  return (
    <div className="inspection-schedule">
      <div className="upcoming-inspections tab-content border-style-light">
        <CustomHeading2
          title={"Upcoming Inspections"}
          subtitle={"Boats due for annual inspection"}
        />
        {upcomingInspections.length > 0 ? (
          upcomingInspections.map((item) => (
            <div
              className="district-info-top"
              style={{
                backgroundColor: "#fefce8",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
              key={item.boat_registration_no}
            >
              <CustomHeading2
                title={item.boat_registration_no}
                titleSize={"var(--text-base)"}
                titleWeight={"var(--font-semibold)"}
                subtitle={`${item.district} District`}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <p>{`Due: ${item.due_date}`}</p>
                <Tag tagName={`${item.days_left} Days Left`} />
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
      <div className="inspection calendar tab-content border-style-light">
        <InspectionCalendar />
      </div>
    </div>
  );
};

export default InspectionSchedule;

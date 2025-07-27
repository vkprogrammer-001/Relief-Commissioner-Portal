// Central export file for all static data
export { upDistricts, districtsByRegion } from './districts';
export {
  boatTypes,
  boatCapacities,
  engineTypes,
  boatMaterials,
  boatConditions,
  supportStaff,
} from './boatTypes';
export {
  inspectionTypes,
  inspectionStatus,
  priorityLevels,
  inspectionChecklist,
  hullCondition,
  engineCondition,
  safetyEquipment,
  overallCondition,
} from './inspectionTypes';
export {
  lifejacketTypes,
  lifejacketSizes,
  distributionStatus,
  jacketsPerBoat,
} from './lifejacketTypes';

export { registrationAuthority } from './registrationAuthority';
export { rivers } from './rivers';
export { roadAccessibility } from './roadAccessibility';


// Common status options used across the application
export const commonStatus = [
  "Active",
  "Inactive",
  "Pending",
  "Approved",
  "Rejected"
];

export const urgencyLevels = [
  "Emergency",
  "Urgent",
  "Normal",
  "Low Priority"
];
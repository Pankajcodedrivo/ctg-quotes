// src/constants/dropdownOptions.ts

export interface SelectOption {
  label: string;
  value: string;
}

/* =========================
   BASIC REGISTRATION
========================= */

export const maritalStatusOptions: SelectOption[] = [
  { label: "Single", value: "single" },
  { label: "Married", value: "married" },
  { label: "Domestic Partnership / Civil Union", value: "domestic_partner" },
  { label: "Divorced", value: "divorced" },
  { label: "Widowed", value: "widowed" },
  { label: "Separated", value: "separated" },
];

export const genderOptions: SelectOption[] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

/* =========================
   DRIVER LICENSE
========================= */

export const licenseTypeOptions: SelectOption[] = [
  { label: "Personal", value: "personal" },
  { label: "Commercial (non-chauffeur)", value: "commercial" },
  { label: "Chauffeur", value: "chauffeur" },
  { label: "Permit", value: "permit" },
  { label: "Foreign Driver’s License", value: "foreign" },
  { label: "Not Licensed / State ID", value: "not_licensed" },
];

export const licensedYearsOptions: SelectOption[] = Array.from(
  { length: 20 },
  (_, i) => ({
    label: i === 19 ? "20+ years" : `${i + 1} year${i > 0 ? "s" : ""}`,
    value: i === 19 ? "20_plus" : String(i + 1),
  })
);

/* =========================
   US STATES (FULL NAMES)
========================= */

export const usStateOptions: SelectOption[] = [
  { label: "Alabama", value: "AL" },
  { label: "Alaska", value: "AK" },
  { label: "Arizona", value: "AZ" },
  { label: "Arkansas", value: "AR" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Hawaii", value: "HI" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Iowa", value: "IA" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Maine", value: "ME" },
  { label: "Maryland", value: "MD" },
  { label: "Massachusetts", value: "MA" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Mississippi", value: "MS" },
  { label: "Missouri", value: "MO" },
  { label: "Montana", value: "MT" },
  { label: "Nebraska", value: "NE" },
  { label: "Nevada", value: "NV" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "New York", value: "NY" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregon", value: "OR" },
  { label: "Pennsylvania", value: "PA" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Texas", value: "TX" },
  { label: "Utah", value: "UT" },
  { label: "Vermont", value: "VT" },
  { label: "Virginia", value: "VA" },
  { label: "Washington", value: "WA" },
  { label: "West Virginia", value: "WV" },
  { label: "Wisconsin", value: "WI" },
  { label: "Wyoming", value: "WY" },
];

/* =========================
   HOUSEHOLD / RELATIONSHIP
========================= */

export const yesNoOptions: SelectOption[] = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const relationshipOptions: SelectOption[] = [
  { label: "Self", value: "self" },
  { label: "Spouse", value: "spouse" },
  { label: "Domestic Partner", value: "domestic_partner" },
  { label: "Child", value: "child" },
  { label: "Parent", value: "parent" },
  { label: "Sister", value: "sister" },
  { label: "Brother", value: "brother" },
  { label: "Relative (Other)", value: "relative_other" },
  { label: "Roommate", value: "roommate" },
  { label: "Friend", value: "friend" },
  { label: "Other", value: "other" },
];

/* =========================
   VEHICLE
========================= */

export const vehicleUseOptions: SelectOption[] = [
  { label: "Commute (work or school)", value: "commute" },
  { label: "Personal / Pleasure", value: "personal" },
  { label: "Business Use", value: "business" },
  { label: "Commercial Use", value: "commercial" },
  { label: "Farm / Ranch Use", value: "farm" },
];

export const vehicleOwnershipOptions: SelectOption[] = [
  { label: "Owned", value: "owned" },
  { label: "Financed", value: "financed" },
  { label: "Leased", value: "leased" },
];

export const vehicleOwnedDurationOptions: SelectOption[] = [
  { label: "Less than 1 month", value: "lt_1_month" },
  { label: "1 to 6 months", value: "1_6_months" },
  { label: "6 months to 1 year", value: "6_12_months" },
  { label: "1 to 3 years", value: "1_3_years" },
  { label: "3 to 5 years", value: "3_5_years" },
  { label: "5 years or longer", value: "5_plus_years" },
];

export const annualMileageOptions: SelectOption[] = [
  "0–3,999",
  "4,000–5,999",
  "6,000–7,999",
  "8,000–9,999",
  "10,000–11,999",
  "12,000–13,999",
  "14,000–15,999",
  "16,000–17,999",
  "18,000–19,999",
  "20,000–21,999",
  "22,000–23,999",
  "24,000–26,999",
  "27,000–29,999",
  "30,000+",
].map((range) => ({
  label: `${range} miles per year`,
  value: range.replace(/[^0-9+]/g, "_"),
}));

/* =========================
   PROPERTY
========================= */

export const propertyTypeOptions: SelectOption[] = [
  { label: "Single Family Home", value: "single_family" },
  { label: "Townhome", value: "townhome" },
  { label: "Condo", value: "condo" },
  { label: "Mobile Home", value: "mobile_home" },
  { label: "Duplex", value: "duplex" },
  { label: "Multi Family Home", value: "multi_family" },
  { label: "Landlord / Rental Property (DP3)", value: "dp3" },
  { label: "Vacant Property", value: "vacant" },
  { label: "Under Construction / Renovation", value: "construction" },
  { label: "Secondary / Vacation Home", value: "secondary_home" },
];

/* =========================
   LIFE INSURANCE
========================= */

export const lifeInsuranceOptions: SelectOption[] = [
  { label: "Term Life (most common)", value: "term" },
  { label: "Whole Life", value: "whole" },
  { label: "Universal Life", value: "universal" },
  { label: "Unsure / Help Me Choose", value: "unsure" },
];

/* =========================
   BUSINESS INSURANCE
========================= */

export const businessInsuranceOptions: SelectOption[] = [
  { label: "General Liability", value: "general_liability" },
  { label: "Workers Compensation", value: "workers_comp" },
  { label: "Commercial Property", value: "commercial_property" },
  { label: "Commercial Auto", value: "commercial_auto" },
  { label: "BOP (Business Owners Policy)", value: "bop" },
  { label: "Professional Liability (E&O)", value: "eo" },
  { label: "Cyber Liability", value: "cyber" },
  { label: "Commercial Flood", value: "flood" },
  { label: "Contractors Insurance", value: "contractors" },
  { label: "Restaurant / Retail Insurance", value: "restaurant_retail" },
  { label: "Ask me what I need", value: "unsure" },
];

/* =========================
   RENTERS
========================= */
export const rentersTypeOptions: SelectOption[] = [
  { label: "Apartment", value: "apartment" },
  { label: "Condo", value: "condo" },
  { label: "Townhome", value: "townhome" },
  { label: "Single Family Home", value: "single_family" },
];

/* =========================
   RECREATIONAL VEHICLES
========================= */
export const recreationalVehicleOptions: SelectOption[] = [
  { label: "RV / Motorhome", value: "rv_motorhome" },
  { label: "Travel Trailer", value: "travel_trailer" },
  { label: "Fifth Wheel", value: "fifth_wheel" },
  { label: "Boat", value: "boat" },
  { label: "Jet Ski", value: "jet_ski" },
  { label: "ATV", value: "atv" },
  { label: "UTV", value: "utv" },
  { label: "Golf Cart", value: "golf_cart" },
  { label: "Dirt Bike", value: "dirt_bike" },
  { label: "Snowmobile", value: "snowmobile" },
];

export const createNumberOptions = (length: number, addPlus = false) => {
  return Array.from({ length }, (_, i) => {
    if (addPlus && i === length - 1) {
      return { label: `${length}+`, value: `${length}_plus` };
    }
    return { label: `${i + 1}`, value: `${i + 1}` };
  });
};
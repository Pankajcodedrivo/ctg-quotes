import {
  propertyTypeOptions,
  rentersTypeOptions,
  lifeInsuranceOptions,
  businessInsuranceOptions,
  recreationalVehicleOptions,
  createNumberOptions,
} from "../constants/dropdownOptions";


export const productQuestions = [
  /* AUTO INSURANCE */
  {
    id: "auto_vehicles",
    product: "auto",
    context: "register",
    type: "select",
    label: "How many vehicles will be on your policy?",
    options: createNumberOptions(9, true), 
  },

  /* PROPERTY INSURANCE */
  {
    id: "property_type",
    product: "property",
    context: "register",
    type: "select",
    label: "What type of property will you be quoting?",
    options: propertyTypeOptions,
  },

  /* RENTERS INSURANCE */
  {
    id: "renters_type",
    product: "renters",
    context: "register",
    type: "select",
    label: "What type of property will you be quoting?",
    options: rentersTypeOptions,
  },

  /* LIFE INSURANCE */
  {
    id: "life_type",
    product: "life",
    context: "register",
    type: "select",
    label: "Life Insurance Type",
    options: lifeInsuranceOptions,
  },

  /* BUSINESS INSURANCE */
  {
    id: "business_type",
    product: "business",
    context: "register",
    type: "select",
    label: "Business Insurance Type",
    options: businessInsuranceOptions,
  },

  /* RECREATIONAL VEHICLES */
  {
    id: "recreational_type",
    product: "recreational",
    context: "register",
    type: "checkbox",
    label: "What type of recreational vehicles do you need a quote on?",
    options: recreationalVehicleOptions,
  },
];

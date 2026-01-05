// src/utils/helpers.ts
import { productQuestions } from "../config/productQuestions";

export const getLabel = (questionId: string, value: string | string[]): string => {
  if (!value) return "—";
  const question = productQuestions.find((q) => q.id === questionId);
  if (!question) return Array.isArray(value) ? value.join(", ") : value;
  const mapValueToLabel = (v: string) => question.options?.find((o: any) => o.value === v)?.label ?? v;
  return Array.isArray(value) ? value.map(mapValueToLabel).join(", ") : mapValueToLabel(value);
};

// ===== DISCLAIMERS =====
export const disclaimers: string[] = [
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
];

export const signDisclaimers: string[] = [
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
  "Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.",
];

export const mapRegisterPayload = (state: any) => {
  const { step1, step2, step3, step4 } = state;

  return {
    /* BASIC */
    firstName: step1.firstName,
    lastName: step1.lastName,
    DOB: step1.dob,
    gender: step1.gender,
    maritalStatus: step1.maritalStatus,

    /* CONTACT */
    email: step1.email,
    emailVerified: step1.emailVerified,
    phoneNumber: step1.phone,
    phoneVerified: step1.phoneVerified,

    /* AUTH */
    password: step1.password,

    /* ADDRESS */
    address: step2.address,
    unit: step2.unit,
    city: step2.city,
    state: step2.state,
    zipCode: step2.zipCode,
    isTexas: step2.isTexas,

    /* PRODUCTS */
    products: step3.products,

    /* MEMBERS */
    members: step4.members.map((m: any) => ({
      ...m,
      canLogin: m.method === "invite",
    })),

    /* ANSWERS */
    answers: step4.answers,
  };
};
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
  const payload: any = {};

  const { step1, step2, step3, step4 } = state;

  // STEP1 – BASIC + CONTACT + AUTH
  if (step1) {
    payload.firstName = step1.firstName;
    payload.lastName = step1.lastName;
    payload.dob = step1.dob;
    payload.gender = step1.gender;
    payload.maritalStatus = step1.maritalStatus;

    payload.email = step1.email;
    payload.emailVerified = step1.emailVerified;
    payload.phone = step1.phone;
    payload.phoneVerified = step1.phoneVerified;

    payload.password = step1.password;
  }

  // STEP2 – ADDRESS
  if (step2) {
    payload.address = step2.address;
    payload.unit = step2.unit;
    payload.city = step2.city;
    payload.state = step2.state;
    payload.zipCode = step2.zipCode;
    payload.isTexas = step2.isTexas;
  }

  // STEP3 – PRODUCTS
  if (step3) {
    payload.products = step3.products || [];
  }

  // STEP4 – MEMBERS + ANSWERS
  if (step4) {
     members: step4.members.map((m: any) => {
      const member: any = {
        firstName: m.firstName,
        lastName: m.lastName,
        relationship: m.relationship,
        canLogin: m.method === "invite",
      };

      if (m.method === "invite" && m.email) member.email = m.email;
      if (m.method === "invite" && m.phone) member.phone = m.phone;

      return member;
    }),
    payload.answers = step4.answers || {};
  }

  return payload;
};

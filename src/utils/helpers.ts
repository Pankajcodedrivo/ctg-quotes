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
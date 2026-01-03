// store/registerSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  step1: {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    email: "",
    emailVerified: false,
    phone: "",
    phoneVerified: false,
    password: "",
    confirmPassword: "",
  },
  step2: {
    address: "",
    unit: "",
    city: "",
    state: "",
    zipCode: "",
    isTexas: true,
  },
  step3: {
    products: [],
  },
    step4: {
    subStep: 1, // 👈 IMPORTANT
    members: [] as {
      name: string;
      relationship: string;
      method: "invite" | "manual";
      inviteType?: "email" | "phone";
      email?: string;
      phone?: string;
    }[],
    answers: {} as Record<string, any>,
  },
  currentStep: 1,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateStepData: (
      state,
      action: PayloadAction<{ step: "step1" | "step2"  | "step3" | "step4"; data: any }>
    ) => {
      state[action.payload.step] = {
        ...state[action.payload.step],
        ...action.payload.data,
      };
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetRegister: () => initialState,
  },
});

export const { updateStepData, setStep, resetRegister } =
  registerSlice.actions;
export default registerSlice.reducer;
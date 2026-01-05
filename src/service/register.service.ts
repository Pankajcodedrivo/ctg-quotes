import catchAsync from "../utils/catchAsync";
import httpsCall from "./httpsCall";

export const sendOtpEmail = catchAsync(async (payload: any) => {
  const data = await httpsCall.post(`/auth/send-email-otp`,payload);
  return data;
});

export const sendOtpPhone = catchAsync(async (payload: any) => {
  const data = await httpsCall.post(`/auth/send-phone-otp`,payload);
  return data;
});

export const verifyOtp = catchAsync(async (payload: any) => {
  const data = await httpsCall.post(`/auth/verify-otp`,payload);
  return data;
});

export const register = catchAsync(async (payload: any) => {
  const data = await httpsCall.post(`/auth/qoutes/register`,payload);
  return data;
});

export const notifyAdmin = catchAsync(async (payload: any) => {
  const data = await httpsCall.post(`/auth/nofity-admin`,payload);
  return data;
});

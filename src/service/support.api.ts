import catchAsync from "../utils/catchAsync";
import httpsCall from "../service/httpsCall";

// update account 
export const saveSupport = catchAsync(async (values) => {
  const data = await httpsCall.post(`/support/create-support-request`, values);
  return data;
});
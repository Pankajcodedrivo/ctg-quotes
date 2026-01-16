import catchAsync from "../utils/catchAsync";
import httpsCall from "../service/httpsCall";

// save single doc
export const saveSingleDoc = catchAsync(async (values) => {
  const response = await httpsCall.patch('/document/save-single-document', values,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response;
});

// save multiple doc
export const saveMultipleDoc = catchAsync(async (values) => {
  const data = await httpsCall.patch(`/document/save-multi-document`, values,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
});

// Get Document
export const getMyDocuments = catchAsync(async () => {
  const response = await httpsCall.get(`/document/my-documents`);
  return response;
});
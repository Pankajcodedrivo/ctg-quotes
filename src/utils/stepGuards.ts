export const isStep1Complete = (step1: any) => {
  return (
    step1.firstName &&
    step1.lastName &&
    step1.email &&
    step1.password &&
    step1.confirmPassword
  );
};

export const isStep2Complete = (step2: any) => {
  return step2.address && step2.city && step2.state && step2.zipCode;
};

export const isStep3Complete = (step3: any) => {
  return step3.products && step3.products.length > 0;
};

export const isStep4Complete = (step4: any) => {
  return (step4.members && step4.members.length >= 0) || step4.members.length === 0;
};

export default class Validator {
  validatephoneNumber(phoneNumber) {
    let validatedphoneNumber = phoneNumber.replace(/\D/g, '');
    if (validatedphoneNumber.length === 11 && (/^\8/.test(phoneNumber))) {
      validatedphoneNumber = validatedphoneNumber.replace(/^\8/, '+7');
      this.phoneNumber = validatedphoneNumber;
      return this.phoneNumber;
    }
    this.phoneNumber = (`+${validatedphoneNumber}`);
    return this.phoneNumber;
  }
}

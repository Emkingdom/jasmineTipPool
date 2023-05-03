describe("Tip pool payment calculation test", () => {
  beforeEach(() => {
    billAmtInput.value = 2400;
    tipAmtInput.value = 40;
  });
  it("createCurPayment Should return an object with curreant payment and tip percent in it", () => {
    expect(
      createCurPayment(billAmtInput.value, tipAmtInput.value).tipPercent
    ).toBe(2);
  });

  it("appendPaymentTable Should create row element and pass to append with input value", () => {
    submitPaymentInfo();
    //appendPaymentTable(createCurPayment(billAmtInput.value, tipAmtInput.value));
    //console.log(paymentTbody.firstChild);
    //2 CUZ ADD TEXT NODE
    expect(paymentTbody.childNodes.length).toBe(2);
  });
  afterEach(() => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentId = 0;
    allPayments = {};
  });
});

describe("Helper fuction test tip-pool", () => {
  beforeEach(() => {
    allPayments = {
      payment1: {
        billAmt: "200",
        tipAmt: "5",
        tipPercent: 3,
      },
      payment2: {
        billAmt: "300",
        tipAmt: "95",
        tipPercent: 32,
      },
      payment3: {
        billAmt: "5000",
        tipAmt: "150",
        tipPercent: 3,
      },
    };
  });

  it("Should calculate payment total of all Bill Amount total", () => {
    expect(sumPaymentTotal("billAmt")).toEqual(5500);
  });

  it("Should calculate payment total of all Tip amount total", () => {
    expect(sumPaymentTotal("tipAmt")).toEqual(250);
  });

  it("Should calculate the bill and tip amount into a tip percent", () => {
    expect(
      calculateTipPercent(
        allPayments["payment1"].billAmt,
        allPayments["payment1"].tipAmt
      )
    ).toEqual(3);
  });

  it("Should append a newly create td elemement from the value", () => {
    let newTr = document.createElement("tr");
    appendTd(newTr, "$" + allPayments["payment1"].billAmt);
    expect(newTr.childNodes.length).toBe(1);
    expect(newTr.firstChild.innerHTML).toBe("$200");
  });

  afterEach(() => {
    allPayments = {};
  });
});

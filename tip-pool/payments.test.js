describe('Payment test with (with setup and tear-down)', () => {
    beforeEach(() => {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('Should add a new payment to allPayments on createCurPayment()', ()=> {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
    })

    it('Should create a table and append it with input value', ()=> {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        
        let tdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(tdList[0].innerText).toEqual('$100');
    });

    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 1000 , years: 5, rate: 10})).toBe('21.25');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ amount: 5000 , years: 5, rate: 10})).toBe('106.24');
});

/// etc

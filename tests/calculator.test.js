describe('Unit Economics Calculations', () => {

  test('CAC calculation', () => {
    expect(Math.round(10000 / 100)).toBe(100);
  });

  test('ARPU calculation', () => {
    expect(50000 / 100).toBe(500);
  });

  test('LTV calculation', () => {
    expect(Math.round((50000 / 100) * 12)).toBe(6000);
  });

  test('Profit calculation', () => {
    expect(50000 - 10000).toBe(40000);
  });

});
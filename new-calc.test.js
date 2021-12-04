const calc = require('./new-calc');
test('Soma 1 e 2 espera 3', () => {
    expect(calc.soma(1, 2)).toBe(3);
});

test('Soma -1 e -2 espera -3', () => {
    expect(calc.soma(-1, -2)).toBe(-3);
});

test('Soma -1 e 2 espera 1', () => {
    expect(calc.soma(-1, 2)).toBe(1);
});

test('Soma 5 e 0 espera 5', () => {
    expect(calc.soma(5, 0)).toBe(5);
});

test('Soma 5 e A espera 5 + A', () => {
    expect(calc.soma(5, 'A')).toBe(5 + 'A');
});

test('Subtrai 2 e 1 espera 1', () => {
    expect(calc.sub(2, 1)).toBe(1);
})

test('Subtrai -1 e -2 espera 1', () => {
    expect(calc.sub(-1, -2)).toBe(1);
})

test('Subtrai 2 e -1 espera 3', () => {
    expect(calc.sub(2, -1)).toBe(3);
})

test('Subtrai 2 de 0 espera 2', () => {
    expect(calc.sub(2, 0)).toBe(2);
})

test('multiplica 2 e 2 espera 4', () => {
    expect(calc.mult(2, 2)).toBe(4);
})

test('multiplica -2 e -5 espera 10', () => {
    expect(calc.mult(-2, -5)).toBe(10);
})

test('multiplica -2 e 6 espera -12', () => {
    expect(calc.mult(-2, 6)).toBe(-12);
})

test('multiplica 2 e 0 espera 0', () => {
    expect(calc.mult(2, 0)).toBe(0);
})

test('Divide 4 e 2 espera 2', () => {
    expect(calc.div(4, 2)).toBe(2);
})

test('Divide -6 e -2 espera 3', () => {
    expect(calc.div(-6, -2)).toBe(3);
})

test('Divide -8 e 4 espera -2', () => {
    expect(calc.div(-8, 4)).toBe(-2);
})

test('Divide 5 e 0 espera Infinity', () => {
    expect(calc.div(5, 0)).toBe(Infinity);
})
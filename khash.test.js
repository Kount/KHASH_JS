const khash = require('./khash');

describe("KHASH Tests", () => {
    test('Visa Test card: 4111111111111111', () => {
        var result = khash.hash("4111111111111111", 14);

        expect(result).toBe("411111WMS5YA6FUZA1KC");
    });

    test('MasterCard: 5454545454545454', () => {
        var result = khash.hash("5454545454545454", 14);

        expect(result).toBe("545454E58W8101GXHU4U");
    });

    test('American Express Test Card: 374410712128163', () => {
        var result = khash.hash("374410712128163", 14);

        expect(result).toBe("3744101P95YO2CXFZDN0");
    });

    test('Discover Test Card: 6011000000000012', () => {
        var result = khash.hash("6011000000000012", 14);

        expect(result).toBe("601100HFMWO1DQWO6C79");
    });

    test('Discover Bad Card: 6011180161073', () => {
        var result = khash.hash("6011180161073659", 14);

        expect(result).toBe("601118XQEYTYFYQ67HBB");
    });

    test('Diners Club/ Carte Blanche: 38000000000006', () => {
        var result = khash.hash("38000000000006", 14);

        expect(result).toBe("3800007KGYCD1ZE74JVH");
    });

})
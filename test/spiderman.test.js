const Spiderman = require("./../app/spiderman.js")

describe("Unit Test for Spiderman Class", () => {
    test('1) Creating spiderman object', () => {
        //Escribimos aqui el código que queremos usar tal cual
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Validamos que el código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });
    test('2) Use the method getInfo()', () => {
        //Escribimos aqui el código que queremos usar tal cual
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

        //Validamos que el código funcione de la forma esperada
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
})
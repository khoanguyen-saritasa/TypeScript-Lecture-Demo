class Cat {
    public static species = "12323"
    protected name = "Cat 1"
    private house = "1111"

    talk() {
        this.house = "!23213"
        this.name = "23123"
    }
}

class Cat2 extends Cat {
    constructor() {
        super();
        this.name = "123"
    }
}

const cat = new Cat2()

Cat2.species = "Asd"
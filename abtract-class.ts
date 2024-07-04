abstract class Animal {
    public owner: "Khoa Nguyen";

    public abstract makeSound(loud: boolean): void;
 }
 
 class Cow extends Animal {
     public makeSound(loud: boolean): void {
        if(loud){
            console.log("Cow is making too much sound")
        }
         console.log("Meo meo")
     }
 }
 
 class Dog extends Animal {
    public makeSound(loud: boolean): void {
        if(loud){
            console.log("Dog is making too much sound")
        }
        console.log("Gau gau")
    }
}

const dog = new Dog()

dog.makeSound(true)
function fancy(callback: () => string) {
  return `✨${callback()}✨`;
}

class Person {
  public sayStuff(): string {
    return fancy(() => "Stuff");
  }
}

class Robot {
  public killHumans(): string {
    return fancy(() => "🥵");
  }
}

console.log(new Person().sayStuff()); // Output: ✨Stuff✨.
console.log(new Robot().killHumans()); // Output: ✨🥵✨.

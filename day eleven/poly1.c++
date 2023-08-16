// parent class Livingthings
class Livingthings {
    // creating live method
    public void live() {
      System.out.print("live on ");
    }
  }
  // Animals class extends Livingthings
  class Animals extends Livingthings {
    // overriding live method
    public void live() {
      System.out.println("water, air, and land.");
    }
  }
  // Humanbeing class extends Livingthings
  class Humanbeing extends Livingthings {
    // overriding live method
    public void live() {
      System.out.println("land.");
    }
  }
  // Plants class extends Livingthings
  class Plants extends Livingthings {
    // overriding live method
    public void live() {
      System.out.println("water and land.");
    }
  }
  class Polymorphism {
    public static void main(String[] args) {
      // creating new object of Livingthings class
      Livingthings LT = new Livingthings();
      Livingthings LT1;
      LT1 = new Animals();
      System.out.print("Animals ");
      LT.live();
      LT1.live();
      LT1 = new Humanbeing();
      System.out.print("Human beings ");
      LT.live();
      LT1.live();
      LT1 = new Plants();
      System.out.print("Plants ");
      LT.live();
      LT1.live();
    }
  }
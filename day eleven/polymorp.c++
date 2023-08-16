/*
Polymorphism in Java is mainly divided into two types.

Compile-time polymorphism
Runtime polymorphism

Compile-time polymorphism can be achieved by method overloading, and Runtime polymorphism can be achieved by method overriding.
 */
// Parent class to illustrate run-time polymorphism
class Parent {
    // creating print method
    void print() {
      System.out.println("Hi I am parent");
    }
  }
  // Child class extends Parent class
  class Child extends Parent {
    // overriding print method
    void print() {
      System.out.println("Hi I am children");
    }
  }
  // Overload class to illustrate compile-time polymorphism
  class Overload {
    // Creating a statement method
    void statement(String name) {
      System.out.println("Hi myself " + name);
    }
    // overloading statement method
    void statement(String fname, String lname) {
      System.out.println("Hi myself " + fname + " " + lname);
    }
  }
  public class Main {
    public static void main(String[] args) {
      // creating instance of parent
      Parent obj1;
      obj1 = new Parent();
      obj1.print();
      obj1 = new Child();
      obj1.print();
  
      // creating instance of overload
      Overload obj2 = new Overload();
      obj2.statement("Soham.");
      obj2.statement("Soham", "Medewar.");
    }
  }
// Parent class
class Parent{
	int value = 50;
}
// Child class extends Parent class
class Child extends Parent{
	int value = 100;
}
class Polymorphism{
    public static void main(String[] args) {
    // creating new object of Parent class
	Parent obj1 = new Child();
	System.out.println("Child value : "+obj1.value);
    }
}
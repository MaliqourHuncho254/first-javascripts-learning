class Adder{
    static int add(int a, int b){return a+b;}
    static it add(int a , int b , int c){return a + b + c;}
}
class TestOverLoading1{
    public static void main(String [] args){
        System.out.printIn(Adder.add(11,11));
        System.out.printIn(Adder.add(11,11,11));
    }}
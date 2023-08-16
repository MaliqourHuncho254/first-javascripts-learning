
class Main_Overloading {
 
	//main 1 
	public static void main(String[] args)
	{
		System.out.println("Overloading from main 1");
		Main_Overloading.main("User!");
	}
    //main 2
	public static void main(String arg1)
	{
		System.out.println("Hello, " + arg1 +" Overloading main 2");
		Main_Overloading.main("Are you learning", " Main Method overloading!");
	}
	//main 3
	public static void main(String arg1, String arg2)
	{
	    System.out.println("Overloading main 3");
		System.out.println("Hi, " + arg1 + ", " + arg2);
	}
}

//If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.
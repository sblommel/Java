package Fun.Demo;

public class Strings {
    public static void main(String [] args){
        System.out.println("Hello World!");

        String coolQuote = "It is not the Mountains that will wear you out, it is the pebble in your shoe-";
        
        String author = "Muhammad Ali";
        // coolQuote.length()

        String result = coolQuote.concat(author);

        System.out.println(result);

        Integer wherePebbleAt = coolQuote.indexOf("pebble");

        System.out.println((coolQuote.indexOf("pebble")));

        //Equality Comparison for STRINGS, watch out of this one!
        // Normal string assignment
    String a = "same string";
    String b = "same string";
    System.out.println(a == b); // true
// Creating new strings as separate objects (another way to create a String)
    a = new String("same letters");
    b = new String("same letters");
    System.out.println(a == b); // false. Not the same object in memory.
    System.out.println(a.equals(b)); // true. same exact characters. This line is a better to check equality

    generateFullName("Samira", "Blommel");
    generateFullName("Samira", "Jeewa", "Blommel");


}
    
    //creating our own methods here 
    //String.indexOf(String str) : int
    
    public static void generateFullName(String firstName, String lastName){
        System.out.println(firstName + lastName);
        System.out.println(String.format("Hello, %s %s", firstName, lastName));

    }

    //method overloading when you have same method name but may slightly differ in parameters
    //this ones method signature has first, middle, and last name
    public static void generateFullName(String firstName, String middleName, String lastName){
        System.out.println(firstName + lastName);
        System.out.println(String.format("Hello, %s %s %s", firstName, middleName, lastName));

    }


}

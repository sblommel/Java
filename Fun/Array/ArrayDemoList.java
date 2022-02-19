//package Fun.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayDemoList {
    public static void main(String[] args) {

        //how to initialize an arraylist with values
    // ArrayList<String> names = new ArrayList<String>(Arrays.asList("Bob", "Bobba"));

        //initialize an empty arrayList with no values
       ArrayList <String> names = new ArrayList<String>();
       
       
       names.add("Samira");
       names.add("Mike");
       names.add("Ghazi");
       names.add("Zara");

       System.out.println(names.get(0));
       System.out.println(names);
       names.remove(0);
       System.out.println(names);

        names.set(0, "Bobbi"); // updating the value at index 0 to be Bob
        System.out.println(names);


        for( int i = 0; i < names.size(); i++){
            System.out.println("looping . I is---" + i);
            System.out.println(names.get(i)); // its like saying names [i] in JS or Python

        }
       //enhanced for loop is when we dont need index number just the values at the index number 
       for(String name : names){
        System.out.println(name);
        }
        
    }
}

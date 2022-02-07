
public class HelloWorld {
    //the entry point to our application is called the main method
    public static void main (String[] args){

        // Primitive data types- contain minimum requirements to store the variable
        String name = "Lebron";
        int numberOfWins = 4;

        //This Integer is an OBJECT type. Comes with more built in functions for the variable.
        Integer jerseyNumber = 23;
        

        System.out.println("hello world!");
        System.out.println("How is it going?" + name);
        System.out.println(String.format("How is it going %s , your Jersey number is %s", name, jerseyNumber));
        System.out.printf("How is it going %s , your Jersey number is %s", name, jerseyNumber);
        System.out.printf("How is it going %s , your Jersey number is %s \n", name, jerseyNumber);
        System.out.println("How many championship wins:" + numberOfWins);
        System.out.println("Today is Monday!");

        if(numberOfWins >= 6){
            System.out.println("You think you are like Mike!");
        } else if (numberOfWins == 5){
            System.out.println("Almost like Mike!");
        }else{
            System.out.println("Not like Mike");
        }


    }
    
}
public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly.";
        String readyMessage = ", your order is ready.";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double lattePrice = 3.00;
        double dripcoffeePrice = 2.75;
        double cappuccinoPrice = 3.75;

    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Noah";
        String customer3 = "Sam";
        String customer4 = "Jimmy";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;

       
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + readyMessage);

        if(isReadyOrder2 == true){
            System.out.println(customer2 + readyMessage + displayTotalMessage + cappuccinoPrice);
        }else{
            System.out.println(customer2 + pendingMessage);
        }

        System.out.println(customer3 + displayTotalMessage + 2*lattePrice);

        if(isReadyOrder3 == true){
            System.out.println(customer3 + readyMessage);
        }else{
            System.out.println(customer3 + pendingMessage);
        }

        System.out.println(customer3 + displayTotalMessage + ((lattePrice - dripcoffeePrice)));


    }
}

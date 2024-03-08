// index.js

// Voyager - A versatile platform designed to assist travelers in planning and organizing their trips efficiently.

// Voyager functionality
class Voyager {
    constructor() {
        this.trips = [];
        this.destinations = {};
    }

    // Method to create a new trip
    createTrip(tripName, destination) {
        const trip = {
            name: tripName,
            destination: destination
        };
        this.trips.push(trip);
        this.destinations[tripName] = [];
    }

    // Method to add activities to a trip
    addActivity(tripName, activity) {
        this.destinations[tripName].push(activity);
    }

    // Method to display all trips and their activities
    displayTrips() {
        console.log("Trips:");
        this.trips.forEach(trip => {
            console.log(`- ${trip.name}: Destination - ${trip.destination}`);
            const tripActivities = this.destinations[trip.name];
            if (tripActivities.length > 0) {
                console.log("  Activities:");
                tripActivities.forEach(activity => {
                    console.log(`    - ${activity}`);
                });
            }
        });
    }
}

// Example usage:
const voyagerApp = new Voyager();

// Creating trips
voyagerApp.createTrip("Barcelona Getaway", "Barcelona, Spain");
voyagerApp.createTrip("Tokyo Adventure", "Tokyo, Japan");

// Adding activities to trips
voyagerApp.addActivity("Barcelona Getaway", "Visit Sagrada Familia");
voyagerApp.addActivity("Barcelona Getaway", "Explore Gothic Quarter");
voyagerApp.addActivity("Tokyo Adventure", "Visit Tokyo Skytree");
voyagerApp.addActivity("Tokyo Adventure", "Try authentic Japanese sushi");

// Displaying trips and activities
voyagerApp.displayTrips();

function compareMovers() {
    // Get form data
    var location = document.getElementById("location").value;
    var serviceDate = document.getElementById("serviceDate").value;
    var startTime = document.getElementById("startTime").value;
    var numOfHours = document.getElementById("numOfHours").value;
    var numOfCrew = document.getElementById("numOfCrew").value;
 
   
    var elevator = document.getElementById("elevator").value;
    var storfloor = document.getElementById("storfloor").value;
    var propertytype = document.getElementById("propertytype").value;
    var serviceLoadingUnloading = document.getElementById("serviceLoadingUnloading").value;
    var servicePackingUnpacking = document.getElementById("servicePackingUnpacking").value;
    var cleaningService= document.getElementById("cleaningService").value;
    var pianoMoving= document.getElementById("pianoMoving").value;
    var gunMoving= document.getElementById("gunMoving").value;
    var uboxcontainer= document.getElementById("uboxcontainer").value;

    // Save data to sessionStorage
    var formData = {
        location: location,
        serviceDate: serviceDate,
        startTime: startTime,
        numOfHours: numOfHours,
        numOfCrew: numOfCrew,
  
        uboxcontainer:uboxcontainer,
        elevator:elevator,
        storfloor:storfloor,
        propertytype:propertytype,
        serviceLoadingUnloading:serviceLoadingUnloading,
        servicePackingUnpacking:servicePackingUnpacking,
        cleaningService:cleaningService,
        pianoMoving:pianoMoving,
        gunMoving:gunMoving,
    };

    sessionStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to the result page
    window.location.href = "Total.html";
}

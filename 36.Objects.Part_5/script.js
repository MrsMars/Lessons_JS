function creatUser(pName, pAge){
    
    return {
        
        name: pName,
        age: pAge,
        
        displayInfo: function(){document.write("Name: " + this.name + ", age: " + this.age + "</be>");},
        driceCar: function(car){document.write(this.name + " drives " + car.name + "<br/>");}
    };
};

function createCar(mName, mYear){
    
    return{
        name: mName,
        year: mYear
    };
};

var tom = creatUser("Tom", 26);
tom.displayInfo();

var bentley = createCar("Bentley", 2004);
tom.driceCar(bentley);      

                                                    /* 
                                                        Name: Tom age: 26
                                                        Том drives Bentley
                                                    */
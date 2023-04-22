

var images = ["Tatayya.jpg","Nanamma.jpg","Ammamma.jpg", "Papa.jpg" , "Mom.jpg", "Boby.jpg", "Alekhya Atta.jpg", "Aksh.jpg", "Saanvi.jpg"];

var names = ["Raju - Paternal Grandfather","Chittemma - Paternal Grandmother","Kameshwari - Maternal Grandmother","Pradeep - Father", "Renuka - Mother", "Subrahmanyam - Uncle","Alekhya - Aunt", "Akshara - Sister" ,"Saanvika - Cousin"];


var age = [61,59,3,37,36,33,31,8,60];

age.sort(function(a, b) {     return a - b;     });

age.reverse(function(a, b) {     return a - b;  });


console.log("The value at i is: ", age[i]);






var i = 0;


function update()
{
    

    var numbers_of_family_member_in_array = 9;
    if(i>= numbers_of_family_member_in_array )
    {
        i = 0;
    }
    console.log("The value at i is: ", i);

    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i];

    document.getElementById("family_member_image").src = updatedImage;

    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    i++;

            var max_number = Math.max.apply(Math, age);
            console.log("The highest age is: ", max_number);

    

            var min_number = Math.min.apply(Math, age);
            console.log("The lowest age is: ", min_number);
}


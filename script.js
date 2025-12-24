function calculateAge() {
    const dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("result").innerText = "Please select a date.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("result").innerText =
        `You are ${age} years old.`;
}



 /* 
 document.getElementById()	    Gets HTML element
 new Date(dob)	                Converts input to date
getFullYear()	                Gets year
getMonth()	                    Gets month (0–11)
getDate()	                    Gets day
age--	                        Adjusts if birthday not yet passed 
*/
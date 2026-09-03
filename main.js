

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}




const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

}




const bookingForm = document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const phone =
            document.getElementById("phone").value.trim();


        const service =
            document.getElementById("service").value;


        const date =
            document.getElementById("date").value;


        const travellers =
            document.getElementById("travellers").value;


        const pickup =
            document.getElementById("pickup").value.trim();


        const destination =
            document.getElementById("destination").value.trim();


        if (!name || !phone || !service || !date || !travellers || !pickup) {

            alert("Please complete all required fields.");

            return;

        }


       

        let formattedDate = date;


        if (date) {

            const selectedDate = new Date(date + "T00:00:00");

            formattedDate =
                selectedDate.toLocaleDateString(
                    "en-ZA",
                    {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    }
                );

        }


        

        const message = `

Hello Ramudus Express! 👋

I would like to make a booking enquiry.

━━━━━━━━━━━━━━━━━━

BOOKING DETAILS

Name:
${name}

Phone:
${phone}

Service:
${service}

Travel Date:
${formattedDate}

Number of Travellers:
${travellers}

Pickup Location:
${pickup}

Destination / Message:
${destination || "Not specified"}

━━━━━━━━━━━━━━━━━━

Please confirm availability and provide any additional booking information.

Thank you.
Ramudus Express

        `.trim();


        

        const whatsappNumber = "27724406509";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetID =
            this.getAttribute("href");


        if (
            targetID &&
            targetID !== "#"
        ) {

            const target =
                document.querySelector(targetID);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});
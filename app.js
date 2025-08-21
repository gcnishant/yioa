const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden,.contact-us,.our-mission,.mentorship-program,.who-we-are,.timeline-section,.frequent-questions,.credits');
hiddenElements.forEach((el) => observer.observe(el))


window.addEventListener('scroll', function() {
    var header = document.getElementById('fixed-header');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        header.classList.add('smaller');
    } else {
        header.classList.remove('smaller');
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    const words = ["empower", "inspire"];
    let index = 0;
    const wordElement = document.getElementById('animated-word');

    // Only proceed if wordElement exists
    if (wordElement) {
        function changeWord() {
            wordElement.classList.remove('typing');
            setTimeout(() => {
                wordElement.textContent = words[index];
                wordElement.classList.add('typing');
                index = (index + 1) % words.length;
            }, 100);
        }

        setInterval(changeWord, 3000);
    } else {
        console.warn('Element with ID "animated-word" not found');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle the navigation menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the navigation menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle the visibility of the clicked answer
            const answer = this.nextElementSibling;

            // If the clicked question is already active, hide it
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.classList.remove('active');
            } else {
                // Close all answers and remove the active class from all questions
                questions.forEach(q => {
                    q.nextElementSibling.style.display = 'none';
                    q.classList.remove('active');
                });

                // Open the clicked answer and add the active class
                answer.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});

const contactReasonSelect = document.getElementById('contact-reason');
const otherReasonContainer = document.getElementById('other-reason-container');

contactReasonSelect.addEventListener('change', () => {
    if (contactReasonSelect.value === 'Other') {
        otherReasonContainer.style.display = 'block';
    } else {
        otherReasonContainer.style.display = 'none';
    }
});

document.querySelector(".form-container").addEventListener("submit", function(e) {
    const humanField = this.querySelector("[name='areYouHuman']");
    if (humanField.value) { // If the field has any value
      e.preventDefault(); // Stop the form from submitting
      alert("Error, please try again."); // Display error message
    }
});
  
// Timeline Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('timeline-modal');
    const closeBtn = document.querySelector('.close-modal');
    const timelineBtns = document.querySelectorAll('.timeline-btn');
    
    // Timeline event data
    const timelineEvents = {
        1: {
            title: "New Beginnings",
            description: "LUMA's Founder and current President, Rabin Bhandari, initially started this organization going under the title Young Immigrants of America, along with Board Members Saad Bentahar, Camila Chi, Anushka Dutta, Prisha Guruwacharya, and Arvin Singh. They had dreams of providing mentorship to enable young immigrants to thrive academically, personally, and socially; taking matters into their own hands by starting YIOA.",
            images: [
                "./Exampleimages/YIOA LOGO DESIGN-svg.png",
                "./Exampleimages/YIOA LOGO DESIGN.svg"
            ]
        },
        2: {
            title: "ETE Collab",
            description: "To reach a broader community, YIOA worked with Equality Through Education to introduce the organization and its mission. Working cooperatively with ETE's President, Oorja Munot, YIOA's board held a successful webinar that opened the door for new members to get involved with YIOA and their mission in the upcoming future.",
            images: [
                "./RoughDraftImages/ete1.png",
                "./RoughDraftImages/ete2.png"
            ]
        },
        3: {
            title: "Meet the Primes",
            description: "YIOA Founders were invited to BCPS' Meet the Primes event. Students, organizations, prime contractors, and agency reps gathered to network and discuss future plans. YIOA was able to reach out to contractors and organizations they were interested in. They were also able to meet representatives already interested in helping YIOA start even bigger projects and collaborate together in the future.",
            images: [
                "./RoughDraftImages/mtp1.png",
                "./RoughDraftImages/mtp2.png"
            ]
        },
        4: {
            title: "UNICEF Collab",
            description: "YIOA's first interactive meeting came November 14th, collaborating with Eastern Technical High School's UNICEF United to put together goodie bags for the bright students in the ESOL program at Gunpowder Elementary to reinforce the importance of education and curiosity.",
            images: [
                "./Exampleimages/diversity.png",
                "./Exampleimages/comments.png"
            ]
        },
        5: {
            title: "BCPS Budget Meeting",
            description: "In December of 2024, YIOA had the chance to speak at the BCPS Budget Meeting and made sure to emphasize the needs of ESOL students and their experiences with the impact of language barriers on education. Through more personal examples, YIOA was the spokesperson for immigrant and international students struggling in the classroom.",
            images: [
                "./RoughDraftImages/bcps1.png",
                "./Exampleimages/data-science.png"
            ]
        },
        6: {
            title: "TABCO BLM Symposium",
            description: "YIOA participated in the Teachers Association of Baltimore County's Black Lives Matter symposium, demonstrating our commitment to social justice and equality. This event highlighted the intersection of immigrant rights and racial justice movements.",
            images: [
                "./RoughDraftImages/tabco1.png",
                "./RoughDraftImages/tabco2.png"
            ]
        },
        7: {
            title: "Vila Cresta CuCo",
            description: "On April 8th of 2025, YIOA attended Villa Cresta Elementary School's Cultural Coalescence event, supporting their PTA in encouraging their young students to explore, embrace, and enjoy cultures different than their own.",
            images: [
                "./RoughDraftImages/villa1.png",
                "./Exampleimages/diversity.png"
            ]
        },
        8: {
            title: "MAPISAC",
            description: "Shortly after Villa Cresta Elementary's CuCo, YIOA shifted gears and made themselves known to the youth at the Maryland Asian Pacific Islander South Asian Conference (MAPISAC). Through MAPISAC, YIOA was able to inspire driven youth a part of Maryland's Asian and Pacific Islander community to support them in their mission.",
            images: [
                "./RoughDraftImages/mapisac1.png",
                "./RoughDraftImages/mapisac2.png"
            ]
        }
    };
    
    // Function to open modal with event data
    function openModal(eventId) {
        const event = timelineEvents[eventId];
        if (!event) return;
        
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
            <h2 class="modal-event-title">${event.title}</h2>
            <p class="modal-event-description">${event.description}</p>
            <div class="modal-event-images">
                ${event.images.map(img => `<img src="${img}" alt="${event.title}">`).join('')}
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Event listeners for timeline buttons
    timelineBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-event'));
            openModal(eventId);
        });
    });
    
    // Event listeners for entire event content cards
    const eventContents = document.querySelectorAll('.event-content');
    eventContents.forEach((content, index) => {
        content.addEventListener('click', function() {
            const eventId = index + 1; // Event IDs are 1-based
            openModal(eventId);
        });
    });
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
  
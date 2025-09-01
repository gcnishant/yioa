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
                "./Exampleimages/UpdatedYIOA-HERO.png",
                "./Exampleimages/UpdatedYIOAPaper.png"
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
                "./RoughDraftImages/unicef1.png",
                "./RoughDraftImages/unicef2.png"
            ]
        },
        5: {
            title: "BCPS Budget Meeting",
            description: "In December of 2024, YIOA had the chance to speak at the BCPS Budget Meeting and made sure to emphasize the needs of ESOL students and their experiences with the impact of language barriers on education. Through more personal examples, YIOA was the spokesperson for immigrant and international students struggling in the classroom.",
            images: [
                "./RoughDraftImages/bcps1.png",
                "./RoughDraftImages/bcps2.png"
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
            title: "Villa Cresta CuCo",
            description: "On April 8th of 2025, YIOA attended Villa Cresta Elementary School's Cultural Coalescence event, supporting their PTA in encouraging their young students to explore, embrace, and enjoy cultures different than their own.",
            images: [
                "./RoughDraftImages/villa1.png",
                "./RoughDraftImages/villa2.png"
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
    
    // Event listeners for entire timeline cards
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach((card, index) => {
        card.addEventListener('click', function() {
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

// Horizontal Timeline Scroll Functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineTrack = document.getElementById('timeline-track');
    const prevBtn = document.getElementById('timeline-prev');
    const nextBtn = document.getElementById('timeline-next');
    const timelineLine = document.querySelector('.timeline-line');
    
    if (!timelineTrack || !prevBtn || !nextBtn || !timelineLine) return;
    
    let currentPosition = 0;
    const scrollAmount = 340; // Width of timeline item (300px) + margin (20px each side)
    const totalItems = document.querySelectorAll('.timeline-item').length;
    
    // Calculate max position based on actual container width rather than arbitrary visible items
    const container = timelineTrack.parentElement;
    const containerWidth = container.clientWidth;
    const totalTrackWidth = totalItems * scrollAmount + 100; // Include track padding (50px each side)
    const availableViewWidth = containerWidth - 100; // Account for timeline line positioning (50px each side)
    const maxPosition = Math.max(0, totalTrackWidth - availableViewWidth);
    
    // Update button states
    function updateButtonStates() {
        prevBtn.disabled = currentPosition <= 0;
        nextBtn.disabled = currentPosition >= maxPosition;
        
        // Update timeline line progress
        const progress = maxPosition > 0 ? (currentPosition / maxPosition) * 100 : 0;
        const progressWidth = Math.min(100, Math.max(12.5, progress));
        timelineLine.style.setProperty('--progress-width', `${progressWidth}%`);
    }
    
    // Smooth scroll function
    function scrollTimeline(position) {
        timelineTrack.style.transform = `translateX(-${position}px)`;
        currentPosition = position;
        updateButtonStates();
    }
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        const newPosition = Math.max(0, currentPosition - scrollAmount);
        scrollTimeline(newPosition);
    });
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        const newPosition = Math.min(maxPosition, currentPosition + scrollAmount);
        scrollTimeline(newPosition);
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    timelineTrack.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    timelineTrack.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        
        // Prevent default scrolling
        if (Math.abs(diffX) > 10) {
            e.preventDefault();
        }
    });
    
    timelineTrack.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        
        if (Math.abs(diffX) > 50) { // Minimum swipe distance
            if (diffX > 0 && currentPosition < maxPosition) {
                // Swipe left - go to next
                const newPosition = Math.min(maxPosition, currentPosition + scrollAmount);
                scrollTimeline(newPosition);
            } else if (diffX < 0 && currentPosition > 0) {
                // Swipe right - go to previous
                const newPosition = Math.max(0, currentPosition - scrollAmount);
                scrollTimeline(newPosition);
            }
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            const newPosition = Math.max(0, currentPosition - scrollAmount);
            scrollTimeline(newPosition);
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            const newPosition = Math.min(maxPosition, currentPosition + scrollAmount);
            scrollTimeline(newPosition);
        }
    });
    

    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Recalculate positions based on new container width
        const newContainerWidth = container.clientWidth;
        const newAvailableViewWidth = newContainerWidth - 100;
        const newMaxPosition = Math.max(0, totalTrackWidth - newAvailableViewWidth);
        
        if (currentPosition > newMaxPosition) {
            scrollTimeline(newMaxPosition);
        } else {
            updateButtonStates();
        }
    });
    
    // Initial setup
    updateButtonStates();
});
  
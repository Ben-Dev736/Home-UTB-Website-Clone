let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    else {
        slideIndex = n;
    }
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}

function moveSlide(n) {
    showSlides(slideIndex + n);
}

setInterval(() => {
    moveSlide(1);
}, 5000);

const headers = document.querySelectorAll(".accordion-header");
const toggleAllBtn = document.getElementById("toggleAllBtn");
const toggleText = document.getElementById("toggleText");
const toggleIcon = toggleAllBtn.querySelector("i");
let allExpanded = false;

headers.forEach(header => {
    header.addEventListener("click", function(e) {
        e.stopPropagation(); 
        this.classList.toggle("active");
        
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; 
        }
        let parentPanel = this.parentElement.closest(".panel-content");
        while (parentPanel) {
            parentPanel.style.maxHeight = "none"; 
            parentPanel = parentPanel.parentElement.closest(".panel-content");
        }
    });
});

toggleAllBtn.addEventListener("click", function() {
    allExpanded = !allExpanded;

    if (allExpanded) {
        toggleText.textContent = "Collapse all";
        toggleIcon.className = "fa-solid fa-chevron-down";
        document.querySelectorAll(".panel-content").forEach(p => p.style.maxHeight = "none");
        document.querySelectorAll(".accordion-header").forEach(h => h.classList.add("active"));
    } else {
        toggleText.textContent = "Expand all";
        toggleIcon.className = "fa-solid fa-chevron-right";
        document.querySelectorAll(".panel-content").forEach(p => p.style.maxHeight = null);
        document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("active"));
    }
});


function scrollCourses(direction) {
    const track = document.getElementById("coursesTrack");
    const scrollAmount = 300; 
    
    if (direction === 1) {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}
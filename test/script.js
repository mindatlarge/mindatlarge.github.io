const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const storage = document.getElementById("storage");

const thumbs = document.querySelectorAll(".project[data-target]");

let scrollPosition = 0;


// ==================================================
// OPEN PROJECT
// ==================================================

thumbs.forEach(thumb => {

    thumb.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId = thumb.dataset.target;
        const project = document.getElementById(targetId);

        if (!project) {

            console.error("Project not found:", targetId);

            return;

        }


        // Save current scroll position

        scrollPosition = window.scrollY;


        // Lock body scroll

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";


        // Move project into overlay

        overlayContent.appendChild(project);

        project.style.display = "block";


        // Open overlay

        overlay.classList.add("active");

        updateProjectAboutWidth(project);


        // ==================================================
        // CENTER FIRST IMAGE - DESKTOP ONLY
        // ==================================================

        requestAnimationFrame(() => {

            const gallery =
                project.querySelector(".project-galerija");

            const firstImg =
                gallery?.querySelector("img");


            if (!gallery || !firstImg) return;


            function centerFirstImage() {

                // Mobile: start from top

                if (window.innerWidth <= 600) {

                    gallery.style.paddingTop = "0px";

                    return;

                }


                // Desktop: center first image vertically

                const imgHeight =
                    firstImg.getBoundingClientRect().height;


                const paddingTop =
                    (window.innerHeight - imgHeight) / 2;


                gallery.style.paddingTop =
                    `${Math.max(paddingTop, 0)}px`;

            }


            if (firstImg.complete) {

                centerFirstImage();

            } else {

                firstImg.onload = centerFirstImage;

            }

        });

    });

});


// ==================================================
// CLOSE PROJECT
// ==================================================

function closeOverlay() {

    const project =
        overlayContent.firstElementChild;


    if (project) {

        // Reset first image positioning

        const gallery =
            project.querySelector(".project-galerija");


        if (gallery) {

            gallery.style.paddingTop = "";

        }


        // Hide project

        project.style.display = "none";


        // Move project back to storage

        storage.appendChild(project);

    }


    // Close overlay

    overlay.classList.remove("active");


    // Unlock body scroll

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";


    // Restore previous position

    window.scrollTo(0, scrollPosition);

}


// ==================================================
// CLOSE ON TAP
// ==================================================

let pointerStartX = 0;
let pointerStartY = 0;


// Remember where touch starts

overlay.addEventListener("pointerdown", (event) => {

    pointerStartX = event.clientX;
    pointerStartY = event.clientY;

});


// Close only if pointer didn't move

overlay.addEventListener("pointerup", (event) => {

    const moveX =
        Math.abs(event.clientX - pointerStartX);

    const moveY =
        Math.abs(event.clientY - pointerStartY);


    // If user moved finger, it's a scroll/swipe

    if (moveX > 10 || moveY > 10) {

        return;

    }


    // User tapped

    closeOverlay();

});


// ==================================================
// CLOSE WITH ESC
// ==================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeOverlay();

    }

});
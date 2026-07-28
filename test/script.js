// ==================================================
// ELEMENTS
// ==================================================

const overlay =
    document.getElementById("overlay");

const overlayContent =
    document.getElementById("overlay-content");

const storage =
    document.getElementById("storage");

const thumbs =
    document.querySelectorAll(".project");


let scrollPosition = 0;


// ==================================================
// LOAD PROJECT IMAGES AND VIDEOS
// ==================================================

function loadProjectMedia(project) {

    // ==============================================
    // IMAGES
    // ==============================================

    const images =
        project.querySelectorAll(
            "img[data-src]"
        );


    const imagePromises =
        [...images].map(img => {

            return new Promise(resolve => {

                const src =
                    img.dataset.src;


                // Load image

                img.onload = () => {

                    resolve();

                };


                // If image fails,
                // don't block the gallery

                img.onerror = () => {

                    resolve();

                };


                // Start loading

                img.src =
                    src;

            });

        });


    // ==============================================
    // VIDEOS
    // ==============================================

    const videoSources =
        project.querySelectorAll(
            "video source[data-src]"
        );


    const videoPromises =
        [...videoSources].map(source => {

            return new Promise(resolve => {

                const src =
                    source.dataset.src;


                const video =
                    source.parentElement;


                // Set video source

                source.src =
                    src;


                // Start loading video

                video.load();


                // Video is ready

                video.addEventListener(
                    "canplaythrough",
                    () => {

                        resolve();

                    },
                    {
                        once: true
                    }
                );


                // If video cannot load,
                // don't block the gallery

                video.addEventListener(
                    "error",
                    () => {

                        resolve();

                    },
                    {
                        once: true
                    }
                );


                // Fallback:
                // don't wait forever

                setTimeout(
                    resolve,
                    10000
                );

            });

        });


    // ==============================================
    // WAIT FOR ALL MEDIA
    // ==============================================

    return Promise.all([

        ...imagePromises,

        ...videoPromises

    ]);

}


// ==================================================
// GET FIRST MEDIA ELEMENT
// ==================================================

function getFirstMedia(project) {

    const firstImage =
        project.querySelector(
            ".project-galerija img"
        );


    const firstVideo =
        project.querySelector(
            ".project-galerija video"
        );


    // Find which one appears first
    // in the HTML

    const media = [

        firstImage,

        firstVideo

    ].filter(Boolean);


    if (!media.length) {

        return null;

    }


    media.sort(
        (a, b) => {

            const position =
                a.compareDocumentPosition(b);


            if (
                position &
                Node.DOCUMENT_POSITION_FOLLOWING
            ) {

                return -1;

            }


            return 1;

        }
    );


    return media[0];

}



// ==================================================
// POSITION FIRST MEDIA
// ==================================================

function positionProject(
    project
) {

    const wrapper =
        project.querySelector(
            ".project-galerija"
        );


    const firstMedia =
        getFirstMedia(project);


    if (
        !wrapper ||
        !firstMedia
    ) {

        return;

    }


    // ==============================================
    // MOBILE
    // ==============================================

    if (
        window.innerWidth <= 600
    ) {

        wrapper.style.transform =
            "none";

        return;

    }


    // ==============================================
    // DESKTOP
    // ==============================================

    function position() {

        const mediaHeight =
            firstMedia.getBoundingClientRect()
                .height;


        if (
            mediaHeight > 0
        ) {

            wrapper.style.transform =
                `translateY(
                    calc(
                        50vh -
                        ${mediaHeight / 2}px
                    )
                )`;

        }

    }


    // Image

    if (
        firstMedia.tagName ===
        "IMG"
    ) {

        if (
            firstMedia.complete
        ) {

            position();

        } else {

            firstMedia.onload =
                position;

        }

    }


    // Video

    else if (
        firstMedia.tagName ===
        "VIDEO"
    ) {

        if (
            firstMedia.readyState >= 2
        ) {

            position();

        } else {

            firstMedia.addEventListener(
                "loadeddata",
                position,
                {
                    once: true
                }
            );

        }

    }

}


// ==================================================
// OPEN PROJECT
// ==================================================

async function openProject(
    project
) {

    // ==============================================
    // SAVE SCROLL POSITION
    // ==============================================

    scrollPosition =
        window.scrollY;


    // ==============================================
    // LOCK BACKGROUND PAGE
    // ==============================================

    document.body.style.position =
        "fixed";

    document.body.style.top =
        `-${scrollPosition}px`;

    document.body.style.width =
        "100%";


    // ==============================================
    // MOVE PROJECT INTO OVERLAY
    // ==============================================

    overlayContent.appendChild(
        project
    );


    // Show project

    project.style.display =
        "block";


    // ==============================================
    // KEEP OVERLAY HIDDEN
    // WHILE MEDIA LOADS
    // ==============================================

    overlay.classList.remove(
        "active"
    );


    // ==============================================
    // LOAD ALL IMAGES AND VIDEOS
    // ==============================================

    await loadProjectMedia(
        project
    );


    // ==============================================
    // UPDATE PROJECT ABOUT WIDTH
    // ==============================================

    updateProjectAboutWidth(
        project
    );


    // ==============================================
    // POSITION FIRST IMAGE / VIDEO
    // ==============================================

    positionProject(
        project
    );


    // ==============================================
    // SHOW OVERLAY
    // ==============================================

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            overlay.classList.add(
                "active"
            );

        });

    });

}


// ==================================================
// CLOSE OVERLAY
// ==================================================

function closeOverlay() {

    // Don't close if already closed

    if (
        !overlay.classList.contains(
            "active"
        )
    ) {

        return;

    }


    const project =
        overlayContent.firstElementChild;


    if (project) {

        // ==========================================
        // RESET GALLERY POSITION
        // ==========================================

        const wrapper =
            project.querySelector(
                ".project-galerija"
            );


        if (wrapper) {

            wrapper.style.transform =
                "";

        }


        // ==========================================
        // HIDE PROJECT
        // ==========================================

        project.style.display =
            "none";


        // ==========================================
        // RETURN PROJECT TO STORAGE
        // ==========================================

        storage.appendChild(
            project
        );

    }


    // ==============================================
    // CLOSE OVERLAY
    // ==============================================

    overlay.classList.remove(
        "active"
    );


    // ==============================================
    // UNLOCK BACKGROUND
    // ==============================================

    document.body.style.position =
        "";

    document.body.style.top =
        "";

    document.body.style.width =
        "";


    // ==============================================
    // RESTORE SCROLL POSITION
    // ==============================================

    window.scrollTo(
        0,
        scrollPosition
    );


    // ==============================================
    // REMOVE FOCUS FROM THUMBNAIL
    // ==============================================

    if (
        document.activeElement
    ) {

        document.activeElement.blur();

    }

}


// ==================================================
// PROJECT THUMBNAIL CLICK
// ==================================================

thumbs.forEach(
    thumb => {

        thumb.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const targetId =
                    thumb.dataset.target;


                // No data-target

                if (
                    !targetId
                ) {

                    return;

                }


                const project =
                    document.getElementById(
                        targetId
                    );


                // Project not found

                if (
                    !project
                ) {

                    return;

                }


                // Open project

                openProject(
                    project
                );

            }
        );

    }
);


// ==================================================
// CLICK ANYWHERE TO CLOSE
// ==================================================

overlay.addEventListener(
    "click",
    closeOverlay
);


// ==================================================
// ESCAPE TO CLOSE
// ==================================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
            &&
            overlay.classList.contains(
                "active"
            )
        ) {

            closeOverlay();

        }

    }
);


// ==================================================
// RESPONSIVE UPDATE
// ==================================================

window.addEventListener(
    "resize",
    () => {

        // Do nothing if overlay closed

        if (
            !overlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        const project =
            overlayContent.firstElementChild;


        if (
            !project
        ) {

            return;

        }


        // Reposition first media

        positionProject(
            project
        );


        // Update about width

        updateProjectAboutWidth(
            project
        );

    }
);
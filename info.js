function updateProjectAboutWidth(project) {

    const firstImage =
        project.querySelector(".project-galerija img");

    const about =
        project.querySelector(".project-about");


    if (!firstImage || !about) return;


    function updateWidth() {

        const imageWidth =
            firstImage.getBoundingClientRect().width;


        if (imageWidth > 0) {

            about.style.width =
                `${imageWidth}px`;

        }

    }


    // Wait until browser has rendered the image

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            updateWidth();

        });

    });


    // Update if window changes size

    window.addEventListener(
        "resize",
        updateWidth
    );

}
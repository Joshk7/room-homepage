const states = [
  {
    mobileImage: "/images/mobile-image-hero-1.jpg",
    desktopImage: "/images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, 
            and style for property owners across the country. 
            Our experts combine form and function in bringing 
            your vision to life. Create a room in your own 
            style with our collection and make your property 
            a reflection of you and what you love.`,
  },
  {
    mobileImage: "/images/mobile-image-hero-2.jpg",
    desktopImage: "/images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy
            for you to find furniture for your home or place of 
            business. Locally, we’re in most major cities 
            throughout the country. Find the branch nearest you
            using our store locator. Any questions? Don't 
            hesitate to contact us today.`,
  },
  {
    mobileImage: "/images/mobile-image-hero-3.jpg",
    desktopImage: "/images/desktop-image-hero-3.jpg",
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy
            for you to find furniture for your home or place of 
            business. Locally, we’re in most major cities 
            throughout the country. Find the branch nearest you
            using our store locator. Any questions? Don't 
            hesitate to contact us today.`,
  },
];

const dialog = document.getElementById("dialog");
const dialogOpen = document.getElementById("dialog-open");
const dialogClose = document.getElementById("dialog-close");

const controlLeft = document.getElementById("control-left");
const controlRight = document.getElementById("control-right");

const handleDialogOpen = (e) => {
  dialog.showModal();
};

const handleDialogClose = (e) => {
  dialog.close();
};

const handleControlLeft = (e) => {

}

const handleControlRight = (e) => {

}

dialogOpen.addEventListener("click", handleDialogOpen);
dialogClose.addEventListener("click", handleDialogClose);

controlLeft.addEventListener("click", handleControlLeft);
controlRight.addEventListener("click", handleControlRight);
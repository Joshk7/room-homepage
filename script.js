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
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level
            of quality. Our company has invested in advanced 
            technology to ensure that every product is made as 
            perfect and as consistent as possible. With three 
            decades of experience in this industry, we understand 
            what customers want for their home and office.`,
  },
];

let index = 0;

const dialog = document.getElementById("dialog");
const dialogOpen = document.getElementById("dialog-open");
const dialogClose = document.getElementById("dialog-close");

const headerImageDesktop = document.getElementById("header-image-desktop");
const headerImageMobile = document.getElementById("header-image-mobile");
const headerTitle = document.getElementById("header-title");
const headerDescription = document.getElementById("header-description");

const controlLeft = document.getElementById("control-left");
const controlRight = document.getElementById("control-right");

const handleDialogOpen = (e) => {
  dialog.showModal();
};

const handleDialogClose = (e) => {
  dialog.close();
};

const setIndex = (i) => {
  const n = states.length;
  index = (i + n) % n;
  renderHeader();
};

const renderHeader = () => {
  const { mobileImage, desktopImage, title, description } = states[index];
  headerImageDesktop.srcset = desktopImage;
  headerImageMobile.src = mobileImage;
  
  headerImageMobile.src = headerImageMobile.src;

  headerTitle.textContent = title;
  headerDescription.textContent = description;
};

const handleControlLeft = (e) => {
  setIndex(index - 1);
};

const handleControlRight = (e) => {
  setIndex(index + 1);
};

dialogOpen.addEventListener("click", handleDialogOpen);
dialogClose.addEventListener("click", handleDialogClose);

controlLeft.addEventListener("click", handleControlLeft);
controlRight.addEventListener("click", handleControlRight);

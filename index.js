
// SECTION 1
const section1 = document.getElementById("section1");
const text1P1 = document.getElementById("text1-p1");
const text2P1 = document.getElementById("text2-p1");
const text3P1 = document.getElementById("text3-p1");

const img1P1 = document.getElementById("img1-p1");
const img2P1 = document.getElementById("img2-p1");
const img3P1 = document.getElementById("img3-p1");


const Number = document.getElementById("number");
const number1P1 = document.getElementById("number1-p1");
const number2P1 = document.getElementById("number2-p1");
const number3P1 = document.getElementById("number3-p1");
const number4P1 = document.getElementById("number4-p1");

// SECTION 2
const img1P2 = document.getElementById("img1-p2");
const img2P2 = document.getElementById("img2-p2");


//SECTION 3
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");


//SECTION 4
const containerP4 = document.getElementById("containerP4");
const img1P4 = document.getElementById("img1-p4");
const img2P4 = document.getElementById("img2-p4");
const img3P4 = document.getElementById("img3-p4");

//SECTION 5
const containerP5 = document.getElementById("containerP5");


const cardIcon1 = document.getElementById("cardIcon1");
const icon1 = document.getElementById("icon1");

const cardIcon2 = document.getElementById("cardIcon2");
const icon2 = document.getElementById("icon2");

const cardIcon3 = document.getElementById("cardIcon3");
const icon3 = document.getElementById("icon3");

const cardIcon4 = document.getElementById("cardIcon4");
const icon4 = document.getElementById("icon4");

const footerBottom = document.getElementById("footerBottom");


const pages = document.getElementById("pages");
const pages2 = document.getElementById("pages2");

const arrow = document.getElementById("arrow");
const arrow2 = document.getElementById("arrow2");

const pageLink = document.getElementById("pageLink");
const pageLink2 = document.getElementById("pageLink2");




const header = document.querySelector(".header");

const nav = document.getElementById("w-dropdown-list");
const nav2 = document.getElementById("nav2");
const cardNav = document.getElementById("cardNav");



const buttonHamburger = document.getElementById("buttonHamburger");
const contHeader = document.getElementById("contHeader");
const headerDiv = document.getElementById("headerDiv");
const btnheader = document.getElementById("btn-header");



const navbarMobile = document.getElementById("w-nav-overlay");

const Icontop = document.getElementById("top");
const Iconbottom = document.getElementById("bottom");









let isload = false
let isloadNumber = false
let isloadImg1P2 = false
let isloadImg2P2 = false


let card1P3 = false
let card2P3 = false
let card3P3 = false
let card4P3 = false


let contP4 = false
let contP5 = false

let footerCont = false

let btnNav = false






gsap.registerPlugin(Observer);




// Header
gsap.from(".header", {
    duration: 0.5,
    y: -50,
    opacity: 0,
    delay: 0.3,
    duration: 0.2,

})

gsap.from(".cont-header", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.2,
})



Observer.create(
    {
        target: buttonHamburger,
        type: "wheel,touch,scroll,pointer",

        onPress: () => {

            if (!btnNav) {
                btnNav = !btnNav

                gsap.from(navbarMobile, {

                    y: "-100%",
                    display: "none",
                    ease: "power2.inOut",
                    duration: 0.1

                });
                gsap.to(navbarMobile, {
                    y: "0%",
                    display: "block",
                    ease: "power2.inOut",
                    duration: 0.4

                });
                gsap.to(Icontop, {
                    transform: "translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg)",
                    display: "block",
                    ease: "power2.inOut",
                    duration: 0.4

                });

                gsap.to(Iconbottom, {
                    transform: "translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)",
                    width: "30px",
                    display: "block",
                    ease: "power2.inOut",
                    duration: 0.4

                });
            } else {
                btnNav = !btnNav

                gsap.to(navbarMobile, {

                    y: "-100%",
                    display: "none",
                    ease: "power2.inOut",
                    duration: 0.4

                });
                gsap.to(Icontop, {
                    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg",
                    display: "block",
                    ease: "power2.inOut",
                    duration: 0.4

                });
                gsap.to(Iconbottom, {
                    transform: " translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    width: "20px",
                    display: "block",
                    ease: "power2.inOut",
                    duration: 0.4

                });
            }
        }
    }
)

Observer.create(
    {
        target: window,
        type: "wheel,touch",

        onUp: () => {
            gsap.to(header, {
                duration: 0.5,
                y: 0,
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onDown: () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 150) {
                if (window.innerWidth <= 991) {
                    gsap.to(header, {
                        duration: 0.5,
                        y: -100,
                        ease: "power2.inOut",
                        duration: 0.4

                    });
                } else {
                    gsap.to(header, {
                        duration: 0.5,
                        y: -150,
                        ease: "power2.inOut",
                        duration: 0.4

                    });
                }

            } else {
                gsap.to(header, {
                    duration: 0.5,
                    y: 0,
                    ease: "power2.inOut",
                    duration: 0.4

                });
            }
        },
    });















const callback = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !isload) {

            isload = true


            gsap.from(text1P1, {
                delay: 1,
                opacity: 0,
                y: -50
            });
            gsap.from(text2P1, {
                delay: 1.1,

                opacity: 0,
                y: -50
            });
            gsap.from(text3P1, {
                delay: 1.2,

                opacity: 0,
                y: -50
            });

            gsap.from(img1P1, {
                delay: 1.7,
                opacity: 0,
                scale: 0.8,
                duration: 0.1


            });
            gsap.to(img1P1, {
                delay: 1.7,
                opacity: 1,
                scale: 1,
                duration: 0.2

            });
            gsap.from(img2P1, {
                delay: 2,
                opacity: 0,
                scale: 0.8,
                duration: 0.1


            });
            gsap.from(img3P1, {
                delay: 2.2,
                opacity: 0,
                scale: 0.8,
                duration: 0.1


            });
            gsap.to(img2P1, {
                delay: 2,
                opacity: 1,
                scale: 1,
                duration: 0.2

            });
            gsap.to(img3P1, {
                delay: 2.2,

                opacity: 1,
                scale: 1,
                duration: 0.2

            });

            gsap.to(img2P1, {
                delay: 2.1,
                duration: 5,
                y: 7

            });
            gsap.to(img3P1, {
                delay: 2.1,
                duration: 5,
                y: -7

            });






        }
    })
}
const options = {}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(section1);



const callbackNumber = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isloadNumber) {
            isloadNumber = true
            gsap.from(number1P1, {
                delay: 1,
                opacity: 0,
                y: -50
            });
            gsap.from(number2P1, {
                delay: 1.1,
                opacity: 0,
                y: -50
            });
            gsap.from(number3P1, {
                delay: 1.2,
                opacity: 0,
                y: -50
            });
            gsap.from(number4P1, {
                delay: 1.3,
                opacity: 0,
                y: -50
            });
        }
    })
}

const optionsNumber = {}

const myObserverNumber = new IntersectionObserver(callbackNumber, optionsNumber)

myObserverNumber.observe(Number);


Observer.create({
    target: section1,
    type: "wheel,touch",
    onUp: () => {
        gsap.to(img2P1, {
            duration: 5,
            y: -15

        });
        gsap.to(img3P1, {
            duration: 5,
            y: 15

        });
    },
    onDown: () => {
        gsap.to(img2P1, {
            duration: 5,
            y: 15

        });
        gsap.to(img3P1, {
            duration: 5,
            y: -15

        });

    },
});




const callbackImg1P2 = (entries, observer) => {
    console.log("first")
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isloadImg1P2) {
            isloadImg1P2 = true
            gsap.from(img1P2, {
                delay: 0.1,
                opacity: 0,
                scale: 0.7,
                duration: 0.1,

            });
            gsap.to(img1P2, {
                delay: 1,
                opacity: 1,
                scale: 1,
                duration: 0.3,
            });

        }
    })
}

const optionsP2 = {}

const myObserverImg1P2 = new IntersectionObserver(callbackImg1P2, optionsP2)

myObserverImg1P2.observe(img1P2);


const callbackImg2P2 = (entries, observer) => {
    console.log("first")
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isloadImg2P2) {
            isloadImg2P2 = true
            gsap.from(img2P2, {
                delay: 0.1,
                opacity: 0,
                scale: 0.7,
                duration: 0.1,

            });
            gsap.to(img2P2, {
                delay: 1,
                opacity: 1,
                scale: 1,
                duration: 0.3,
            });

        }
    })
}



const myObserverImg2P2 = new IntersectionObserver(callbackImg2P2, optionsP2)

myObserverImg2P2.observe(img2P2);



//SECTION 3 ANIAMTION
const callbackCard1 = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !card1P3) {
            card1P3 = true
            gsap.from(card1, {
                delay: 0.1,
                opacity: 0,
                scale: 0.7,
                duration: .3,

            });


        }
    })
}



const myObserverCard1 = new IntersectionObserver(callbackCard1, optionsP2)

myObserverCard1.observe(card1);

const callbackCard2 = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !card2P3) {
            card2P3 = true
            gsap.from(card2, {
                delay: 0.1,
                opacity: 0,
                scale: 0.7,
                duration: 0.3,

            });


        }
    })
}



const myObserverCard2 = new IntersectionObserver(callbackCard2, optionsP2)

myObserverCard2.observe(card2);

const callbackCard3 = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !card3P3) {
            card3P3 = true
            gsap.from(card3, {
                delay: 0.1,
                opacity: 0,
                scale: 0.7,
                duration: 0.3,

            });

        }
    })
}



const myObserverCard3 = new IntersectionObserver(callbackCard3, optionsP2)

myObserverCard3.observe(card3);

const callbackCard4 = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !card4P3) {
            card4P3 = true
            gsap.from(card4, {
                delay: 0.1,
                opacity: 0,
                scale: 0.7,
                duration: 0.3,

            });

        }
    })
}



const myObserverCard4 = new IntersectionObserver(callbackCard4, optionsP2)

myObserverCard4.observe(card4);




// ANIMATION P4

const callbackP4 = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !contP4) {
            contP4 = true
            gsap.from(img1P4, {
                delay: 0.1,
                opacity: 0,
                y: 10,
                duration: 0.2,

            });

            gsap.from(img2P4, {
                delay: 0.3,
                opacity: 0,
                y: 10,
                duration: 0.2,

            });

            gsap.from(img3P4, {
                delay: 0.5,
                opacity: 0,
                y: 10,
                duration: 0.2,

            });


        }
    })
}



const myObserverP4 = new IntersectionObserver(callbackP4, optionsP2)

myObserverP4.observe(containerP4);





const callbackP5 = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !contP5) {
            contP5 = true
            gsap.from(containerP5, {
                delay: 0.3,
                opacity: 0,
                y: 10,
                duration: 0.5,

            });



        }
    })
}



const myObserverP5 = new IntersectionObserver(callbackP5, optionsP2)

myObserverP5.observe(containerP5);



Observer.create(
    {
        target: cardIcon4,
        type: "wheel,touch,scroll,pointer",

        onHover: () => {

            gsap.to(icon4, {
                duration: 0.5,
                y: -5,
                x: 5,
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onHoverEnd: () => {
            gsap.to(icon4, {
                duration: 0.5,
                y: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.4
            });

        },
    });

Observer.create(
    {
        target: cardIcon3,
        type: "wheel,touch,scroll,pointer",

        onHover: () => {

            gsap.to(icon3, {
                duration: 0.5,
                y: -5,
                x: 5,
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onHoverEnd: () => {
            gsap.to(icon3, {
                duration: 0.5,
                y: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.4
            });

        },
    });

Observer.create(
    {
        target: cardIcon2,
        type: "wheel,touch,scroll,pointer",

        onHover: () => {

            gsap.to(icon2, {
                duration: 0.5,
                y: -5,
                x: 5,
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onHoverEnd: () => {
            gsap.to(icon2, {
                duration: 0.5,
                y: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.4

            });

        },
    });


Observer.create(
    {
        target: cardIcon1,
        type: "wheel,touch,scroll,pointer",

        onHover: () => {

            gsap.to(icon1, {
                duration: 0.5,
                y: -5,
                x: 5,
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onHoverEnd: () => {
            gsap.to(icon1, {
                duration: 0.5,
                y: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.4

            });

        },
    });




const callbackfooter = (entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && !footerCont) {
            footerCont = true
            gsap.from(footerBottom, {
                delay: 1,
                opacity: 0,
                duration: 0.5,

            });



        }
    })
}



const myObserverfooter = new IntersectionObserver(callbackfooter, optionsP2)

myObserverfooter.observe(footerBottom);





Observer.create(
    {
        target: pages,
        type: "wheel,touch,scroll,pointer",

        onHover: () => {

            pageLink.classList.add("color-accent-1")
            gsap.to(arrow, {
                duration: 0.5,
                rotate: 180,

                y: 0,

                ease: "power2.inOut",
                duration: 0.4

            });
            gsap.from(nav, {
                duration: 0.5,
                opacity: 0,
                y: 0,
                display: "none",
                ease: "power2.inOut",
                duration: 0.4

            });
            gsap.to(nav, {
                duration: 0.5,
                opacity: 1,
                y: -10,
                display: "block",
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onHoverEnd: () => {
            pageLink.classList.remove("color-accent-1")

            gsap.to(nav, {
                duration: 0.5,
                opacity: 0,
                display: "none",
                ease: "power2.inOut",
                duration: 0.4

            });
            gsap.to(arrow, {
                duration: 0.5,
                rotate: 0,
                y: 0,

                ease: "power2.inOut",
                duration: 0.4

            });


        },
    });


Observer.create(
    {
        target: pages2,
        type: "wheel,touch,scroll,pointer",

        onHover: () => {

            pageLink2.classList.add("color-accent-1")
            gsap.to(arrow2, {
                duration: 0.5,
                rotate: 180,

                y: 0,

                ease: "power2.inOut",
                duration: 0.4

            });
            gsap.from(nav2, {
                duration: 0.5,
                opacity: 0,
                y: 0,
                display: "none",
                ease: "power2.inOut",
                duration: 0.4

            });
            gsap.to(nav2, {
                duration: 0.5,
                opacity: 1,
                y: -10,
                display: "block",
                ease: "power2.inOut",
                duration: 0.4

            });
        },
        onHoverEnd: () => {
            pageLink2.classList.remove("color-accent-1")

            gsap.to(nav2, {
                duration: 0.5,
                opacity: 0,
                display: "none",
                ease: "power2.inOut",
                duration: 0.4

            });
            gsap.to(arrow2, {
                duration: 0.5,
                rotate: 0,
                y: 0,

                ease: "power2.inOut",
                duration: 0.4

            });


        },
    });





document.addEventListener("DOMContentLoaded", function () {
    // Función para cambiar el estilo del elemento con id "navDesktop"
    function actualizarEstiloNav() {

        const navHeader = document.getElementById("navDesktop");


        if (window.innerWidth <= 991) {


            navHeader.style.display = "none";
            buttonHamburger.style.display = "block";
            contHeader.style.width = "100% !important";
            contHeader.style.maxWidth = "none";
            nav.style.display = "flex";

            headerDiv.style.justifyContent = "space-between";
            headerDiv.style.alignItems = "center";
            headerDiv.style.width = "100% !important";



        } else {
            contHeader.style.maxWidth = "";

            navbarMobile.style.display = "none";

            contHeader.style.width = "100% !important";

            navHeader.style.display = "flex";
            buttonHamburger.style.display = "none";

        }
        if (window.innerWidth <= 768) {
            btnheader.style.position = "absolute";
            btnheader.style.zIndex = "-1";

            btnheader.style.opacity = "0";

        } else {
            btnheader.style.display = "block";
            btnheader.style.position = "initial";
            btnheader.style.zIndex = "1";
            btnheader.style.opacity = "1";

        }
    }

    actualizarEstiloNav();
    window.addEventListener("resize", function () {

        actualizarEstiloNav();
    });
});
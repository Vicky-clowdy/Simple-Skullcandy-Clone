let shopLink = document.getElementById("shop");
let shopLinkHover = document.getElementById("shop-hover-details");
let insideSkull = document.getElementById("inside-skull");
let insideSkullDetails = document.getElementById("inside-skull-details");

let timeoutId

insideSkull.addEventListener("mouseenter", () => {
    insideSkullDetails.style.display = "block";
    shopLinkHover.style.display = "none";
    clearTimeout(timeoutId)
})

shopLink.addEventListener("mouseenter", () => {
    shopLinkHover.style.display = "block";
    insideSkullDetails.style.display = "none";
    clearTimeout(timeoutId)
});

shopLink.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
        shopLinkHover.style.display = "none";
    }, 500)
})

insideSkull.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
        insideSkullDetails.style.display = "none";
    }, 500)
})

shopLinkHover.addEventListener("mouseenter", () => {
    shopLinkHover.style.display = "block";
    clearTimeout(timeoutId)
})
shopLinkHover.addEventListener("mouseleave", () => {
    shopLinkHover.style.display = "none";
})
insideSkullDetails.addEventListener("mouseenter", () => {
    insideSkullDetails.style.display = "block";
    clearTimeout(timeoutId);
})

insideSkullDetails.addEventListener("mouseleave", () => {
    insideSkullDetails.style.display = "none";

})


let close = document.getElementById("close-opt");
let optionScreen = document.getElementById("options-screen");
close.addEventListener("click", () => {
    optionScreen.style.animation = "slideLeft 0.3s linear forwards";
})

let optionsBtn = document.getElementById("options-btn");
optionsBtn.addEventListener("click", () => {
    optionScreen.style.animation = "slideRight 0.3s linear forwards";
})
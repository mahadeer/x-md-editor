// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
import "./assets/tailwind.css";
import("./scripts/index.js")
    .catch(e => console.error("Error importing `index.js`:", e));
document.body.style.opacity = 1;

function onShareClick() {
    navigator
        .share({
            title: document.title,
            url: window.location.href
        })
        .then(() => console.log('Successful share! 🎉'))
        .catch(err => console.error(err));
}

const shareButton = document.getElementById("share-button");
shareButton.onclick = onShareClick;
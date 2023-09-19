/* actions.js for the web-web */

function redirect(url) {
    // change_4_redir var
    const change_4_redir = document.getElementById("change_4_redir")
    // Check if url is equal to web-web's url
    if (url === "127.0.0.1:5500") {
        change_4_redir.innerHTML = "<p>Sorry, but you can't redirect to web-web's URL. Why anyways?<p>"
        return 1
    }
    // Redirect to url
    change_4_redir.innerHTML = `<p>Redirecting to ${url}...</p>`
    window.location.href = url
}

// Ensure that URL has 'https://www.'
function ensureHttpsWww(url) {
    if (url.startsWith("https://www.")) {
        return url 
    }

    if (url.startsWith("https://")) {
        return "https://www." + url.slice(8)
    }

    if (url.startsWith("http://www.")) {
        return url
    }

    if (url.startsWith("http://")) {
        return "https://www." + url.slice(7)
    }


    if (url.startsWith("www.")) {
        return "https://" + url
    }

    return "https://www." + url
}

// Event listener for input field
var URLInput = document.getElementById("url_redir")

URLInput.addEventListener("keydown", function(event) {
    // If event.key is enter, redirect to URLInput.value
    if (event.key === "Enter") {
        redirect(ensureHttpsWww(URLInput.value))
    }
})

console.log("Welcome to the Web-Web console.\nWhat are you doing here?")
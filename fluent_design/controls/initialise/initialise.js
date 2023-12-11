console.log("%cWARNING!%cDon't enter personnal informations.", "color:red; font-size:7em;", "color:red;");

if (sessionStorage.getItem("theme") == null) {
    sessionStorage.setItem("theme", "light");
} else if (!(["light", "dark"].includes(sessionStorage.getItem("theme")))) {
    sessionStorage.setItem("theme", "light");
}
// Mets tes liens ici
const tools = [
    { name: "ACL Visualizer", url: "./ACL-Visualizer/index.html", nameGit: "ACL-Visualizer", urlGit: "https://github.com" },
    { name: "Mask Calculator", url: "https://ton-site.com/mask-calculator", nameGit: "Mask-Calculator", urlGit: "https://github.com" },
];

const list = document.getElementById("list");
const useGit = document.getElementById("useGit");

let gitMode = localStorage.getItem("gitMode") === "true";
useGit.checked = gitMode;

function getLink(t) {
    return (gitMode && t.urlGit) ? t.urlGit : t.url;
}

function getName(t) {
    return (gitMode && t.nameGit) ? t.nameGit : t.name;
}

function render() {
    list.innerHTML = tools
    .map(t => `<li><a href="${getLink(t)}">${getName(t)}</a></li>`)
    .join("");
}

useGit.addEventListener("change", () => {
    gitMode = useGit.checked;
    localStorage.setItem("gitMode", gitMode);
    render();
});

render();

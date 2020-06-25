var sharks = [
    {
        name:"Flap",
        img:"https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/shark_1280p.jpg?itok=egqJ_3G9"
    },
    {
        name:"Slashfin",
        img:"https://cdn2.webdamdb.com/1280_ckoSMDUyBMD1.jpg?1532348590"
    },
    {
        name:"Clark",
        img:"https://www.dualdove.com/wp-content/uploads/2020/04/whale-sharks.jpeg"
    },
    {
        name:"Derek",
        img:"https://frontiersinblog.files.wordpress.com/2020/01/frontiers-marine-science-estimating-global-catches-marine-recreational-fishes.jpg?w=1000"
    },
    {
        name:"Stripe",
        img:"https://news.griffith.edu.au/wp-content/uploads/2019/09/Tiger-shark-GN.jpg"
    },
    {
        name:"Don",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Lemonshark.JPG/1200px-Lemonshark.JPG"
    },
    {
        name:"Simon",
        img:"https://1.bp.blogspot.com/-RykhfHTIZxI/Tu0DGc70cwI/AAAAAAAAChU/D0vGPDB8ejE/s1600/St+John+USVI+Nov+2011+UnderwaterCam+729.jpg"
    },
    {
        name:"Razor",
        img:"https://www.elasmodiver.com/Sharkive%20images/CaribbeanReefShark112.jpg"
    },
    {
        name:"Pierie",
        img:"https://ecochiccayman.files.wordpress.com/2017/07/nurse-shark-with-hook.png"
    },

]
const search = document.querySelector("input");

function displayMatches(filter){
    const matches = document.getElementById("matches");
    // matches.children.forEach(element => {
    //     matches.removeChild(element);
    // });
    matches.innerHTML = "";
    sharks.filter(s => s.name.includes(filter)).map((s,i) => {
        const m = document.createElement('div');
        m.className = "match";
        const img = document.createElement('img');
        img.src = s.img;
        img.alt = s.name;
        const banana = document.createElement("h4");
        banana.innerHTML = s.name;
        m.appendChild(img);
        m.appendChild(banana);
        matches.appendChild(m);
    })
}

displayMatches("");

search.addEventListener('keyup',() => displayMatches(search.value))
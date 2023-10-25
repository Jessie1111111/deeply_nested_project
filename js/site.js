const planetsData = {
    San: {
        Time_of_Existence: "30 million years ago",
        Inhabitants: "Insectoids",
        Description: "Insectoids with multiple legs and sharp antennae that dwell within soil. Possessing high intelligence and perfect obedience.",
        Background: "Inhabitants are mainly insectoids that thrive in the soil ecosystem and share a profound symbiotic relationship with plants. Their society deeply relies on the land, coexisting with nature. They worship 'Sanes' as their leader, a tradition unbroken for millions of years."
    },
    OX: {
        Time_of_Existence: "53 million years ago",
        Inhabitants: "Gas Beings",
        Description: "Transparent or semi-transparent beings that can expand or contract based on the energy they absorb. They communicate by interacting with other gases in the cloud seas.",
        Background: "A massive gaseous planet enveloped by thick pink clouds. The gas beings can float freely, worshipping ancient storms that provide them with energy."
    },
    R_110: {
        Time_of_Existence: "20.2 million years ago",
        Inhabitants: "Humans",
        Description: "Somewhat similar in appearance to known humans and thought processes. Some scientists speculate they might be an offshoot of Earth's humans.",
        Background: "Humans invaded the pink planet for resources and developed gas-powered electricity. Despite their advanced tech, human greed and disrespect for extraterrestrial life may lead to their downfall."
    },
    Crutis: {
        Time_of_Existence: "60 million years ago",
        Inhabitants: "Crutis",
        Description: "Flying and crawling creatures with sharp limbs. Females are notably larger than males.",
        Background: "A female-dominated planet where females hold pivotal roles in society, culture, and religion. Males are typically consumed post-mating, believing this sacrifice will allow them to reincarnate as females in the next life."
    },
    Uni: {
        Time_of_Existence: "70 million years ago",
        Inhabitants: "Jelly People",
        Description: "Semi-transparent beings with stretchable bodies and vibrant internal organs.",
        Background: "Inhabitants are called 'Jelly People', all stemming from a single entity via splitting, allowing them to share thoughts and feelings. The entire planet acts like a single organism."
    },
    Kakaku: {
        Time_of_Existence: "20 million years ago",
        Inhabitants: "Kakaku",
        Description: "Strong beings with tough shells and sharp weapons, their skin scarred from battles. Honor and power are highly valued.",
        Background: "A warrior civilization where inhabitants undergo rigorous trials from a young age. While their tech is not the most advanced, their combat skills and strategies command respect from other planets."
    },
    CYBE: {
        Time_of_Existence: "8 million years ago",
        Inhabitants: "Originally highly evolved brains, now robots",
        Description: "Robots with highly autonomous AI of various shapes, from small detectors to large combat machines. They still retain some memories of the exterminated beings.",
        Background: "Originally inhabited by highly evolved brains, robots they created took over and exterminated them. Now, these robots rule the planet, planning to expand their domain and search for resources on other planets."
    },
    Ani: {
        Time_of_Existence: "Estimated over 100 million years ago",
        Inhabitants: "Anima",
        Description: "Physical appearance is not yet studied. Speculations exist on whether they exist or reside in higher dimensions.",
        Background: "Anima, with high spirituality, worships nature and the Twin-Birth Tree, believed to be the origin of their souls, cultivating a civilization in harmony with nature."
    },
    Caelum: {
        Time_of_Existence: "10 million years ago",
        Inhabitants: "Cae",
        Description: "Slaves exiled for breaching interstellar laws.",
        Background: "Once a prison planet for exiled slaves, now known as 'Paradise Island'. A deceptive name, as it's more of a hell where the mighty rule and can do as they please with the powerless."
    }
};
function initPlanetsList() {
    const listElement = document.getElementById("planetsList");
    let imageCounter = 1; 

    for (let planet in planetsData) {
        const planetItem = document.createElement("div");
        planetItem.className = "planetItem";
        
        planetItem.innerHTML = `

        <img src="./images/${imageCounter}.png" alt="${planet}" width="50%">
            `;

        planetItem.addEventListener("click", function () {
            displayPlanetDetails(planet);
        });
        listElement.appendChild(planetItem);
        
        imageCounter++; 
    }
}
let currentIndex = 1;
const imageElement = document.getElementById('current-image');
let lastClientX = 0;

const threshold = window.innerHeight * 0.005;

document.body.addEventListener('mousemove', debounce((event) => {
    if (Math.abs(lastClientX - event.clientX) < threshold) {
        return;
    }

    if (event.clientX < window.innerWidth / 2 && currentIndex > 1) {
        currentIndex--;
        changeImage();
    } else if (event.clientX > window.innerWidth / 2 && currentIndex < 9) {
        currentIndex++;
        changeImage();
    }

    lastClientX = event.clientX;
}, 20)); 
function changeImage() {
    imageElement.src = `images/${currentIndex}.png`;
    imageElement.alt = `Image ${currentIndex}`;
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function displayPlanetDetails(planet) {
    const detailsElement = document.getElementById("planetDetails");
    detailsElement.innerHTML = `
        <h2>${planet}</h2>
        <p><strong>Time of Existence：</strong>${planetsData[planet].Time_of_Existence}</p>
        <p><strong>Inhabitants：</strong>${planetsData[planet].Inhabitants}</p>
        <p><strong>Description：</strong>${planetsData[planet].Description}</p>
        <p><strong>Background：</strong>${planetsData[planet].Background}</p>
    `;
    detailsElement.hidden = false;
}

initPlanetsList();

const story = {

    start: {
        text: "Welcome to The Bahamas! Choose your Voyage:",
        choices: [
            { text: "Nature Voyage", next: "nature" },
            { text: "Cuisine Voyage", next: "cuisine" },
            { text: "Culture Voyage", next: "culture" }
        ]
    },

    nature: {
        text: "You chose Nature Voyage. What interests you most?",
        choices: [
            { text: "Indigenous Leisure", next: "leisure" },
            { text: "Flora & Fauna", next: "flora" }
        ]
    },

    leisure: {
        text: "Traditional Bahamian Outdoor Activities:",
        choices: [
            { text: "Bonefishing", next: "bonefishing" },
            { text: "Crab Catching", next: "crab" }
        ]
    },

    bonefishing: {
        text: "You Experience World-famous Bahamian Bonefishing in Crystal Clear Waters!",
        gallery: [
            { src: "bonefishing1.jpg", caption: "Crystal clear flats perfect for bonefishing." },
            { src: "bonefishing2.jpg", caption: "Bonefish are fast and exciting to catch." },
            { src: "bonefishing3.jpg", caption: "A peaceful and authentic island experience." }
        ],
        choices: []
    },

    crab: {
        text: "You Join Locals Catching Crabs Along the Shore.. a True Island Pastime!",
        gallery: [
            { src: "crab1.jpg", caption: "Searching the shoreline for crabs." },
            { src: "crab2.jpg", caption: "Traditional crab catching techniques." },
            { src: "crab3.jpg", caption: "Fresh catch from the Bahamian coast." }
        ],
        choices: []
    },

    flora: {
        text: "Explore Bahamian wildlife:",
        choices: [
            { text: "Indigenous Plants", next: "plants" },
            { text: "Indigenous Animals", next: "animals" }
        ]
    },

    plants: {
        text: "You Discover the Indigenous Flowers of The Bahamas.",
        gallery: [
            { src: "flora1.JPG", caption: "The native Pink Hibuscus flower." },
            { src: "flora2.JPG", caption: "The National Flower: The Yellow Elder Flower." },
            { src: "flora3.JPG", caption: "Flora found across the islands." }
        ],
        choices: []
    },

    animals: {
        text: "You Discover the Indigenous Animals of The Bahamas.",
        gallery: [
            { src: "animal1.jpg", caption: "The iconic Bahamian Flamingo, the National Bird." },
            { src: "animal2.jpg", caption: "The Bahama Parrot in its natural habitat." },
            { src: "animal3.jpg", caption: "The Bahamian Iguana thriving in island ecosystems." }
        ],
        choices: []
    },

    cuisine: {
        text: "Taste the Islands! You chose Cuisine Voyage. Where will you eat?",
        choices: [
            { text: "Conch Stand", next: "conch" },
            { text: "Native Dishes", next: "dishes" }
        ]
    },

    conch: {
        text: "Fresh Conch Prepared Island-Style!",
        choices: [
            { text: "World Famous Conch Salad", next: "salad" },
            { text: "Savory Conch Specialties", next: "conch2" }
        ]
    },

    salad: {
        text: "You Enjoy a Fresh, Conch Salad Made Right Before Your Eyes!",
        gallery: [
            { src: "conch1.jpg", caption: "You'll watch the fresh conch be extracted from its shell." },
            { src: "conch2.jpg", caption: "Try our freshly made Traditional Conch Salad, with chopoped veggies." },
            { src: "conch3.jpg", caption: "Try our freshly made Tropical Conch Salad, with chopped fruits and veggies." }
        ],
        choices: []
    },

    conch2: {
        text: "Savor our Diverse Selection of Conch Specialties.",
        gallery: [
            { src: "conch4.jpg", caption: "Golden, cripsy fried conch fritters.. A Bahamian favorite!" },
            { src: "conch5.jpg", caption: "Cracked Conch, served fresh and hot." },
            { src: "conch6.jpg", caption: "Stew Conch, a popular island soup." }
        ],
        choices: []
    },

    dishes: {
        text: "Explore our Traditional Bahamian Meals:",
        choices: [
            { text: "Dinner", next: "dinner" },
            { text: "Dessert", next: "dessert" }
        ]
    },

    dinner: {
        text: "Discover a Curated Selection of Authentic Indigenous Dishes.",
        gallery: [
            { src: "dinner1.jpg", caption: "Enjoy fried fish with peas and rice.. a classic Bahamian dinner." },
            { src: "dinner2.jpg", caption: "Taste Tradition: Explore Our Signature Sheep Tongue Souse." },
            { src: "dinner3.jpg", caption: "Or try a simple 'Fire Engine'.. featuring savory steamed corned beef, herbs and white rice." }
        ],
        choices: []
    },

    dessert: {
        text: "Some of the Best and Sweetest Desserts in the Caribbean!",
        gallery: [
            { src: "dessert1.jpg", caption: "Versatile Johnny Cakes: Perfect on their own, even better for dipping in savory soups." },
            { src: "dessert2.jpg", caption: "You taste sweet Guava Duff topped with rum sauce!" },
            { src: "dessert3.jpg", caption: "Dive into the sweet, tropical flavors of our authentic coconut tart." }
        ],
        choices: []
    },

    culture: {
        text: "You chose Culture Voyage. What would you like to explore?",
        choices: [
            { text: "Festival", next: "festival" },
            { text: "Market", next: "market" }
        ]
    },

    festival: {
        text: "The Sound of Cowbells and Drums Fills the Air!",
        choices: [
            { text: "Junkanoo & Rushing", next: "junkanoo" },
            { text: "History of Junkanoo", next: "history" }
        ]
    },

    junkanoo: {
        text: "You Join the Junkanoo Parade.. Colorful Costumes and Rhythmic Rushing!",
        gallery: [
            { src: "junkanoo1.jpg", caption: "Colorful Junkanoo costumes made of cardboard and crepe paper." },
            { src: "junkanoo2.jpg", caption: "Energetic street parade and rushing." },
            { src: "junkanoo3.jpg", caption: "Music, dance, and celebration." }
        ],
        choices: []
    },

    history: {
        text: "You Learn About the Rich History and Origins of Junkanoo.",
        gallery: [
            { src: "junkanoo4.jpg", caption: "Historical roots of Junkanoo derive from Mr. John Canoe of Africa." },
            { src: "junkanoo5.jpg", caption: "Cultural evolution over time." },
            { src: "junkanoo6.jpg", caption: "Tradition that started in Africa and has been passed through generations." }
        ],
        choices: []
    },

    market: {
        text: "A Vibrant Bahamian Market Welcomes You.",
        choices: [
            { text: "Straw Products", next: "straw" },
            { text: "Androsia Print Clothing/Cloth", next: "androsia" }
        ]
    },

    straw: {
        text: "Explore Vibrant Bahamian Artisan Craftsmanship.",
        gallery: [
            { src: "straw1.jpg", caption: "Natural straw hand woven products." },
            { src: "straw2.jpg", caption: "Traditional woven bags." },
            { src: "straw3.jpg", caption: "Handwoven straw hats and bags reflect Bahamian craftsmanship." }
        ],
        choices: []
    },

    androsia: {
        text: "Bright Androsia Fabric Showcases Authentic Bahamian Design.",
        gallery: [
            { src: "androsia1.jpg", caption: "Vibrant Androsia patterns." },
            { src: "androsia2.jpg", caption: "Hand-dyed Bahamian fabric." },
            { src: "androsia3.jpg", caption: "Traditional textile art." }
        ],
        choices: []
    }
};

const heroImages = [
    "Images/slide1.JPG",
    "Images/slide2.jpg",
    "Images/slide3.JPG",
    "Images/slide4.JPG",
	"Images/slide5.jpg",
	"Images/slide6.jpg",
	"Images/slide7.jpg",
	"Images/slide8.jpg",
	"Images/slide9.jpg",
	"Images/slide10.jpg",
	"Images/slide11.jpg",
	"Images/slide12.jpg"
];

const playlist = [
    "Audio/song3.mp3",
    "Audio/song1.mp3",
    "Audio/song2.mp3",
    "Audio/song4.mp3"
];

let currentTrack = 0;

const audio = document.getElementById("bg-music");

function loadTrack(index) {
    audio.src = playlist[index];
    audio.play().catch(() => {
        console.log("Autoplay blocked - waiting for user interaction");
    });
}

audio.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
});


function startMusic() {
    loadTrack(currentTrack);
    document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);

function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

let heroIndex = 0;

function startHeroSlideshow() {

    const hero = document.getElementById("hero-image");

    setInterval(() => {

        hero.style.opacity = 0;

        setTimeout(() => {
            heroIndex = (heroIndex + 1) % heroImages.length;
            hero.src = heroImages[heroIndex];
            hero.style.opacity = 1;
        }, 1500);

    }, 4000);
}

function showScene(sceneKey) {

    const scene = story[sceneKey];

    document.getElementById("story-text").innerText = scene.text;

    const imageDiv = document.getElementById("scene-image");
    imageDiv.innerHTML = "";

    if (scene.gallery) {

        const galleryContainer = document.createElement("div");
        galleryContainer.className = "gallery";

        scene.gallery.forEach(item => {

            const card = document.createElement("div");
            card.className = "gallery-item";

            const img = document.createElement("img");
            img.src = "Images/" + item.src; // IMPORTANT FIX

            const caption = document.createElement("p");
            caption.innerText = item.caption;

            card.appendChild(img);
            card.appendChild(caption);
            galleryContainer.appendChild(card);
        });

        imageDiv.appendChild(galleryContainer);
    }

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showScene(choice.next);
        choicesDiv.appendChild(button);
    });
}

function startGame() {
    showScene("start");
}

startGame();
startHeroSlideshow();
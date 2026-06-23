console.log(`
    📌🌍✨ PINIVERSE ✨🌍📌
    Built with 💜 by Pinbow 🌈
    No cheating, Pin.
    The website knows.
    
                                                                                                        
                                                                                                    
                                                        @@@@@@@@@@@@@@@@                            
                                                      @@@@@@%%%%%%@@@@@@@@@                         
                                                     @@@@%#####*******%@@@@@@@                      
                                                    @@@@%####************#@@@@@@@                   
                                                    @@@@#####***************#@@@@@@                 
                                                    @@@@####*******************@@@@@@               
                                                    @@@@####*********************%@@@@@             
                                                     @@@%###***********************%@@@@            
                                                     @@@@####***********************#@@@@           
                                                      @@@@###*************************%@@@@         
                                                    @@@@@@%###*************************#@@@@        
                                                 @@@@@@@@@@%###**************************@@@@       
                                              @@@@@@@####@@@@###**************************@@@@      
                             @@@@@@@@@@@@@  @@@@@@%#######@@@@%##**************************%@@@     
                         @@@@@@@@@@@@@@@@@@@@@@%###########%@@@%##**************************@@@@    
                      @@@@@@@@%%#######@@@@@@################@@@@###************************#@@@    
                     #%@@%#######***#@@@@@%###*************###%@@@@##************************%@@@   
                 @@@#########*******@@@@##********************##@@@@@##**********************#@@@   
               @@@@@######***********@@@%************************#@@@@@##*********************@@@   
             @@@@@%#####*************#@@@%************************##%@@@@%#******************#@@@   
            @@@@%#####****************#@@@#**************************#%@@@@@%****************@@@@   
           @@@@%####********************@@@%#**************************##%@@@@@@#**********#@@@@    
           @@@%####**********************@@@@#***************************##@@@@@@@@@@@%%%**#@@@     
           @@@####************************@@@@#**************************#@@@@@@@@@@@@@@@@          
           @@@###**************************#@@@@#***********************#@@@@@                      
           @@@@##****************************%@@@%*********************#@@@@                        
           @@@@%#*****************************#@@@@%#*****************%@@@@                         
            @@@@%#******************************#@@@@%#*************#%@@@@                          
             @@@@%********************************#@@@@%#**********#@@@@@                           
              @@@@%*********************************#@@@@@%#******#@@@@                             
               @@@@%***********************************%@@@@@%##*%@@@@@@                            
                @@@@%*************************************%@@@@@@@@@%@@@                            
                 @@@@@***************************************#%@@@@**@@@                            
                   @@@@#*********************************************@@@@                           
                    @@@@%********************************************@@@                            
                     @@@@@#*****************************************#@@@                            
                      @@@@@%****************************************@@@@                            
                    @@@@@%@@@%*************************************#@@@                             
                   @@@@#=-=%@@@%**********************************#@@@@                             
                 @@@@@=---=%@@@@@%********************************@@@@                              
               @@@@@=::--#@@@@@@@@@%#****************************@@@@                               
             @@@@@+::::*@@@@@   @@@@@@%************************%@@@@                                
            @@@@*::::=@@@@@        @@@@@@#*******************#@@@@@                                 
           @@@@-:::=%@@@@            @@@@@@@%**************#@@@@@                                   
         @@@@#:::=%@@@@                 @@@@@@@@#********#@@@@@                                     
        @@@@*::*@@@@@                       @@@@@@@@@@@@@@@@@                                       
       @@@@*+@@@@@@                            @@@@@@@@@@@@                                         
      @@@@@@@@@@@                                                                                   
    @@@@@@@@@@                                                                                      
   @@@@@@@@                                                                                         
   @@@@@@                                                                                           
                                                                                                    
                                                                                                    
    `);

const SUPABASE_URL = "https://aakgqbiqbtbgaublvutw.supabase.co";
const SUPABASE_KEY = "sb_publishable_g_fnLMPTtdJFZMD3zisXsQ_pbshTVMG";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const filmTexts = [
    "<strong>Watch a film with a low Rotten Tomatoes score and defend one good thing about it.</strong><p>Find one moment, performance, sound choice, costume, line or idea that genuinely worked.</p>",
    "Watch a film with Breed",
    "Watch a film alone at the cinema",
    "Watch a true crime documentary",
    "Watch something set in another country",
    "Watch a film with snacks in pyjamas",
    "Watch a film released the year you were born",
    "Watch something with a ridiculous plot",
    "Watch a film Rainbow recommends",
    "Watch a film with a brilliant soundtrack",
    "Watch something cosy",
    "Watch a film you know nothing about",
    "Watch a film with a strong female lead",
    "Watch something animated",
    "Watch a film that makes you laugh",
    "Watch a film that makes you cry",
    "Watch something spooky",
    "Watch a film with a twist",
    "Watch a film under 90 minutes",
    "Watch a film over 2 hours",
    "Watch something with subtitles",
    "Watch a film from the 90s",
    "Watch a film chosen purely by the poster",
    "Watch a film with a hot chocolate",
    "Watch the final film and declare victory"
];

const filmItems = Array.from(
    { length: 25 },
    (_, i) => ({
        id: `film-${i + 1}`,
        number: i + 1,
        text: filmTexts[i],
        image: `images/film-${i + 1}.png`
    })
);

const geocacheTexts = [
    "Find your first birthday challenge cache",
    "Find a cache with Breed",
    "Find a cache with Jahosafat",
    "Find a cache near water",
    "Find a cache in the woods",
    "Find a tiny cache",
    "Find a cache big enough for swaps",
    "Leave a glow-in-the-dark duck",
    "Leave a glow-in-the-dark sticker",
    "Find a cache with a nice view",
    "Find a cache on a rainy day",
    "Find a cache on a sunny day",
    "Find a cache less than 10 minutes from home",
    "Find a cache somewhere new",
    "Find a cache after dark",
    "Find a cache with a funny name",
    "Find a cache rated easy",
    "Find a cache rated a bit trickier",
    "Take a photo of something odd nearby",
    "Find a cache and reward yourself with a treat",
    "Find a cache while wearing cosy clothes",
    "Find a cache that involves a short walk",
    "Find a cache with a proper logbook",
    "Move or discover the family trackable",
    "Complete the final cache and claim your glory"
];

const geocacheItems = Array.from(
    { length: 25 },
    (_, i) => ({
        id: `cache-${i + 1}`,
        number: i + 1,
        text: geocacheTexts[i],
        image: `images/cache-${i + 1}.png`
    })
);

document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});

async function loadProgress() {
    const { data, error } = await supabaseClient
        .from("bingo_progress")
        .select("*");

    if (error) {
        console.error("Could not load progress:", error);
        return [];
    }

    return data;
}

async function saveProgress(board, item, completed) {
    try {
        const { error } = await supabaseClient
            .from("bingo_progress")
            .upsert(
                {
                    board,
                    item,
                    completed,
                    updated_at: new Date().toISOString()
                },
                {
                    onConflict: "board,item"
                }
            );

        if (error) {
            console.error("Could not save progress:", error);
            showToast("That didn’t save. Check your connection and try again.");
        }
    } catch (error) {
        console.error("Could not save progress:", error);
        showToast("That didn’t save. Check your connection and try again.");
    }
}

let activeModalItem = null;
let activeModalBoard = null;
let activeModalSquare = null;
let activeModalCompleted = false;

function openMobileModal(board, item, square) {
    activeModalItem = item;
    activeModalBoard = board;
    activeModalSquare = square;
    activeModalCompleted = square.classList.contains("completed");

    renderMobileModal();

    document.getElementById("mobile-modal").classList.add("active");
}

function renderMobileModal() {
    const card = document.getElementById("mobile-modal-card");

    card.innerHTML = "";
    card.classList.toggle("completed", activeModalCompleted);

    if (activeModalCompleted) {
        const image = document.createElement("img");
        image.src = activeModalItem.image;
        image.alt = activeModalItem.text;
        card.appendChild(image);
    } else {
        card.innerHTML = activeModalItem.text;
    }
}

async function toggleMobileModalCompletion() {
    activeModalCompleted = !activeModalCompleted;

    activeModalSquare.classList.toggle("completed", activeModalCompleted);

    await saveProgress(
        activeModalBoard,
        activeModalItem.id,
        activeModalCompleted
    );

    renderMobileModal();
}

function closeMobileModal() {
    document.getElementById("mobile-modal").classList.remove("active");
}

function createGrid(containerId, board, items, savedProgress) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    items.forEach(item => {
        const square = document.createElement("div");
        square.className = "bingo-square";

        const textSpan = document.createElement("span");
        textSpan.className = "desktop-challenge-text";
        textSpan.innerHTML = item.text;

        const numberSpan = document.createElement("span");
        numberSpan.className = "mobile-number";
        numberSpan.textContent = item.number;

        const image = document.createElement("img");
        image.className = "completed-image";
        image.src = item.image;

        square.appendChild(image);
        square.appendChild(textSpan);
        square.appendChild(numberSpan);

        const savedItem = savedProgress.find(progress =>
            progress.board === board &&
            progress.item === item.id
        );

        if (savedItem?.completed) {
            square.classList.add("completed");
        }

        square.addEventListener("click", async () => {
            const isMobile = window.matchMedia("(max-width: 700px)").matches;
        
            if (isMobile) {
                openMobileModal(board, item, square);
                return;
            }
        
            square.classList.toggle("completed");
        
            const completed = square.classList.contains("completed");
        
            await saveProgress(board, item.id, completed);
        });

        container.appendChild(square);
    });
}

document.getElementById("mobile-modal-card").addEventListener("click", event => {
    event.stopPropagation();
    toggleMobileModalCompletion();
});

document.getElementById("mobile-modal").addEventListener("click", closeMobileModal);

async function initialisePage() {
    const savedProgress = await loadProgress();

    createGrid("film-grid", "films", filmItems, savedProgress);
    createGrid("geocache-grid", "geocaching", geocacheItems, savedProgress);
}

initialisePage();

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 4000);
}

window.addEventListener("online", () => {
    showToast("Connection restored.");
});

document
    .getElementById("mobile-modal-close")
    .addEventListener("click", event => {
        event.stopPropagation();
        closeMobileModal();
    });
    

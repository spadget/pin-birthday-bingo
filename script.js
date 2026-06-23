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
    "<strong>Watch a film while wearing your dinosaur pyjamas.</strong><p>Choose something completely cosy or wildly mismatched with prehistoric loungewear.</p>",
    "<strong>Watch a film while drinking a home-made bubble tea.</strong><p>Pair the perfect flavour and boba with whatever you choose to put on the screen.</p>",
    "<strong>Rewatch a film you loved as a child.</strong><p>Reflect on whether it still holds up, and notice what clicks for you now that went completely over your head back then.</p>",
    "<strong>Watch a comfort film and identify exactly why it comforts you.</strong><p>Pinpoint whether the magic lies in nostalgia, predictability, warmth, or just a really great soundtrack.</p>",
    "<strong>Watch a film with a low Rotten Tomatoes score and defend one good thing about it.</strong><p>Find one moment, performance, sound choice, costume, line or idea that genuinely worked.</p>",
    "<strong>Watch a film from the year you were born.</strong><p>Reflect on what elements feel entirely timeless and what feels very much of its specific era.</p>",
    "<strong>Watch a film over 150 minutes.</strong><p>Make it a proper event with dedicated snacks and decide at the end if that massive runtime was actually earned.</p>",
    "<strong>Watch a film under 90 minutes.</strong><p>Celebrate a beautifully concise story that gets straight in, does the job flawlessly, and gets right back out.</p>",
    "<strong>Watch a film from before 1970.</strong><p>Look out for what still feels incredibly fresh, funny, moving, or surprisingly strange to a modern audience.</p>",
    "<strong>Watch a film released in the last 12 months.</strong><p>Think about what it says about right now, from current anxieties and technology to modern humour.</p>",
    "<strong>Watch a film where the setting feels like a main character.</strong><p>Look for a house, city, island, or landscape that actively shapes the entire story.</p>",
    "<strong>Watch a film with a soundtrack that does heavy emotional work.</strong><p>Notice one specific scene where the music entirely shifts how you are feeling.</p>",
    "<strong>Watch a film with subtitles.</strong><p>Pick something in a language you do not speak and notice how you read emotion and tone more closely when relying on text.</p>",
    "<strong>Watch a film where food plays an important role.</strong><p>Pay attention to how meals drive the plot, with bonus points for a matching snack while you watch.</p>",
    "<strong>Watch a film directed by a woman.</strong><p>Choose any genre you like and spot one specific creative or stylistic choice that really stands out.</p>",
    "<strong>Watch a film that makes you reflect on family dynamics.</strong><p>Explore how the story handles the complexities of family, whether it is biological, complicated, or found.</p>",
    "<strong>Watch a film that explores the highs and lows of friendship.</strong><p>Think about what the narrative says about loyalty, boundaries, or the bittersweet nature of growing apart.</p>",
    "<strong>Watch a film with someone else and let them choose it.</strong><p>Give up all veto power and enter someone else's taste with pure curiosity.</p>",
    "<strong>Watch a film with a brilliant villain or antagonist.</strong><p>Reflect on whether they are frightening, strangely understandable, charismatic, or just a total moral mess.</p>",
    "<strong>Watch a film with a morally complicated ending.</strong><p>Decide for yourself whether the final moments felt satisfying, realistic, fair, or deeply frustrating.</p>",
    "<strong>Watch a documentary about a topic you know almost nothing about.</strong><p>Bring away one fascinating new fact and one question you want to look up later.</p>",
    "<strong>Watch a film you abandoned previously.</strong><p>Give it a proper second chance and decide once and for all whether past-you made the right call.</p>",
    "<strong>Watch a film set somewhere you have never been.</strong><p>Notice whether the scenery makes you want to visit, or if it makes you question how places are stereotyped.</p>",
    "<strong>Watch a film you feel like you “should” have seen by now.</strong><p>Fill a personal culture gap by finally putting on that classic, cult favourite, or award-winner.</p>",
    "<strong>Watch a film that prompts a deep post-credits analysis.</strong><p>Break down one standout performance, excellent sound choice, or specific line that stuck in your head.</p>",
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
    

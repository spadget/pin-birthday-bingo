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

const filmItems = Array.from(
    { length: 25 },
    (_, i) => ({
        id: `film-${i + 1}`,
        number: i + 1,
        text: `Film ${i + 1}`,
        image: `images/film-${i + 1}.png`
    })
);

const geocacheItems = Array.from(
    { length: 25 },
    (_, i) => ({
        id: `cache-${i + 1}`,
        number: i + 1,
        text: `Cache ${i + 1}`,
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

function createGrid(containerId, board, items, savedProgress) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    items.forEach(item => {
        const square = document.createElement("div");
        square.className = "bingo-square";
        square.textContent = item.text;

        const savedItem = savedProgress.find(progress =>
            progress.board === board &&
            progress.item === item.id
        );

        if (savedItem?.completed) {
            square.classList.add("completed");
        }

        square.addEventListener("click", async () => {
            square.classList.toggle("completed");

            const completed = square.classList.contains("completed");

            await saveProgress(board, item.id, completed);
        });

        container.appendChild(square);
    });
}

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

{
    id: "film-1",
    number: 1,
    text: "Challenge text here",
    image: "images/placeholder.png"
  }
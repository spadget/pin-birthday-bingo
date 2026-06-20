const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";
const SUPABASE_KEY = "PASTE_YOUR_PUBLIC_KEY_HERE";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function testConnection() {

    const { data, error } = await supabaseClient
        .from("bingo_progress")
        .select("*");

    if (error) {
        console.error("Supabase error:", error);
        return;
    }

    console.log("Connected!");
    console.log(data);
}

testConnection();
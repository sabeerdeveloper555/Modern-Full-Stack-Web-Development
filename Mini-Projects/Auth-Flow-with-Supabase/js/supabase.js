// 1. Supabase Configuration

// Supabase Project URL
const SUPABASE_URL = "https://cncwqolnwupcwtolxvcq.supabase.co";

// Supabase Publishable Key
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_nnV4fi7QBfmB5-DTKhpwnA_ktUh1898";

// 2. Initialize Supabase Client

// Get the createClient function from the CDN library
const {createClient} = window.supabase;

// Create a client to communicate with Supabase
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Make the client available to other JavaScript files
window.supabaseClient = supabaseClient;

console.log("Supabase client initialized successfully!");


import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dymxxgigbhoxljqcocza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bXh4Z2lnYmhveGxqcWNvY3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDA4OTIsImV4cCI6MjA4ODkxNjg5Mn0.L2rCcjp4vktenxcUeBImIXgkzpfgj-2_i6Nlb6TITLU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

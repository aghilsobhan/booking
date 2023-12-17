import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qytmhjkldmjiomivwpxh.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5dG1oamtsZG1qaW9taXZ3cHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5Njg4MjUsImV4cCI6MjAxNTU0NDgyNX0.gnr_xI7o49c_9il1JUqmXH8cr0mUI7dEVGUCTxqGp-Q";
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

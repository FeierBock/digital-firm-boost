// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tmwyqvohzhhoqesmmnsm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtd3lxdm9oemhob3Flc21tbnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1Nzk2MTEsImV4cCI6MjA1OTE1NTYxMX0.lR2m6K9K-OLm8c3XEQzGFl3bfXaPTKsGsYgquZPs6xQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
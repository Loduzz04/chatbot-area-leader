import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

// Client lato server con secret key (bypassa RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey);

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

export const initSupabase = () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;

  return createClient(url, key);
};



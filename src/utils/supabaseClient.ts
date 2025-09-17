import { createClient } from '@supabase/supabase-js';

import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonPublicKey = import.meta.env.VITE_SUPABASE_ANON_PUBLIC_KEY;

if (!supabaseUrl || !supabaseAnonPublicKey) {
  throw new Error('Missing Supabase URL or Publishable Key');
}

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonPublicKey
);

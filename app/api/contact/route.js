import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const data = await req.json();
  const { name, email, message } = data;

  // Insert into Supabase
  const { error } = await supabase
    .from("contacts")
    .insert([{ name, email, message }]);

  if (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }

  return Response.json(
    { success: true, message: "Saved to Supabase!" },
    { status: 200 }
  );
}

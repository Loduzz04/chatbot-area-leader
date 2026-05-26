import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../src/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    if (!token) return NextResponse.json({ valid: false });

    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from("leaders_tokens")
      .select("id, leader_name, active, expires_at")
      .eq("token", token)
      .single();

    if (!data || !data.active || new Date(data.expires_at) < new Date()) {
      return NextResponse.json({ valid: false });
    }

    return NextResponse.json({ valid: true, leaderName: data.leader_name });
  } catch {
    return NextResponse.json({ valid: false });
  }
}

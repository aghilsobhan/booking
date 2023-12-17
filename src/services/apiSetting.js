import supabase from "./supabase";

export async function getSetting() {
  const { error, data } = await supabase.from("settings").select("*").single();
  if (error) {
    throw new error("data setting is not read");
  }

  return data;
}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .select();
  if (error) {
    throw new error("data setting is not update");
  }
  return data;
}

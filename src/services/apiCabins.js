import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins get not load");
  }

  return data;
}
export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins notDelete Row Selected");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-image/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins-image")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
// export async function createCabinApi(newCabin) {
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );
//   const imagePatch = `${supabaseUrl}/storage/v1/object/public/cabins-image/${imageName}`;
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert({ ...newCabin, image: imagePatch })
//     .select();

//   if (error) {
//     console.log(error);
//     throw new Error("Cabins notDelete Row Selected");
//   }
//   const { error: storageError } = await supabase.storage
//     .from("cabins-image")
//     //upload image firs name image and secound is image real
//     .upload(imageName, newCabin.image);
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     console.log(storageError);
//     throw new Error("Cabins image is not upload and cabins not create");
//   }
//   return data;
// }
// export async function createEditeCabin(newCabin, id) {
//   const hasPachImage = newCabin.image?.startsWith?.(supabaseUrl);
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );
//   const imagePatch = hasPachImage
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabins-image/${imageName}`;
//   //edit cabins
//   let query = supabase.from("cabins");
//   if (id) query = query.update({ ...newCabin, image: imagePatch }).eq("id", id);
//   //create cabins
//   if (!id) query = query.insert({ ...newCabin, image: imagePatch });
//   const { data, error } = await query.select().single();
//   if (error) {
//     console.log(error);
//     throw new Error("Cabins notDelete Row Selected");
//   }
//   const { error: storageError } = await supabase.storage
//     .from("cabins-image")
//     //upload image firs name image and secound is image real
//     .upload(imageName, newCabin.image);
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     console.log(storageError);
//     throw new Error("Cabins image is not upload and cabins not create");
//   }
//   return data;
// }

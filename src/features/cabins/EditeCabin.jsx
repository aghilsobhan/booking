// import styled from "styled-components";
// import Form from "../../ui/Form";
// import Input from "../../ui/Input";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import { Textarea } from "../../ui/Textarea";
// import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { createEditeCabin } from "../../services/apiCabins";
// import { useEditCabin } from "./useEditCabin";
// const FormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

// function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
//   const { isCreating, createCabin } = useCreateCabin();
//   const { isEditing, editCabin } = useEditCabin();
//   const isWorking = isCreating || isEditing;

//   const { id: editId, ...editValues } = cabinToEdit;
//   const isEditSession = Boolean(editId);

//   const { register, handleSubmit, reset, getValues, formState } = useForm({
//     defaultValues: isEditSession ? editValues : {},
//   });
//   const { errors } = formState;

//   function onSubmit(data) {
//     const image = typeof data.image === "string" ? data.image : data.image[0];

//     if (isEditSession)
//       editCabin(
//         { newCabinData: { ...data, image }, id: editId },
//         {
//           onSuccess: (data) => {
//             reset();
//             onCloseModal?.();
//           },
//         }
//       );
//     else
//       createCabin(
//         { ...data, image: image },
//         {
//           onSuccess: (data) => {
//             reset();
//             onCloseModal?.();
//           },
//         }
//       );
//   }

//   function onError(errors) {
//     // console.log(errors);
//   }

//   return (
//     <Form
//       onSubmit={handleSubmit(onSubmit, onError)}
//       type={onCloseModal ? "modal" : "regular"}
//     >
//       <FormRow label="Cabin name" error={errors?.name?.message}>
//         <Input
//           type="text"
//           id="name"
//           disabled={isWorking}
//           {...register("name", {
//             required: "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
//         <Input
//           type="number"
//           id="maxCapacity"
//           disabled={isWorking}
//           {...register("maxCapacity", {
//             required: "This field is required",
//             min: {
//               value: 1,
//               message: "Capacity should be at least 1",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Regular price" error={errors?.regularPrice?.message}>
//         <Input
//           type="number"
//           id="regularPrice"
//           disabled={isWorking}
//           {...register("regularPrice", {
//             required: "This field is required",
//             min: {
//               value: 1,
//               message: "Capacity should be at least 1",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Discount" error={errors?.discount?.message}>
//         <Input
//           type="number"
//           id="discount"
//           disabled={isWorking}
//           defaultValue={0}
//           {...register("discount", {
//             required: "This field is required",
//             validate: (value) =>
//               value <= getValues().regularPrice ||
//               "Discount should be less than regular price",
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Description for website"
//         error={errors?.description?.message}
//       >
//         <Textarea
//           type="number"
//           id="description"
//           defaultValue=""
//           disabled={isWorking}
//           {...register("description", {
//             required: "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow label="Cabin photo">
//         <FileInput
//           id="image"
//           accept="image/*"
//           {...register("image", {
//             required: isEditSession ? false : "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button
//           variation="secondary"
//           type="reset"
//           onClick={() => onCloseModal?.()}
//         >
//           Cancel
//         </Button>
//         <Button disabled={isWorking}>
//           {isEditSession ? "Edit cabin" : "Create new cabin"}
//         </Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default CreateCabinForm;

// // function EditeCabin({ editCabins = {}, onClose }) {
// //   const { id: editId, ...editValue } = editCabins;
// //   const isEditSession = Boolean(editId);

// //   const { register, handleSubmit, reset, getValues, formState } = useForm({
// //     defaultValues: isEditSession ? editValue : {},
// //   });
// //   const { editCabin, isEdite } = useEditCabin();
// //   const { errors } = formState;
// //   console.log(errors);
// //   const isWorking = isEdite;
// //   const onSubmit = (data) => {
// //     const image = typeof data.image === "string" ? data.image : data.image[0];
// //     if (isEditSession) {
// //       editCabin(
// //         { newCabinData: { ...data, image }, id: editId },
// //         {
// //           onSuccess: (data) => {
// //             reset();
// //             onClose?.();
// //           },
// //         }
// //       );
// //     }
// //   };
// //   const onError = (error) => {
// //     console.log(getValues().regularPrice);
// //     console.log(getValues().discount);
// //     console.log(error);
// //   };
// //   return (
// //     <Form
// //       onSubmit={handleSubmit(onSubmit, onError)}
// //       type={onClose ? "modal" : "regular"}
// //     >
// //       <FormRow>
// //         <Label htmlFor="name">Cabin name</Label>
// //         <Input
// //           type="text"
// //           id="name"
// //           disabled={isWorking}
// //           {...register("name", { required: "thies feild is requird" })}
// //         />
// //         {errors?.name?.message && <Error>{errors.name.message}</Error>}
// //       </FormRow>

// //       <FormRow>
// //         <Label htmlFor="maxCapacity">Maximum capacity</Label>
// //         <Input
// //           type="number"
// //           id="maxCapacity"
// //           disabled={isWorking}
// //           {...register("maxCapacity", {
// //             required: "thies feild is requird",
// //             min: {
// //               value: 1,
// //               message: "max capacity should be at least 1",
// //             },
// //           })}
// //         />
// //         {errors?.maxCapacity?.message && (
// //           <Error>{errors.maxCapacity.message}</Error>
// //         )}
// //       </FormRow>

// //       <FormRow>
// //         <Label htmlFor="regularPrice">Regular price</Label>
// //         <Input
// //           type="number"
// //           id="regularPrice"
// //           disabled={isWorking}
// //           {...register("regularPrice", { required: "thies feild is requird" })}
// //         />
// //         {errors?.regularPrice?.message && (
// //           <Error>{errors.regularPrice.message}</Error>
// //         )}
// //       </FormRow>

// //       <FormRow>
// //         <Label htmlFor="discount">Discount</Label>
// //         <Input
// //           type="number"
// //           id="discount"
// //           disabled={isWorking}
// //           defaultValue={0}
// //           {...register("discount", {
// //             required: "thies feild is requird",
// //             validate: (value) =>
// //               value <= getValues().regularPrice ||
// //               "Discount should be less than regular price",
// //           })}
// //         />
// //         {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
// //       </FormRow>

// //       <FormRow>
// //         <Label htmlFor="description">Description for website</Label>
// //         <Textarea
// //           type="number"
// //           id="description"
// //           disabled={isWorking}
// //           defaultValue=""
// //           {...register("description", { required: "thies feild is requird" })}
// //         />
// //         {errors?.description?.message && (
// //           <Error>{errors.description.message}</Error>
// //         )}
// //       </FormRow>

// //       <FormRow>
// //         <Label htmlFor="image">Cabin photo</Label>
// //         <FileInput
// //           id="image"
// //           type="file"
// //           accept="image/*"
// //           {...register("image")}
// //         />
// //       </FormRow>

// //       <FormRow>
// //         {/* type is an HTML attribute! */}
// //         <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
// //           Cancel
// //         </Button>
// //         <Button disabled={isWorking}>
// //           {isEditSession ? "Edite Cabin" : "Add Cabin"}
// //         </Button>
// //       </FormRow>
// //     </Form>
// //   );
// // }

// // export default EditeCabin;

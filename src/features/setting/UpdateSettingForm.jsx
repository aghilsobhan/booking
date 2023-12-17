import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useSetting } from "./useSetting";
import Spinner from "../../ui/Spinner";
import useUpdatingSetting from "./useUpdatingSetting";
function UpdateSettingForm() {
  const {
    isLoading,
    settingData: {
      maxBookingLenght,
      minBookingLenght,
      breackfastPrice,
      maxGeustsperBooking,
    } = {},
  } = useSetting();
  const { isSetting, updateSetting } = useUpdatingSetting();
  function handleUpdate(e, feild) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [feild]: value });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLenght}
          onBlur={(e) => handleUpdate(e, "minBookingLenght")}
          disabled={isSetting}
        ></Input>
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLenght}
          onBlur={(e) => handleUpdate(e, "maxBookingLenght")}
          disabled={isSetting}
        ></Input>
      </FormRow>
      <FormRow label="Minimum geusts/booking">
        <Input
          type="number"
          id="max-geusts"
          defaultValue={maxGeustsperBooking}
          onBlur={(e) => handleUpdate(e, "maxGeustsperBooking")}
          disabled={isSetting}
        ></Input>
      </FormRow>
      <FormRow label="BreackFast Price">
        <Input
          type="number"
          id="breackfast-price"
          defaultValue={breackfastPrice}
          onBlur={(e) => handleUpdate(e, "breackfastPrice")}
          disabled={isSetting}
        ></Input>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingForm;

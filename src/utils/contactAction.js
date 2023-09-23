import { updateContact } from "../contacts";

const contactAction = async({ request, params }) => {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default contactAction;
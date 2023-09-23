import { redirect } from 'react-router-dom';
import { createContact } from '../contacts';

const rootAction = async() => {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export default rootAction;
import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

const deleteAction = async ({ params }) => {
  await deleteContact(params.contactId);
  return redirect('/');
}

export default deleteAction;
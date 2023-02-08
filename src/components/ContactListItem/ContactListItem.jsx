import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts.slice';

export default function ContactListItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="text-start">
        <b className="mb-0">{name}:</b>
      </td>
      <td className="text-start">
        <p className="mb-0">{number}</p>
      </td>
      <td className="text-end">
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            dispatch(deleteContacts(id));
            Notiflix.Notify.success('Deleted from contacts');
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

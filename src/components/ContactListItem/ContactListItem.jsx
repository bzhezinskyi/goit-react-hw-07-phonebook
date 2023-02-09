import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
// import { toast } from 'react-toastify';

export default function ContactListItem({ name, phone, id }) {
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setDeleting(true);
    dispatch(deleteContact(id));
    // toast.success('Deleted from contacts');
  };

  return (
    <tr>
      <td className="text-start">
        <b className="mb-0">{name}:</b>
      </td>
      <td className="text-start">
        <p className="mb-0">{phone}</p>
      </td>
      <td className="text-end">
        <Button
          variant="primary"
          type="button"
          onClick={handleClick}
          disabled={deleting}
        >
          {deleting ? 'Delete...' : 'Delete'}
        </Button>
      </td>
    </tr>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

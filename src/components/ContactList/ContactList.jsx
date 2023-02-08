import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { getContacts } from 'redux/contacts/contacts.selector';
import { getFilter } from 'redux/filter/filter.selector';
import { Container, Table } from 'react-bootstrap';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th className="text-start">Number</th>
            <th className="text-end"></th>
          </tr>
        </thead>
        <tbody>
          {visibleContacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

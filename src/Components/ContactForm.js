import { Component } from 'react';

// import { findAllInRenderedTree } from 'react-dom/test-utils';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
    };
    if (this.state.number === '') {
      alert('phone number is required');
      return;
    }
    this.props.newContact(contact);
    this.setState({ name: '', number: '' });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            required
            onChange={this.onChange}
          />
          Phone number
          <input
            type="tel"
            placeholder="Enter phone number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            value={number}
            onChange={this.onChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

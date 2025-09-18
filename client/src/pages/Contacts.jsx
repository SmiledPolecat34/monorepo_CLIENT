import { useEffect, useState } from "react";
import axios from "axios";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line
  }, []);

  async function fetchContacts() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(res.data);
    } catch (err) {
      setError("Erreur lors du chargement des contacts");
    }
  }

  async function handleAddContact(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/api/contacts`,
        { firstName, lastName, phone },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFirstName("");
      setLastName("");
      setPhone("");
      fetchContacts();
    } catch (err) {
      setError("Impossible d’ajouter le contact");
    }
  }

  async function handleDeleteContact(id) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/api/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchContacts();
    } catch (err) {
      setError("Impossible de supprimer le contact");
    }
  }

  function startEdit(contact) {
    setEditingContact(contact._id);
    setEditFirstName(contact.firstName);
    setEditLastName(contact.lastName);
    setEditPhone(contact.phone);
  }

  async function handleUpdateContact(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${API_URL}/api/contacts/${editingContact}`,
        { firstName: editFirstName, lastName: editLastName, phone: editPhone },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditingContact(null);
      fetchContacts();
    } catch (err) {
      setError("Impossible de modifier le contact");
    }
  }

  return (
    <div>
      <h1>Mes Contacts</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {contacts.map((c) => (
          <li key={c._id}>
            {editingContact === c._id ? (
              <form onSubmit={handleUpdateContact}>
                <input
                  type="text"
                  value={editFirstName}
                  onChange={(e) => setEditFirstName(e.target.value)}
                />
                <input
                  type="text"
                  value={editLastName}
                  onChange={(e) => setEditLastName(e.target.value)}
                />
                <input
                  type="text"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
                <button type="submit">Sauvegarder</button>
                <button type="button" onClick={() => setEditingContact(null)}>
                  Annuler
                </button>
              </form>
            ) : (
              <>
                <strong>
                  {c.firstName} {c.lastName}
                </strong>{" "}
                — {c.phone}
                <button onClick={() => startEdit(c)}>Modifier</button>
                <button onClick={() => handleDeleteContact(c._id)}>
                  Supprimer
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h2>Ajouter un contact</h2>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

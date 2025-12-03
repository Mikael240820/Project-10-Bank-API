import { useState } from 'react';
import Account from '../components/Account';
import useProfile from '../hooks/useProfile';

const accounts = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
    buttonLabel: "View transactions"
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
    buttonLabel: "View transactions"
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
    buttonLabel: "View transactions"
  }
];

function User() {
  const [isEditing, setIsEditing] = useState(false);
  const { firstName, lastName, loading: profileLoading, error: profileError, updateProfile } = useProfile();

  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');

  const startEdit = () => {
    setIsEditing(true);
    setEditFirstName(firstName);
    setEditLastName(lastName);
  };
  
  const cancelEdit = () => setIsEditing(false);

  const submitEdit = async (e) => {
    e.preventDefault();
    const res = await updateProfile({ firstName: editFirstName, lastName: editLastName });
    if (res.ok) setIsEditing(false);
  };

  if (profileLoading) return <main className="main bg-dark"><div>Loading...</div></main>;
  if (profileError) return <main className="main bg-dark"><div style={{ color: 'red' }}>{profileError}</div></main>;

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        {!isEditing ? (
          <button className="edit-button" onClick={startEdit}>Edit Name</button>
        ) : (
          <form className="account-form" onSubmit={submitEdit}>
            <input
              className="form-input"
              type="text"
              value={editFirstName}
              onChange={(e) => setEditFirstName(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              value={editLastName}
              onChange={(e) => setEditLastName(e.target.value)}
            />
            <button className="save-button" type="submit">Save</button>
            <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((acc, idx) => (
        <Account
          key={idx}
          title={acc.title}
          amount={acc.amount}
          description={acc.description}
          buttonLabel={acc.buttonLabel}
        />
      ))}
    </main>
  );
}

export default User;

import Account from '../components/Account';

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
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
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

import iconChat from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecurity from '../assets/img/icon-security.png';
import Features from '../components/Features';
import Hero from '../components/Hero';

const featuresData = [
  {
    icon: iconChat,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
    icon: iconMoney,
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!"
  },
  {
    icon: iconSecurity,
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe."
  }
];

function Home() {
  return (
    <main>
      <Hero>
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </Hero>
      <Features items={featuresData} />
    </main>
  );
}

export default Home;

import "./App.css";

function App() {
  // Data to be displayed
  const data = [
    {
      subscription: "FREE",
      price: "$0",
      duration: "month",
      benifits: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
      ],
      notAvailable: [
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
      subscription: "PLUS",
      price: "$9",
      duration: "month",
      benifits: [
        "S5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
      notAvailable: ["Monthly Status Reports"],
    },
    {
      subscription: "PRO",
      price: "$9",
      duration: "month",
      benifits: [
        "S5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
      notAvailable: [],
    },
  ];
  return (
    <div className="App">
      <h1>Plan</h1>
      <div className="planList">
        {data.map((contents) => (
          <PlanCard
            subscription={contents.subscription}
            project={contents.price}
            duration={contents.duration}
            benifits={contents.benifits}
            price={contents.price}
            notAvailable={contents.notAvailable}
          />
        ))}
      </div>
    </div>
  );
}

// Plan card for each Subscription type
function PlanCard({ subscription, price, duration, benifits, notAvailable }) {
  return (
    <div className="planCard">
      <h2 className="planTitle">{subscription}</h2>
      <p>
        <span className="price">{price}</span>
        <sub>/{duration}</sub>
      </p>
      <hr />
      <BenifitsList benifits={benifits} symbol="✔️" />
      <BenifitsList benifits={notAvailable} symbol="❌" />
      <input type="button" value="BUTTON" className="button" />
    </div>
  );
}

// benefit list: based on availablility symbol is added
function BenifitsList({ benifits, symbol }) {
  return (
    <div className="planBenifits">
      <ul>
        {benifits.map((benefit) => (
          <li>
            <span className="symbol">{symbol}</span> {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

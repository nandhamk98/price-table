import { BenifitsList } from "./BenifitsList";

// Plan card for each Subscription type
export function PlanCard({
  subscription,
  price,
  duration,
  benifits,
  notAvailable,
}) {
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

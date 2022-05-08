// benefit list: based on availablility symbol is added
export function BenifitsList({ benifits, symbol }) {
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

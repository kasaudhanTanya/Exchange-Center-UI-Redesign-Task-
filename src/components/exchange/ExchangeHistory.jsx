export default function ExchangeHistory({
  history
}) {

  return (

    <section className="info-section">

      <div className="section-heading">

        <h2>
          Recent Conversions
        </h2>

        <span>
          {history.length} records
        </span>

      </div>


      <div className="history-list">

        {history.map(item => (

          <div
            className="history-item"
            key={item.id}
          >

            <div>

              <strong>
                {item.gems} Gems
                {" → "}
                {item.ves} VEs
              </strong>

              <small>
                {item.date}
              </small>

            </div>


            <span
              className={
                `status ${item.status.toLowerCase()}`
              }
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}
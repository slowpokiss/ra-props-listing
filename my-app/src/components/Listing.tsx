import "./main.css";

interface item {
  listing_id: number;
  url: string;
  MainImage: {"url_570xN": string};
  title: string;
  currency_code: string;
  price: number;
  quantity: number;
  state: string;
}

interface props {
  items?: Array<item | any>;
}

export default function Listing({ items=[] }: props) {
  return (
    <>
      {items.map((el) => {
        if (el.state === "active") {
          return (
            <div className="item-list" key={el.listing_id}>
              <div className="item">
                <div className="item-image">
                  <a href={el.url}>
                    <img src={el.MainImage.url_570xN} />
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">
                    {el.title.length > 50
                      ? el.title.slice(0, 50) + "…"
                      : el.title}
                  </p>
                  <p className="item-price">
                    {el.currency_code === "USD" || el.currency_code === "EUR"
                      ? el.currency_code === "USD"
                        ? "$"
                        : "€"
                      : "UE "}
                    {el.price}
                  </p>
                  <p
                    className={`item-quantity ${
                      el.quantity > 10
                        ? el.quantity < 20
                          ? "level-medium"
                          : "level-high"
                        : "level-low"
                    }`}
                  >
                    {el.quantity}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

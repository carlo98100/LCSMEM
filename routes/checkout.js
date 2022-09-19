// stripe
const Stripe = require("stripe");

// stripe.com api secret key, https://dashboard.stripe.com/test/apikeys
const stripe = new Stripe(
  "sk_test_51LhqspCBxowvdwpiIWIu509hoYafHDQNBme5uDIncu3980PNgyIHciuKppzhf9pyaObKkQ7QAG87w5x6455QiSlL000WS2A0eY"
); //

module.exports = function (server, db, host) {
  console.log("host", host);

  // route to create a checkout session
  server.post("/data/checkout", async (req, res) => {
    // accept a list of payment items, body should be formatted like:
    console.log("origin", req.headers.origin);
    /*

    {
      "items":[
        {
            "description":"Thing",
            "price": 123,
            "quantity": 2
        },
        {
            "description":"Thang",
            "price": 2345,
            "quantity": 1
        }
      ]
    }

    */

    // Create an item list for Stripe:
    const lineItems = req.body.items.map((item) => {
      return {
        price_data: {
          currency: "sek",
          product_data: {
            name: item.description,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity || 1,
      };
    });

    // Create a checkout session with Stripe
    try {
      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        // Set a success and cancel URL we will send customers to
        // They are complete urls
        success_url: `${req.headers.origin}/order/success?session_id={CHECKOUT_SESSION_ID}`, // these should be client routes in the react app
        cancel_url: host + "/examples/checkout-cancel.html",
      });
      // save current checkout session to user session, so we can check result after
      req.session.checkoutId = checkoutSession.id;
      console.log(checkoutSession);
      // send user to stripe process,
      // note that you will have to handle the result of the payment after that process,
      // when the user returns to our client
      res.json({ url: checkoutSession.url });
    } catch (e) {
      console.log("error", e);
      // If there is an error send it to the client
      res.status(500).json({ error: e.message });
    }
  });

  // route to retrieve checkout session to check result
  server.get("/data/checkout/", async (req, res) => {
    res.status(200).json(req.params.id);
    try {
      const checkoutSession = await stripe.checkout.sessions.retrieve(
        req.session.checkoutId
      );
      console.log("session", req.session);
      console.log(checkoutSession);
      res.json({ checkoutSession: checkoutSession });
    } catch (e) {
      console.log("error2", e);
      res.status(500).json({ error: e.message });
    }
  });
};

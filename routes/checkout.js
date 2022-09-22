// stripe
const Stripe = require("stripe");

// stripe.com api secret key, https://dashboard.stripe.com/test/apikeys
const stripe = new Stripe("sk_test_51LhqspCBxowvdwpiIWIu509hoYafHDQNBme5uDIncu3980PNgyIHciuKppzhf9pyaObKkQ7QAG87w5x6455QiSlL000WS2A0eY"); //

module.exports = function (server, db, host) {
	// route to create a checkout session
	server.post("/data/checkout", async (req, res) => {
		if (!req?.session?.user?.loggedIn) {
			res.status(401);
		}

		// accept a list of payment items, body should be formatted like:
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
			console.log("PRODUCT", item);
			return {
				price_data: {
					currency: "sek",
					product_data: {
						name: item.description,
						metadata: {
							product_id: item.id,
						},
					},
					unit_amount: item.price * 100,
				},

        quantity: item.quantity || 1,
      };
    });
    console.log(lineItems)
    // Create a checkout session with Stripe
    try {
      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        // Set a success and cancel URL we will send customers to
        // They are complete urls
        success_url: `${host}/data/checkout/{CHECKOUT_SESSION_ID}`, // these should be client routes in the react app
        cancel_url: `${host}/order/cancel`,
      });
      // save current checkout session to user session, so we can check result after
      req.session.checkoutId = checkoutSession.id;
      // send user to stripe process,
      // note that you will have to handle the result of the payment after that process,
      // when the user returns to our client
      res.json({ url: checkoutSession.url });
    } catch (e) {
      console.error("error", e);
      // If there is an error send it to the client
      res.status(500).json({ error: e.message });
    }
  });

	// route to retrieve checkout session to check result
	server.get("/data/checkout/:checkoutId", async (req, res) => {
		// console.log("checkoutId", req.params.checkoutId);
		try {
			let checkedOutItems = [];
			const checkoutSession = await stripe.checkout.sessions.retrieve(req.params.checkoutId);
			const lineItems = await stripe.checkout.sessions.listLineItems(req.params.checkoutId);
			//   console.log("SESSION", checkoutSession);
			console.log("Items", lineItems.price);
			console.log("Items", lineItems);
			for (let i = 0; i < lineItems.data.length; i++) {
				console.log(lineItems.data[i]);
				const product = await stripe.products.retrieve(lineItems.data[i].price.product);
				console.log("product", product);
				let query = `INSERT INTO Ticket (EventId, UserId) VALUES(@EventId, @UserId)`;
				let result = db.prepare(query).run({
					EventId: product.metadata.product_id,
					UserId: 1,
				});
			}
			//     console.log("loop log");
			//     const product = await stripe.products.retrieve(items[i].price.product);
			//     checkedOutItems.push({
			//       productId: product.metadata.product_id,
			//       productRef: product.id,
			//       unitPrice: items[i].price.unit_amount,
			//       grandTotal: items[i].amount_total,
			//       quantity: items[i].quantity,
			//       currency: items[i].currency,
			//     });
			// let query = `INSERT INTO Tickets (EventId, UserId) VALUES(@EventId, @UserId)`;
			// console.log("hej");
			// let result = db.prepare(query).run({
			//   EventId: product.metadata.product_id,
			//   UserId: 1,
			// });
			// console.log(result);
			//   }
			// await items.data.forEach(async (item) => {
			// 	const product = await stripe.products.retrieve(item.price.product);
			// 	checkedOutItems.push({
			// 		productId: product.metadata.product_id,
			// 		productRef: product.id,
			// 		unitPrice: item.price.unit_amount,
			// 		grandTotal: item.amount_total,
			// 		quantity: item.quantity,
			// 		currency: item.currency,
			// 	});
			// });
			console.log(checkedOutItems);
			res.redirect("http://google.com");

			//res.json({ checkoutSession: checkoutSession });
		} catch (e) {
			console.error(e);
			res.status(500).json({ error: e.message });
		}
	});
};

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCart } from "../CartUtils";

function ConfirmOrderPage() {
	// const { sessionId } = useParams();
	// const [checkout, setCheckout] = useState(null);

	// useEffect(() => {
	// 	fetch(`/data/checkout/${sessionId}`, () => {})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setCheckout(data);
	// 			fetch("/data/order/create", {
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify({
	// 					checkout: data,
	// 					orderItems: getCart,
	// 				}), // body data type must match "Content-Type" header
	// 			})
	// 				.then((response) => {
	// 					if (response.status == 403) {
	// 						isSignedIn();
	// 					} else {
	// 						response.json();
	// 					}
	// 				})
	// 				.then((data) => setUser({ email: form.email, loggedIn: data.loggedIn }))
	// 				.catch((err) => console.error(err));
	// 		})
	// 		.catch((err) => console.error(err));
	// }, []);

	return <div>Your order is comfirmed</div>;
}

export default ConfirmOrderPage;

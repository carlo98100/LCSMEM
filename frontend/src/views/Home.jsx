import React from "react";
import { addItemToCart, removeItemFromCart } from "../CartUtils";

function Home() {
	return (
		<div>
			<button
				onClick={() => {
					for (let i = 1; i < 10; i++) {
						addItemToCart({ Id: i, Artist: "bollibompa" });
					}
				}}
			>
				Add items
			</button>
			<button onClick={() => removeItemFromCart({ Id: 5, Artist: "bollibompa" }, "Id")}>remove item</button>
		</div>
	);
}

export default Home;

function placeAnOrder (orderNumber) {

	console.log("Customer order:", orderNumber);

	cookAndDeliverFood(function () {
		console.log("Delivered food order:", orderNumber);
	});

	console.log("Finish:", orderNumber);

}


function cookAndDeliverFood(asd) {
	setTimeout(asd, 5000);
}


placeAnOrder(6);
placeAnOrder(4);
placeAnOrder(3);
placeAnOrder(1);
placeAnOrder(5);
placeAnOrder(2);


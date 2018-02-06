jQuery.fn.getpayment = function(opciones) {

    /*(PRICE + TAX - INITIALPAYMENT) / TIME
     
     */

    var priceaux = "";
    this.each(function() {
        elem = jQuery(this);

        var aux = "";
		var format1 = "";
		
		if(String(elem.html()).charAt(0) == '$')
		{
			format1 = String(elem.html()).split("$");
			aux = String(format1[1]).split(" ");
		}
		else
		 {
			 aux = String(elem.html()).split(".");
		 } 
		
        //precio = String(precio[0]).split(".");
        for (var i = 0; i < aux.length; i++) {
            priceaux = priceaux.concat(aux[i]);
        }

    })
    
  //defaults values for the plugin
    var configuration = {
        price: 0, //Price by default is zero, 
        tax: 0, 
        initialpayment: 3, //the lower initial payment allowed
        time: 1,
        mortgage: "" //
    };
	
	configuration.price = parseFloat(priceaux);
    jQuery.extend(configuration, opciones);


    var price = configuration.price;

    //Pago inicial, la entrada
    var prevPago = configuration.initialpayment / 100;
    prevPago = prevPago.toFixed(2);
	
    var pagoinicial = prevPago * price;
    pagoinicial = pagoinicial.toFixed(2);
	jQuery("#initialpayment-value").html("$ " + pagoinicial);

    //Interes con que pagara
    var prevInteres = configuration.tax / 100;
    prevInteres = prevInteres.toFixed(2);

    var interes = prevInteres * price;
    interes = interes.toFixed(2);
	jQuery("#tax-value").html("$ " + interes);

    //tiempo en annos que se demorara pagando
    var termino = configuration.time;
    var total = Number(price) + Number(interes);
	var pagoPorMes = 0.00;
	

		pagoPorMes = (Number(price) + Number(interes) - Number(pagoinicial)) / (termino * 12);
		
		pagoPorMes = pagoPorMes.toFixed(2);

		
	if (pagoPorMes > 0)
	{
		jQuery(configuration.mortgage).html("<div class='label' >Mortgage Payment:</div> <div class='mortage-value' ><span>$</span>" + pagoPorMes + "</div>");
		
	}
	else
	{
		jQuery(configuration.mortgage).html("<div class='label' >Mortgage Payment:</div> <div class='mortage-value' ><span>$</span>" + 0 + "</div>");
	}
   
    return this;
};
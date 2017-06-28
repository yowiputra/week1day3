var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var resultObj = {};

  for (var i = 0; i < salesData.length; i++){
    var companyName = salesData[i].name;
    resultObj[companyName] = {
      "totalSales": 0,
      "totalTaxes": 0
    }
  }

  for (var i = 0; i < salesData.length; i++){
    var sales = salesData[i].sales.reduce(addStuff, 0);
    var taxes = 0;
    for (var prov in taxRates){
      if(prov == salesData[i].province){
        taxes += sales * taxRates[prov];
      }
    }
    resultObj[salesData[i].name]["totalSales"] += sales;
    resultObj[salesData[i].name]["totalTaxes"] += taxes;
  }

  return resultObj;
}

function addStuff(a, b){
  return a + b;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
$(document).ready(function () {
	$.ajax({
		url:"http://localhost/numerik/regresilinier/api/api.php",
		method:"GET",
		success:function(data){
			console.log(data);
			var xValue = [];
			var yValue = [];
			var hasilAkhir = [];
			var hA = [];
			var x0=0, x1=0, y0=0, y1=0;
			var interNewton1 = [], iN1=[];
			var totalX=0, totalY=0, totalXY=0, totalXPangkat=0, banyakData=0, rumusB=0, rumusA=0;

			banyakData=data.length;
			for(var i in data){
				xValue.push(data[i].x);
				yValue.push(data[i].y);
			}

			console.log(xValue);
			for(i=0;i<data.length;i++){
				totalX+=parseInt(data[i].x);
				totalY+=parseInt(data[i].y);
				totalXY+=(parseInt(data[i].x)*parseInt(data[i].y));
				totalXPangkat+=(Math.pow(data[i].x,2));
			}
			//console.log(totalX);
			//console.log(totalY);
			//console.log(totalXY);
			//console.log(totalXPangkat);
			rumusB=(totalX*totalY-(banyakData*totalXY))/(Math.pow(totalX,2)-(banyakData*totalXPangkat));
			rumusA=(totalY-(rumusB*totalX))/banyakData;

			//console.log(rumusB);
			//console.log(rumusA);
			for(i=0;i<data.length;i++){
				hasilAkhir=parseFloat(rumusA)+parseFloat((rumusB)*data[i].x);
				//console.log(data[i].x+' '+hasilAkhir);
				hA.push(hasilAkhir);
			}

			/*x0 =  data[0].x; //1
			x1 = data[19].x; // 20
			y0 = data[0].y; // 2
			y1 = data[19].y; // 
			for(i=0;i<data.length;i++){
				interNewton1 = x2 + (y1*y0/(x1-x0)*(x-x0));
				iN.push(interNewton1);
			}*/
			//console.log(hasilAkhir);
			//console.log(hA);
			//console.log('f'+xDicoba+' '+hasilAkhir);
			var configRegresiLinier = {
				type: 'line',
				data: {
					labels: xValue,
					datasets:[{
						label: 'y',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(59,89,152,0.75)',
						borderColor: 'rgba(59,89,152,1)',
						pointHoverBackgroundColor: 'rgba(59,89,152,1)',
						pointHoverBorderColor: 'rgba(59,89,152,1)',
						data: yValue

					},{
						label: 'f(x) regresi linier',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(206,70,70,0.75)',
						borderColor: 'rgba(206,70,70,1)',
						pointHoverBackgroundColor: 'rgba(206,70,70,1)',
						pointHoverBorderColor: 'rgba(206,70,70,1)',
						data: hA
					}]
				},
				options: {
	                responsive: true,
	                title:{
	                    display:true,
	                    text:'regresi linier sederhana'
	                },
	                tooltips: {
	                    mode: 'index',
	                    intersect: false,
	                },
	                hover: {
	                    mode: 'nearest',
	                    intersect: true
	                },
	                scales: {
	                    xAxes: [{
	                        display: true,
	                        scaleLabel: {
	                            display: true,
	                            labelString: 'Nilai X'
	                        }
	                    }],
	                    yAxes: [{
	                        display: true,
	                        scaleLabel: {
	                            display: true,
	                            labelString: 'Nilai Y'
	                        }
	                    }]
                	}
            	}
			};

			var crl = document.getElementById("regresiLinierSederhana").getContext("2d");
			//var iN = document.getElementById("interpolasiNewton").getContext("2d");

			var crlGraph = new Chart(crl, configRegresiLinier);
			//var iNGraph = new Chart (iN, configInterpolasiNewton);			
			$("#rumusRegresi").text("f(x) = "+rumusA+" + "+rumusB+"x");
		},
		error: function (data) {
			console.log(data);
		}
	});
});
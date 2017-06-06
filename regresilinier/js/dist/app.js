$(document).ready(function () {
	$.ajax({
		url:"http://localhost/numerik/regresilinier/api/api.php",
		method:"GET",
		success:function(data){
			console.log(data);
			/* variabel perhitungan biasa */
			var xValue = [];
			var yValue = [];
			var hasilAkhir = [];
			/* end variabel perhitungan biasa */

			/* variabel regresi linier */
			var hA = [];
			var totalX=0, totalY=0, totalXY=0, totalXPangkat=0, banyakData=0, rumusB=0, rumusA=0, banyakData=data.length;
			/* end variabel regresi linier */

			/* variabel newton*/
			var newton1=0,newton2=0,nK1=0, nK2=0,fx0=parseInt(data[0].y),fx1=parseInt(data[1].y),fx2=parseInt(data[2].y);
			var x0=parseInt(data[0].x), x1=parseInt(data[1].x),x2=parseInt(data[2].x);
			var lA1=[],lA2=[],lA3=[],lAK1=[],lAK2=[];
			/* end variabel newton */

			/* Perhitungan data sebenarnya */
			for(var i in data){
				xValue.push(data[i].x);
				yValue.push(data[i].y);
			}
			/* End perhitungan data sebenarnya */

			/* Perhitungan regresi linier biasa */
			console.log(xValue);
			for(i=0;i<data.length;i++){
				totalX+=parseInt(data[i].x);
				totalY+=parseInt(data[i].y);
				totalXY+=(parseInt(data[i].x)*parseInt(data[i].y));
				totalXPangkat+=(Math.pow(data[i].x,2));
			}
			rumusB=(totalX*totalY-(banyakData*totalXY))/(Math.pow(totalX,2)-(banyakData*totalXPangkat));
			rumusA=(totalY-(rumusB*totalX))/banyakData;

			for(i=0;i<data.length;i++){
				hasilAkhir=parseFloat(rumusA)+parseFloat((rumusB)*data[i].x);
				hA.push(hasilAkhir);
			}
			/* End Perhitungan regresi linier biasa */
			var configRegresi= {
				type: 'line',
				data: {
					labels: xValue,
					datasets:[{
						label: 'data asli',
						fill: false,
						data: yValue,
						lineTension: 0,
						backgroundColor: 'rgba(59,89,152,0.75)',
						borderColor: 'rgba(59,89,152,1)',
						pointHoverBackgroundColor: 'rgba(59,89,152,1)',
						pointHoverBorderColor: 'rgba(59,89,152,1)'
						

					},{
						label: 'regresi linier',
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
	                    mode: 'index'
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

			var configInterpolasi= {
				type: 'line',
				data: {
					labels: xValue,
					datasets:[{
						label: 'data asli',
						fill: false,
						data: yValue,
						lineTension: 0,
						backgroundColor: 'rgba(59,89,152,0.75)',
						borderColor: 'rgba(59,89,152,1)',
						pointHoverBackgroundColor: 'rgba(59,89,152,1)',
						pointHoverBorderColor: 'rgba(59,89,152,1)'
						

					},{
						label: 'Interpolasi newton orde 3',
						fill: false,
						cubicInterpolationMode: 'monotone',
						backgroundColor: 'rgba(206,70,70,0.75)',
						borderColor: 'rgba(206,70,70,1)',
						pointHoverBackgroundColor: 'rgba(206,70,70,1)',
						pointHoverBorderColor: 'rgba(206,70,70,1)',
						data: yValue
					}]
				},
				options: {
	                responsive: true,
	                title:{
	                    display:true,
	                    text:'Interpolasi Newton'
	                },
	                tooltips: {
	                    mode: 'index'
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

			var ctxR = document.getElementById("regresiLinierSederhana").getContext("2d");
			var crlGraph = new Chart(ctxR, configRegresi);
			var ctxI = document.getElementById("interpolasiNewton").getContext("2d");
			var cinGraph = new Chart(ctxI, configInterpolasi);
			$("#rumusRegresi").text("f(x) = "+rumusA+" + "+rumusB+"x");
		},
		error: function (data) {
			console.log(data);
		}
	});
	
});
var merah, hijau, biru, kuning, putih, violet, rumusNewton, rumusLagrange, j, i;
var newton0,newton1,newton2,lagrange0,lagrange1,lagrange2;
var lebarCanvas;
var tinggiCanvas;
/* pastikan x dan y mempunyai panjang array yang sama */
/* TO DO : */
/* Passing parameter JSON kedalam draw */
/* WARNING : draw bersifat looping */
/* yang sudah dilakukan untuk menghindari looping namun gagal */
/* 1. membuat method didalam fungsi */
/* 2. membuat array untuk menampung fungsi */
/**/
var x= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var y= [2, 5, 4, 6, 3, 8, 9, 11, 15, 17, 18, 12, 15, 11, 8, 12, 10, 7, 6, 10];
//var xVl=[];
//var yVl=[];
var g = new gambar(x,y);

function setup(){
	biru = color(0,0,255);
	hijau = color(0,255,0);
	hitam = color(0,0,0);
	kuning = color(244, 255, 30);
	putih = color(255,255,255);
	violet = color(255,0,255);
	merah = color(255,0,0);
	lebarCanvas=600;
	tinggiCanvas=600;
	var c = createCanvas(600,600);
	c.parent('p5Grafik');
	background(255);
	//var url = 'http://localhost/numerik/regresilinier/api/api.php';
	//loadJSON(url,data);
}

/*function data(value){
	for(var i in value){
		xVl.push(value[i].x);
		yVl.push(value[i].y);
	}
	console.log(xVl);
	console.log(yVl);
}*/

function draw(){
	garisBantu();
	textSize(14);
	text("newton",400,10);
	textSize(14);
	text("lagrange",100,10);
	g.iN();
	g.iL();
}

function titik(xxx,yyy)
{
    point(xxx+(lebarCanvas/2), (yyy*-1)+(tinggiCanvas/2));
}

function garisBantu(){
  stroke(merah);
  for(z=0;z<lebarCanvas;z++){
    point(lebarCanvas/2,z);
    point(z,tinggiCanvas/2);
  }
  stroke(0,0,0);
}


function gambar(xV,yV){
  	this.iN = function(){
  		
  		var panjang;
	  	/*console.log(xV);
	  	/* pertama kita lakukan cek, apakah indeks panjang suatu array genap atau ganjil */
		/* karena kita akan melakukan pengambilan secara genap sehingga indeks panjang suatu array tidak boleh ganjil */
		/* penting karena digunakan untuk proses perulangan */
		/* sebagai contoh xV[5]={1,2,3,4,5} diambil {1,2,3},{3,4,5} */
		/* bagaimana jika xV[6]={1,2,3,4,5,6}, berarti {1,2,3},{3,4,5},{5,6,kosong} */
		/* kondisi kosong inilah yang dihindari */
		if(xV.length%2==0){
			panjang=xV.length-1;
		}else{
			panjang=xV.length;
		}
		//console.log(panjang);
		/* melakukan proses perulangan sesuai dengan panjang bernilai genap */
		/* contoh panjang=4, sehingga 0,1,2 karena dikurangi satu sebelumnya */
		/* contoh lain panjang=5, sehingan 0,1,2,3,4 tidak perlu dikurangi karena pas*/
		for(i=0;i<panjang-1;i+=2){
			for(j=i+1;j<i+3;j=j+0.1){
				newton0=yV[i];
				newton1=(yV[i+1]-yV[i])/(xV[i+1]-xV[i]);
				newton2=((yV[i+2]-yV[i+1])/(xV[i+2]-xV[i+1])-newton1)/(xV[i+2]-xV[i]);
				rumusNewton=newton0+(newton1*(j-xV[i]))+(newton2*(j-xV[i])*(j-xV[i+1]));
				stroke(biru);
				titik(round(j*10),round(rumusNewton*10));
			}
		}	
  	}
  	
  	this.iL = function(){
  		
  		this.x=xV;
  		this.y=yV;
  		var panjang;
	  	/*console.log(xV);
	  	/* pertama kita lakukan cek, apakah indeks panjang suatu array genap atau ganjil */
		/* karena kita akan melakukan pengambilan secara genap sehingga indeks panjang suatu array tidak boleh ganjil */
		/* penting karena digunakan untuk proses perulangan */
		/* sebagai contoh xV[5]={1,2,3,4,5} diambil {1,2,3},{3,4,5} */
		/* bagaimana jika xV[6]={1,2,3,4,5,6}, berarti {1,2,3},{3,4,5},{5,6,kosong} */
		/* kondisi kosong inilah yang dihindari */
		if(xV.length%2==0){
			panjang=xV.length-1;
		}else{
			panjang=xV.length;
		}
		/* melakukan proses perulangan sesuai dengan panjang bernilai genap */
		/* contoh panjang=4, sehingga 0,1,2 karena dikurangi satu sebelumnya */
		/* contoh lain panjang=5, sehingan 0,1,2,3,4 tidak perlu dikurangi karena pas*/
  		for(i=0;i<panjang-1;i+=2){
			for(j=i+1;j<i+3;j+=0.1){
				lagrange0=((j-x[i+1])/(x[i]-x[i+1]))*((j-x[i+2])/(x[i]-x[i+2]))*y[i];
				lagrange1=((j-x[i])/(x[i+1]-x[i]))*((j-x[i+2])/(x[i+1]-x[i+2]))*y[i+1];
				lagrange2=((j-x[i])/(x[i+2]-x[i]))*((j-x[i+1])/(x[i+2]-x[i+1]))*y[i+2];
				rumusLagrange=lagrange0+lagrange1+lagrange2;
				stroke(merah);
				titik(round(j*10)-width/2,round(rumusLagrange*10));
				//cout<<j<<" "<<rumus<<endl;
			}
		}
  	}
	/* pada tahap terakhir dikalikan 10 lalu dilakukan pembulatan ke bawah */
}

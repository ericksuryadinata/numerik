var merah, hijau, biru, kuning, putih, violet, rumus,j,b0,b1,b2,i;
var lebarCanvas;
var tinggiCanvas;
/* pastikan x dan y mempunyai panjang array yang sama */
/* TO DO : */
/* Mengambil nilai menggunakan JSON */
var x= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var y= [2, 5, 4, 6, 3, 8, 9, 11, 15, 17, 18, 12, 15, 11, 8, 12, 10, 7, 6, 10];

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
}

function draw(){
  garisBantu();
  stroke(biru);
  gambar(x,y);
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
  	var panjang;
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
		for(j=i+1;j<i+3;j=j+0.1){
			b0=yV[i];
			b1=(yV[i+1]-yV[i])/(xV[i+1]-xV[i]);
			b2=((yV[i+2]-yV[i+1])/(xV[i+2]-xV[i+1])-b1)/(xV[i+2]-xV[i]);
			rumus=b0+(b1*(j-xV[i]))+(b2*(j-xV[i])*(j-xV[i+1]));
			titik(round(j*10),round(rumus*10));
		}
	}
	/* pada tahap terakhir dikalikan 10 lalu dilakukan pembulatan ke bawah */
}
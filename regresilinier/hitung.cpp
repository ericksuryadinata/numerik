#include <iostream>
#include <math.h>
using namespace std;

int panjang=5,i;
float j, rumus, newton1,newton2;
float b0,b1,b2;

int main(){
	int xV[panjang]={1,2,3,4,5};
	int yV[panjang]={2,5,4,6,3};
	/* pertama kita lakukan cek, apakah indeks panjang suatu array genap atau ganjil */
	/* karena kita akan melakukan pengambilan secara genap sehingga indeks panjang suatu array tidak boleh ganjil */
	/* penting karena digunakan untuk proses perulangan */
	/* sebagai contoh xV[5]={1,2,3,4,5} diambil {1,2,3},{3,4,5} */
	/* bagaimana jika xV[6]={1,2,3,4,5,6}, berarti {1,2,3},{3,4,5},{5,6,kosong} */
	/* kondisi kosong inilah yang dihindari */
	if(panjang%2==0){
		panjang=panjang-1;
	}else{
		panjang=panjang;
	}

	/* melakukan proses perulangan sesuai dengan panjang bernilai genap */
	/* contoh panjang=4, sehingga 0,1,2 karena dikurangi satu sebelumnya */
	/* contoh lain panjang=5, sehingan 0,1,2,3,4 tidak perlu dikurangi karena pas*/
	for(i=0;i<panjang-1;i+=2){ // mulai dari 0 hingga panjang-1, contoh 0,1,2,3,4
		for(j=i+1;j<i+3;j=j+0.1){ // setiap perulangan ditambah 0.1,
			b0=yV[i];
			b1=(yV[i+1]-yV[i])/(xV[i+1]-xV[i]);
			b2=((yV[i+2]-yV[i+1])/(xV[i+2]-xV[i+1])-b1)/(xV[i+2]-xV[i]);
			newton2=b0+(b1*(j-xV[i]))+(b2*(j-xV[i])*(j-xV[i+1]));
			cout<<newton2<<" ";
		}
	}
}
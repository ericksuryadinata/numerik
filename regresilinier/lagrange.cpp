#include <iostream>
#include <conio.h>

using namespace std;

int main(){
	int banyak=3;
	int i;
	float j;
	int x[20]={1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
	int y[20]={5,6,3,3,8,9,2,10,11,14,16,17,12,18,19,7,8,11,12,18};
	float b0, b1, b2, rumus;
	if(banyak%2==0){
		banyak=banyak-1;
	}else{
		banyak=banyak;
	}
	for(i=0;i<banyak-1;i+=2){
		for(j=i+1;j<i+3;j+=0.1){
			b0=((j-x[i+1])/(x[i]-x[i+1]))*((j-x[i+2])/(x[i]-x[i+2]))*y[i];
			b1=((j-x[i])/(x[i+1]-x[i]))*((j-x[i+2])/(x[i+1]-x[i+2]))*y[i+1];
			b2=((j-x[i])/(x[i+2]-x[i]))*((j-x[i+1])/(x[i+2]-x[i+1]))*y[i+2];
			rumus=b0+b1+b2;
			cout<<j<<" "<<rumus<<endl;
		}
	}
	getch();
}

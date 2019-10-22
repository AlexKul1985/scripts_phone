#include <stdlib.h>
#include <stdio.h>







int main(){
    int arr[] = {1,2,3,4,5,6,7,8,9};
    
    char * ptr = (char *) arr;
    
    for(char i = 0; i < 9*sizeof(int); i++){
	printf("%d ",*(ptr + i));
    }
    return 0;
}
    
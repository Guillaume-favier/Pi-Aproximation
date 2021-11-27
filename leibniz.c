#include <stdio.h>
#include <conio.h>
#include <math.h>
#include <sys/time.h>


int main()
{
	unsigned long long int i, n;
	double sum = 0.0, term, pi;

	printf("number of opperations : ");
	scanf("%llu",&n);
	struct timeval tv1, tv2;
	gettimeofday(&tv1, NULL);
	/* Applying Leibniz Formula */

	for (i = 0; i < n; i++){
		term = pow(-1, i) / (2 * i + 1);
		sum += term;
	}
	gettimeofday(&tv2, NULL);
	pi = 4 * sum;

	printf("\nComputed : %.16lf", pi);
	printf("\nReal PI :  3.1415926535897932");
	printf("\n%u operations", n);
	printf("\nTotal time = %f seconds\n",
		   (double)(tv2.tv_usec - tv1.tv_usec) / 1000000 +
			   (double)(tv2.tv_sec - tv1.tv_sec));
	printf("End...");
	int test;
	scanf("%i",&test);
	return 0;
}
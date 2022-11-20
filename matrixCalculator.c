#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>


double **transpose(double **matrix, int row, int col){
    double** trans = (double**)malloc(col* sizeof(double*));
    for (int c = 0; c < col; c++){
        trans[c] = (double*)malloc(row*sizeof(double));
        for (int r = 0; r < row; r++){
           trans[c][r] = matrix[r][c];
        }
    }
    return trans;
}

 
double** multiply(double **matrix1, double **matrix2, int r, int c, int r2, int c2){   
    double** product = (double**)malloc(r*sizeof(double*));
    for(int i = 0; i < r; i++){
        product[i] = (double*)malloc(r*sizeof(double)); 
    }
    for(int i = 0; i < r; i++){   
        for(int j = 0; j < c2; j++){
            for(int k = 0; k < c; k++){
                product[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return product;
}


double** inverseMatrix(double** matA, int dimension)
{ 
    
    double** matI = malloc(dimension*sizeof(double*)); 
    for(int i = 0; i < dimension; i++){
        matI[i] = malloc(dimension*sizeof(double)); 
    }
    for(int i = 0; i < dimension; i++){
        for(int j = 0; j < dimension; j++){
            matI[i][j] = 0;     
        }
    }
    for(int i = 0; i < dimension; i++){
        for(int j = 0; j < dimension; j++){
            if(i == j){
                matI[i][j] = 1.0;
            }
            else {
                matI[i][j] = 0; 
            }   
        }
    }
    double f = 0.0;   
    for(int i = 0; i < dimension; i++)
    {   
    f = matA[i][i];
        for(int j = 0; j < dimension; j++)
        {
            matA[i][j] = matA[i][j] / f;
            matI[i][j] = matI[i][j] / f; 
        }
        for(int k = i + 1; k < dimension; k++)
        {
            f = matA[k][i]; 
            for(int l = 0; l < dimension; l++)
            {
                matA[k][l] = matA[k][l] - (matA[i][l] * f);
                matI[k][l] = matI[k][l] - (matI[i][l] * f);  
            }
        }
    }
    for(int i = dimension - 1; i >= 0; i--)
    {
        for(int k = i - 1; k >= 0; k--) 
        {
            f = matA[k][i]; 
            for(int m = 0; m < dimension; m++)
            {
                matA[k][m] = matA[k][m] - (matA[i][m] * f);
                matI[k][m] = matI[k][m] - (matI[i][m] * f); 
            }
        }
    } 
    return matI;
}
		

int main(int argc, char * argv[]){
    char action[1];
    printf("Type action: T for transpose, I for inverse, and M for multiply");
    scanf("%c", action);
    if (argc == 1){                                             //scans number of inputs, if 0 inputs, returns error code.
        printf("No file input");
        return 2;
    }
    if (argc > 3){
        printf("Too many files");                                //scans number of inputs, if more than 2 inputs, returns error code.
        return 2;
    }
    int row, col;
    FILE *f = fopen(argv[1], "r");
    fscanf(f, "%d", &col);
    fscanf(f, "%d", &row);
    double** matrix = (double**)malloc(row*sizeof(double*));    //creates matrix by allocating memory for matrix and
    for(int r = 0; r < row; r++){                               //inputting numbers into matrix rows and columns from file.
        matrix[r] = (double *)malloc(col * sizeof(double)); 
        for(int c = 0; c < col; c++){
            fscanf(f,"%lf",&matrix[r][c]);
        }
    }
    
    if (argc == 2){                                             //actions for 1 input files.
        if (strcmp(action, "M") == 0){
            printf("Cannot perform action");
        }
        if (strcmp(action, "I") == 0){
            if (col != row){
                printf("Cannot find inverse; Not a square matrix");
                return 2;
            }
            FILE *new = fopen("inverse.txt", "w");              //creates file to write new matrix to 
            fprintf(new, "%d\n", col);
            fprintf(new, "%d\n", row);
            double** inverse = inverseMatrix(matrix, col);      //calls function to inverse matrix 
            for(int i= 0; i< row; i++){                         //prints matrix into new file
                for (int j = 0; j< col; j++){
                    fprintf(new, "%lf\t", inverse[i][j]);
                }
            printf("\n");
            }
            free(inverse);
            free(matrix);
            return 0;
        }
        if (strcmp(action, "T") == 0){
            FILE *new = fopen("transpose.txt", "w");            //creates file to write new matrix into
            fprintf(new, "%d\n", row);
            fprintf(new, "%d\n", col);
            double** trans = transpose(matrix, row, col);       //calls function to transpose matrix
            for(int i= 0; i< row; i++){                         //prints matrix into new file
                for (int j = 0; j< col; j++){
                    fprintf(new, "%lf\t", trans[i][j]);
                }
            printf("\n");
            }
            free(trans);
            free(matrix);
            return 0;
        }
    }

    if (argc == 3){
        int col2, row2;
        FILE *f2 = fopen(argv[2], "r");
        fscanf(f2, "%d", &col2);
        fscanf(f2, "%d", &row2);
        double** matrix2 = (double**)malloc(row2*sizeof(double*));    //creates matrix by allocating memory for matrix and
        for(int r = 0; r < row2; r++){                                //inputting numbers into matrix rows and columns from file.
            matrix[r] = (double *)malloc(col2 * sizeof(double)); 
            for(int c = 0; c < col2; c++){
                fscanf(f2,"%lf",&matrix2[r][c]);
            }
        }
        if (strcmp(action, "I") == 0){
            printf("too many matrices");                            //checks for action, if action is inverse returns error message
            return 2;
        }
        if (strcmp(action, "T") == 0){                              //checks for action, if action is transpose returns error message
            printf("too many matrices");
            return 2;
        }
        if (strcmp(action, "M") == 0){   
            FILE *new = fopen("product.txt", "w");                 //creates file to write new matrix into
            if (col != row2){
                printf("Matrix multiplication not possible");      //checks for rules of multiplication, if not followed, returns error message.
                return 2;
            }
            double** multi = multiply(matrix, matrix2, row, col, row2, col2);
            for(int i= 0; i< row; i++){                                             //prints matrix into new file
                for (int j = 0; j< col2; j++){
                    fprintf(new, "%lf\t", multi[i][j]);
                }
            printf("\n");
            }
            free(matrix);
            free(matrix2);
            free(multi);
        }
        free(matrix);
        free(matrix2);
    }
    free(matrix);
    return 0;
}

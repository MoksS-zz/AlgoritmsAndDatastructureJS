//Пересечение массивов
function intersection(A, B) {
    const m = A.length, n = B.length, C = [];
    let c = 0;

	for (let i = 0; i < m; i++) { 
		let j = 0, k = 0;
		while (B[j] !== A[ i ] && j < n) j++;
		while (C[k] !== A[ i ] && k < c) k++;
		if (j != n && k == c) C[c++] = A[ i ];
	}
	return C;
};
//Сложность алгоритма O(m*n)
intersection ([1,2,3,7,9],[4,5,7,2,1,5]); // На выходе [1,2,7]


//Разность массивов
function diff(A, B) {
    const M = A.length, N = B.length, C = [];
    let c = 0;

	for (let i = 0; i < M; i++) {
		let j = 0, k = 0;
		while (B[j] !== A[ i ] && j < N) j++;
		while (C[k] !== A[ i ] && k < c) k++;
		if (j == N && k == c) C[c++] = A[ i ];
	}
	return C;
};
//Сложность алгоритма O(m*n)
diff([1,2,3,7,9],[4,5,7,2,1,5]); // На выходе [3,9]
diff([4,5,7,2,1,5], [1,2,3,7,9]); // На выходе [4,5]

//Объединение массивов
function sum(A, B)
{
    const M = A.length, N = B.length, C = A;
	count = M;
	for (let i=0; i<N ;i++) { 
		let plus = false;
		for (let j=0;j<M;j++)
			if (C[j] == B[i]) {plus = true; break;}
		if (plus === false) C[count++] = B[i];
	}
	return C;
};
//Сложность алгоритма O(m*n)
sum([1,2,3,7,9],[4,5,7,2,1,5]); // На выходе [1,2,3,7,9,4,5]
sum([4,5,7,2,1,5],[1,2,3,7,9]); // На выходе [4,5,7,2,1,5,3,9]

//IV. Симметрическая разность массивов
function symmetricDiff(A,B){
    const M = A.length, N = B.length, C = [];
    let c = 0;

	for (let i = 0; i < M; i++) {
		let j = 0, k = 0;
		while (B[j] !== A[ i ] && j < N) j++;
		while (C[k] !== A[ i ] && k < c) k++;
		if (j == N && k == c) C[c++] = A[ i ];
	}
	for (let i = 0; i < N; i++) {
		let j = 0, k = 0;
		while (A[j] !== B[ i ] && j < M) j++;
		while (C[k] !== B[ i ] && k < c) k++;
		if (j == M && k == c) C[c++] = B[ i ];
	}
	return C;
}
//Сложность алгоритма O(2m*n)
symmetricDiff([1,2,3,7,9],[4,5,7,2,1,5]);// На выходе [3,9,4,5]
symmetricDiff([1,2,3,4,5],[3,4,5,6,7]); // На выходе [1,2,6,7]
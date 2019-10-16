//Пересечение упорядоченных множеств

function intersec_sort_arr(array_1,array_2) {
    const n = array_1.length, m = array_2.length, array_3 = [];
    let i = 0, k = 0, j = 0;

	while ((i < n) && (j < m)) 	{
		if (array_1[i] == array_2[j]) { 
			array_3[k] = array_1[i]; 
			k++,i++,j++;
		} else {
			if (array_1[i] < array_2[j]) {
				i++;
			} else {
				j++; 
			}
		}
	}
    return array_3;
};
//O(m+n)

intersec_sort_arr([1, 2, 3, 5, 8], [3, 6, 8, 12, 24, 47]); // на выходе [3, 8]


//Разность упорядоченных множеств
function diff_sort_arr(array_1,array_2) {
    const n = array_1.length, m = array_2.length, array_3 = [];
    let i = 0, k = 0, j = 0;

	while ((i < n) && (j < m)) {
		if (array_1[i] == array_2[j]) { 
			i++,j++;
		} else {
			if (array_1[i] < array_2[j]) {
				array_3[k] = array_1[i];
				k++;
				i++; // сдвинем позицию в первом массиве
			} else {
				j++; // сдвинем позицию во втором массиве
			}
		}
	}
	while (i < n) {
		array_3[k] = array_1[i];
		k++, i++;
	}
    return array_3;
};
//O(m+n)
diff_sort_arr([1, 2, 3, 5, 8], [3, 6, 8, 12, 24, 47]); // на выходе [1, 2, 5]


//Объединение упорядоченных множеств
function sum_sort_arr(array_1,array_2) {
    const n = array_1.length, m = array_2.length, array_3 = [];
    let i = 0, k = 0, j = 0

	while ((i < n) && (j < m)) {
		if (array_1[i] == array_2[j]) { 
			array_3[k] = array_1[i];
			k++,i++,j++;
		} else {
			if (array_1[i] < array_2[j]) {
				array_3[k] = array_1[i];
				k++;
				i++; // сдвинем позицию в первом массиве
			} else {
				array_3[k] = array_2[j];
				k++;
				j++; // сдвинем позицию во втором массиве
			}
		}
	}
	while (i < n) {
		array_3[k] = array_1[i];
		k++, i++;
	}
	while (j < m) {
		array_3[k] = array_2[j];
		k++, j++;
	}
    return array_3;
};
//O(m+n)
sum_sort_arr([1, 2, 3, 5, 8], [3, 6, 8, 12, 24, 47]); // на выходе [1, 2, 3, 5, 6, 8, 12, 24, 47]



//Симметрическая разность упорядоченных множеств
function symmetric_diff_sort_arr(array_1,array_2) {
    const n = array_1.length, m = array_2.length, array_3 = [];
    let i = 0, k = 0, j = 0;

    while ((i < n) && (j < m))  { 
        if (array_1[i] < array_2[j]) { 
            array_3[k] = array_1[i];
            k++;
            i++; // сдвинем позицию в первом массиве
        } else if (array_1[i] > array_2[j]) {
            array_3[k] = array_2[j];
            k++;
            j++; // сдвинем позицию во втором массиве
        } else {
            i++, j++;
        }
    }
    while (i < n) { 
        array_3[k] = array_1[i];
        k++, i++;
    }
    while (j < m) {
        array_3[k] = array_2[j];
        k++, j++;
    }
    return array_3;
};
//O(m+n)

symmetric_diff_sort_arr([1, 2, 3, 5, 8], [3, 6, 8, 12, 24, 47]); // на выходе [1, 2, 5, 6, 12, 24, 47]
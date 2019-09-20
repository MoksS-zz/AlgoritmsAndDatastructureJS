const FFT = ( function( size ) {	
	const m = size + ( size % 2 ); //размер выходного буфера должен быть четным
    const out = new Array( m );
 
	return function( data, len ) {
		let pid = ( 2.0 * Math.PI ) / len;
 
		let r, i, w, t;
 
		//высчитываем среднее значение по всему интервалу
		//для последующей нормализации
		let mv = 0;
		for ( t = 0; t < len; t++ ) mv += data[t];
		mv = mv / len;
 
		for ( w = 0; w < m; w++ ) {
			let a = w * pid;
			r = 0;
			i = 0;
			for ( t = 0; t < len; t++ ) {
				//нормализация значения из интервала
				let v = data[t] - mv;
				let ta = a * t;
				r += v * Math.cos( ta );
				i += v * Math.sin( ta );
			}
 
			out[w] = Math.sqrt( r * r + i * i ) / len;
		}
        console.log(out);
		return out;
	};
} )( 64 );

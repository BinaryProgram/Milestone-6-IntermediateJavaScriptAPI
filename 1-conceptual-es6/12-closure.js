function increase(){
   let x = 0;
    const closure = () => {
        x++;
        console.log('Count - ', x);
    }
    return closure;
}
/* 
closure1 and closure2 create two different memory location.
They can memorize own previous value.
*/
const closure1 = increase();
const closure2 = increase();

closure1();
closure1();

closure2();



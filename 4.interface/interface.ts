/*
    인터페이스 : 
    - 객체 및 클래스의 타입으로 사용됨
    - 인터페이스에 선언된 속성 또는 메서드의 구현을 강제
    - interface 키워드로 선언
*/

/*
    변수(객체)의 타입으로써 인터페이스
*/



console.log('==================================================');

/*
    클래스의 타입으로써 인터페이스
*/

interface IMath {
    add: (x: number, y: number) => number;
}

class CMath implements IMath {
    add = (x: number, y: number) => {
        return x + y;
    }
}

interface King {
    name: string;
    tombName: string;
    birth: string;
    death: string;
}

interface Human {
    name: string;
    addresss: string;
}

const taejo: King = {
    name: '이성계',
    tombName: '태조',
    birth: '1355-11-04',
    death: '1408-06-27'
}

const jungjong: King | Human = {
    name: '이방과',
    tombName: '정종',
    birth: '1357-07-26',
    death: '1419-10-15',
    addresss: '함흥시'
}



console.log('==================================================');

/*
    선택적 속성 :
    - ? 키워드로 인터페이스의 속성을 선택적으로 구현하도록 할 수 있음
*/


interface King2 {
    name: string;
    tombName?: string;
    birth: string;
    death?: string;
}

const taejong: King2 = {
    name: '이방언',
    birth: '1367',
    tombName: '태종'
}


console.log('==================================================');
// 출력
function 출력(값) {
    console.log(값);
}

// 기본 함수
function 경고(설명) {
    alert(설명);
}

function 글입력(설명, 기본값) {
    return prompt(설명, 기본값);
}

// 참과 거짓
const 참 = true;
const 거짓 = false;

// 수학
function 더하기(ㄱ, ㄴ) {
    return ㄱ + ㄴ;
}

function 빼기(ㄱ, ㄴ) {
    return ㄱ - ㄴ;
}

function 곱하기(ㄱ, ㄴ) {
    return ㄱ * ㄴ;
}

function 나누기(ㄱ, ㄴ) {
    return ㄱ / ㄴ;
}

function 누가더큰가(ㄱ, ㄴ) {
    return ㄱ > ㄴ ? ㄱ : ㄴ;
}

function 누가더작은가(ㄱ, ㄴ) {
    return ㄱ < ㄴ ? ㄱ : ㄴ;
}

function 절댓값(ㄱ) {
    return ㄱ < 0 ? -ㄱ : ㄱ;
}

// 같음과 다름
function 같으면(ㄱ, ㄴ) {
    return ㄱ === ㄴ;
}

function 다르면(ㄱ, ㄴ) {
    return ㄱ !== ㄴ;
}

// And Or Not
function 그리고(ㄱ, ㄴ) {
    return ㄱ && ㄴ;
}

function 아니면(ㄱ, ㄴ) {
    return ㄱ || ㄴ;
}

function 반대(조건) {
    return !조건;
}

// 숫자
const 일 = 1;
const 하나 = 1;
const 이 = 2;
const 둘 = 2;
const 삼 = 3;
const 셋 = 3;
const 사 = 4;
const 넷 = 4;
const 오 = 5;
const 다섯 = 5;
const 육 = 6;
const 여섯 = 6;
const 칠 = 7;
const 일곱 = 7;
const 팔 = 8;
const 여덟 = 8;
const 구 = 9;
const 아홉 = 9;

export { 출력, 경고, 글입력, 참, 거짓, 더하기, 빼기, 곱하기, 나누기, 누가더큰가, 누가더작은가, 절댓값, 같으면, 다르면, 그리고, 아니면, 반대, 일, 하나, 이, 둘, 삼, 셋, 사, 넷, 오, 다섯, 육, 여섯, 칠, 일곱, 팔, 여덟, 구, 아홉 };
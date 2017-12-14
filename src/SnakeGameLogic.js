import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 4, y: 10 };
}

// SnakeGameLogic.prototype.up = function() {
// } 이렇게 써야한다고 배웠는데 원래 있었던 것처럼 하는 것의 단점은 (prototype 객체는 비어있지 않음(constructor가 들어있음))

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  for (let j of this.joints) {
    j.y--;
  }
  console.log('up');

}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 키를 누르면 실행되는 함수
  for (let j of this.joints) {
    j.y++;
  }
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  for (let j of this.joints) {
    j.x--;
  }
}

SnakeGameLogic.prototype.right = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  for (let j of this.joints) {
    j.x++;
  }
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  console.log(`nextState`);

  return true;
}

export default SnakeGameLogic;
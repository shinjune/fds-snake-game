import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, ];
  this.direction = 'right'
    // 먹이의 좌표
  this.fruit = { x: 4, y: 10 };
}


SnakeGameLogic.prototype.up = function() {
  console.log('up');
  this.direction = 'up'

}

SnakeGameLogic.prototype.down = function() {
  console.log('down');
  this.direction = 'down'
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  this.direction = 'left'

}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  this.direction = 'right'
}



SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환




  console.log(`nextState`);

  let newHead;
  if (this.direction === 'up') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    }
  } else if (this.direction === 'down') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    }
  } else if (this.direction === 'right') {
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    }
  } else if (this.direction === 'left') {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    }
  }

  if (
    newHead.x < 0 ||
    newHead.x >= COLS ||
    newHead.y < 0 ||
    newHead.y >= ROWS ||
    // 좌표를 벗어난 경우
    this.joints.some(j => j.x === newHead.x && j.y === newHead.y)
    // newHead가 자기몸에 부딪히는 경우
  ) {
    return false;
  }
  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    do {
      this.fruit.x = Math.floor(Math.random() * COLS);
      this.fruit.y = Math.floor(Math.random() * ROWS);
    } while (
      this.joints.some(j => j.x === this.fruit.x && j.y === this.fruit.y) ||
      (newHead.x === this.fruit.x && newHead.y === this.fruit.y)

    )

  } else {
    this.joints.pop();
  }
  this.joints.unshift(newHead)
  return true;
}

export default SnakeGameLogic;
const calcControlPoints = (fromX: number, fromY: number, toX: number, toY: number, xDirection: 'left' | 'right', yDirection: 'up' | 'down') => {
  if (xDirection === 'right' && yDirection === 'down') {
    const offsetX = (toX - fromX) / 4 * 3;
    const offsetY = ((fromY - toY) / 4 * 3);
    return {
      p1: { x: fromX + offsetX, y: fromY },
      p2: { x: toX, y: fromY - offsetY }
    };
  } else if (xDirection === 'left' && yDirection === 'down') {
    const offsetX = (fromX - toX) / 4;
    const offsetY = ((fromY - toY) / 4);

    return {
      p1: { x: toX + offsetX, y: fromY },
      p2: { x: toX, y: fromY - offsetY }
    };
  } else if (xDirection === 'right' && yDirection === 'up') {
    const offsetX = (toX - fromX) / 4;
    const offsetY = ((fromY - toY) / 4);
    return {
      p1: { x: fromX + offsetX, y: fromY },
      p2: { x: toX, y: fromY - offsetY }
    };
  } else if (xDirection === 'left' && yDirection === 'up') {
    const offsetX = (fromX - toX) / 4;
    const offsetY = ((fromY - toY) / 4);
    return {
      p1: { x: toX + offsetX, y: fromY },
      p2: { x: toX, y: fromY - offsetY }
    };
  }

  return {
    p1: { x: 0, y: 0 },
    p2: { x: 0, y: 0 }
  };
};

export const buildBezierTrajectory = (fromX: number, fromY: number, toX: number, toY: number) => {
  const xDirection: 'left' | 'right' = fromX < toX ? 'right' : 'left';
  const yDirection: 'up' | 'down' = fromY < toY ? 'down' : 'up';

  const p0 = { x: fromX, y: fromY };
  const p3 = { x: toX, y: toY };
  const { p1, p2 } = calcControlPoints(fromX, fromY, toX, toY, xDirection, yDirection);

  const cx = 3 * (p1.x - p0.x);
  const bx = 3 * (p2.x - p1.x) - cx;
  const ax = p3.x - p0.x - cx - bx;

  const cy = 3 * (p1.y - p0.y);
  const by = 3 * (p2.y - p1.y) - cy;
  const ay = p3.y - p0.y - cy - by;

  return [...Array(101)].reduce<{ xPoints: number[]; yPoints: number[] }>((acc, _, index) => {
    const t = index / 100;

    const xt = ax * (t * t * t) + bx * (t * t) + cx * t + p0.x;
    const yt = ay * (t * t * t) + by * (t * t) + cy * t + p0.y;

    acc.xPoints.push(xt);
    acc.yPoints.push(yt);

    return acc;
  }, { xPoints: [], yPoints: [] });
};

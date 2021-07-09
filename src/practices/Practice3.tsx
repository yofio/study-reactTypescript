export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString;
  };

  const oncickPractice = () => {
    let total: number = 0;
    total = getTotalFee(111);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の方指定</p>
      <button onClick={oncickPractice}>練習問題3を実行</button>
    </div>
  );
};

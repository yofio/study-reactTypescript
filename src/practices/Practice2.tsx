export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const oncickPractice = () => {
    console.log(getTotalFee(1212));
  };

  return (
    <div>
      <p>練習問題：引数の方指定</p>
      <button onClick={oncickPractice}>練習問題2を実行</button>
    </div>
  );
};

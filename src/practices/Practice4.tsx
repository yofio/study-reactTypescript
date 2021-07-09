export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const oncickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題：引数の方指定</p>
      <button onClick={oncickPractice}>練習問題4を実行</button>
    </div>
  );
};

import "./odometer.css";
function Odometer({number}) {
    number = number.toLocaleString();
    let num = number.split("");
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="odometer">
            <div className="counter">
                {num.map((n, i) => {
                    if (isNaN(Number(n))) {
                        return (
                            <div className="digit" key={i}>
                                {n}
                            </div>
                        );
                    } else {
                        return (
                            <div className="digit" key={i}>
                                <div style={{ "--y": n }}>
                                    {numbers.map((num, i) => (
                                        <div key={i}>{num}</div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Odometer;
